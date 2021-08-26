$(function () {
    $("#subscribeBtn").click(function () {
        var name = $("#name").val();
        var email = $("#email").val();
        var data = {
          name: name,
          email: email,
        };
    
        $.ajax({
          type: "POST",
          data: JSON.stringify(data),
          contentType: "application/json",
          url: "/subscribe",
          success: function (data) {
            $("input.form-control").val("");

          },
        });
      });


});