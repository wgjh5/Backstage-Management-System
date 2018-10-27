jQuery(function($){
       if($.cookie("username") != null){
          var uname = $.cookie("username");
          $(".unm").text(uname);
            $(".yi").text(uname);
          $(".qiehuan").on("click",function(){
                 $(".qiehuan").children().attr("href","index.html");
                // $(".unm").text(uname);
                // $view.children().remove();
                $.cookie("username",null,{expires: -1,path:"/"});
               // preve();
                
            })
           $tuichu = $(".tuichu");
            $tuichu.on("click",function(){
                 $tuichu.children().attr("href","index.html");
                // $(".unm").text(uname);
                // $view.children().remove();
                $.cookie("username",null,{expires: -1,path:"/"});
               // preve();
                
            })
            
    }
})