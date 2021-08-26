$(function () {
    $("#subscribeBtn").click(function () {
        var name = $("#name").val();
        var email = $("#email").val();
    
        var data = {
          fname: fname,
          lname: lname,
          email: email,
          phone: phone,
        };
    
        $.ajax({
          type: "POST",
          data: JSON.stringify(data),
          contentType: "application/json",
          url: "/subscribe",
          success: function (data) {
            console.log("success");
            console.log(JSON.stringify(data));
            $(".form-control").val("");
          },
        });
      });


});