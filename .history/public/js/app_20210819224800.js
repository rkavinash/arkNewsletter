$(function () {
    $("#subscribeBtn").click(function () {
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
    
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
          url: "/create",
          success: function (data) {
            console.log("success");
            console.log(JSON.stringify(data));
            $(".form-control").val("");
          },
        });
      });


});