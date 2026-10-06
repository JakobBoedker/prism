import { ApplicationMenu, Record} from '@servicenow/sdk/core'

export const appCategory = Record({
    table: 'sys_app_category',
    $id: Now.ID['app-category'],
    data: {
        name: 'example',
        style: 'border-color: #a7cded; background-color: #e3f3ff;',
    },
})

export const applicationMenu = ApplicationMenu({
    $id: Now.ID['prism_applicaton_menu'],
    title: 'Prism',
    hint: 'Prism application menu',
    description: 'application menu prism integration engine',
    category: appCategory,
    roles: ['admin'],
    active: true,
})

export const tableSubMenu = Record({
    $id: Now.ID['module_transactions'],
    table: 'sys_app_module',
    data: {
        title: 'Transactions',
        application: applicationMenu,
        link_type: 'LIST',
        name: 'x_1311940_prism_transactions',
        roles: ['admin', 'itil'],
        active: true,
        order: 100,
    },
})
export const tableSubMenu2 = Record({
    $id: Now.ID['module_endpoint'],
    table: 'sys_app_module',
    data: {
        title: 'Endpoints',
        application: applicationMenu,
        link_type: 'LIST',
        name: 'x_1311940_prism_endpoint',
        roles: ['admin', 'itil'],
        active: true,
        order: 101,
    },
})
export const tableSubMenu3 = Record({
    $id: Now.ID['module_field_maps'],
    table: 'sys_app_module',
    data: {
        title: 'Field Maps',
        application: applicationMenu,
        link_type: 'LIST',
        name: 'x_1311940_prism_field_maps',
        roles: ['admin', 'itil'],
        active: true,
        order: 102,
    },
})

