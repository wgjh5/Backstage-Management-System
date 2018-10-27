jQuery(function($){
    
    $fileNode = $("#file1");
    var data = new FormData();

    $fileNode.on("change",function(){
        $("#dndArea").addClass("element-invisible");
        $(".statusBar").css('display','block');
            // $("#title").on("blur",function(){
            //      $($fileNode[0].files).each(function(idx,item){
            //        data.append($("#title").val(),item);
            //         console.log(item);

            //         deletes();
            //      })
         $($fileNode[0].files).each(function(idx,item){
                   data.append($("#title").val(),item);
                    console.log(item);

                    // deletes();
                 })
            // })
            // console.log($("#file1"))
            // $("#file1").on("click",function(){
            //     $($fileNode[0].files).each(function(idx,item){
            //        data.append($("#title").val(),item);
            //         console.log(item);

            //         // deletes();
            //      })
            // })
           
     
       
        $(".filelist").prepend(`<li class="WU_FILE_0"><img src="" alt="" width="150" height="149"></li>`);
      
        $(".filelist li:first-child").find("img").attr("src",URL.createObjectURL($(this)[0].files[0]));
        $(".info").text("选中"+$(".WU_FILE_0").length+"图片");

        // ===================================
      

                  deletes();
        
   
            
        })
// ===============================
            $("#file2").on("change",function(){
             $(".filelist").prepend(`<li class="WU_FILE_0"><img src="" alt="" width="150" height="149"></li>`);

        $(".filelist li:first-child").find("img").attr("src",URL.createObjectURL($(this)[0].files[0]));
         data.append($("#title").val(),$("#form-article-add")[0]);
        $(".info").text("选中"+$(".WU_FILE_0").length+"图片");
        
              
             // $("#title").on("blur",function(){
             //    $($("#file2")[0].files).each(function(idx,item){
             //        data.append($("#title").val(),item);
             //        console.log(item);
                    
             //     })
             // deletes(); 
             // })
                 
    
                 deletes();    

           
        })
 // $($fileNode[0].files).each(function(idx,item){
 //                   data.append($("#title").val(),item);
 //                    console.log(item);

 //                    // deletes();
                 // })
 $(".uploadBtn").click(function(){
                     deletes();
                
                     $($("#file2")[0].files).each(function(idx,item){
                    data.append($("#title").val(),item);
                    console.log(item);
                    
                 })

                     data.append("price",$(".jiage").val());
                     data.append("neirong",$(".textarea").val());
                     // console.log($(".jiage").val());
                     // console.log($(".textarea").val());
                     $.ajax({
                        type:"post",
                        data: data,
                            
                        url:"http://localhost:3000/tesy/uploads",
                        processData: false,
                        contentType: false,
                        async:true,
                        success:function(data){
                            console.log(data)
                        }
                    });
                   
                })
 // ===========删除
        function deletes(){
    $(".filelist li").find("img").on("click",function(){
    data.delete($("#title").val());
    $("#title").val("");
    $(".info").text("选中0张图片")
    $(this).closest('li').remove();
    })
}

$(".btn-default").click(function(){
    console.log(666)
    // window.open('imgGl.html');
    $("body").empty();
    $("body").append(`<div id="iframe_box" class="Hui-article">
        <div class="show_iframe">
            <div style="display:none" class="loading"></div>
            <iframe scrolling="yes" frameborder="0" src="imgGl.html" ></iframe>
    </div>
</div>`);
    // ;
})
})