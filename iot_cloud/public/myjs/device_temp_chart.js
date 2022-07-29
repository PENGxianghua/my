function devcie_temp_chart(device_temp_ele_id1,device_temp_ele_id2) {
  this.device1_temp_Chart = echarts.init(document.getElementById(device_temp_ele_id1));
  this.device1_temp_color = '#FD7347';
  this.device1_temp_option = {
  series: [
      {
      type: 'gauge',
      center: ['50%', '60%'],
      startAngle: 200,
      endAngle: -20,
      min: 0,
      max: 60,
      splitNumber: 12,
      itemStyle: {
          color: this.device1_temp_color
      },
      progress: {
          show: true,
          width: 10
      },
      pointer: {
          show: false
      },
      axisLine: {
          lineStyle: {
          width: 10
          }
      },
      axisTick: {
          distance: -20,
          splitNumber: 5,
          lineStyle: {
          width: 2,
          color: '#999'
          }
      },
      splitLine: {
          distance: -25,
          length: 12,
          lineStyle: {
          width: 3,
          color: '#999'
          }
      },
      axisLabel: {
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
          offsetCenter : [0, '60%'],
          textStyle:{
              color:this.device1_temp_color
          }
      },
      detail: {
          valueAnimation: true,
          width: '60%',
          lineHeight: 40,
          borderRadius: 8,
          offsetCenter: [0, '-15%'],
          fontSize: 20,
          fontWeight: 'bolder',
          formatter: '{value} °C',
          color: 'auto'
      },
      data: [
          {
              value: '20',
              name:'设备1'
          }
      ]
      }
  ]
  };
  this.device1_temp_Chart.setOption(this.device1_temp_option);

  this.device2_temp_Chart = echarts.init(document.getElementById(device_temp_ele_id2));
  this.device2_temp_color = '#4DE3E7';
  this.device2_temp_option = {
    series: [
        {
        type: 'gauge',
        center: ['50%', '60%'],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 60,
        splitNumber: 12,
        itemStyle: {
            color: this.device2_temp_color
        },
        progress: {
            show: true,
            width: 10
        },
        pointer: {
            show: false
        },
        axisLine: {
            lineStyle: {
            width: 10
            }
        },
        axisTick: {
            distance: -20,
            splitNumber: 5,
            lineStyle: {
            width: 2,
            color: '#999'
            }
        },
        splitLine: {
            distance: -25,
            length: 12,
            lineStyle: {
            width: 3,
            color: '#999'
            }
        },
        axisLabel: {
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
            offsetCenter : [0, '60%'],
            textStyle:{
                color:this.device2_temp_color
            }
        },
        detail: {
            valueAnimation: true,
            width: '60%',
            lineHeight: 40,
            borderRadius: 8,
            offsetCenter: [0, '-15%'],
            fontSize: 20,
            fontWeight: 'bolder',
            formatter: '{value} °C',
            color: 'auto'
        },
        data: [
            {
                value: 40,
                name:'设备2'
            }
        ]
        }
    ]
    };
    this.device2_temp_Chart.setOption(this.device2_temp_option);
};