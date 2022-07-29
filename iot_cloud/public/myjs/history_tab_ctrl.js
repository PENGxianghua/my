function history_get(data, item) {
    var result;
    $.ajax({
        type: 'POST',
        url: "http://47.113.223.102:20201/v4/restful",
        data: { type: "get_his", version: "dg.01", rid: 1, para: JSON.stringify({ 'limits': data, 'items': item }) },
        success: function (data, textStatus) {
            if (data.error_code != 0) {
                alert('刷新历史数据失败');
                return;
            }
            result = data.result.data;
            console.log(data.result.data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert('历史数据接口网络或服务器错误');
            console.log("errorThrown=", errorThrown)
        },
        dataType: "json",
        async: false
    })
    return result;
}

function history_tab_ctrl(input_daterange_id, div_history_ele_id, div_history_tbl_id, search_btn_id, item) {
    var time_data = moment().format('YYYY-MM-DD');
    $('#' + input_daterange_id).daterangepicker({
        singleDatePicker: true,
        opens: 'right', //日期选择框的弹出位置  
        buttonClasses: ['btn btn-default'],
        applyClass: 'btn-small btn-primary blue',
        cancelClass: 'btn-small',
        separator: ' to ',
        locale: {
            applyLabel: '确定',
            cancelLabel: '取消',
            fromLabel: '起始时间',
            toLabel: '结束时间',
            customRangeLabel: '手动选择',
            daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
            monthNames: ['一月', '二月', '三月', '四月', '五月', '六月',
                '七月', '八月', '九月', '十月', '十一月', '十二月'
            ],
            format: 'YYYY-MM-DD', //控件中from和to 显示的日期格式  
            firstDay: 1
        }
    }, function (start, end, label) {
        console.log("选择了一个新的日期: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
        time_data = start.format('YYYY-MM-DD');
    }
    );

    $('#' + search_btn_id).click(function (e) {
        console.log('搜索按钮按下');
        history_tab_data(div_history_ele_id, div_history_tbl_id, time_data, item);
    });
    history_tab_data(div_history_ele_id, div_history_tbl_id, time_data, item)
}

function history_tab_data(div_history_ele_id, div_history_tbl_id, time_data, item) {
    this.history_Chart = echarts.init(document.getElementById(div_history_ele_id));
    this.history_hours = [];
    this.history_values = [];
    this.history_tbl_datas = [];
    var history_result = [];
    history_result = history_get(time_data, item);
   
    console.log(Object.keys(history_result).length)
    for (var i = 0; i < Object.keys(history_result).length; i++) {
        this.history_hours.push(i);
        this.history_values.push(history_result[i]);
        this.history_tbl_datas.push({ id: i, time: time_data + ' ' + i + ':00', data: history_result[i] });
        
    }

    this.history_chart_option = {
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: this.history_hours,
            boundaryGap: false,
            axisLine:{
                lineStyle:{
                    color:"#d1d1d1",
                }
            },
            
        },
        yAxis: {
            type: 'value',
            splitNumber: 3,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#d1d1d1' 
                }
            },
            axisLine:{
                lineStyle:{
                    color:"#d1d1d1",
                }
            },
        },
        series: [
            {
                data: this.history_values,
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        color: '#4c6ef5', //改变折线点的颜色
                        lineStyle: {
                            color: '#4c6ef5', //改变折线颜色
                            width: 3
                        }
                    }
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: 'rgba(58,77,233,0.8)'
                      },
                      {
                        offset: 1,
                        color: 'rgba(58,77,233,0.3)'
                      }
                    ])
                  },
            }
        ],
        grid: {
            top: 10,    //距离容器上边界40像素
            bottom: 20,   //距离容器下边界30像素
            right: 5,
            left: 25
        }
    };
    this.history_Chart.setOption(this.history_chart_option);

    this.history_table = $("#" + div_history_tbl_id);
    this.jsgridOption = {
        width: "101%",
        height: "18em",
        // autoload:   true,
        sorting: false,
        paging: false,
        pageSize: 10,
        pageButtonCount: 5,
        pageIndex: 1,
        pageLoading: true,

        // rowDoubleClick: function(item){
        //   DetailRequestParam = {};
        //   DetailRequestParam["detailsId"] = item['item']['id'];
        //   $.get(
        //           "/tourist-spot-details/details-request",
        //           DetailRequestParam,
        //           function(data,status){
        //             window.open("/pages/detail.html");
        //           });

        // },

        fields: [
            { name: "id", title: "#", type: "number", width: 30, visible: true,align: 'center'},
            { name: "time", title: "时间", type: "text", width: 150, align: 'center' },
            { name: "data", title: "数据", type: "number", width: 150, align: 'center' },

        ],
        data: this.history_tbl_datas

    }
    this.history_table.jsGrid(this.jsgridOption);
}