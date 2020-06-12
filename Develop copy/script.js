var input = $(".description");
var button = $(".saveBtn");

button.on("click", function (event) {
  event.preventDefault();
  var input = input.val();
});
var values = {
  input9: $("btn9").val(),
  input10: $("btn10").val(),
};

var savedData = JSON.parse(localStorage.getItem("values"));

console.log(JSON.parse(savedData));

localStorage.setItem("event", JSON.stringify(input));

for (var i = 0; i < 9; i++) {
  var id = "input" + i;
  var lsInput = savedData[id];
  $("#" + id).val(lsValue);
}

console.log(input);

if (moment().isBefore(i)) {
}
if (moment().isAfter()) {
}
if (moment().isSame()) {
}

// when you refresh re-establish from local storage

// add time blocks
// use api to color coat
//     if time > grey
// if time < red
// if time = green

// if ($(".hour") == moment().hour(Number)) {
//   console.log(moment().hour)
// }

// // create a text input
// // create a save button
// //     prevent default
// // save input to html
// // save to local storage

// $("#dateTime").text(moment().format("LLLL"));

// $("description").val();
// localStorage.setItem(("description": description));
