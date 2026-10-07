import {Table, StringColumn, BooleanColumn, ReferenceColumn, IntegerColumn, DateTimeColumn, ScriptColumn} from '@servicenow/sdk/core'

export const x_1311940_prism_endpoint = Table({
    name: 'x_1311940_prism_endpoint',
    label: 'Table for Endpoints',
    display: 'name',
    schema: {
        name: StringColumn({
            label: 'Name',
            mandatory: true
        }),
        active: BooleanColumn({
            label: 'Active',
            mandatory: true,
            default: false
        }),
        local_table: ReferenceColumn({
            label: 'Local Table',
            referenceTable: 'sys_db_object',
            cascadeRule: 'none',
        }),
        integration_account: ReferenceColumn({
            label: 'Integration Account',
            referenceTable: 'sys_user',
            cascadeRule: 'none',
        }),
        root_path: StringColumn({
            label: 'Root Path',
        }),
        direction: StringColumn({
            label: 'Direction',
            choices: {
                inbound: 'Inbound',
                outbound: 'Outbound',
                both: 'Both',
            },
        }),
    },

})

export const x_1311940_prism_field_maps = Table({
    name: 'x_1311940_prism_field_maps',
    label: 'Table for field mapping',
    display: 'endpoint',
    schema: {
        endpoint: ReferenceColumn({
            label: 'Endpoint',
            referenceTable: 'x_1311940_prism_endpoint',
            cascadeRule: 'none',
        }),
        local_field: StringColumn({
            label: 'Local Field',
            mandatory: true,
        }),
        external_path: StringColumn({
            label: 'External Path',
            mandatory: true,
        }),
        order: IntegerColumn({
            label: 'Order',
            mandatory: true,
        }),
    },
})

export const x_1311940_prism_transactions = Table({
    name: 'x_1311940_prism_transactions',
    label: 'Transaction logs',
    display: 'endpoint',
    schema: {
        endpoint: ReferenceColumn({
            label: 'Endpoint',
            referenceTable: 'x_1311940_prism_endpoint',
            cascadeRule: 'none',
        }),
        received_at: DateTimeColumn({
            label: 'Received At'
        }),
        request_body: StringColumn({
            label: 'Request Body',
            maxLength: 1000,
        }),
        response_status: StringColumn({
            label: 'Response Status',
            maxLength: 1000,
        }),
        response_body: StringColumn({
            label: 'Response Body',
            maxLength: 1000,
        }),
        state: StringColumn({
            label: 'State',
            choices: {
                received: 'Received',
                complete: 'Complete',
                failed: 'Failed', 
            },
        }),
        error_message: StringColumn({
            label: 'Error Message',
            maxLength: 1000,
        }),
        target_table: ReferenceColumn({
            label: 'Target Table',
            referenceTable: 'sys_db_object',
            cascadeRule: 'none',
        }),
        target_sys_id: StringColumn({
            label: 'Target SysID',
            maxLength: 1000,
        }),
    },
})

export const x_1311940_prism_rules = Table({
    name: 'x_1311940_prism_rules',
    label: 'Rules',
    schema: {
        endpoint: ReferenceColumn({
            label: 'Endpoint',
            referenceTable: 'x_1311940_prism_endpoint',
            cascadeRule: 'none',
        }),

        rule_script: ScriptColumn({
            label: 'Rule script',
            default: '// "value" hold the script for checking the rule against the integration payload',

        }),
        local_field: StringColumn({
            label: 'Local Field',
        }),
        external_path: StringColumn({
            label: 'External Path',
        })
    }
})