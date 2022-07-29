function confirmDlg(modal_ele_id,confirm_text_ele_id,confirm_btn_id){
    this.modal_ele_id = modal_ele_id;
    this.confirm_text_ele_id = confirm_text_ele_id;
    this.confirm_btn_id = confirm_btn_id;
    confirmOrNot = false;//确认对话框确认结果标识
    callbackfunc = null;
    $("#"+confirm_btn_id).click(function(){
        confirmOrNot = true;
        $('#'+modal_ele_id).modal('hide');
        callbackfunc(confirmOrNot);
    });
    this.popupConfirm = function(confirm_text,callbackfunc1){
        confirmOrNot = false;
        callbackfunc = callbackfunc1;
        $('#'+confirm_text_ele_id).text(confirm_text);
        $('#'+modal_ele_id).modal();
    }
    this.confirmResult = function(){
        return confirmOrNot;
    }
    
}