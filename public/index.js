$(function () {
  $(".start").click(function () {
    var $this = $(this);
    var loadingText = '<i class="fa fa-circle-o-notch fa-spin"></i> starting...';
    if ($(this).html() == loadingText) {
      return;
    } else {
      $this.data('original-text', $(this).html());
      $this.html(loadingText);
    }
    $.get("/start", function (data) {
      $this.html($this.data('original-text'));
      $("#botStatus .modal-body").html(data.status);
      $("#botStatus").modal();
    })
  });
  $(".nothing").click(function () {
    let c = parseInt($(this).data("clicked") ? $(this).data("clicked") : 1);

    switch (true) {
      case c == 1:
        $("#botStatus .modal-body").html("WHY the fuck did you click this, it literally does <h1>NOTHING.</h1>");
        $("#botStatus").modal();
        break;
      case c == 2:
        $("#botStatus .modal-body").html("AGAIN ?!, TOLD YOU, it literally does <h3>NOTHING.</h3>");
        $("#botStatus").modal();
        break;
      case c == 3:
        $("#botStatus .modal-body").html("what the f is wrong with you ..");
        $("#botStatus").modal();
        break;
      case c == 4:
        $("#botStatus .modal-body").html("LAST TIME I TELL YOU TO STOP ..");
        $("#botStatus").modal();
        break;
      case c == 5:

        $("#botStatus .modal-body").html("<h1>OK you asked for it ..</h1>");
        $("#botStatus").modal();
        setTimeout(() => { $("body").html("<container><div class=\"row justify-content-center align-self-center\"><video width=\"1080\" height=\"720\" controls><source src=\"https://na1.twist.moe/anime/bokunopico/Boku no Pico - OVA03 - Pico x CoCo x Chico.mp4\" type=\"video/mp4\">Your browser does not support the video tag.</video></div><container>"); $("video").get(0).currentTime = 1429.742262; $("video").get(0).play(); }, 3500);

        break;
      default:
        $(this).data("clicked", 0);
        break;
    }
    c += 1
    $(this).data("clicked", c);
    console.log(c);

  })
});