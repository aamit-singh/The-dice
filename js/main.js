$(document).ready(function() {
  $("#button1").on({
    click: function () {
      var name = $("input[name='full_name']").val();
      var tel = $("input[name='phone']").val();
      $("#para2").hide();
      $("#para2").html("Hello "+name + " your id has been registered with " + tel);
      $("#para2").fadeIn(1500,"swing");
    }
  })
  $("input").focus(function(){
    $(this).css("background-color", "#cccccc");
  });
})
