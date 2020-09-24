var display = document.querySelector(".display");
var endTime = document.querySelector(".endTime").value.split(":");
var status = "run";
var today = new Date();
var interval = 0;
var date = {
  year: today.getFullYear(),
  month: today.getMonth() + 1,
  date: today.getDate(),
};
var time = {
  hours: today.getHours(),
  mins: today.getMinutes(),
  secs: today.getSeconds(),
};
display.innerHTML = `${time.hours} : ${time.mins} : ${time.secs}`;

function check(inputTime) {
  if (time.hours !== parseInt(inputTime[0]) && time.mins !== parseInt(inputTime[1])) {
    status = "run";
  } else {
    status = "stop";
  }
}

function stopWatch() {
  check(endTime);
  if (status == "run") {
    time.secs++;
    if (time.secs / 60 === 1) {
      time.secs = 0;
      time.mins++;
    }
    if (time.mins / 60 === 1) {
      time.mins = 0;
      time.hours++;
    }
    document.querySelector(
      ".display"
    ).innerHTML = `${time.hours} : ${time.mins} : ${time.secs}`;
  }
}

function submit() {
  interval = window.setInterval(stopWatch, 1000);
}
