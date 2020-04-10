let progressBarPer = 50;

$("#button-1-per").click(function () {progressBarPer++
  $("#my-progress-bar").width(progressBarPer+"%")
});

$("#button-3-per").click(function () {progressBarPer=progressBarPer+3;
  $("#my-progress-bar").width(progressBarPer+"%")
});

$("#button-7-per").click(function () {progressBarPer=progressBarPer+7;
  $("#my-progress-bar").width(progressBarPer+"%")
});

$("#my-progress-bar").width(progressBarPer+"%")
