import { GlideDateTime, GlideRecord } from "@servicenow/glide";
import type { RESTAPIRequest, RESTAPIResponse } from '@servicenow/glide/sn_ws_int'


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

function getEndpointId(endpoint: string): string {
    const gr = new GlideRecord('x_1311940_prism_endpoint');
    gr.addQuery('name', endpoint);
    gr.query();
    if (!gr.next()){
        return '404';
    }
    return gr.getUniqueValue();
}

export function processInbound(request: RESTAPIRequest, response: RESTAPIResponse){
    const raw = request.body.dataString;
    const endpointName = request.pathParams.endpoint;

    const endpointTableID = getEndpointId(endpointName);
    if (endpointTableID === '404'){
        response.setStatus(404);
        return;
    }

    const transactionId = addTransaction(endpointTableID, raw);
    console.log(transactionId);

    

    

   

}