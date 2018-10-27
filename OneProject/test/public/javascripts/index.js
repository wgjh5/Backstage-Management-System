jQuery(function($){
    $("#min_title_list").append(`<li class="active">
                    <span title="我的桌面" data-href="index2.html">我的桌面</span>
                
                    <em></em>
                </li>`);
    $("#menu-article").click(function(){
         $(this).find("dt").toggleClass('selected');
         $(this).find("dd").slideToggle();
       
    })
     $("#menu-article").find("dd ul").click(function(){
    $(".show_iframe").find('iframe').attr("src","zixun.html");
     event.stopPropagation();
})
// ====================================
$("#menu-picture").find("dd ul li").click(function(){
    $(".show_iframe").find('iframe').attr("src","imgGl.html");
$("#min_title_list").append(`<li >
                    <span title="图片管理" data-href="imgGl.html">图片管理</span>
                    <i></i>
                    <em></em>
                </li>`);
$("#min_title_list li").removeClass("active");
$("#min_title_list li:last-child").addClass("active");
     event.stopPropagation();
})

// ========


function dianji(){
    console.log(666);
    $(".btn-primary").attr("href","addPicture.html");
    
    }

$(".dropDown").on("mouseover",function(){
    $(this).addClass("open");
})
$(".dropDown").on("mouseout",function(){
    $(this).removeClass("open");
})
    $("#menu-picture").click(function(){
         $(this).find("dt").toggleClass('selected');
         $(this).find("dd").slideToggle();
         

    })
    // $("#min_title_list li:last-child").addClass("active");
// ===========================
    $("#menu-product").click(function(){
         $(this).find("dt").toggleClass('selected');
         $(this).find("dd").slideToggle();
    })
     $("#menu-product").find("dd ul li:first-child").click(function(){
    $(".show_iframe").find('iframe').attr("src","bianji.html");
    $("#min_title_list").append(`<li >
                    <span title="图片管理" data-href="imgGl.html">产品管理</span>
                    <i></i>
                    <em></em>
                </li>`);
    $("#min_title_list li").removeClass("active");
    $("#min_title_list li:last-child").addClass("active");
     event.stopPropagation();
})
    $("#menu-product").find("dd ul li:last-child").click(function(){
    $(".show_iframe").find('iframe').attr("src","imgGl.html");
     event.stopPropagation();
})
// ===================================
 $("#menu-comments").click(function(){
         $(this).find("dt").toggleClass('selected');
         $(this).find("dd").slideToggle();
    })
 $("#menu-comments").find("dd ul li:last-child").click(function(){
    $(".show_iframe").find('iframe').attr("src","pinglun.html");
    $("#min_title_list").append(`<li >
                    <span title="评论列表" data-href="pinglun.html">评论列表</span>
                    <i></i>
                    <em></em>
                </li>`);
    $("#min_title_list li").removeClass("active");
    $("#min_title_list li:last-child").addClass("active");
     event.stopPropagation();
})
 // ==========================
  $("#menu-member").click(function(){
         $(this).find("dt").toggleClass('selected');
         $(this).find("dd").slideToggle();
    })
  $("#menu-member").find("dd ul li:first-child").click(function(){
    $(".show_iframe").find('iframe').attr("src","huiyuan.html");
     event.stopPropagation();
})
  // ====================================
   $("#menu-admin").click(function(){
         $(this).find("dt").toggleClass('selected');
         $(this).find("dd").slideToggle();
    })
   $("#menu-admin").find("dd ul li:first-child").click(function(){
    $(".show_iframe").find('iframe').attr("src","huiyuan.html");
     event.stopPropagation();
})
   $("#menu-admin").find("dd ul li:last-child").click(function(){
    $(".show_iframe").find('iframe').attr("src","jsList.html");
    $("#min_title_list").append(`<li >
                    <span title="管理员列表" data-href="jsList.html">管理员列表</span>
                    <i></i>
                    <em></em>
                </li>`);
     $("#min_title_list li").removeClass("active");
    $("#min_title_list li:last-child").addClass("active");
     event.stopPropagation();
})

   // ==================================
    $("#menu-system").click(function(){
         $(this).find("dt").toggleClass('selected');
         $(this).find("dd").slideToggle();
    })

    
console.log($(".yanse li:first-child"));
console.log( $(".n0"));
$(".yanse li:first-child").on("click",function(){
    $(".navbar-fixed-top").css({"background": "#333"});
})

$(".yanse li:nth-child(2)").on("click",function(){
    $(".navbar-fixed-top").css({"background": "#2d6dcc"});
})
$(".yanse li:nth-child(3)").on("click",function(){
    $(".navbar-fixed-top").css({"background": "#19a97b"});
})

$(".yanse li:nth-child(4)").on("click",function(){
    $(".navbar-fixed-top").css({"background": "#c81623"});
})

$(".yanse li:nth-child(5)").on("click",function(){
    $(".navbar-fixed-top").css({"background": "#ffd200"});
})

$(".yanse li:nth-child(6)").on("click",function(){
    $(".navbar-fixed-top").css({"background": "#ff4a00"});
})


$(".pngfix").click(function(){
    $("body").toggleClass("big-page");
    $("pngfix").toggleClass("open");
})
   $("#min_title_list").on("click","li",function(){
    
    $(".show_iframe").find('iframe').attr("src",$(this).find("span").attr("data-href"));
    $(this).addClass("active");
    $(this).siblings().removeClass('active');
    // event.stopPropagation();
})
$("#min_title_list").on("click","i",function(){
    console.log($(this));
    console.log($(this).parent())
    $A = $(this).parent().parent();
    console.log($A)
    $A.find($(this).parent()).remove();
    console.log($("#min_title_list li:last-child").find("span").attr("data-href"));
     $(".show_iframe").find('iframe').attr('src',$("#min_title_list li:last-child").find("span").attr("data-href"));

     // event.stopPropagation();
     if( $(".show_iframe").find('iframe').attr("src") == $("#min_title_list li:last-child").find("span").attr("data-href")){
        $("#min_title_list li:last-child").addClass("active");
     } 
     return false;
   // $("#min_title_list").remove($(this).parent()); 
})

 



})