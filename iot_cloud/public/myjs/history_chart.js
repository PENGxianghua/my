function history_chart(div_history_ele_id){
    this.history_Chart = echarts.init(document.getElementById(div_history_ele_id));
    this.history_hours = [];
    this.history_values = [];
    for(var i=1;i<25;i++){
        this.history_hours.push(i);
        this.history_values.push(Math.random() * 20);
    }

    this.history_chart_option = {
        xAxis: {
            type: 'category',
            data: this.history_hours
        },
        yAxis: {
            type: 'value',
            splitNumber: 3,
            splitLine: {
                show: true
            }
        },
        series: [
            {
                data: this.history_values,
                type: 'line',
                smooth: true,
                itemStyle : { 
                    normal : { 
                        color:'#000000', //改变折线点的颜色
                        lineStyle:{
                            color:'#E4F6D4' //改变折线颜色
                        } 
                    } 
                },
 
            }
        ],
        grid : {
            top : 10,    //距离容器上边界40像素
            bottom: 20,   //距离容器下边界30像素
            right: 5,
            left: 25
        }
    };
    this.history_Chart.setOption(this.history_chart_option);
}