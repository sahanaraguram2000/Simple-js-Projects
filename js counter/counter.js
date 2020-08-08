// var counter = document.querySelector("h1");
// var add = document.querySelector(".add");
// var sub = document.querySelector(".sub");
retrieveCount();
$(document).ready(function () {
  $(".add").click(function () {
    if ($("h1").html() >= 0) {
      var temp = +$("h1").html();
      $("h1").html(temp + 1);
      storeCount(temp + 1);
    }
  });
  $(".sub").click(function () {
    if ($("h1").html() > 0) {
      var temp = +$("h1").html();
      $("h1").html(temp - 1);
      storeCount(temp - 1);
    }
  });
});
function storeCount(count) {
  if (typeof Storage !== "undefined") {
    localStorage.setItem("Count", count);
  }
}
function retrieveCount() {
  $("h1").html(localStorage.getItem("Count"));
}

// counterAdd = () => {
//   if (counter.innerHTML >= 0) {
//     var temp = +counter.innerHTML;
//     counter.innerHTML = temp + 1;
//   }
// };
// counterSub = () => {
//   if (counter.innerHTML > 0) {
//     var temp = +counter.innerHTML;
//     counter.innerHTML = temp - 1;
//   }
// };
