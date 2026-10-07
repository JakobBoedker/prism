import { GlideDateTime, GlideRecord } from "@servicenow/glide";
import type { RESTAPIRequest, RESTAPIResponse } from '@servicenow/glide/sn_ws_int'
import { gs } from '@servicenow/glide' 
import type { field_maps, endpoint_extra, corrected_fields } from '../server/types'
import { get } from '../server/tokenizer'


function addTransaction(endpointId: string, raw: string): string {
    // Get Time for request
    const gdt = new GlideDateTime();
    // creates initial integration log.
    const gr = new GlideRecord('x_1311940_prism_transactions');
    gr.initialize();
    gr.setValue('endpoint', endpointId);
    gr.setValue('received_at', gdt.getValue());
    gr.setValue('request_body', raw);
    gr.setValue('state', 'Received');
    return gr.insert();
}

function getEndpointId(endpoint: string): endpoint_extra {
    const gr = new GlideRecord('x_1311940_prism_endpoint');
    gr.addQuery('name', endpoint);
    gr.query();
    if (!gr.next()){
        return {
            sys_id: '',
            root_table: '',
            status: 404,
        };
    }
    return {
        sys_id: gr.getUniqueValue(),
        root_table: gr.getValue('root_table'),
        status: 200,
    }
}

function getFieldMaps(endpoint: string): field_maps[] {
    const gr = new GlideRecord('x_1311940_prism_field_maps');
    gr.addQuery('endpoint', endpoint);
    gr.orderBy('order');
    gr.query();

    const mappings: field_maps[] = []; 

    while(gr.next()){
        mappings.push({
            endpoint: gr.getValue('endpoint'),
            local_field: gr.getValue('local_field'),
            external_path: gr.getValue('external_path'),
            order: gr.getValue('order'),
        })
    }
    return mappings;
}

function getValueFromPayload(fieldArray: field_maps[], parsedOjb: unknown): corrected_fields[] {
    const final_array: corrected_fields[] = [];

    for (let i = 0; i < fieldArray.length; i++){
        final_array.push({
            external_value: get(parsedOjb, fieldArray[i].external_path),
            local_field: fieldArray[i].local_field,
        })
    }

    return final_array;
}

function createGlideRecord(table: string, field_values: corrected_fields[]): string {
    const gr = new GlideRecord(table);
    const maps = field_values;

    for (const map of maps){
        if (!gr.isValidField(map.local_field)){
            gs.warn(`Prism: field "${map.local_field}" does not exists on ${table}`);
            continue;
        }

        gr.setValue(map.local_field, map.external_value);
    }
    return gr.update();
}


export function processInbound(request: RESTAPIRequest, response: RESTAPIResponse){

    if (!gs.hasRole('x_1311940_prism.integration_engine')){
        response.setStatus(401);
        return;
    }

    const raw = request.body.dataString;
    const endpointName = request.pathParams.endpoint;

    const endpointTableID = getEndpointId(endpointName);
    if (endpointTableID.status === 404){
        response.setStatus(404);
        return;
    }

    const transactionId = addTransaction(endpointTableID.sys_id, raw);
    console.log(transactionId);


    const parsedPayload = JSON.parse(raw);
    const findFieldMaps = getFieldMaps(endpointName);
    const getValuesFromPayload = getValueFromPayload(findFieldMaps, parsedPayload);
    const createQuery = createGlideRecord(endpointTableID.root_table, getValuesFromPayload)




    response.setStatus(200);
    return;
} 