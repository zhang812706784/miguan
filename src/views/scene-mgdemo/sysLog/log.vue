<style lang="less">

</style>

<template>

    <div>
        <Tabs value="t0">
            <TabPane v-for='(tab,index) in tabs' :label="tab.logname" :name="'t'+index">
                <tp-table :ref="'logTable'+ index" :all_params="all_params[index]"></tp-table>
            </TabPane>
           <!-- <TabPane label="标签二" name="name2">标签二的内容</TabPane>
            <TabPane label="标签三" name="name3">标签三的内容</TabPane>-->
        </Tabs>



    </div>

</template>

<script>
    import TpTable from "../../../components/locale-components/tp-table/tp-table";

    export default {
        components: {TpTable},
        data: function () {
            return {
                tabs: [],
                all_params: []
                /* all_params: {
                    id: 'group_tab',
                    index: true,
                    loading: true,
                    checkBox: true,
                    url: '/apis/api/user/list',
                    type: 'table',
                    ajaxType: 'get',
                    data: {
                        /!* index: "asset",
                        type: "group" *!/
                    },
                    cols: [
                        {
                            title: '姓名',
                            key: 'username'
                        },
                        {
                            title: '权限',
                            key: 'auth',
                            render: (h, params) => {
                                let auth = '';
                                switch (params.row.auth) {
                                    case 1:
                                        auth = '只读权限';
                                        break;
                                    case 2:
                                        auth = '读写权限';
                                        break;
                                    default:
                                        auth = '无权限';
                                        break;

                                }

                                return h('div', auth);
                            }
                        }
                        /!* {
                            title: '责任人',
                            key: 'responser'
                        },
                        {
                            title: '邮箱',
                            key: 'email'
                        },
                        {
                            title: 'IP范围',
                            key: 'ipScope'
                        },
                        {//lyn新增
                            title: '采集频率',
                            render: (h, params) => {
                                return h('div', '1分钟/次')
                            }
                        },
                        {
                            title: '备注',
                            key: 'remark'
                        }, *!/
                        /!* {
                            title: '操作',
                            key: '操作',
                            width: 150,
                            align: 'center',
                            render: (h, params) => {
                                return h('div', [
                                    h('Button', {
                                        props: {
                                            type: 'warning',
                                            size: 'small'
                                        },
                                        on: {
                                            click: () => {
                                                this.formItem= {
                                                    id: params.row.id,
                                                    groupName: params.row.groupName,
                                                    ipProperty: params.row.ipProperty,
                                                    responser: params.row.responser,
                                                    email: params.row.email,
                                                    ipScope: params.row.ipScope,
                                                    remark:params.row.remark
                                                }
                                                this.title="修改"
                                                this.isShow =true;
                                            }
                                        }
                                    }, '修改')
                                ]);
                            }
                        } *!/
                    ]
                } */
            };
        },
        methods: {
        },
        mounted () {
            this.$http.get('/apis/api/log/info').then(res => {
                this.tabs = res.data;
                this.tabs.forEach((item, index) => {
                    let cols = item.keys.map((key) => {
                        return {
                            title: key,
                            /*key: key,*/
                            ellipsis: true,
                            render: (h, params) => {
                                if (params.row._source[key]) {
                                    let str1 = params.row._source[key].substring(0, 30);
                                    return h('div', {
                                        domProps: {
                                            title: params.row._source[key]
                                        }
                                    }, str1 + '...');
                                }
                                /*return h('div', JSON.stringify(params.row._source[key]));*/
                            }
                        };
                    });
                    let obj = {
                        id: `group_tab${index}`,
                        index: true,
                        loading: true,
                        checkBox: true,
                        url: `/apis${item.url}`,
                        type: 'table',
                        ajaxType: 'get',
                        data: {
                            /* index: "asset",
                            type: "group" */
                        },
                        cols: cols
                        /* [
                            {
                                title: '姓名',
                                key: 'username'
                            },
                            {
                                title: '权限',
                                key: 'auth',
                                render: (h, params) => {
                                    let auth = '';
                                    switch (params.row.auth) {
                                        case 1:
                                            auth = '只读权限';
                                            break;
                                        case 2:
                                            auth = '读写权限';
                                            break;
                                        default:
                                            auth = '无权限';
                                            break;

                                    }

                                    return h('div', auth);
                                }
                            }
                            ] */
                    };
                    this.all_params.push(obj);
                    console.log(this.all_params);
                });
                /*this.all_params: {
                    id: 'group_tab',
                        index: true,
                        loading: true,
                        checkBox: true,
                        url: '/apis/api/user/list',
                        type: 'table',
                        ajaxType: 'get',
                        data: {
                        /!* index: "asset",
                        type: "group" *!/
                    },
                    cols: [
                        {
                            title: '姓名',
                            key: 'username'
                        },
                        {
                            title: '权限',
                            key: 'auth',
                            render: (h, params) => {
                                let auth = '';
                                switch (params.row.auth) {
                                    case 1:
                                        auth = '只读权限';
                                        break;
                                    case 2:
                                        auth = '读写权限';
                                        break;
                                    default:
                                        auth = '无权限';
                                        break;

                                }

                                return h('div', auth);
                            }
                        }
                        /!* {
                            title: '责任人',
                            key: 'responser'
                        },
                        {
                            title: '邮箱',
                            key: 'email'
                        },
                        {
                            title: 'IP范围',
                            key: 'ipScope'
                        },
                        {//lyn新增
                            title: '采集频率',
                            render: (h, params) => {
                                return h('div', '1分钟/次')
                            }
                        },
                        {
                            title: '备注',
                            key: 'remark'
                        }, *!/
                        /!* {
                            title: '操作',
                            key: '操作',
                            width: 150,
                            align: 'center',
                            render: (h, params) => {
                                return h('div', [
                                    h('Button', {
                                        props: {
                                            type: 'warning',
                                            size: 'small'
                                        },
                                        on: {
                                            click: () => {
                                                this.formItem= {
                                                    id: params.row.id,
                                                    groupName: params.row.groupName,
                                                    ipProperty: params.row.ipProperty,
                                                    responser: params.row.responser,
                                                    email: params.row.email,
                                                    ipScope: params.row.ipScope,
                                                    remark:params.row.remark
                                                }
                                                this.title="修改"
                                                this.isShow =true;
                                            }
                                        }
                                    }, '修改')
                                ]);
                            }
                        } *!/
                    ]
                }*/
            });
        }
    }
</script>
