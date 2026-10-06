import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '04ed928d833b4714027aa6d0deaad3a9': {
                        table: 'sys_scope_privilege'
                        id: '04ed928d833b4714027aa6d0deaad3a9'
                    }
                    '0cedd28d833b4714027aa6d0deaad308': {
                        table: 'sys_scope_privilege'
                        id: '0cedd28d833b4714027aa6d0deaad308'
                    }
                    '84edd28d833b4714027aa6d0deaad304': {
                        table: 'sys_scope_privilege'
                        id: '84edd28d833b4714027aa6d0deaad304'
                    }
                    a3dd928d833b4714027aa6d0deaad3a0: {
                        table: 'sys_scope_privilege'
                        id: 'a3dd928d833b4714027aa6d0deaad3a0'
                    }
                    'app-category': {
                        table: 'sys_app_category'
                        id: 'cd3a2745c6544935a0e31358b5d1b8a7'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '363e8aedcf0242dc95a2cb5717412697'
                    }
                    create: {
                        table: 'sys_ws_operation'
                        id: 'b46e0688e5574581a5cdd59418603524'
                    }
                    header1: {
                        table: 'sys_ws_header'
                        id: '779526f22d5643ab835b0e0aa9eeaa0e'
                        deleted: true
                    }
                    'integration-engine-restapi': {
                        table: 'sys_ws_definition'
                        id: '17e8844379f84f1dad7f946bec574c3e'
                    }
                    IntegrationEngine: {
                        table: 'sys_script_include'
                        id: '5bbbdbde6ebc4782b87d86251014c18c'
                    }
                    'integraton-engine-rest-acl': {
                        table: 'sys_security_acl'
                        id: '8fbe11f3c7f243f3967c21bf80142024'
                    }
                    JsonPath: {
                        table: 'sys_script_include'
                        id: '29993d1f6eb64ba784590dbc31ccf292'
                    }
                    module_endpoint: {
                        table: 'sys_app_module'
                        id: 'bb02e609d6504571af6b6977430d00a7'
                    }
                    module_field_maps: {
                        table: 'sys_app_module'
                        id: 'acad65a96bb04cf496cbf039efa4f84d'
                    }
                    module_transactions: {
                        table: 'sys_app_module'
                        id: 'f491ba30135342b79d0dd9b1270c0172'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '151d14f0ae1341929a2693b347a2db6d'
                    }
                    param1: {
                        table: 'sys_ws_query_parameter'
                        id: '7ba7ec0cccc84473a9fd9bcd7cce8ae7'
                        deleted: true
                    }
                    prism_applicaton_menu: {
                        table: 'sys_app_application'
                        id: '4ac15988f947427986ad98136aa729d6'
                    }
                    src_server_handler_ts: {
                        table: 'sys_module'
                        id: 'd1bffbc22bf448e4b495dd1a86496528'
                        deleted: true
                    }
                    src_server_integration_engine_ts: {
                        table: 'sys_module'
                        id: 'c1a585e4599f41879e56087ebb557040'
                    }
                    src_server_jsonpath_ts: {
                        table: 'sys_module'
                        id: 'a6e1ec1528b440ee96877e6d61a6bb78'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: 'da0a1851f2104e51958925f60646e5ab'
                    }
                    src_server_types_ts: {
                        table: 'sys_module'
                        id: 'a3262e4f425241f0bf8af9b931c31087'
                    }
                    v1: {
                        table: 'sys_ws_version'
                        id: 'd62784f1eca84486a0bbe4d3b7b115af'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '0791d851cfd6491fb6f9a69197a0be93'
                        key: {
                            name: 'x_1311940_prism_transactions'
                            element: 'target_table'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0946b6495dc747a18c47cd273afb7ace'
                        key: {
                            name: 'x_1311940_prism_transactions'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0f4196b088df4e398f5934a87f23b1f6'
                        key: {
                            name: 'x_1311940_prism_transactions'
                            element: 'state'
                            value: 'failed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '106e5ffc832f8390027aa6d0deaad3bb'
                        key: {
                            sys_ui_section: {
                                id: '886e5ffc832f8390027aa6d0deaad380'
                                key: {
                                    name: 'x_1311940_prism_endpoint'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1111f1fe77ec43568ebd5f87016472da'
                        key: {
                            name: 'x_1311940_prism_endpoint'
                            element: 'direction'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '137db9bc59df42619628b72544d3beeb'
                        key: {
                            name: 'x_1311940_prism_endpoint'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '13fb40fd4b994d76926519a0bd0e99a4'
                        key: {
                            name: 'x_1311940_prism_transactions'
                            element: 'response_body'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '164df883a3264cc89930371d2217dcd4'
                        key: {
                            name: 'x_1311940_prism_transactions'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '16545d53089947c883fe0ced39b157b6'
                        key: {
                            name: 'x_1311940_prism_field_maps'
                            element: 'order'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '186e5ffc832f8390027aa6d0deaad3be'
                        key: {
                            sys_ui_section: {
                                id: '886e5ffc832f8390027aa6d0deaad380'
                                key: {
                                    name: 'x_1311940_prism_endpoint'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'root_path'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '198b5320370d4432933091fb8212dd52'
                        key: {
                            name: 'x_1311940_prism_endpoint'
                            element: 'integration_account'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1b34c19327184288893209a1bf3ede3e'
                        key: {
                            name: 'x_1311940_prism_endpoint'
                            element: 'local_table'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1c6e5ffc832f8390027aa6d0deaad3bc'
                        key: {
                            sys_ui_section: {
                                id: '886e5ffc832f8390027aa6d0deaad380'
                                key: {
                                    name: 'x_1311940_prism_endpoint'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '26374ebcde9a456a888ec249202b1d87'
                        key: {
                            name: 'x_1311940_prism_transactions'
                            element: 'target_table'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '27788a16c84a46b7b715380d8b49e9d2'
                        key: {
                            name: 'x_1311940_prism_endpoint'
                            element: 'direction'
                            value: 'both'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '29b68e2895ec48748ab930f3303532c3'
                        key: {
                            name: 'x_1311940_prism_field_maps'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2bab5fa2e40d4c689c77a586d8be52d7'
                        key: {
                            name: 'x_1311940_prism_transactions'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2ca213084cad451c842306b1b2a7e8b7'
                        key: {
                            name: 'x_1311940_prism_transactions'
                            element: 'endpoint'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '32940a43c63d4f07803ccb879e882638'
                        key: {
                            name: 'x_1311940_prism_field_maps'
                            element: 'external_path'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '376dfa05e19d48e1b6e62021acafcf8e'
                        key: {
                            name: 'x_1311940_prism_transactions'
                            element: 'error_message'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3f871c63cf994a69b70a77aa01135f97'
                        key: {
                            name: 'x_1311940_prism_field_maps'
                            element: 'local_field'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4144bdbe832b83d0027aa6d0deaad373'
                        key: {
                            sys_ui_section: {
                                id: '8d44bdbe832b83d0027aa6d0deaad361'
                                key: {
                                    name: 'x_1311940_prism_transactions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'request_body'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '41d5cc4e9846496e96af3c391bdcecea'
                        key: {
                            name: 'x_1311940_prism_endpoint'
                            element: 'direction'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '43177db9b4284f93a5aa7213b02038c9'
                        key: {
                            name: 'x_1311940_prism_endpoint'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '437a34c3ccbd4d15acbd45682713149d'
                        key: {
                            name: 'x_1311940_prism_field_maps'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4544bdbe832b83d0027aa6d0deaad36c'
                        key: {
                            sys_ui_section: {
                                id: '8d44bdbe832b83d0027aa6d0deaad361'
                                key: {
                                    name: 'x_1311940_prism_transactions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4544bdbe832b83d0027aa6d0deaad371'
                        key: {
                            sys_ui_section: {
                                id: '8d44bdbe832b83d0027aa6d0deaad361'
                                key: {
                                    name: 'x_1311940_prism_transactions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'target_sys_id'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4648624fa8414574a9d34d7c3135af48'
                        key: {
                            name: 'x_1311940_prism_field_maps'
                            element: 'external_path'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '470a077e82144d7897cc42f9e79f6239'
                        key: {
                            name: 'x_1311940_prism_transactions'
                            element: 'endpoint'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '474ec3ef9e7446d49cbee09a0e207698'
                        key: {
                            name: 'x_1311940_prism_endpoint'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4944bdbe832b83d0027aa6d0deaad36f'
                        key: {
                            sys_ui_section: {
                                id: '8d44bdbe832b83d0027aa6d0deaad361'
                                key: {
                                    name: 'x_1311940_prism_transactions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'response_body'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4944bdbe832b83d0027aa6d0deaad376'
                        key: {
                            sys_ui_section: {
                                id: '8d44bdbe832b83d0027aa6d0deaad361'
                                key: {
                                    name: 'x_1311940_prism_transactions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4c6e5ffc832f8390027aa6d0deaad3b8'
                        key: {
                            sys_ui_section: {
                                id: '886e5ffc832f8390027aa6d0deaad380'
                                key: {
                                    name: 'x_1311940_prism_endpoint'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4d44bdbe832b83d0027aa6d0deaad36d'
                        key: {
                            sys_ui_section: {
                                id: '8d44bdbe832b83d0027aa6d0deaad361'
                                key: {
                                    name: 'x_1311940_prism_transactions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'endpoint'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4d44bdbe832b83d0027aa6d0deaad374'
                        key: {
                            sys_ui_section: {
                                id: '8d44bdbe832b83d0027aa6d0deaad361'
                                key: {
                                    name: 'x_1311940_prism_transactions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4ea1d522437741508335ac46e9497a1e'
                        key: {
                            name: 'x_1311940_prism_transactions'
                            element: 'response_status'
                        }
                    },
                    {
                        table: 'sys_ws_query_parameter_map'
                        id: '51f4773c7381434997424ed6a552a815'
                        deleted: true
                        key: {
                            web_service_operation: 'b46e0688e5574581a5cdd59418603524'
                            web_service_query_parameter: '7ba7ec0cccc84473a9fd9bcd7cce8ae7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '548e064d83b74714027aa6d0deaad377'
                        key: {
                            sys_ui_section: {
                                id: '886e5ffc832f8390027aa6d0deaad380'
                                key: {
                                    name: 'x_1311940_prism_endpoint'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'integration_account'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '54bb39b0508e4371b6ede1b33be73874'
                        key: {
                            name: 'x_1311940_prism_endpoint'
                            element: 'direction'
                            value: 'outbound'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5827be243ca74eafb6326f01736330c5'
                        key: {
                            name: 'x_1311940_prism_transactions'
                            element: 'response_body'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '58ae4a4d83b74714027aa6d0deaad347'
                        key: {
                            sys_ui_section: {
                                id: '886e5ffc832f8390027aa6d0deaad380'
                                key: {
                                    name: 'x_1311940_prism_endpoint'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5b0d7f77ae4a4f9badc2eaea2241784d'
                        key: {
                            name: 'x_1311940_prism_endpoint'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5cae4a4d83b74714027aa6d0deaad345'
                        key: {
                            sys_ui_section: {
                                id: '886e5ffc832f8390027aa6d0deaad380'
                                key: {
                                    name: 'x_1311940_prism_endpoint'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'local_table'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5cb1efa03f93444bab0f0c87f9fec466'
                        key: {
                            name: 'x_1311940_prism_endpoint'
                            element: 'direction'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '5d843d7828e94aaf830c7219c353fa70'
                        key: {
                            name: 'x_1311940_prism.integration_engine'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '61d5d018e1dd4f0994205d49af002b3a'
                        key: {
                            name: 'x_1311940_prism_field_maps'
                            element: 'endpoint'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '67d5937b73a046aea85812ddd9de1fd6'
                        key: {
                            name: 'x_1311940_prism_transactions'
                            element: 'target_sys_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6832ce06871441d7b96e2303ce6ab9f5'
                        key: {
                            name: 'x_1311940_prism_transactions'
                            element: 'response_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6884455c4a7940a29fb687b10b89cbdb'
                        key: {
                            name: 'x_1311940_prism_transactions'
                            element: 'request_body'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '723e4d358894425fb089e8d3edbaf5c0'
                        key: {
                            name: 'x_1311940_prism_endpoint'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '779765fa6b454da2bf3b8ec6373fd284'
                        key: {
                            name: 'x_1311940_prism_transactions'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '8107d53cded24ee080fe4bb5e7e8ad2c'
                        key: {
                            name: 'x_1311940_prism_field_maps'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '886e5ffc832f8390027aa6d0deaad380'
                        key: {
                            name: 'x_1311940_prism_endpoint'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '8d44bdbe832b83d0027aa6d0deaad361'
                        key: {
                            name: 'x_1311940_prism_transactions'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '906e5ffc832f8390027aa6d0deaad3ba'
                        key: {
                            sys_ui_section: {
                                id: '886e5ffc832f8390027aa6d0deaad380'
                                key: {
                                    name: 'x_1311940_prism_endpoint'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '93d26cf220184f69850462b9ae290881'
                        key: {
                            name: 'x_1311940_prism_transactions'
                            element: 'error_message'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '946e5ffc832f8390027aa6d0deaad3bf'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '886e5ffc832f8390027aa6d0deaad380'
                                key: {
                                    name: 'x_1311940_prism_endpoint'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '986e5ffc832f8390027aa6d0deaad3bd'
                        key: {
                            sys_ui_section: {
                                id: '886e5ffc832f8390027aa6d0deaad380'
                                key: {
                                    name: 'x_1311940_prism_endpoint'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'local_table'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9b0d607f68da4c778670c20df5734700'
                        key: {
                            name: 'x_1311940_prism_endpoint'
                            element: 'local_table'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9b30870c74e44d7290f70778cba734be'
                        key: {
                            name: 'x_1311940_prism_endpoint'
                            element: 'direction'
                            value: 'inbound'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9c6e5ffc832f8390027aa6d0deaad3bb'
                        key: {
                            sys_ui_section: {
                                id: '886e5ffc832f8390027aa6d0deaad380'
                                key: {
                                    name: 'x_1311940_prism_endpoint'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'direction'
                            position: '3'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'a01418d58a994c098e6fa828d76848ab'
                        key: {
                            name: 'x_1311940_prism_transactions'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a135ca3b08ff478c86ea983bcbfcbb19'
                        key: {
                            name: 'x_1311940_prism_transactions'
                            element: 'received_at'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a49f91a9e63d445791cf296391f515a5'
                        key: {
                            name: 'x_1311940_prism_field_maps'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ac4d8b0d294a4cda9893ac0d9d45d005'
                        key: {
                            name: 'x_1311940_prism_endpoint'
                            element: 'integration_account'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bda9c035e1f14207a7748250730ee54b'
                        key: {
                            name: 'x_1311940_prism_endpoint'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c144bdbe832b83d0027aa6d0deaad372'
                        key: {
                            sys_ui_section: {
                                id: '8d44bdbe832b83d0027aa6d0deaad361'
                                key: {
                                    name: 'x_1311940_prism_transactions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c544bdbe832b83d0027aa6d0deaad370'
                        key: {
                            sys_ui_section: {
                                id: '8d44bdbe832b83d0027aa6d0deaad361'
                                key: {
                                    name: 'x_1311940_prism_transactions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'error_message'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c708698948064f35897e5fc6cea62f23'
                        key: {
                            name: 'x_1311940_prism_endpoint'
                            element: 'root_path'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c71d841d2f664614bcc468f899769ecd'
                        key: {
                            name: 'x_1311940_prism_transactions'
                            element: 'target_sys_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c944bdbe832b83d0027aa6d0deaad36e'
                        key: {
                            sys_ui_section: {
                                id: '8d44bdbe832b83d0027aa6d0deaad361'
                                key: {
                                    name: 'x_1311940_prism_transactions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'received_at'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c944bdbe832b83d0027aa6d0deaad375'
                        key: {
                            sys_ui_section: {
                                id: '8d44bdbe832b83d0027aa6d0deaad361'
                                key: {
                                    name: 'x_1311940_prism_transactions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'target_table'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c9b2b9e7e5254f00934ca3445776a2c7'
                        key: {
                            name: 'x_1311940_prism_endpoint'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cd44bdbe832b83d0027aa6d0deaad373'
                        key: {
                            sys_ui_section: {
                                id: '8d44bdbe832b83d0027aa6d0deaad361'
                                key: {
                                    name: 'x_1311940_prism_transactions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'response_status'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ceb71eafa9264b4cb0e983e746ead0b0'
                        key: {
                            name: 'x_1311940_prism_transactions'
                            element: 'state'
                            value: 'received'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd0ae4a4d83b74714027aa6d0deaad32b'
                        key: {
                            sys_ui_section: {
                                id: '886e5ffc832f8390027aa6d0deaad380'
                                key: {
                                    name: 'x_1311940_prism_endpoint'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'integration_account'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd5c4738d30d84a9a83dbc7b4b51a0aac'
                        key: {
                            name: 'x_1311940_prism_transactions'
                            element: 'state'
                            value: 'complete'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd8ae4a4d83b74714027aa6d0deaad346'
                        key: {
                            sys_ui_section: {
                                id: '886e5ffc832f8390027aa6d0deaad380'
                                key: {
                                    name: 'x_1311940_prism_endpoint'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'root_path'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'dcae4a4d83b74714027aa6d0deaad344'
                        key: {
                            sys_ui_section: {
                                id: '886e5ffc832f8390027aa6d0deaad380'
                                key: {
                                    name: 'x_1311940_prism_endpoint'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'dce5886194e34576b27f0a9967fe3ace'
                        key: {
                            name: 'x_1311940_prism_endpoint'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e22ee606470a470a8a90ad4caf6af044'
                        key: {
                            name: 'x_1311940_prism_transactions'
                            element: 'request_body'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e3ed0be8e4c64f098f9bf8aba03fc0f2'
                        key: {
                            name: 'x_1311940_prism_field_maps'
                            element: 'local_field'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'efbd8922cfc54f429323714ee4c0f643'
                        key: {
                            name: 'x_1311940_prism_transactions'
                            element: 'received_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f44d75efbb544744af246b9290364fae'
                        key: {
                            name: 'x_1311940_prism_field_maps'
                            element: 'order'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'f7abb85a3b1e49a9803f981e8f505e71'
                        key: {
                            name: 'x_1311940_prism_transactions'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f8cfc992a1fb42659cc683775cd417e4'
                        key: {
                            name: 'x_1311940_prism_field_maps'
                            element: 'endpoint'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fc0b9f24e3b94cd5980d511569f81fdf'
                        key: {
                            name: 'x_1311940_prism_endpoint'
                            element: 'root_path'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'fdfc72c8e35847318decc693ab9eee74'
                        key: {
                            name: 'x_1311940_prism_transactions'
                        }
                    },
                    {
                        table: 'sys_ws_header_map'
                        id: 'ffd80bf312704d748bf226331c092d69'
                        deleted: true
                        key: {
                            web_service_operation: 'b46e0688e5574581a5cdd59418603524'
                            web_service_header: '779526f22d5643ab835b0e0aa9eeaa0e'
                        }
                    },
                ]
            }
        }
    }
}
