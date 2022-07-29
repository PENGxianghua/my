function devcie_liquid_level_chart(device_liquid_ele_id) {
    this.device1_liquid_level_Chart = echarts.init(document.getElementById(device_liquid_ele_id));
    this.device1_liquid_level_color = '#A21111';
    this.device1_liquid_level_option = {
        series: [{
            type: 'liquidFill',
            radius:'95%',
            data: [0.5],
            shape: 'circle',
            color: [this.device1_liquid_level_color],
            label: {
                color:'white',
                fontSize: 20,
                // align:'center',
                position:['50%', '30%']
            },
            outline: {
                show: true,
                itemStyle:{
                    borderColor:this.device1_liquid_level_color,
                    borderWidth:5
                }
            },
            backgroundStyle: {
                color: 'gray'
            },
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    this.device1_liquid_level_Chart.setOption(this.device1_liquid_level_option);
}