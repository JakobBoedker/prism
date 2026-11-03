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
                        id: 'bcf7dbaa1844451fb39325c340e2419d'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: 'd53b90ee0edb4548a5395a7f1fa675f1'
                    }
                    create: {
                        table: 'sys_ws_operation'
                        id: '1dd886451579405e8e13464c05653fd6'
                    }
                    'integration-engine-restapi': {
                        table: 'sys_ws_definition'
                        id: '23f351c797d940b29b7f5d02c44b4a65'
                    }
                    IntegrationEngine: {
                        table: 'sys_script_include'
                        id: '1388ce785ceb46b598d2563a6c99c2f6'
                    }
                    'integraton-engine-rest-acl': {
                        table: 'sys_security_acl'
                        id: 'e42786b673c44f94ae241d95477ab45c'
                    }
                    JsonPath: {
                        table: 'sys_script_include'
                        id: '840d6bc7b05d46ee8c5ebd0be3398973'
                    }
                    module_endpoint: {
                        table: 'sys_app_module'
                        id: '7755b8cfe1b44f31af72b4f449804b7b'
                    }
                    module_field_maps: {
                        table: 'sys_app_module'
                        id: '6fac7b5800fb47c6a14059c281f2f299'
                    }
                    module_rules: {
                        table: 'sys_app_module'
                        id: 'dea096f86049467ca559776749c9cde5'
                    }
                    module_transactions: {
                        table: 'sys_app_module'
                        id: '15ce85509d394760b8ef9020526d7954'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '5647733d004d4d7e8a8596e98e2ac8c9'
                    }
                    prism_applicaton_menu: {
                        table: 'sys_app_application'
                        id: 'ebb40a16cda2429b96377f41671e4003'
                    }
                    src_server_integration_engine_ts: {
                        table: 'sys_module'
                        id: '11e54eb208544bc49b4e68297a183e3a'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: 'b79dcff4a5994e1eaf347dee6d2129f3'
                    }
                    src_server_tokenizer_ts: {
                        table: 'sys_module'
                        id: 'd090353f209e48898138f82ae806d10f'
                    }
                    src_server_types_ts: {
                        table: 'sys_module'
                        id: 'e8facef74a564338b0f7d21406799fd2'
                    }
                    v1: {
                        table: 'sys_ws_version'
                        id: '5172950ffee640e5983eba55130989aa'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '02724a1fb118489588f9c3e0c139df16'
                        key: {
                            name: 'x_264938_prism_field_maps'
                            element: 'external_path'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '02c1bd1c1181401cbfb2578335560568'
                        key: {
                            name: 'x_264938_prism_transactions'
                            element: 'target_sys_id'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '04cfb43cb4a54900a15b87c1f4d11470'
                        key: {
                            name: 'x_264938_prism_endpoint'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '04f1e6c5837b4714027aa6d0deaad390'
                        key: {
                            sys_ui_section: 'b7e1e6c5837b4714027aa6d0deaad34f'
                            element: '.end_split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '08f1e6c5837b4714027aa6d0deaad38e'
                        key: {
                            sys_ui_section: 'b7e1e6c5837b4714027aa6d0deaad34f'
                            element: 'local_field'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '0b95e2e7f0994a11b4804faa895b587c'
                        key: {
                            name: 'x_264938_prism_transactions'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0bbdd597e9fd4c41aa3f8fc5ebd225aa'
                        key: {
                            name: 'x_264938_prism_endpoint'
                            element: 'root_path'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0bc76272a98b4c2cbf95e79b614dcc4b'
                        key: {
                            name: 'x_264938_prism_transactions'
                            element: 'target_table'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1624ad5b2222460b9a0bd551e4bad74a'
                        key: {
                            name: 'x_264938_prism_transactions'
                            element: 'request_body'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '17f488cf83fe4f7e98d8b4543ee840de'
                        key: {
                            name: 'x_264938_prism_endpoint'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '18cac6a36f2e461c973e3dc227b4fdf4'
                        key: {
                            name: 'x_264938_prism_field_maps'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '195275f535dc4bd58356f14ae8c95af9'
                        key: {
                            name: 'x_264938_prism_rules'
                            element: 'endpoint'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '19a45f4b2f4b4497934bab71e7e19691'
                        key: {
                            name: 'x_264938_prism_endpoint'
                            element: 'local_table'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '19bcc84c3c6348e2bcbe869cdeadca77'
                        key: {
                            name: 'x_264938_prism.integration_engine'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '246fb65abef04f27b8f6c4ec190f2417'
                        key: {
                            name: 'x_264938_prism_endpoint'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '297a4655a8c2416fb15ff26984e3d2d3'
                        key: {
                            name: 'x_264938_prism_transactions'
                            element: 'received_at'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '32cc167aa9924aa0b1eb02a48d73a5f5'
                        key: {
                            name: 'x_264938_prism_transactions'
                            element: 'response_body'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '33e1e6c5837b4714027aa6d0deaad38b'
                        key: {
                            sys_ui_section: 'b7e1e6c5837b4714027aa6d0deaad34f'
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '34ef17da6bee44a982da89b1d71e676d'
                        key: {
                            name: 'x_264938_prism_endpoint'
                            element: 'integration_account'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3b9ef4915149415db1b09c0c6e87e7c5'
                        key: {
                            name: 'x_264938_prism_endpoint'
                            element: 'root_path'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3c240e7b597c419480a53ab9a10bb3f4'
                        key: {
                            name: 'x_264938_prism_endpoint'
                            element: 'direction'
                            value: 'inbound'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3fe1e6c5837b4714027aa6d0deaad38c'
                        key: {
                            sys_ui_section: 'b7e1e6c5837b4714027aa6d0deaad34f'
                            element: 'endpoint'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '40eddd6e0a0c446ab33c50f4875cfff7'
                        key: {
                            name: 'x_264938_prism_transactions'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4144bdbe832b83d0027aa6d0deaad373'
                        key: {
                            sys_ui_section: '8d44bdbe832b83d0027aa6d0deaad361'
                            element: 'request_body'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '42ee01e3a5a4427abd03643cc0738d4b'
                        key: {
                            name: 'x_264938_prism_transactions'
                            element: 'request_body'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4544bdbe832b83d0027aa6d0deaad36c'
                        key: {
                            sys_ui_section: '8d44bdbe832b83d0027aa6d0deaad361'
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4544bdbe832b83d0027aa6d0deaad371'
                        key: {
                            sys_ui_section: '8d44bdbe832b83d0027aa6d0deaad361'
                            element: 'target_sys_id'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4944bdbe832b83d0027aa6d0deaad36f'
                        key: {
                            sys_ui_section: '8d44bdbe832b83d0027aa6d0deaad361'
                            element: 'response_body'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4944bdbe832b83d0027aa6d0deaad376'
                        key: {
                            sys_ui_section: '8d44bdbe832b83d0027aa6d0deaad361'
                            element: '.end_split'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4ba3bbc9aa7f4ef2b5a29849b0434f67'
                        key: {
                            name: 'x_264938_prism_endpoint'
                            element: 'integration_account'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4d44bdbe832b83d0027aa6d0deaad36d'
                        key: {
                            sys_ui_section: '8d44bdbe832b83d0027aa6d0deaad361'
                            element: 'endpoint'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4d44bdbe832b83d0027aa6d0deaad374'
                        key: {
                            sys_ui_section: '8d44bdbe832b83d0027aa6d0deaad361'
                            element: 'state'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4dfa0a58751e4b09a23c6b3ebbea738e'
                        key: {
                            name: 'x_264938_prism_rules'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '5012f9a4b0d2466aa825ac9cc93cec28'
                        key: {
                            name: 'x_264938_prism_rules'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '50167d976a8c4e13b359e8b2ad7c7750'
                        key: {
                            name: 'x_264938_prism_field_maps'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '51489a8cef21415e873c1adf53a2be94'
                        key: {
                            name: 'x_264938_prism_rules'
                            element: 'rule_script'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '53e88fd0a73a4e92b9df64887511110f'
                        key: {
                            name: 'x_264938_prism_endpoint'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5f8e001eb55045848982a5d7d149750e'
                        key: {
                            name: 'x_264938_prism_field_maps'
                            element: 'endpoint'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6381911871364bb0b082bf658b864948'
                        key: {
                            name: 'x_264938_prism_transactions'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '646ad5fb136d41998e4bde4249576485'
                        key: {
                            name: 'x_264938_prism_transactions'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '6885b5c47ce94db2a67ea2f54e2de66e'
                        key: {
                            name: 'x_264938_prism_endpoint'
                            element: 'direction'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6ad9305789924561b68755f598eb99d2'
                        key: {
                            name: 'x_264938_prism_transactions'
                            element: 'received_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6b4805981a4144e6ae3b2fcc750f0783'
                        key: {
                            name: 'x_264938_prism_rules'
                            element: 'local_field'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6f2f7baa6b3d46ee997c7cdcdd67e44b'
                        key: {
                            name: 'x_264938_prism_field_maps'
                            element: 'order'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '71a4db9583730b14027aa6d0deaad360'
                        key: {
                            sys_ui_section: 'e5a45b9583730b14027aa6d0deaad3e0'
                            element: 'endpoint'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '746d0338957641e4a9c0ac5b4e5d1d84'
                        key: {
                            name: 'x_264938_prism_field_maps'
                            element: 'external_path'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '76eb5add837bc714027aa6d0deaad366'
                        key: {
                            sys_ui_section: '886e5ffc832f8390027aa6d0deaad380'
                            element: 'direction'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7866643a02dc496fa163ab757a3a78b7'
                        key: {
                            name: 'x_264938_prism_rules'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '79a4db9583730b14027aa6d0deaad361'
                        key: {
                            sys_ui_section: 'e5a45b9583730b14027aa6d0deaad3e0'
                            element: 'rule_script'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7aeb5add837bc714027aa6d0deaad364'
                        key: {
                            sys_ui_section: '886e5ffc832f8390027aa6d0deaad380'
                            element: 'active'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7eeb5add837bc714027aa6d0deaad362'
                        key: {
                            sys_ui_section: '886e5ffc832f8390027aa6d0deaad380'
                            element: 'integration_account'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '80c330897465410d828a47174bc3ce19'
                        key: {
                            name: 'x_264938_prism_endpoint'
                            element: 'direction'
                            value: 'both'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '84c6d22469d049c28db3714da0f96df6'
                        key: {
                            name: 'x_264938_prism_transactions'
                            element: 'response_body'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '84f1e6c5837b4714027aa6d0deaad38f'
                        key: {
                            sys_ui_section: 'b7e1e6c5837b4714027aa6d0deaad34f'
                            element: 'order'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '85d608cd01394256aa653bea1c7329dd'
                        key: {
                            name: 'x_264938_prism_transactions'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '886e5ffc832f8390027aa6d0deaad380'
                        key: {
                            name: 'x_264938_prism_endpoint'
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
                        table: 'sys_dictionary'
                        id: '8a6c52417afd44dfaa5071857a31c0dc'
                        key: {
                            name: 'x_264938_prism_rules'
                            element: 'endpoint'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '8aaabe56f4c6496d958f7ae6b258a5ba'
                        key: {
                            name: 'x_264938_prism_rules'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8b96194f4beb4931b6961e3359fc04a4'
                        key: {
                            name: 'x_264938_prism_rules'
                            element: 'local_field'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8c23f21cce1c4e5a940bbc34f877193c'
                        key: {
                            name: 'x_264938_prism_transactions'
                            element: 'target_table'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8cc8c50306234ba6b35fa6489047ab5f'
                        key: {
                            name: 'x_264938_prism_endpoint'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '8d44bdbe832b83d0027aa6d0deaad361'
                        key: {
                            name: 'x_264938_prism_transactions'
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
                        table: 'sys_documentation'
                        id: '8e4ad72d0d3c4d64b75fc46fc154dc4f'
                        key: {
                            name: 'x_264938_prism_transactions'
                            element: 'response_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '8f5bd2a4c192474888b754c8db4fc384'
                        key: {
                            name: 'x_264938_prism_transactions'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8fa3c77e0bbb41f3a843816d1f18e65e'
                        key: {
                            name: 'x_264938_prism_endpoint'
                            element: 'local_table'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '9027130f7f8e42128de8826d24bbea75'
                        key: {
                            name: 'x_264938_prism_endpoint'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '94b389bf8d664417a98f6360c1962af1'
                        key: {
                            name: 'x_264938_prism_transactions'
                            element: 'target_sys_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9570e8104138418fa29ec6ea2009c506'
                        key: {
                            name: 'x_264938_prism_transactions'
                            element: 'endpoint'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '998662e4c9804ccabc847c77ef9100b6'
                        key: {
                            name: 'x_264938_prism_transactions'
                            element: 'state'
                            value: 'complete'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9c06ea2a61a04e44b890a1516ff17ebf'
                        key: {
                            name: 'x_264938_prism_field_maps'
                            element: 'local_field'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9d264cc181494a67a301bf29686562a4'
                        key: {
                            name: 'x_264938_prism_transactions'
                            element: 'endpoint'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9effde3433cc4eeabf831628c03f0378'
                        key: {
                            name: 'x_264938_prism_transactions'
                            element: 'error_message'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a840bb884c764702add82df847c6eae2'
                        key: {
                            name: 'x_264938_prism_transactions'
                            element: 'error_message'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ad088fe4bb6847a4af3b3841d7780055'
                        key: {
                            name: 'x_264938_prism_field_maps'
                            element: 'order'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b0937095a6ac47bb84a67e490ced6454'
                        key: {
                            name: 'x_264938_prism_rules'
                            element: 'rule_script'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b2581d34aef24787957ad0542e578a47'
                        key: {
                            name: 'x_264938_prism_endpoint'
                            element: 'direction'
                            value: 'outbound'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'b596754baa4e4cfaa72fe27161be15c3'
                        key: {
                            name: 'x_264938_prism.admin'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b5a0e605837b4714027aa6d0deaad38d'
                        key: {
                            sys_ui_section: '886e5ffc832f8390027aa6d0deaad380'
                            element: 'root_path'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b5e445ae1703484bb8ca01ca665ae972'
                        key: {
                            name: 'x_264938_prism_transactions'
                            element: 'response_status'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'b7e1e6c5837b4714027aa6d0deaad34f'
                        key: {
                            name: 'x_264938_prism_field_maps'
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
                        table: 'sys_dictionary'
                        id: 'ba3c0fdd690243648e3756281d0bdc9b'
                        key: {
                            name: 'x_264938_prism_rules'
                            element: 'external_path'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bbe1e6c5837b4714027aa6d0deaad38d'
                        key: {
                            sys_ui_section: 'b7e1e6c5837b4714027aa6d0deaad34f'
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bda0e605837b4714027aa6d0deaad389'
                        key: {
                            sys_ui_section: '886e5ffc832f8390027aa6d0deaad380'
                            element: 'name'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bdedb5e84aed457fad13074ba0a69498'
                        key: {
                            name: 'x_264938_prism_transactions'
                            element: 'state'
                            value: 'received'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bfe1e6c5837b4714027aa6d0deaad38b'
                        key: {
                            sys_ui_section: 'b7e1e6c5837b4714027aa6d0deaad34f'
                            element: 'external_path'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c144bdbe832b83d0027aa6d0deaad372'
                        key: {
                            sys_ui_section: '8d44bdbe832b83d0027aa6d0deaad361'
                            element: '.split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c544bdbe832b83d0027aa6d0deaad370'
                        key: {
                            sys_ui_section: '8d44bdbe832b83d0027aa6d0deaad361'
                            element: 'error_message'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c65f0410259f46ce80d5791c73d2cb15'
                        key: {
                            name: 'x_264938_prism_field_maps'
                            element: 'endpoint'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c944bdbe832b83d0027aa6d0deaad36e'
                        key: {
                            sys_ui_section: '8d44bdbe832b83d0027aa6d0deaad361'
                            element: 'received_at'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c944bdbe832b83d0027aa6d0deaad375'
                        key: {
                            sys_ui_section: '8d44bdbe832b83d0027aa6d0deaad361'
                            element: 'target_table'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ca6a14caf320459492523a87b0c8484c'
                        key: {
                            name: 'x_264938_prism_field_maps'
                            element: 'local_field'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cd44bdbe832b83d0027aa6d0deaad373'
                        key: {
                            sys_ui_section: '8d44bdbe832b83d0027aa6d0deaad361'
                            element: 'response_status'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd38d36c795124dcfbc1062c19d927a90'
                        key: {
                            name: 'x_264938_prism_field_maps'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd453bba0464b409d8ba394982535feb2'
                        key: {
                            name: 'x_264938_prism_rules'
                            element: 'external_path'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd537b3a6b9ad40f8ac9699143c548808'
                        key: {
                            name: 'x_264938_prism_endpoint'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd8be323213da44309c7e1f844f3fe804'
                        key: {
                            name: 'x_264938_prism_transactions'
                            element: 'state'
                            value: 'failed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'e5a45b9583730b14027aa6d0deaad3e0'
                        key: {
                            name: 'x_264938_prism_rules'
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
                        table: 'sys_documentation'
                        id: 'e6a8596ed4a34ca0991e3df55327bcce'
                        key: {
                            name: 'x_264938_prism_endpoint'
                            element: 'direction'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ef3f7d2bad61472bac6b64f53757f4e3'
                        key: {
                            name: 'x_264938_prism_transactions'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f2464e7737cb4dcfb142d064618706a6'
                        key: {
                            name: 'x_264938_prism_endpoint'
                            element: 'direction'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'f278cd596f06415b89dc049c02113d31'
                        key: {
                            name: 'x_264938_prism_field_maps'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f322520bd8aa4000949cad7f04de10d5'
                        key: {
                            name: 'x_264938_prism_endpoint'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'faeb5add837bc714027aa6d0deaad363'
                        key: {
                            sys_ui_section: '886e5ffc832f8390027aa6d0deaad380'
                            element: 'local_table'
                            position: '2'
                        }
                    },
                ]
            }
        }
    }
}
