import { Record, default_view } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['e5a45b9583730b14027aa6d0deaad3e0'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_1311940_prism_rules',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: default_view,
    },
})
Record({
    $id: Now.ID['71a4db9583730b14027aa6d0deaad360'],
    table: 'sys_ui_element',
    data: {
        element: 'endpoint',
        position: 0,
        sys_ui_section: 'e5a45b9583730b14027aa6d0deaad3e0',
    },
})
Record({
    $id: Now.ID['79a4db9583730b14027aa6d0deaad361'],
    table: 'sys_ui_element',
    data: {
        element: 'rule_script',
        position: 1,
        sys_ui_section: 'e5a45b9583730b14027aa6d0deaad3e0',
    },
})
