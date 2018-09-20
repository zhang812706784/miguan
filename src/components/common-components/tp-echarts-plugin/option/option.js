import echarts from 'echarts';

const option = {

    // 单条线趋势图
    line_old: {
        title: {
            text: '',
            textStyle: {
                fontSize: 14,
                fontWeight: 400,
                color: '#fff'
            }
        },
        backgroundColor: 'rgba(0,0,0,0)',
        tooltip: {
            trigger: 'axis',
            formatter: function (params) {
                return new Date(params[0].value[0]) + ':' + params[0].value[1];
            },
            axisPointer: {
                animation: false
            }
        },
        grid: {
            left: '3%',
            right: '3%',
            top: '15%',
            bottom: '6%',
            containLabel: true
        },
        textStyle: {
            fontSize: '14',
            fontWeight: 'normal',
            color: '#888'
        },
        xAxis: {
            type: 'time',
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    // color: 'rgba(0,0,0,.6)'
                    color: '#534E55'
                }
            }
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    // color: 'rgba(0,0,0,.6)'
                    color: '#534E55'
                }
            },
            axisLabel: {}
        },
        series: [{
            name: '',
            type: 'line',
            showSymbol: false,
            smooth: true,
            hoverAnimation: false,
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
                normal: {
                    lineStyle: {
                        color: {
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: 'rgba(249, 102, 44, .5)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(104, 122, 244, .5)'
                                }
                            ],
                            globalCoord: false
                        }
                    }
                }
            },
            areaStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(249, 102, 44, .5)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(104, 122, 244, .5)'
                            }
                        ],
                        globalCoord: false
                    }
                }
            },
            // data:[{value:[1510531200000,77]},{value:[1510531200000,77]},{value:[1510531200000,77]}],
            data: []
        }]
    },

    // 多条线趋势图(支持单条线)
    line: {
        title: {
            text: '',
            textStyle: {
                fontSize: 14,
                fontWeight: 400,
                color: '#fff'
            }
        },
        backgroundColor: 'rgba(0,0,0,0)',
        color: ['#F9662C', '#687AF4', '#478AFA', '#4C46BC', '#8045BD', '#CB66D1', '#D26585'],
        tooltip: {
            trigger: 'axis',
            position: ['15%', '16%'],
            axisPointer: {
                animation: true
            }
        },
        legend: {
            // data:['2015 降水量', '2016 降水量']
            data: [],
            // top:'5%',
            right: '1%',
            width: '75%',
            textStyle: {
                fontSize: 11,
                color: '#676269'
            },
            // 老逻辑 ！
            formatter: (strName, length) => {
                if (!strName) {
                    return strName;
                }

                let limitLength = 10;

                if (length) {
                    limitLength = length;
                }

                if (strName.length > limitLength) {
                    return strName.substr(0, limitLength) + '...';
                } else {
                    return strName;
                }
            }
        },
        grid: {
            left: '3%',
            right: '5%',
            top: '15%',
            bottom: '6%',
            containLabel: true
        },
        textStyle: {
            fontSize: '14',
            fontWeight: 'normal',
            color: '#888'
        },
        xAxis: {
            type: 'time',
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    // color: 'rgba(0,0,0,.6)'
                    color: '#534E55'
                }
            }
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    // color: 'rgba(0,0,0,.6)'
                    color: '#534E55'
                }
            },
            axisLabel: {}
        },
        // ['#F9662C', '#687AF4', '#478AFA', '#4C46BC', '#8045BD', '#CB66D1', '#D26585'],
        series: [
            {
                name: '',
                type: 'line',
                showSymbol: false,
                smooth: true,
                hoverAnimation: false,
                symbol: 'circle',
                symbolSize: 10,
                areaStyle: {
                    normal: {
                        color: ['rgb(249, 102, 44, .5)']
                    }
                },
                // data:[{value:[1510531200000,77]},{value:[1510531200000,77]},{value:[1510531200000,77]}],
                data: []
            },
            {
                name: '',
                type: 'line',
                showSymbol: false,
                smooth: true,
                hoverAnimation: false,
                symbol: 'circle',
                symbolSize: 10,
                areaStyle: {
                    normal: {
                        color: ['rgb(104, 122, 244, .5)']
                    }
                },
                // data:[{value:[1510531200000,77]},{value:[1510531200000,77]},{value:[1510531200000,77]}],
                data: []
            },
            {
                name: '',
                type: 'line',
                showSymbol: false,
                smooth: true,
                hoverAnimation: false,
                symbol: 'circle',
                symbolSize: 10,
                areaStyle: {
                    normal: {
                        color: ['rgb(71, 138, 250, .5)']
                    }
                },
                // data:[{value:[1510531200000,77]},{value:[1510531200000,77]},{value:[1510531200000,77]}],
                data: []
            },
            {
                name: '',
                type: 'line',
                showSymbol: false,
                smooth: true,
                hoverAnimation: false,
                symbol: 'circle',
                symbolSize: 10,
                areaStyle: {
                    normal: {
                        color: ['rgb(76, 70, 188, .5)']
                    }
                },
                // data:[{value:[1510531200000,77]},{value:[1510531200000,77]},{value:[1510531200000,77]}],
                data: []
            },
            {
                name: '',
                type: 'line',
                showSymbol: false,
                smooth: true,
                hoverAnimation: false,
                symbol: 'circle',
                symbolSize: 10,
                areaStyle: {
                    normal: {
                        // color: ['rgba(66,115,140,.5)']
                    }
                },
                // data:[{value:[1510531200000,77]},{value:[1510531200000,77]},{value:[1510531200000,77]}],
                data: []
            },
            {
                name: '',
                type: 'line',
                showSymbol: false,
                smooth: true,
                hoverAnimation: false,
                symbol: 'circle',
                symbolSize: 10,
                areaStyle: {
                    // normal: {
                    //     color: {
                    //         type: 'linear',
                    //         x: 0,
                    //         y: 0,
                    //         x2: 0,
                    //         y2: 1,
                    //         colorStops: [{
                    //             offset: 0,
                    //             color: 'rgba(255, 225, 0, 0.2)',
                    //         }, {
                    //             offset: 1,
                    //             color: 'rgba(255, 225, 0, 0)',
                    //         }],
                    //         globalCoord: false
                    //     },
                    // }
                },
                // data:[{value:[1510531200000,77]},{value:[1510531200000,77]},{value:[1510531200000,77]}],
                data: []
            },
            {
                name: '',
                type: 'line',
                showSymbol: false,
                smooth: true,
                hoverAnimation: false,
                symbol: 'circle',
                symbolSize: 10,
                areaStyle: {
                    normal: {
                        // color: {
                        //     type: 'linear',
                        //     x: 0,
                        //     y: 0,
                        //     x2: 0,
                        //     y2: 1,
                        //     colorStops: [{
                        //         offset: 0,
                        //         color: 'rgba(255, 225, 0, 0.2)',
                        //     }, {
                        //         offset: 1,
                        //         color: 'rgba(255, 225, 0, 0)',
                        //     }],
                        //     globalCoord: false
                        // },
                    }
                },
                // data:[{value:[1510531200000,77]},{value:[1510531200000,77]},{value:[1510531200000,77]}],
                data: []
            },
            {
                name: '',
                type: 'line',
                showSymbol: false,
                smooth: true,
                hoverAnimation: false,
                symbol: 'circle',
                symbolSize: 10,
                areaStyle: {
                    normal: {
                        // color: {
                        //     type: 'linear',
                        //     x: 0,
                        //     y: 0,
                        //     x2: 0,
                        //     y2: 1,
                        //     colorStops: [{
                        //         offset: 0,
                        //         color: 'rgba(255, 225, 0, 0.2)',
                        //     }, {
                        //         offset: 1,
                        //         color: 'rgba(255, 225, 0, 0)',
                        //     }],
                        //     globalCoord: false
                        // },
                    }
                },
                // data:[{value:[1510531200000,77]},{value:[1510531200000,77]},{value:[1510531200000,77]}],
                data: []
            },
            {
                name: '',
                type: 'line',
                showSymbol: false,
                smooth: true,
                hoverAnimation: false,
                symbol: 'circle',
                symbolSize: 10,
                areaStyle: {
                    normal: {
                        // color: {
                        //     type: 'linear',
                        //     x: 0,
                        //     y: 0,
                        //     x2: 0,
                        //     y2: 1,
                        //     colorStops: [{
                        //         offset: 0,
                        //         color: 'rgba(255, 225, 0, 0.2)',
                        //     }, {
                        //         offset: 1,
                        //         color: 'rgba(255, 225, 0, 0)',
                        //     }],
                        //     globalCoord: false
                        // },
                    }
                },
                // data:[{value:[1510531200000,77]},{value:[1510531200000,77]},{value:[1510531200000,77]}],
                data: []
            },
            {
                name: '',
                type: 'line',
                showSymbol: false,
                smooth: true,
                hoverAnimation: false,
                symbol: 'circle',
                symbolSize: 10,
                areaStyle: {
                    normal: {
                        // color: {
                        //     type: 'linear',
                        //     x: 0,
                        //     y: 0,
                        //     x2: 0,
                        //     y2: 1,
                        //     colorStops: [{
                        //         offset: 0,
                        //         color: 'rgba(255, 225, 0, 0.2)',
                        //     }, {
                        //         offset: 1,
                        //         color: 'rgba(255, 225, 0, 0)',
                        //     }],
                        //     globalCoord: false
                        // },
                    }
                },
                // data:[{value:[1510531200000,77]},{value:[1510531200000,77]},{value:[1510531200000,77]}],
                data: []
            },
            {
                name: '',
                type: 'line',
                showSymbol: false,
                smooth: true,
                hoverAnimation: false,
                symbol: 'circle',
                symbolSize: 10,
                areaStyle: {
                    normal: {
                        // color: {
                        //     type: 'linear',
                        //     x: 0,
                        //     y: 0,
                        //     x2: 0,
                        //     y2: 1,
                        //     colorStops: [{
                        //         offset: 0,
                        //         color: 'rgba(255, 225, 0, 0.2)',
                        //     }, {
                        //         offset: 1,
                        //         color: 'rgba(255, 225, 0, 0)',
                        //     }],
                        //     globalCoord: false
                        // },
                    }
                },
                // data:[{value:[1510531200000,77]},{value:[1510531200000,77]},{value:[1510531200000,77]}],
                data: []
            }
        ]
    },

    // 纵向柱状图
    bar: {
        title: {
            text: '',
            top: '5px',
            left: '5px',
            textStyle: {
                fontSize: 14,
                fontWeight: 400,
                color: '#fff'
            }
        },
        backgroundColor: 'rgba(0,0,0,0)',
        textStyle: {
            fontSize: '14',
            fontWeight: 'normal',
            color: '#888'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params) {
                return params[0].name + ':' + params[0].value;
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '7%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            // data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45'],   x轴数据
            data: [],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                interval: 0,
                rotate: 30,
                formatter: function (name) {

                    // 老代码逻辑复制来的 稍作修改 ！

                    let limitLength = 10;

                    if (name.length > limitLength) {
                        return name.substr(0, limitLength) + '...';
                    } else {
                        return name;
                    }

                }
            },
            splitLine: {
                show: false
            }
        }],
        yAxis: [{
            // type : 'category',
            // data : ['10','20','30','40'],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {},
            splitLine: {
                show: false,
                lineStyle: {}
            }
        }],
        series: [
            {
                itemStyle: {
                    normal: {

                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(104,122,244)'
                        }, {
                            offset: 1,
                            color: 'rgb(249,102,44)'
                        }]),

                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                name: '',
                type: 'bar',
                barWidth: '40%',
                barMaxWidth: 30,
                // data:["335","310","234","135", "1548"],    //Y轴数据
                data: []
            }
        ],
        label: {
            normal: {
                // show: true,
                position: 'top',
                formatter: '{c}'
            }
        }
    },

    // 横向柱状图
    crossBar: {
        title: {
            text: '',
            textStyle: {
                fontSize: 14,
                fontWeight: 400,
                color: '#fff'
            }
        },
        textStyle: {
            fontSize: '14',
            fontWeight: 'normal',
            color: '#888'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '15%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLabel: {},
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'category',
            // data: ['巴西','印尼','美国','印度','中国','世界人口(万)'],
            data: [],
            axisLabel: {},
            splitLine: {}
        },
        series: [
            {
                type: 'bar',
                name: '',
                // data: [18203, 23489, 29034, 104970, 131744, 630230],
                data: [],
                itemStyle: {
                    normal: {

                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: 'rgb(249,102,44)'
                        }, {
                            offset: 1,
                            color: 'rgb(104,122,244)'
                        }])
                    }
                }
            }
        ]

    },

    // 圆形数据展示
    circle_old: {
        series: [{
            type: 'pie',
            radius: ['70%', '71%'],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        fontSize: 18,
                        show: true,
                        position: 'center',
                        formatter: '{b}'
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            startAngle: 130,
            data: [
                {
                    name: '',    // title
                    value: 3,
                    label: {
                        normal: {
                            align: 'center',
                            fontSize: 18,
                            // fontWeight: 600,
                            color: '#fff',
                            padding: [-40, 0, 0, 0]
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,0.5)'
                        }
                    }
                },
                {
                    name: '',    // data
                    value: 1,
                    label: {
                        normal: {
                            align: 'center',
                            fontSize: 18,
                            color: '#fff',
                            padding: [40, 0, 0, 0]
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,0)'

                        }
                    }
                }
            ]
        }]
    },

    // 圆形数据展示
    circle:{
        // backgroundColor: '#2c343c',
        series: [{
            type: 'pie',
            radius: ['70%', '71%'],
            hoverAnimation: false,
            startAngle: 130,
            itemStyle: {
                normal: {
                    label: {
                        fontSize: 17,
                        show: true,
                        position: 'center',
                        formatter: '{b}'
                    },
                    labelLine: {
                        show: false
                    }
                },
            },
            data: [{
                name: '库中站点总数', //参数
                value: 3,
                label: {
                    fontSize:20,
                    color: '#fff',
                    padding: [-30, 0, 0, 0]
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(255,255,255,0.5)'
                    }
                }
            },
                {
                    name: '500220', //参数
                    value: 1,
                    label: {
                        color: '#fff',
                        padding: [0, 0, -20, 0]
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,0)'

                        }
                    }
                }
            ]
        }]
    },

    // 饼图
    pie: {
        title: {
            text: '',
            top: '5px',
            left: '5px',
            textStyle: {
                fontSize: 14,
                fontWeight: 400,
                color: '#fff',
                textAlign: 'left'
            }
        },
        color: ['#F9662C', '#687AF4', '#478AFA', '#4C46BC', '#8045BD', '#CB66D1', '#D26585'],
        backgroundColor: 'rgba(0,0,0,0)',
        tooltip: {
            trigger: 'item',
            formatter: function (params) {

                const dt = params.data;

                return `${dt.name} : ${dt.value}`;
            }
        },
        grid: {
            left: '3%',
            right: '3%',
            top: '3%',
            bottom: '30%',
            containLabel: true
        },
        // legend: {
        //     // orient: 'vertical',
        //     // top: 'middle',
        //     bottom: 5,
        //     left: 'center',
        //     data: ['西凉', '益州','兖州','荆州','幽州']
        // },
        series: [
            {
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                selectedMode: 'single',
                data: [],
                // data:[{value:335, name:'直接访问'},{value:310, name:'邮件营销'},{value:234, name:'联盟广告'},{value:135, name:'视频广告'},{value:1548, name:'搜索引擎'}],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                label: {
                    normal: {}
                }
            }
        ]
    },

    // 拓补图
    topology: {
        title: {
            // text: '网络拓扑图'
        },
        tooltip: {},
        // backgroundColor:"#1b1b1b",
        series: [{
            type: 'graph',
            legendHoverLink: true,              //是否启用图例 hover 时的联动高亮。
            layout: 'force',                    //图的布局。none不采用任何布局\circular采用环形布局\force采用力引导布局
            focusNodeAdjacency: true,          //鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点
            symbolSize: 45,
            roam: true,                         // 是否可拖动
            draggable: true,                     //节点是否可拖拽，只在使用力引导布局的时候有用
            label: {                             //   图形上的文本标签
                normal: {
                    show: true
                }
            },
            force: {                              //力引导布局相关的配置项
                repulsion: 1900,                 // 节点之间斥力
                layoutAnimation: false,         // 是否抽搐
                // gravity:0.11,                    // 重力
                edgeLength: [100, 500]            // 边长度
            },
            edgeSymbol: ['circle'],             //边两端的标记类型，可以是一个数组，也可以是一个数字circle、arrow
            edgeSymbolSize: [2, 2],             //边两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定。
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 8
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#ccc',
                    borderColor: '#1af'
                }
            },
            data: '',   //
            links: '',  //
            lineStyle: {
                normal: {
                    color: '#a8a8a8',
                    opacity: 0.6,
                    width: 1.5,
                    curveness: -0.1
                }
            }
        }]
    },

    //
    test: {
        backgroundColor: '#404a59',
        title: {
            text: '全国主要城市空气质量',
            subtext: 'data from PM25.in',
            x: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                return params.name + ' : ' + params.value[2];
            }
        },
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['pm2.5'],
            textStyle: {
                color: '#fff'
            }
        },
        visualMap: {
            min: 0,
            max: 200,
            calculable: true,
            inRange: {
                color: ['#50a3ba', '#eac736', '#d94e5d']
            },
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: 'world',
            roam: true,
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#111'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series: [
            {
                name: 'pm2.5',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: [{"name": "海门", "value": [121.15, 31.89, 9]}, {
                    "name": "鄂尔多斯",
                    "value": [109.781327, 39.608266, 12]
                }, {"name": "招远", "value": [120.38, 37.35, 12]}, {
                    "name": "舟山",
                    "value": [122.207216, 29.985295, 12]
                }, {"name": "齐齐哈尔", "value": [123.97, 47.33, 14]}, {
                    "name": "盐城",
                    "value": [120.13, 33.38, 15]
                }, {"name": "赤峰", "value": [118.87, 42.28, 16]}, {
                    "name": "青岛",
                    "value": [120.33, 36.07, 18]
                }, {"name": "乳山", "value": [121.52, 36.89, 18]}, {
                    "name": "金昌",
                    "value": [102.188043, 38.520089, 19]
                }, {"name": "泉州", "value": [118.58, 24.93, 21]}, {
                    "name": "莱西",
                    "value": [120.53, 36.86, 21]
                }, {"name": "日照", "value": [119.46, 35.42, 21]}, {
                    "name": "胶南",
                    "value": [119.97, 35.88, 22]
                }, {"name": "南通", "value": [121.05, 32.08, 23]}, {
                    "name": "拉萨",
                    "value": [91.11, 29.97, 24]
                }, {"name": "云浮", "value": [112.02, 22.93, 24]}, {
                    "name": "梅州",
                    "value": [116.1, 24.55, 25]
                }, {"name": "文登", "value": [122.05, 37.2, 25]}, {
                    "name": "上海",
                    "value": [121.48, 31.22, 25]
                }, {"name": "攀枝花", "value": [101.718637, 26.582347, 25]}, {
                    "name": "威海",
                    "value": [122.1, 37.5, 25]
                }, {"name": "承德", "value": [117.93, 40.97, 25]}, {
                    "name": "厦门",
                    "value": [118.1, 24.46, 26]
                }, {"name": "汕尾", "value": [115.375279, 22.786211, 26]}, {
                    "name": "潮州",
                    "value": [116.63, 23.68, 26]
                }, {"name": "丹东", "value": [124.37, 40.13, 27]}, {
                    "name": "太仓",
                    "value": [121.1, 31.45, 27]
                }, {"name": "曲靖", "value": [103.79, 25.51, 27]}, {
                    "name": "烟台",
                    "value": [121.39, 37.52, 28]
                }, {"name": "福州", "value": [119.3, 26.08, 29]}, {
                    "name": "瓦房店",
                    "value": [121.979603, 39.627114, 30]
                }, {"name": "即墨", "value": [120.45, 36.38, 30]}, {
                    "name": "抚顺",
                    "value": [123.97, 41.97, 31]
                }, {"name": "玉溪", "value": [102.52, 24.35, 31]}, {
                    "name": "张家口",
                    "value": [114.87, 40.82, 31]
                }, {"name": "阳泉", "value": [113.57, 37.85, 31]}, {
                    "name": "莱州",
                    "value": [119.942327, 37.177017, 32]
                }, {"name": "湖州", "value": [120.1, 30.86, 32]}, {
                    "name": "汕头",
                    "value": [116.69, 23.39, 32]
                }, {"name": "昆山", "value": [120.95, 31.39, 33]}, {
                    "name": "宁波",
                    "value": [121.56, 29.86, 33]
                }, {"name": "湛江", "value": [110.359377, 21.270708, 33]}, {
                    "name": "揭阳",
                    "value": [116.35, 23.55, 34]
                }, {"name": "荣成", "value": [122.41, 37.16, 34]}, {
                    "name": "连云港",
                    "value": [119.16, 34.59, 35]
                }, {"name": "葫芦岛", "value": [120.836932, 40.711052, 35]}, {
                    "name": "常熟",
                    "value": [120.74, 31.64, 36]
                }, {"name": "东莞", "value": [113.75, 23.04, 36]}, {
                    "name": "河源",
                    "value": [114.68, 23.73, 36]
                }, {"name": "淮安", "value": [119.15, 33.5, 36]}, {
                    "name": "泰州",
                    "value": [119.9, 32.49, 36]
                }, {"name": "南宁", "value": [108.33, 22.84, 37]}, {
                    "name": "营口",
                    "value": [122.18, 40.65, 37]
                }, {"name": "惠州", "value": [114.4, 23.09, 37]}, {
                    "name": "江阴",
                    "value": [120.26, 31.91, 37]
                }, {"name": "蓬莱", "value": [120.75, 37.8, 37]}, {
                    "name": "韶关",
                    "value": [113.62, 24.84, 38]
                }, {"name": "嘉峪关", "value": [98.289152, 39.77313, 38]}, {
                    "name": "广州",
                    "value": [113.23, 23.16, 38]
                }, {"name": "延安", "value": [109.47, 36.6, 38]}, {
                    "name": "太原",
                    "value": [112.53, 37.87, 39]
                }, {"name": "清远", "value": [113.01, 23.7, 39]}, {
                    "name": "中山",
                    "value": [113.38, 22.52, 39]
                }, {"name": "昆明", "value": [102.73, 25.04, 39]}, {
                    "name": "寿光",
                    "value": [118.73, 36.86, 40]
                }, {"name": "盘锦", "value": [122.070714, 41.119997, 40]}, {
                    "name": "长治",
                    "value": [113.08, 36.18, 41]
                }, {"name": "深圳", "value": [114.07, 22.62, 41]}, {
                    "name": "珠海",
                    "value": [113.52, 22.3, 42]
                }, {"name": "宿迁", "value": [118.3, 33.96, 43]}, {
                    "name": "咸阳",
                    "value": [108.72, 34.36, 43]
                }, {"name": "铜川", "value": [109.11, 35.09, 44]}, {
                    "name": "平度",
                    "value": [119.97, 36.77, 44]
                }, {"name": "佛山", "value": [113.11, 23.05, 44]}, {
                    "name": "海口",
                    "value": [110.35, 20.02, 44]
                }, {"name": "江门", "value": [113.06, 22.61, 45]}, {
                    "name": "章丘",
                    "value": [117.53, 36.72, 45]
                }, {"name": "肇庆", "value": [112.44, 23.05, 46]}, {
                    "name": "大连",
                    "value": [121.62, 38.92, 47]
                }, {"name": "临汾", "value": [111.5, 36.08, 47]}, {
                    "name": "吴江",
                    "value": [120.63, 31.16, 47]
                }, {"name": "石嘴山", "value": [106.39, 39.04, 49]}, {
                    "name": "沈阳",
                    "value": [123.38, 41.8, 50]
                }, {"name": "苏州", "value": [120.62, 31.32, 50]}, {
                    "name": "茂名",
                    "value": [110.88, 21.68, 50]
                }, {"name": "嘉兴", "value": [120.76, 30.77, 51]}, {
                    "name": "长春",
                    "value": [125.35, 43.88, 51]
                }, {"name": "胶州", "value": [120.03336, 36.264622, 52]}, {
                    "name": "银川",
                    "value": [106.27, 38.47, 52]
                }, {"name": "张家港", "value": [120.555821, 31.875428, 52]}, {
                    "name": "三门峡",
                    "value": [111.19, 34.76, 53]
                }, {"name": "锦州", "value": [121.15, 41.13, 54]}, {
                    "name": "南昌",
                    "value": [115.89, 28.68, 54]
                }, {"name": "柳州", "value": [109.4, 24.33, 54]}, {
                    "name": "三亚",
                    "value": [109.511909, 18.252847, 54]
                }, {"name": "自贡", "value": [104.778442, 29.33903, 56]}, {
                    "name": "吉林",
                    "value": [126.57, 43.87, 56]
                }, {"name": "阳江", "value": [111.95, 21.85, 57]}, {
                    "name": "泸州",
                    "value": [105.39, 28.91, 57]
                }, {"name": "西宁", "value": [101.74, 36.56, 57]}, {
                    "name": "宜宾",
                    "value": [104.56, 29.77, 58]
                }, {"name": "呼和浩特", "value": [111.65, 40.82, 58]}, {
                    "name": "成都",
                    "value": [104.06, 30.67, 58]
                }, {"name": "大同", "value": [113.3, 40.12, 58]}, {
                    "name": "镇江",
                    "value": [119.44, 32.2, 59]
                }, {"name": "桂林", "value": [110.28, 25.29, 59]}, {
                    "name": "张家界",
                    "value": [110.479191, 29.117096, 59]
                }, {"name": "宜兴", "value": [119.82, 31.36, 59]}, {
                    "name": "北海",
                    "value": [109.12, 21.49, 60]
                }, {"name": "西安", "value": [108.95, 34.27, 61]}, {
                    "name": "金坛",
                    "value": [119.56, 31.74, 62]
                }, {"name": "东营", "value": [118.49, 37.46, 62]}, {
                    "name": "牡丹江",
                    "value": [129.58, 44.6, 63]
                }, {"name": "遵义", "value": [106.9, 27.7, 63]}, {
                    "name": "绍兴",
                    "value": [120.58, 30.01, 63]
                }, {"name": "扬州", "value": [119.42, 32.39, 64]}, {
                    "name": "常州",
                    "value": [119.95, 31.79, 64]
                }, {"name": "潍坊", "value": [119.1, 36.62, 65]}, {
                    "name": "重庆",
                    "value": [106.54, 29.59, 66]
                }, {"name": "台州", "value": [121.420757, 28.656386, 67]}, {
                    "name": "南京",
                    "value": [118.78, 32.04, 67]
                }, {"name": "滨州", "value": [118.03, 37.36, 70]}, {
                    "name": "贵阳",
                    "value": [106.71, 26.57, 71]
                }, {"name": "无锡", "value": [120.29, 31.59, 71]}, {
                    "name": "本溪",
                    "value": [123.73, 41.3, 71]
                }, {"name": "克拉玛依", "value": [84.77, 45.59, 72]}, {
                    "name": "渭南",
                    "value": [109.5, 34.52, 72]
                }, {"name": "马鞍山", "value": [118.48, 31.56, 72]}, {
                    "name": "宝鸡",
                    "value": [107.15, 34.38, 72]
                }, {"name": "焦作", "value": [113.21, 35.24, 75]}, {
                    "name": "句容",
                    "value": [119.16, 31.95, 75]
                }, {"name": "北京", "value": [116.46, 39.92, 79]}, {
                    "name": "徐州",
                    "value": [117.2, 34.26, 79]
                }, {"name": "衡水", "value": [115.72, 37.72, 80]}, {
                    "name": "包头",
                    "value": [110, 40.58, 80]
                }, {"name": "绵阳", "value": [104.73, 31.48, 80]}, {
                    "name": "乌鲁木齐",
                    "value": [87.68, 43.77, 84]
                }, {"name": "枣庄", "value": [117.57, 34.86, 84]}, {
                    "name": "杭州",
                    "value": [120.19, 30.26, 84]
                }, {"name": "淄博", "value": [118.05, 36.78, 85]}, {
                    "name": "鞍山",
                    "value": [122.85, 41.12, 86]
                }, {"name": "溧阳", "value": [119.48, 31.43, 86]}, {
                    "name": "库尔勒",
                    "value": [86.06, 41.68, 86]
                }, {"name": "安阳", "value": [114.35, 36.1, 90]}, {
                    "name": "开封",
                    "value": [114.35, 34.79, 90]
                }, {"name": "济南", "value": [117, 36.65, 92]}, {
                    "name": "德阳",
                    "value": [104.37, 31.13, 93]
                }, {"name": "温州", "value": [120.65, 28.01, 95]}, {
                    "name": "九江",
                    "value": [115.97, 29.71, 96]
                }, {"name": "邯郸", "value": [114.47, 36.6, 98]}, {
                    "name": "临安",
                    "value": [119.72, 30.23, 99]
                }, {"name": "兰州", "value": [103.73, 36.03, 99]}, {
                    "name": "沧州",
                    "value": [116.83, 38.33, 100]
                }, {"name": "临沂", "value": [118.35, 35.05, 103]}, {
                    "name": "南充",
                    "value": [106.110698, 30.837793, 104]
                }, {"name": "天津", "value": [117.2, 39.13, 105]}, {
                    "name": "富阳",
                    "value": [119.95, 30.07, 106]
                }, {"name": "泰安", "value": [117.13, 36.18, 112]}, {
                    "name": "诸暨",
                    "value": [120.23, 29.71, 112]
                }, {"name": "郑州", "value": [113.65, 34.76, 113]}, {
                    "name": "哈尔滨",
                    "value": [126.63, 45.75, 114]
                }, {"name": "聊城", "value": [115.97, 36.45, 116]}, {
                    "name": "芜湖",
                    "value": [118.38, 31.33, 117]
                }, {"name": "唐山", "value": [118.02, 39.63, 119]}, {
                    "name": "平顶山",
                    "value": [113.29, 33.75, 119]
                }, {"name": "邢台", "value": [114.48, 37.05, 119]}, {
                    "name": "德州",
                    "value": [116.29, 37.45, 120]
                }, {"name": "济宁", "value": [116.59, 35.38, 120]}, {
                    "name": "荆州",
                    "value": [112.239741, 30.335165, 127]
                }, {"name": "宜昌", "value": [111.3, 30.7, 130]}, {
                    "name": "义乌",
                    "value": [120.06, 29.32, 132]
                }, {"name": "丽水", "value": [119.92, 28.45, 133]}, {
                    "name": "洛阳",
                    "value": [112.44, 34.7, 134]
                }, {"name": "秦皇岛", "value": [119.57, 39.95, 136]}, {
                    "name": "株洲",
                    "value": [113.16, 27.83, 143]
                }, {"name": "石家庄", "value": [114.48, 38.03, 147]}, {
                    "name": "莱芜",
                    "value": [117.67, 36.19, 148]
                }, {"name": "常德", "value": [111.69, 29.05, 152]}, {
                    "name": "保定",
                    "value": [115.48, 38.85, 153]
                }, {"name": "湘潭", "value": [112.91, 27.87, 154]}, {
                    "name": "金华",
                    "value": [119.64, 29.12, 157]
                }, {"name": "岳阳", "value": [113.09, 29.37, 169]}, {
                    "name": "长沙",
                    "value": [113, 28.21, 175]
                }, {"name": "衢州", "value": [118.88, 28.97, 177]}, {
                    "name": "廊坊",
                    "value": [116.7, 39.53, 193]
                }, {"name": "菏泽", "value": [115.480656, 35.23375, 194]}, {
                    "name": "合肥",
                    "value": [117.27, 31.86, 229]
                }, {"name": "武汉", "value": [114.31, 30.52, 273]}, {"name": "大庆", "value": [125.03, 46.58, 279]}],
                symbolSize: 12,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    emphasis: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                }
            }
        ]
    },

    // 地图默认样式
    map: {
        backgroundColor: 'rgba(36,37,51,0)', /* 背景颜色,也是水的颜色  rgba(36,37,51,0)【透明色】  #FFFFFF */
        title: {
            text: '',
            left: 'center',
            textStyle: {
                color: '#fff',  // '#fff'
                fontSize: 14,
                fontWeight: 400,
                textAlign: 'left'
            }
        },
        tooltip: {
            trigger: 'item',
            // formatter: '{c}',
            position: ['50%', 0]// 相对位置放在容器正中间
        },
        geo: {
            /* 地图 */
            name: 'Enroll distribution',
            map: 'world',
            roam: true,
            top: '25%',
            label: {
                emphasis: {
                    show: false
                }
            },
            /* 项目风格 */
            itemStyle: {
                normal: {
                    areaColor: '#141c39', /* 陆地颜色  #1b1b1b  #e9e9e9【灰色】 */
                    // areaColor: '#A0A1AC', /*陆地颜色  #1b1b1b  #e9e9e9【灰色】*/
                    borderWidth: 1,
                    borderColor: '#336fa6'/* 陆地边界颜色  rgba(30,144,255,0.5) */
                },
                emphasis: {
                    // areaColor: '#858691',  //陆地颜色  #1b1b1b  #e9e9e9【灰色】#011B34
                    areaColor: '#1f396d'  // 陆地颜色  #1b1b1b  #e9e9e9【灰色】#011B34
                    // areaColor: 'red'
                }
            }
        },
        /* 颜色范围变化 */
        dataRange: {
            // show:true,
            min: 0,
            max: 10000,
            calculable: true, // 显示的颜色是否根据数值大小变化
            // selectedMode:false,//是否在颜色范围柱图显示对应的颜色
            // color: ['#f22f2f', '#eae826', '#22dd4e','#2642e9'], //['red', 'orange', 'yellow','lime','aqua']
            color: ['#870404', '#f22f2f', '#eae826', '#22dd4e'], // ['red', 'orange', 'yellow','lime','aqua']

            textStyle: {
                /* 文本字体颜色 */
                color: '#000000'  // #fff
            },
            itemHeight: 100,
            itemWidth: 10
        },

        /* 属性系列参数 */
        series: [
            /* 线系列参数 */
            {
                type: 'lines',
                zlevel: 1, /* 图的层次 */
                /* 颜色范围变化 */

                /* 动态箭头 */
                effect: {
                    show: true,
                    scaleSize: 1,
                    period: 4, /* 间隔多长时间动一次 */
                    symbol: 'arrow', /* 动态箭头 */
                    symbolSize: 5, /* 动态箭头大小 */
                    color: '#30cbb6' /* 动态箭头颜色  #fff */
                    // shadowBlur: 10 /*透明度*/
                },
                symbol: ['none', 'arrow'], /* 线的样式箭头展现 */
                symbolSize: 1, /* 线的样式箭头大小 */
                /* 线参数 */
                lineStyle: {
                    normal: {
                        type: 'solid', // dotted
                        color: '#30cbb6', /* 线的颜色   #FFB973 */
                        width: 1, /* 线的宽度 */
                        // opacity: 0.1,/*阴影效果*/
                        symbol: 'arrow', /* 线两端的样式箭头 */
                        curveness: -0.1, /* 弧度 */
                        lineJoin: 'arrow' /* 两线的交叉点 */
                        // shadowBlur: 100  /*透明度*/
                    }
                },
                /* 线末尾数值参数 */
                label: {
                    normal: {
                        show: false,
                        position: 'end', /* 数值 */
                        formatter: '{c}', /**/
                        padding: 5/* 数值与位置的距离 */
                    }
                },
                silent: false,
                /* 确定线两端的地理位置经纬度 */
                data: ''
            }

            /* 散射效果系列参数 */
            // {
            // type: 'effectScatter',
            // coordinateSystem: 'geo',
            // zlevel: 1,
            //
            // // effectType:"ripple",
            // // showEffectOn:"render",
            // rippleEffect: {
            // period: 1,  /*散射频率*/
            // scale: 2,/*散射大小*/
            //
            // brushType: 'stroke',
            // },
            // //地名显示
            // label: {
            // normal: {
            // show: false,
            // 	position: 'top',
            // 			color:"#333333",
            // 			formatter: '{b}'
            // 		}
            // 	},
            // 	itemStyle: {
            // 		normal: {
            // 			color: '#f4e925',
            // 			shadowBlur: 10,
            // 			// opacity:5,
            // 			shadowColor: '#333'
            // 		}
            // 	},
            // 	silent:false,
            // 	data: ""
            // }
        ]
    },

    // 中国GEO地图 (可拓展省市绘画)
    ECSOptionMap: {
        // backgroundColor: '#404a59',
        // backgroundColor: 'rgba(255,255,255,.1)',
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                return params.name + ' : ' + params.value[2];
            }
        },
        geo: {
            map: undefined,
            zoom: 1.2,
            // roam: true,
            label: {
                show: true,
                textStyle: {
                    fontSize: 12,
                    color: '#111'
                },
                emphasis: {
                    color: '#8aa5c3'
                }
            },
            itemStyle: {
                normal: {
                    // areaColor: '#323c48',
                    areaColor: 'rgba(50,60,72, .5)',
                    borderColor: '#111'
                },
                emphasis: {
                    // areaColor: '#2a333d'
                    areaColor: 'rgba(17,17,17, .5)'
                }
            }
        },
        series: [
            // {
            //     name: '气泡',
            //     type: 'scatter',
            //     coordinateSystem: 'geo',
            //     symbol: 'pin',
            //     zlevel: 6,
            //     symbolSize: 38,
            //     label: {
            //         normal: {
            //             show: true,
            //             formatter: '{@[2]}',
            //             textStyle: {
            //                 color: '#fff',
            //                 fontSize: 13
            //             }
            //         }
            //     },
            //     itemStyle: {
            //         normal: {
            //             // color: '#F62157'  //标志颜色
            //             color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
            //                 {offset: 0, color: '#8A00FF'},
            //                 {offset: 1, color: '#4189F6'}
            //             ])
            //         }
            //     }
            //     // data: []
            // },
            {
                name: '散点图',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                hoverAnimation: false,
                legendHoverLink: false,
                zlevel: 1,
                rippleEffect: {
                    period: 4,
                    brushType: 'stroke',
                    scale: 9
                },
                symbolSize: 10,
                // symbolSize: function (val) {
                //     if (val[2] <= 100) {
                //         return 4
                //     }
                //     if (val[2] > 100 && val[2] <= 200) {
                //         return 8
                //     }
                //     if (val[2] > 200 && val[2] <= 300) {
                //         return 12
                //     }
                //     if (val[2] > 300 && val[2] <= 400) {
                //         return 16
                //     }
                //     if (val[2] > 400 && val[2] <= 500) {
                //         return 20
                //     }
                //     if (val[2] > 500) {
                //         return 24
                //     }
                // },
                data: [],
                itemStyle: {
                    normal: {
                        color: '#5599E4'
                    }
                }
            }
        ]
    }
};

export default option;