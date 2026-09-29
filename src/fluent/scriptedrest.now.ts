import { Acl, RestApi } from '@servicenow/sdk/core'
import { process } from '../server/handler.ts'

const acl = Acl({
    $id: Now.ID['integraton-engine-rest-acl'],
    type: 'rest_endpoint',
    name: 'integration-inseration',
    script: 'answer = gs.hasRole("rest_api_explorer")',
    operation: 'execute'
})

RestApi({
    $id: Now.ID['integration-engine-restapi'],
    name: 'customAPI',
    serviceId: 'custom_api',
    consumes: 'application/json',
    routes: [
        {
            $id: Now.ID['create'],
            path: '/home/{id}',
            script: process,
            parameters: [{ $id: Now.ID['param1'], name: 'n_param' }],
            headers: [{ $id: Now.ID['header1'], name: 'n_token' }],
            enforceAcl: [acl],
            version: 1,
        },
    ],
    enforceAcl: [acl],
    versions: [
        {
            $id: Now.ID['v1'],
            version: 1,
            isDefault: true,
        },
    ],
})