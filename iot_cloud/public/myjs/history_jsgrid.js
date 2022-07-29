function history_jsgrid(div_history_tbl_id){
    $("#"+div_history_tbl_id).jsGrid({
        width: "100%",
        height: "auto",
        // autoload:   true,
        sorting: false,
        paging:     true,
        pageSize:   10,
        pageButtonCount: 5,
        pageIndex:  1,
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
          { name: "id",  type: "number", width: 50 , visible: true},
          { name: "time", title:"时间", type: "text", width: 150 },
          { name: "temp1", title:"数据1", type: "number", width: 100 },
          { name: "temp2", title:"数据2", type: "number", width: 100 },
          
        ],

        controller:{
          loadData: function(filter) {
            // touristSpotGridFiler['pageSize'] = filter['pageSize'];
            // touristSpotGridFiler['pageIndex'] = filter['pageIndex'];
            // if (typeof(filter["sortField"]) == "undefined"){
            //   touristSpotGridFiler["sortField"] = "name";
            //   touristSpotGridFiler["sortOrder"] = "asc";
            // }
            // else{
            //   touristSpotGridFiler["sortField"] = filter["sortField"];
            //   touristSpotGridFiler["sortOrder"] = filter["sortOrder"];
            // }
            return $.ajax({
              url: "/asset/jsgrid/demos/testdata.js",
              dataType: "json",
              //data: touristSpotGridFiler,
            });
          }
        },
      });
}