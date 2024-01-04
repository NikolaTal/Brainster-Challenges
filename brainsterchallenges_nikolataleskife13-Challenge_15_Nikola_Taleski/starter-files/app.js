$(function () {
  let countdownInterval;
  let count = 3;

  //LocalStorage function
  function archivedResults() {
    const carOneRaceInfo = JSON.parse(localStorage.getItem("raceCarOneResult"));
    const carTwoRaceInfo = JSON.parse(localStorage.getItem("raceCarTwoResult"));

    if (carOneRaceInfo && carTwoRaceInfo) {
      $("#previous-results").html(
        `<h3 class="mb-5" style="font-size: 40px;">Results from the pervious time you played this game</h3>
		<div class="carsLocalStorage borderStyle p-3 mt-4" style="font-size: 30px;"><span class="color-white fontSize">Car 1</span> finished in <span class="color-white fontSize"">${carOneRaceInfo.place}</span> place with a time of <span class="color-white fontSize">${carOneRaceInfo.raceTime1} ms</span></div>
		<div class="carsLocalStorage borderStyle p-3" style="font-size: 30px;"><span class="color-red fontSize">Car 2</span> finished in <span class="color-red fontSize">${carTwoRaceInfo.place}</span> place with a time of <span class="color-red fontSize">${carTwoRaceInfo.raceTime2} ms</span></div>`
      );
    }
  }
  archivedResults();

  //Finish race function
  function finishRace() {
    $("#finish").css("display", "block");
    $("#racetrack").addClass("opacity");
    $("#start-over").prop("disabled", false);
  }

  //Counting function
  function counting(complete) {
    const countdown = $("#countdown");
    const countdownElement = $("#countdownDiv");
    countdown.css("display", "block");
    $("#racetrack").addClass("opacity");

    countdownInterval = setInterval(function () {
      if (count === 0) {
        clearInterval(countdownInterval);
        countdown.css("display", "none");
        $("#racetrack").removeClass("opacity");
        complete();
      } else {
        countdownElement.text(count);
        count--;
      }
    }, 1000);
  }

  //Starting the race
  $("#race-now").click(function () {
    $("#race-now").prop("disabled", true);
    $("#start-over").prop("disabled", true);

    counting(function () {
      function checkIfComplete() {
        if (isComplete == false) {
          isComplete = true;
          finishRace();
        } else {
          place = "second";
          finishRace();
        }
      }

      const carWidth = $("#car1").width();
      const trackWidth = $(window).width() - carWidth;

      let raceTime1 = Math.floor(Math.random() * 5000 + 1);
      let raceTime2 = Math.floor(Math.random() * 5000 + 1);

      let isComplete = false;

      let place = "first";

      $("#car1").animate(
        {
          left: trackWidth,
        },
        raceTime1,
        function () {
          checkIfComplete();

          const race1Info = `
            <div class="borderStyle">
              Finished in
              <span class="color-white fontSize">${place}</span> place with a time of
              <span class="color-white fontSize">${raceTime1} ms</span>
            </div>
          `;

          $("#car1Info").append(race1Info);
          localStorage.setItem(
            "raceCarOneResult",
            JSON.stringify({ place, raceTime1 })
          );
        }
      );

      $("#car2").animate(
        {
          left: trackWidth,
        },
        raceTime2,
        function () {
          checkIfComplete();

          const race2Info = `
            <div class="borderStyle">
              Finished in
              <span class="color-red fontSize">${place}</span> place with a time of
              <span class="color-red fontSize">${raceTime2} ms</span>
            </div>
          `;

          $("#car2Info").append(race2Info);
          localStorage.setItem(
            "raceCarTwoResult",
            JSON.stringify({ place, raceTime2 })
          );
        }
      );
    });
  });

  // Reset
  $("#start-over").click(function () {
    $(".car").css("left", "0");
    $("#finish").css("display", "none");
    $("#racetrack").removeClass("opacity");
    clearInterval(countdownInterval);
    count = 3;
    $("#race-now").prop("disabled", false);
    $("#start-over").prop("disabled", true);
  });
});
