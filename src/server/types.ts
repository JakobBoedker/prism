export interface endpoint {
    name: string
    active: boolean
    local_table: string
    root_path: string
    direction: string
}

export interface field_maps {
    endpoint: string
    local_field: string
    external_path: string,
    order: string
}

export interface transactions {
    endpoint: string
    received_at: string
    request_body: string
    response_status: string
    response_body: string
    state: string
    error_message: string
    target_table: string
    target_sys_id: string
}

export interface endpoint_extra {
    sys_id: string
    root_table: string
    status: number
}

export interface corrected_fields {
    external_value: string
    local_field: string
}