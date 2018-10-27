jQuery(function($){
     $.ajax({
            type:"get",
            // data:{id:$id},
                
            url:"http://localhost:3000/tese/bianji",
            // processData: false,
            // contentType: false,
            async:true,
            success:function(data){
              if(data.list.length>8){
                 data.list = data.list.slice(0, 8);
              }
               
                $(data.list).each(function(idx,item){
                       console.log(item._id);
                       console.log(item.imgsrc);
                       $c = ".."+(item.imgsrc).slice(10, -1)+"g";
                       console.log($c);
                       console.log(item.title);
                       console.log(item.price);
                       render($(".list0"));
                       render($(".list1"));
                       render($(".list2"));
                       render($(".list3"));
                       render($(".list4"));
                       render($(".list5"));
                       render($(".list6"));
                       render($(".list7"));
                       render($(".list8"));
                       render($(".list9"));
                       render($(".list10"));
                       render($(".list11"));
                       render($(".list12"));
                       render($(".list13"));
                       render($(".list14"));
                       render($(".list15"));
                       render($(".list16"));
                       render($(".list17"));
                       render($(".list18"));
                       render($(".list19"));
                       render($(".list20"));
                       function render($a){
                        // $a = $(".list0");
                            $a.append(`<a href="#" data-itemid="${item._id}" class="j_ItemInfo">
                          <div class="wrap">
                            <img src="${$c}" alt="" width="160" height="160">
                            <h3>清脆多汁</h3>
                            <p class="title">${item.title}</p>
                            <p class="o-price">
                              <i class="yen">¥</i>31.8</p>
                            <p class="price">
                              <i class="yen">¥</i>
                              <span class="j_CurPrice">${item.price}</span></p>
                            <button class="j_AddCart ui-cart chaoshi-font" data-itemid="${item._id}" >㑶</button>
                            <i class="product-mask"></i>
                          </div>
                        </a>`);
                       }
                      
                        // render(item);
                    })

            }
        });

// =====================================
$(".j_Li").mouseover(function(){
    $(this).addClass("selected");
    $(".j_NavBg").css("visibility","visible");
    // $(".j_NavBg").css("height","1px");
    $(".j_CatPopup").css("display","block");
    $(".subview").addClass("selected");

})

$(".j_Li").mouseout(function(){
    $(this).removeClass("selected");
     $(".j_CatPopup").css("display","none");
})



})