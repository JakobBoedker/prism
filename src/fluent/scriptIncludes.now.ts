import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['JsonPath'],
    name: 'JsonPath',
    active: true,
    apiName: 'x_2194970_prism.JsonPath',
    script: Now.include('../server/tokenizer.ts'),
})

ScriptInclude({
    $id: Now.ID['IntegrationEngine'],
    name: 'IntegrationEngine',
    active: true,
    apiName: 'x_2194970_prism.IntegrationEngine',
    script: Now.include('../server/integration_engine.ts'),
})
