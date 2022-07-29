var index = 3;
var time_n = 0;
var interval = null;
function login_submit() {
    console.log("按钮按下")
    var user = my_input.user.value;
    var pwd = my_input.pwd.value;
    document.getElementById("login_push").disabled = false;
    if (index >= 1) {
        $.ajax({
            type: 'POST',
            url: "http://47.113.223.102:20201/v4/restful",
            data: { type: "login", version: "dg.01", rid: 1, para: JSON.stringify({ 'username': user, 'password': pwd }) },
            success: function (data, textStatus) {
                if (data.error_code != 0) {
                    document.warm_show.innerHTML = "";//清空了所在页面
                    var otext = document.createElement("p");//创建input控件
                    otext.setAttribute("id", "login_show");//设置控件类型
                    document.warm_show.appendChild(otext);//将控件添加到form节点子节点后面
                    document.getElementById('login_show').innerHTML = '账号或密码错误，你还可以尝试' + index + '次'
                    index -= 1;
                    return;
                }
                else if (data.result.login == 'success') {
                    console.log('登录成功')
                    document.warm_show.innerHTML = "";//清空了所在页面
                    window.location.href = "http://127.0.0.1:5000/index.html"
                }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert('网络或服务器错误');
                console.log("errorThrown=", errorThrown);

            },
            dataType: "json",
            async: false
        })
    }
    else {
        time_n = 60;
        document.getElementById("login_push").disabled = true;
        interval = window.setInterval(btnShow, 1000);

    }
}

function btnShow() {
    time_n--;
    if (time_n <= 0) {
        document.getElementById("login_push").disabled = false;
        document.warm_show.innerHTML = "";//清空了所在页面
        window.clearInterval(interval)
        index = 3;
        console.log(time_n)
    }
    else {
        document.warm_show.innerHTML = "";//清空了所在页面
        var otext = document.createElement("p");//创建input控件
        otext.setAttribute("id", "login_show");//设置控件类型
        document.warm_show.appendChild(otext);//将控件添加到form节点子节点后面
        document.getElementById('login_show').innerHTML = '请' + time_n + '秒后重试'
    }
}

var off_flag = false; //当值变为true时，后台强制关闭程序
window.onblur = function (e) {   // 监测窗口是否激活，当鼠标离开窗口时，后台关闭程序
    off_flag = true;
}