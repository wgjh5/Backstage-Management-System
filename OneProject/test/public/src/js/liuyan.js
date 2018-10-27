jQuery(function($) {
    var socket = io('http://localhost:3001');
    socket.on('connect', function() {});
    socket.on('event', function(data) {});
    socket.on('disconnect', function() {});
    //监听
    socket.on('sendMessageToAllClient', function(data) {
        console.log(data);

        $("#output").prepend(`<ul class="commentList">
  <li class="item cl"> <a href="#"><i class="avatar size-L radius"></i></a>
    <div class="comment-main">
      <header class="comment-header">
        <div class="comment-meta"><a class="comment-author" href="#">${data.name}</a> 评论于
          <time title="2018年10月25日 下午3:20" datetime="2018-10-25T03:54:20">2018-10-25 15:20</time>
        </div>
      </header>
      <div class="comment-body">
        <p><a href="#">@某人</a> ${data.message}</p>
      </div>
    </div>
  </li>
</ul>`);
    });
    $(".button").click(function() {
      // $("#output").empty();
        socket.emit("sendMessageToServer", {
            name: $("#name").val(),
            email: $("#email").val(),
            message: $("#message").val()
        });

    })
})