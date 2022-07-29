function device_yulv_chart(device_yulv_ele_id1,device_yulv_ele_id2){
    this.device1_yulv_Chart = echarts.init(document.getElementById(device_yulv_ele_id1));
    this.device1_yulv_color = 'rgb(200, 230, 0)';
    this.device1_yulv_option = {
        series: [{
            type: 'liquidFill',
            name: '设备1',
            amplitude: '3%',
            data: [0.33],
            shape: 'container',
            color: [this.device1_yulv_color],
            label: {
                color:'white',
                fontSize: 20,
                formatter: function(param) {
                    return param.seriesName + '\n\n'
                            + param.value;
                },
                // align:'center',
                // baseline:'top',
                position:['70%', '60%']
            },
            outline: {
                show: true,
                itemStyle:{borderColor:this.device1_yulv_color}
            },
            backgroundStyle: {
                color: 'gray'
            }
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    this.device1_yulv_Chart.setOption(this.device1_yulv_option);

    this.device2_yulv_Chart = echarts.init(document.getElementById(device_yulv_ele_id2));
    this.device2_yulv_color = '#DE1111';
    this.device2_yulv_option = {
        series: [{
            type: 'liquidFill',
            name: '设备2',
            amplitude: '3%',
            data: [0.65],
            shape: 'container',
            color: [this.device2_yulv_color],
            label: {
                color:'white',
                fontSize: 20,
                formatter: function(param) {
                    return param.seriesName + '\n\n'
                            + param.value;
                },
                // align:'center',
                position:['70%', '60%']
            },
            outline: {
                show: true,
                itemStyle:{borderColor:this.device2_yulv_color}
            },
            backgroundStyle: {
                color: 'gray'
            }
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    this.device2_yulv_Chart.setOption(this.device2_yulv_option);

}
