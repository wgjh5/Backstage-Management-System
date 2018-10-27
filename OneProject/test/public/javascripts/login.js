jQuery(function($) {
    $repassword = $("#userepwd");
    $s0 = $(".s0");
    $s1 = $(".s1");
    $s2 = $(".s2");
    $btn = $("#button");
    $("#username").blur(function() {
        $_nickname = $("#username").val().trim();
        if ($_nickname == "") {
            $s0.text("用户名不能为空");
            return;
        } else if ($_nickname !== "") {

            $s0.text("");

        }
        qingqiu();
        $(".s1").text("");
        $("#userpwd").blur(function() {

            if ($("#userpwd").val() == "") {
                $(".s1").text("密码不能为空");
                return;
            } else if ($("#userpwd").val() != "") {
                $(".s1").text("");
            }
            ercimima();



        });

    });

    function ercimima() {
        $repassword.blur(function() {
            $_repassword = $repassword.val();
            if ($_repassword != $("#userpwd").val()) {
                $s2.text("您两次密码输入的不一致");
                return;
            } else if ($_repassword == $("#userpwd").val()) {

                $s2.text("");
            }
        })
    }

    function qingqiu() {
        $.ajax({
            url: "http://localhost:3000/tesr/login",
            type: 'post',
            data: {
                nickname: $_nickname
            },
            success: function(data) {
                if (data == "true") {
                    $s0.text("您的用户名已经被占用");
                    return;
                } else if (data == "false" && $_nickname != "") {
                    $s0.text("用户名正确");
                    zhuce();

                }
                // console.log(data);
            }
        });

    }
    console.log($btn);

    function zhuce() {



        $btn.on("click", function() {
            $_nickname = $("#username").val();
            $_password = $("#userpwd").val();
            // console.log($_nickname);
            //  console.log($_password);
            $.ajax({
                url: "http://localhost:3000/tesr/login1",
                type: 'POST',
                data: {
                    nickname: $_nickname,
                    password: $_password
                },
                success: function(data) {
                        if (data == "true" && $_password == $repassword.val()) {
                            console.log(data);
                            // location.href="index.html"
                            // window.open('login_model.html');
                            alert("注册成功");
                        }
                    }
                    // console.log(data);
            })
        })
    }
})