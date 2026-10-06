import { Acl, RestApi } from '@servicenow/sdk/core'
import { processInbound } from '../server/integration_engine'

const acl = Acl({
    $id: Now.ID['integraton-engine-rest-acl'],
    type: 'rest_endpoint',
    name: 'integration-inseration',
    script: 'answer = gs.hasRole("x_1311940_prism.integration_engine")',
    operation: 'execute'
})

RestApi({
    $id: Now.ID['integration-engine-restapi'],
    name: 'integration_Rest',
    serviceId: 'integration_rest',
    consumes: 'application/json',
    routes: [
        {
            $id: Now.ID['create'],
            path: 'ie/{endpoint}/create',
            script: processInbound,
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