import {Table, StringColumn, BooleanColumn, ReferenceColumn, IntegerColumn, DateTimeColumn } from '@servicenow/sdk/core'

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
            label: 'Request Body'
        }),
        response_status: StringColumn({
            label: 'Response Status'
        }),
        response_body: StringColumn({
            label: 'Response Body'
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
            label: 'Error Message'
        }),
        target_table: ReferenceColumn({
            label: 'Target Table',
            referenceTable: 'sys_db_object',
            cascadeRule: 'none',
        }),
        target_sys_id: StringColumn({
            label: 'Target SysID'
        }),
    },
})