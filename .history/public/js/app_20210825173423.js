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
            // $("input.form-control").val("");
            var d = JSON.parse(data);
            console.log('response data =>', d.status);
            if(d.status === 'exists') {
                window.location.href ='/failure';
            } else if(d.status === 'added') {
                window.location.href ='/success';
            }
            
          },
          error: function(data) {
            window.location.href ='/failure';
          }
        });
      });


});