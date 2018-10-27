jQuery(function($) {
  render1();

  function render1() {
    $(".guanli").empty();

    $.ajax({
      type: "post",
      // data:{nickname:$(".sousuo").val()},

      url: "http://localhost:3000/tesr/guanList",
      beforeSend: function(XMLHttpRequest) {

        $("#loading").html("<img src='../images/loading-b.gif' />"); //
      },
      success: function(data) {
        $("#loading").empty();
        rr(data);


        // ======================================

      }

    });
  }

  function del1() {
    $.ajax({
      type: "post",
      data: {
        id: $id
      },

      url: "http://localhost:3000/tese/del0",
      // processData: false,
      // contentType: false,
      async: true,

      success: function(data) {

        console.log(data);
      }
    });
  }

  $("#cha").click(function() {
      $(".guanli").empty();
      if ($(".sousuo")[0].value == "") {
        // $(".guanli").empty();
        render1();
      }
      console.log($(".sousuo"));
      $.ajax({
        type: "post",
        data: {
          nickname: $(".sousuo").val()
        },
        beforeSend: function(XMLHttpRequest) {

          $("#loading").html("<img src='../images/loading-b.gif' />"); //
        },
        url: "http://localhost:3000/tese/finds",
        success: function(data) {
          $("#loading").empty();
          console.log(data)
          rr(data);

        }
      });
    })
    // =========================================
  function rr(data) {


    // console.log(data.list)
    $(data.list).each(function(idx, item) {
        console.log(item);
        $(".guanli").append(` <tr class="text-c oll">
                <td><input type="checkbox" value="1" checked name=""></td>
                <td class="sorting_1">${item._id}</td>
                <td>${item.nickname}</td>
                <td>13000000000</td>
                <td>admin@mail.com</td>
                <td>超级管理员</td>
                <td>2018-10-24 15:07:42</td>
                <td class="td-status"><span class="label label-success radius">已启用</span></td>
                <td class="td-manage"><a style="text-decoration:none" href="javascript:;" title="停用"><i class="Hui-iconfont"></i></a> <a title="编辑" href="javascript:;" class="ml-5" style="text-decoration:none"><i class="Hui-iconfont"></i></a> <a title="删除" href="javascript:;" class="ml-5 del" style="text-decoration:none"><i class="Hui-iconfont"></i></a></td>
            </tr>`);

      })
      // =================================================
    $(".del").click(function() {

      $id = $(this).closest('.oll').find('.sorting_1').text();

      $(this).parent().parent().remove();
      del1($id);


    })
    $checkBox = $(":checkbox").not("#all");
    // console.log($checkBox);
    // console.log( $("#all"));
    // console.log($checkBox);
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

        url: "http://localhost:3000/tesr/dels",
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
      console.log($checkeds.closest('.oll').find('.sorting_1').text());
      $id = $checkeds.closest('.oll').find('.sorting_1').text();
      del1();
      if ($checkeds.length == $checkBox.length) {
        $("#all")[0].checked = true;
        // $("#all")2[0].checked = true;
      } else {
        $("#all")[0].checked = false;
        // $("#all")2[0].checked = false;
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

})