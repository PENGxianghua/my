function device_flow_chart(device_flow_ele_id){
    this.flow_Chart = echarts.init(document.getElementById(device_flow_ele_id));
    this.flow_hours = [];
    this.flow_input = [];
    this.flow_output1 = [];
    this.flow_output2 = [];
    for(var i=0;i<25;i++){
        this.flow_hours.push(i);
        this.flow_input.push(10);
        this.flow_output1.push(10);
        this.flow_output2.push(10);
    }

    this.flow_chart_option = {
        xAxis: {
            type: 'category',
            data: this.flow_hours,
            axisLine: {
                show: true,    // 是否显示坐标轴轴线
                symbol: ['none', 'none'],     // 轴线两端箭头，两个值，none表示没有箭头，arrow表示有箭头
                symbolSize: [10, 15],     // 轴线两端箭头大小，数值一表示宽度，数值二表示高度
                lineStyle: {
                    color: '#00d9fe',    // 坐标轴线线的颜色
                    width: '1',    // 坐标轴线线宽
                    type: 'solid',     // 坐标轴线线的类型（'solid'，实线类型；'dashed'，虚线类型；'dotted',点状类型）
                },
            },
        },
        yAxis: {
            type: 'value',
            splitNumber: 3,
            splitLine: {
                show: false
            },
            axisLine: {
                show: true,    // 是否显示坐标轴轴线
                symbol: ['none', 'none'],     // 轴线两端箭头，两个值，none表示没有箭头，arrow表示有箭头
                symbolSize: [10, 15],     // 轴线两端箭头大小，数值一表示宽度，数值二表示高度
                lineStyle: {
                    color: '#00d9fe',    // 坐标轴线线的颜色
                    width: '1',    // 坐标轴线线宽
                    type: 'solid',     // 坐标轴线线的类型（'solid'，实线类型；'dashed'，虚线类型；'dotted',点状类型）
                },
            },
        },
        legend: {
            data: ['进水量', '出水量1', '出水量2'],
            textStyle: {
                color: "0fa7dd"
            },
            x: 'center'
        },
        series: [
            {
                name: '进水量',
                color: "#fe00d4",
                data: this.flow_input,
                type: 'line',
                smooth: true
            },
            {
                name: '出水量1',
                color: "#fecf00",
                data: this.flow_output1,
                type: 'line',
                smooth: true
            },
            {
                name: '出水量2',
                color: "#fe8700",
                data: this.flow_output2,
                type: 'line',
                smooth: true
            }
        ],
        grid : {
            top : 8,    //距离容器上边界40像素
            bottom: 35,   //距离容器下边界30像素
            right: 0,
            left: 22
        }
    };
    this.flow_Chart.setOption(this.flow_chart_option);
    this.update_data = function(jinshuiliang,chushuiliang1,chushuiliang2){
        this.flow_input.push(jinshuiliang);
        this.flow_output1.push(chushuiliang1);
        this.flow_output2.push(chushuiliang2);
        this.flow_input.shift();
        this.flow_output1.shift();
        this.flow_output2.shift();
        this.flow_chart_option.series[0].data=this.flow_input;
        this.flow_chart_option.series[1].data=this.flow_output1;
        this.flow_chart_option.series[2].data=this.flow_output2;
        this.flow_Chart.setOption(this.flow_chart_option);
    }
}