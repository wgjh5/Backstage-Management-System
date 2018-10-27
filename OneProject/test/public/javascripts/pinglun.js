jQuery(function($) {
      render();

      function render() {



        $.ajax({
          type: "get",
          url: "http://localhost:3000/tese/pinglun",
          // processData: false,
          // contentType: false,
          async: true,
          beforeSend: function(XMLHttpRequest) {

            $("#loading").html("<img src='../images/loading-b.gif' />"); //
          },
          success: function(data) {
            $("#loading").empty();
            console.log(data)
            $(data.list).each(function(idx, item) {


              $("tbody").append(`<tr class="text-c odd" role="row">
                    <td><input type="checkbox" checked value="1" name=""></td>
                    <td class="sorting_1">${item._id}</td>
                    <td><a href="javascript:;" ><i class="avatar size-L radius"><img alt="" src="../images/avatar-default-S.gif"></i></a></td>
                    <td class="text-l"><div class="c-999 f-12">
                            <u style="cursor:pointer" class="text-primary">${item.name}</u> <time title="2014年8月31日 下午3:20" datetime="2014-08-31T03:54:20">2014-8-31 15:20</time> <span class="ml-20">13000000000</span> <span class="ml-20">${item.email}</span></div>
                            <div class="f-12 c-999"><a >
                        <div>${item.message}</div></td>
                    <td class="td-manage"><a title="编辑" href="javascript:;" style="text-decoration:none"><i class="Hui-iconfont"></i></a> <a title="删除" href="javascript:;"  class="ml-5 del" style="text-decoration:none"><i class="Hui-iconfont"></i></a></td>
                </tr>`);

            });
            shanchu();
          }
        })
      }

      function shanchu() {


        $(".del").click(function() {
          $id = $(this).closest('.odd').find('.sorting_1').text();
          $(this).parent().parent().remove();
          del1();
          // render();
        })


        $checkBox = $(":checkbox").not("#all");
        $("#all").on("click", function() {
          $checkBox.prop("checked", this.checked);
          yuxing();
        })
        $checkBox.on("click", function() {
          changeCheckAll();
        })

        function quanxuan() {
          $.ajax({
            type: "post",
            url: "http://localhost:3000/tese/delsPL",
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

        function yuxing() {
          $(".dels").on("click", function() {
            $checkBox.filter(":checked").not("#all").parent().parent().remove();
            if ($checkBox.filter(":checked").not("#all").length == $checkBox.length) {
              quanxuan();

            }
            // render();
          })
        }
        yuxing();

        function del1() {
          $.ajax({
            type: "post",
            data: {
              id: $id
            },
            url: "http://localhost:3000/tese/delPL",
            async: true,
            success: function(data) {
              console.log(data);
            }
          });
        }

      }
    })

      // =================
    