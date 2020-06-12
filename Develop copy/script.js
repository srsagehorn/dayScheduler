// set current date and time on top
$("#dateTime").text(moment().format("LLLL"));

// set past present future background colors
var hour = moment("h");
for (var i = 9; i < 18; i++) {
  var areaNum = "#input" + i;
  var currentHour = moment().get("hour");

  if (currentHour < i) {
    $(areaNum).attr("class", "future");
  }
  if (currentHour > i) {
    $(areaNum).attr("class", "past");
  }
  if (currentHour == i) {
    $(areaNum).attr("class", "present");
  }
  console.log(currentHour);
}

// save btn
// local storage
var button = $(".saveBtn");

// button needs to save data in ls
button.on("click", function (event) {
  // var input = input.val();
  for (var i = 0; i < 9; i++) {
    var input = "input" + i;
    var save = localStorage.setItem(input, $(input).val());
  }
});

var values = {
  input0: $("9").val(),
  input1: $("btn10").val(),
};

var savedData = JSON.parse(localStorage.getItem("values"));

console.log(JSON.parse(savedData));

localStorage.setItem("event", JSON.stringify(values));

// for (var i = 0; i < 9; i++) {
//   var id = "input" + i;
//   var lsInput = savedData[id];
//   $("#" + id).val(lsValue);
// }

// console.log(input);

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

// $("description").val();
// localStorage.setItem(("description": description));
