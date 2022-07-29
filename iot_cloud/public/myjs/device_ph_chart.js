function device_ph_chart(device_ph_ele_id1,device_ph_ele_id2){
    this.device1_ph_Chart = echarts.init(document.getElementById(device_ph_ele_id1));
    this.device1_ph_option = {
        series: [
            {
            type: 'gauge',
            center: ['50%', '45%'],
            startAngle: 270,
            endAngle: -90,
            min: 0,
            max: 200,
            splitNumber: 10,
            itemStyle: {
                color: '#FD7347'
            },
            progress: {
                show: false,
                width: 10
            },
            pointer: {
                show: false
            },
            axisLine: {
                show:true,
                lineStyle: {
                    width: 10,
                    color: [[1, '#FD7347']]
                }
            },
            axisTick: {
                show:false,
                distance: -20,
                splitNumber: 5,
                lineStyle: {
                width: 2,
                color: '#999'
                }
            },
            splitLine: {
                show:false,
                distance: -25,
                length: 12,
                lineStyle: {
                width: 3,
                color: '#999'
                }
            },
            axisLabel: {
                show:false,
                distance: -18,
                color: '#999',
                fontSize: 12
            },
            anchor: {
                show: false
            },
            title: {
                show: true,
                textAlign: "center",
                offsetCenter : [0, '50%'],
                textStyle:{color:'#FD7347'}
            },
            detail: {
                valueAnimation: true,
                width: '60%',
                lineHeight: 40,
                borderRadius: 8,
                offsetCenter: [0, '-15%'],
                fontSize: 20,
                fontWeight: 'bolder',
                formatter: '{value}',
                color: '#FD7347'
            },
            data: [
                {
                    value: 103,
                    name:'数据1'
                }
            ]
            }
        ]
    };
    this.device1_ph_Chart.setOption(this.device1_ph_option);
    
    this.device2_ph_Chart = echarts.init(document.getElementById(device_ph_ele_id2));
    this.device2_ph_option = {
    series: [
        {
        type: 'gauge',
        center: ['50%', '45%'],
        startAngle: 270,
        endAngle: -90,
        min: 0,
        max: 200,
        splitNumber: 10,
        itemStyle: {
            color: '#4DE3E7'
        },
        progress: {
            show: false,
            width: 10
        },
        pointer: {
            show: false
        },
        axisLine: {
            show:true,
            lineStyle: {
                width: 10,
                color: [[1, '#4DE3E7']]
            }
        },
        axisTick: {
            show:false,
            distance: -20,
            splitNumber: 5,
            lineStyle: {
            width: 2,
            color: '#999'
            }
        },
        splitLine: {
            show:false,
            distance: -25,
            length: 12,
            lineStyle: {
            width: 3,
            color: '#999'
            }
        },
        axisLabel: {
            show:false,
            distance: -18,
            color: '#999',
            fontSize: 12
        },
        anchor: {
            show: false
        },
        title: {
            show: true,
            textAlign: "center",
            offsetCenter : [0, '50%'],
            textStyle:{color:'#4DE3E7'}
        },
        detail: {
            valueAnimation: true,
            width: '60%',
            lineHeight: 40,
            borderRadius: 8,
            offsetCenter: [0, '-15%'],
            fontSize: 20,
            fontWeight: 'bolder',
            formatter: '{value}',
            color: '#4DE3E7'
        },
        data: [
            {
                value: 77,
                name:'数据2'
            }
        ]
        }
    ]
    };
    this.device2_ph_Chart.setOption(this.device2_ph_option);
}