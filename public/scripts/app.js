// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;
// });


$('document').ready(function(){
  var count = 0;
 $("img").click(function(){
  count ++;
  alert("counter: " + count);
 });
});
