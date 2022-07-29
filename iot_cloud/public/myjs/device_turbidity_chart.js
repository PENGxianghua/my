function device_turbidity_chart(device_turbidity_ele_id){
    
    this.turbidity_Chart = echarts.init(document.getElementById(device_turbidity_ele_id));
    this.turbidity_hours = [];
    this.turbidity_input = [];
    this.turbidity_output1 = [];
    this.turbidity_output2 = [];

    for(var i=0;i<25;i++){
        this.turbidity_hours.push(i);
        this.turbidity_input.push(10);
        this.turbidity_output1.push(10);
        this.turbidity_output2.push(10);
    }

    this.turbidity_chart_option = {
        xAxis: {
            type: 'category',
            data: this.turbidity_hours
            },
        yAxis: {
            type: 'value',
            splitNumber: 3,
            splitLine: {
                show: false
            }
        },
        legend: {
            data: ['进口', '中部', '出口'],
            textStyle: {
                color: "0fa7dd"
            },
            x: 'center'
        },
        series: [
            {
                name: '进口',
                color: "#fe00d4",
                data: this.turbidity_input,
                type: 'line',
                smooth: true
            },
            {
                name: '中部',
                color: "#fecf00",
                data: this.turbidity_output1,
                type: 'line',
                smooth: true
            },
            {
                name: '出口',
                color: "#fe8700",
                data: this.turbidity_output2,
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
    this.turbidity_Chart.setOption(this.turbidity_chart_option);
    this.update_data = function(jinkou,zhongbu,chukou){
        this.turbidity_input.push(jinkou);
        this.turbidity_output1.push(zhongbu);
        this.turbidity_output2.push(chukou);
        this.turbidity_input.shift();
        this.turbidity_output1.shift();
        this.turbidity_output2.shift();
        this.turbidity_chart_option.series[0].data=this.turbidity_input;
        this.turbidity_chart_option.series[1].data=this.turbidity_output1;
        this.turbidity_chart_option.series[2].data=this.turbidity_output2;
        this.turbidity_Chart.setOption(this.turbidity_chart_option);
    }
}