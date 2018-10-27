jQuery(function($) {
    $("#button").click(function() {
        $_nickname = $("#username").val();
        $_password = $("#userpwd").val();

        $(".Hui-aside").attr("display", "block");
        // console.log($_nickname);
        //  console.log($_password);
        $.ajax({
            url: "http://localhost:3000/tesr/denglu",
            type: 'POST',
            data: {
                nickname: $_nickname,
                password: $_password
            },
            success: function(data) {
                    if (data == "true" && $_password == $("#userpwd").val()) {
                        $.cookie("username", $_nickname, {
                            path: '/'
                        });
                        window.open('index1.html');
                        // $("button").attr("href","index1.html");
                    } else if (data == "fail") {
                        alert("账号或密码错误");
                    }
                }
                // console.log(data);
        })
    })
})