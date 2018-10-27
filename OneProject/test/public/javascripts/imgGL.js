 function dianji() {
   $(".btn-primary").attr("href", "addPicture.html");

 }

 // =====================================================
 xuanran();

 function xuanran() {


   $.ajax({
     type: "get",
     // data: d,

     url: "http://localhost:3000/tese/bianji",
     processData: false,
     contentType: false,
     async: true,
     beforeSend: function(XMLHttpRequest) {

       $("#loading").html("<img src='../images/loading-b.gif' />"); //
     },

     success: function(data) {
       console.log(data)
         // $("body").removeClass("tb");
         // $("tbody").empty();
       $("#loading").empty();
       // $(".tbody").empty();
       $(data.list).each(function(idx, item) {

         render(item);
       })

       // ===========删除单个文件============
       $(".del").click(function() {
                    
        $imgsrc = $(this).closest('.odd').find('td').find(".picture-thumb").attr("src");
        $imgsrc = $imgsrc.slice(2);
        $imgsrc = "public"+$imgsrc;
        console.log($imgsrc);
         $id = $(this).closest('.odd').find('.sorting_1').text();

         $(this).parent().parent().remove();
         del1();



       })
       $checkBox = $(":checkbox").not("#all");

       $("#all").on("click", function() {
         $checkBox.prop("checked", this.checked);
         // changeCheckAll();
         yuxing();
       })
       $checkBox.on("click", function() {
         changeCheckAll();
       })

       function quanxuan() {
         $.ajax({
           type: "post",
           // data:{id:$id},

           url: "http://localhost:3000/tese/dels",
           // processData: false,
           // contentType: false,
           async: true,
           success: function(data) {
             console.log(data);
           }
         });
       }

       function changeCheckAll() {
         $checkeds = $checkBox.filter(":checked").not("#all");
         console.log($checkeds.closest('.odd').find('.sorting_1').text());
         $id = $checkeds.closest('.odd').find('.sorting_1').text();
         del1();
         if ($checkeds.length == $checkBox.length) {
           $("#all")[0].checked = true;

         } else {
           $("#all")[0].checked = false;

         }
       }

       // =======批量删除
       function yuxing() {
         $("#dels").on("click", function() {
           $checkBox.filter(":checked").not("#all").parent().parent().remove();
           if ($checkBox.filter(":checked").not("#all").length == $checkBox.length) {
             quanxuan();
           }
           // quanxuan();
         })
       }
       yuxing();

     }
   });
 }

 function del1() {
   $.ajax({
     type: "post",
     data: {
       id: $id,
       imgsrc:$imgsrc
     },

     url: "http://localhost:3000/tese/del",
     // processData: false,
     // contentType: false,
     async: true,
     success: function(data) {
       console.log(data);

     }
   });
 }

 function render(item) {

   $a = item.imgsrc.slice(6, -1);
   var c = ".." + $a + "g";
   console.log(c);

   // console.log(item.id);
   $("tbody").append(` 
        
              <tr class="text-c odd" role="row">
                <td>
                  <input name="" type="checkbox" checked value=""></td>
                <td class="sorting_1">${item._id}</td>
                <td>分类名称</td>
                <td>
                  <a href="javascript:;" >
                    <img  class="picture-thumb" src="${c}" width="150" height="150"></a>
                </td>
                <td class="text-l">
                  <a class="maincolor" href="javascript:;" >${item.title}</a></td>
                <td class="text-c">${item.price}</td>
                <td>2014-6-11 11:11:42</td>
                <td class="td-status">
                  <span class="label label-success radius">已发布</span></td>
                <td class="td-manage">
                  <a style="text-decoration:none"  href="javascript:;" title="下架">
                    <i class="Hui-iconfont"></i></a>
                  <a style="text-decoration:none" class="ml-5 gai"    title="编辑">
                    <i class="Hui-iconfont"></i></a>
                  <a style="text-decoration:none" class="ml-5 del"  href="javascript:;" title="删除">
                    <i class="Hui-iconfont"></i></a>
                </td>
              </tr>
            `)

   // ==============================
   $(".gai").on("click", function() {

     $id = $(this).closest('.odd').find('.sorting_1').text();
     $("body").empty();
     $("body").append(`<div class="page-container">
    <form class="form form-horizontal" id="form-article-add">
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-2">
            <span class="c-red">*</span>图片标题：</label>
            <div class="formControls col-xs-8 col-sm-9">
                <input type="text" class="input-text" value="" placeholder="" id="title" name="">
            </div>
        </div>
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-2">价格：</label>
            <div class="formControls col-xs-8 col-sm-9">
                <input type="text" class="input-text jiage" value="" placeholder="" id="" name="">
            </div>
        </div>
     
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-2">图片摘要：</label>
            <div class="formControls col-xs-8 col-sm-9">
                <textarea name="" cols="" rows="" class="textarea" placeholder="说点什么...最少输入10个字符" datatype="*10-100" dragonfly="true" nullmsg="备注不能为空！" ></textarea>
                <p class="textarea-numberbar"><em class="textarea-length">0</em>/200</p>
            </div>
        </div>
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-2">图片上传：</label>
            <div class="formControls col-xs-8 col-sm-9">
                <div class="uploader-list-container"> 
                    <div class="queueList">
                        <div id="dndArea" class="placeholder">
                            <div id="filePicker-2" class="webuploader-container"><div class="webuploader-pick">点击选择图片</div><div id="rt_rt_1cqb98mf3c1ufio1t941vi8154q6" style="position: absolute; top: 20px; left: 0px; width: 168px; height: 44px; overflow: hidden; bottom: auto; right: auto;"><input type="file" name="file" class="webuploader-element-invisible file"  id="file1" multiple="multiple"><label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);"></label></div></div>
                            <p>或将照片拖到这里，单次最多可选300张</p>
                        </div>
                    <ul class="filelist">
                        
                    </ul></div>
                    <div class="statusBar" style="display:none;">
                        <div class="progress" style="display: none;"> <span class="text">0%</span> <span class="percentage" style="width: 0%;"></span> </div>
                        <div class="info">共0张（0B），已上传0张</div>
                        <div class="btns">
                            <div id="filePicker2" class="webuploader-container"><div class="webuploader-pick">继续添加</div>
                            <div id="rt_rt_1cqb98mf41g7714jgt421najc8j9" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; bottom: auto; right: auto;">
                            <input type="file" name="file" class="webuploader-element-invisible file"  id="file2" multiple="multiple"><label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);"></label></div></div>
                            <div class="uploadBtn state-pedding">开始上传</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row cl">
            <div class="col-xs-8 col-sm-9 col-xs-offset-4 col-sm-offset-2">
                <button  class="btn btn-default radius" type="button">&nbsp;&nbsp;取消&nbsp;&nbsp;</button>
            </div>
        </div>
    </form>
</div>`);

     // ======================
     $fileNode = $("#file1");
     var data = new FormData();

     $fileNode.on("change", function() {
         $("#dndArea").addClass("element-invisible");
         $(".statusBar").css('display', 'block');



         $(".filelist").prepend(`<li class="WU_FILE_0"><img src="" alt="" width="150" height="149"></li>`);

         $(".filelist li:first-child").find("img").attr("src", URL.createObjectURL($(this)[0].files[0]));
         $(".info").text("选中" + $(".WU_FILE_0").length + "图片");
       })
       // shengcheng();
       // shengcheng2();
     $("#file2").on("change", function() {
       $(".filelist").prepend(`<li class="WU_FILE_0"><img src="" alt="" width="150" height="149"></li>`);

       $(".filelist li:first-child").find("img").attr("src", URL.createObjectURL($(this)[0].files[0]));
       data.append($("#title").val(), $("#form-article-add")[0]);
       $(".info").text("选中" + $(".WU_FILE_0").length + "图片");



       deletes();


     })

     // =============================


     //=============================================
     $(".uploadBtn").click(function() {
       $($fileNode[0].files).each(function(idx, item) {
         data.append($("#title").val(), item);
         console.log(item);

         deletes();
       })

       $($("#file2")[0].files).each(function(idx, item) {
         data.append($("#title").val(), iteminput - text);
         console.log(item);

       })
       console.log($id);
       deletes();
       data.append("id", $id);
       data.append("price", $(".jiage").val());
       data.append("neirong", $(".textarea").val());

       $.ajax({
         type: "post",
         data: data,

         url: "http://localhost:3000/tese/gai",
         processData: false,
         contentType: false,
         async: true,
         success: function(data) {
           console.log(data)
         }
       });

     })

   })

   


   // ========================================

   function deletes() {
     $(".filelist li").find("img").on("click", function() {
       data.delete($("#title").val());
       $("#title").val("");
       $(".info").text("选中0张图片")
       $(this).closest('li').remove();
     })
   }



   // =================



 }


 // ==================查找

 $("#cha").click(function() {
   $(".tbody").empty();
   if ($(".sousuo")[0].value == "") {
     xuanran();
   }
   console.log($(".sousuo"));
   $.ajax({
     type: "post",
     data: {
       title: $(".sousuo").val()
     },

     url: "http://localhost:3000/tese/find",
     // processData: false,
     // contentType: false,
     // async:true,
     beforeSend: function(XMLHttpRequest) {

       $("#loading").html("<img src='../images/loading-b.gif' />"); //
     },
     success: function(data) {
       $("#loading").empty();
       console.log(data)
       $(data.list).each(function(idx, item) {
         console.log(item);
         render(item);
       })
     }
   });
 })

 // =================================


 // e:\OneProject\传文件

 //删除文件函数
   //  deleteFile("E:/h5lianxi/11.txt");
   //       function  deleteFile(name) {     
   //   var  fso = new ActiveXObject("Scripting.FileSystemObject");     
   //   if (fso.FileExists(name))      fso.DeleteFile(name);     
   //   else      return  false;   
   // }
//    $a = .646
// fs.unlink('index.txt',function(error){
//     if(error){
//         console.log(error);
//         return false;
//     }
//     console.log('删除文件成功');
// })