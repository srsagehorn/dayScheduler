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
}

// save btn
// local storage
var button = $(".saveBtn");

// button needs to save data in ls
button.on("click", function (event) {
  // var input = input.val();
  for (var i = 9; i < 18; i++) {
    var inputNum = "input" + i;
    var set = localStorage.setItem(inputNum, $("#input" + i).val());
    console.log($("#input" + i).val());
  }
});
for (var i = 9; i < 18; i++) {
  var inputNum = "input" + i;
  var savedData = localStorage.getItem(inputNum);
  $("#" + inputNum).text(savedData || "");
}

// input != local Storage
// create element not saved

// var values = {
//   input0: $("9").val(),
//   input1: $("btn10").val(),
// };

// var savedData = JSON.parse(localStorage.getItem("values"));

// console.log(JSON.parse(savedData));

// localStorage.setItem("event", JSON.stringify(values));

// for (var i = 0; i < 9; i++) {
//   var id = "input" + i;
//   var lsInput = savedData[id];
//   $("#" + id).val(lsValue);
// }
