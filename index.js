var today = new Date();
var dd = today.getDate() + 2;
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}
today = yyyy + "-" + mm + "-" + dd;

document.getElementById("date").setAttribute("min", today);
document.getElementById("mob_date").setAttribute("min", today);

var todaynew = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
console.log(todaynew);
var ddnew = todaynew.getDate();
var mmnew = todaynew.getMonth() + 1;
var yyyynew = todaynew.getFullYear();

if (ddnew < 10) {
  ddnew = "0" + ddnew;
}
if (mmnew < 10) {
  mmnew = "0" + mmnew;
}

todaynew = yyyynew + "-" + mmnew + "-" + ddnew;

todaynew = "10-07-2021";
document.getElementById("date").setAttribute("max", todaynew);
document.getElementById("mob_date").setAttribute("max", todaynew);

var x = document.getElementById("timestamp");
x.value = new Date();

var y = document.getElementById("mob_timestamp");
y.value = new Date();

function SubForm() {
  document.querySelector("#btn").onclick = null;
  let count = 0;
  $.ajax({
    url: "https://api.apispreadsheets.com/data/16281/",
    type: "post",
    data: $("#myForm").serializeArray(),
    success: function () {
      let email = document.querySelector("#email").value;
      var regex1 =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (regex1.test(email)) {
        count++;
        localStorage.setItem("email", email);
      }

      let phno = document.querySelector("#phno").value;
      var regex = /^[+091]?[0-9]{10,12}$/;
      if (regex.test(phno)) {
        count++;
        localStorage.setItem("phno", phno);
      }

      let date = document.querySelector("#date").value;
      if (date == "") {
        alert("Date is empty");
      } else {
        count++;
        localStorage.setItem("date", date);
      }

      let time = document.querySelector("#time").value;
      if (time == "") {
        alert("Time is empty");
      } else {
        count++;
        localStorage.setItem("time", time);
      }
      let location = document.querySelector("#location").value;
      if (location == "") {
        alert("Location is empty");
      } else {
        count++;
        localStorage.setItem("location", location);
      }
      if (count == 5) {
        // alert("Form Data Submitted :)");
        window.location.href = "thank-you.html";
      } else {
        // alert("Please fill all the fields");
      }
    },
    error: function () {
      alert("There was an error :(  Please Try Again!");
    },
  });
}

function MobSubForm() {
  document.querySelector("#m_btn").onclick = null;
  let count = 0;
  $.ajax({
    url: "https://api.apispreadsheets.com/data/16281/",
    type: "post",
    data: $("#mob_myForm").serializeArray(),
    success: function () {
      let mob_email = document.querySelector("#mob_email").value;
      var regex1 =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (regex1.test(mob_email)) {
        count++;
        localStorage.setItem("mob_email", mob_email);
      }

      let mob_phno = document.querySelector("#mob_phno").value;
      var regex = /^[+91]?[0-9]{10,12}$/;
      if (regex.test(mob_phno)) {
        count++;
        localStorage.setItem("mob_phno", mob_phno);
      }

      let mob_date = document.querySelector("#mob_date").value;
      if (mob_date == "") {
        alert("Date is empty");
      } else {
        count++;
        localStorage.setItem("mob_date", mob_date);
      }

      let mob_time = document.querySelector("#mob_time").value;
      if (mob_time == "") {
        alert("Time is empty");
      } else {
        count++;
        localStorage.setItem("mob_time", mob_time);
      }

      let mob_location = document.querySelector("#mob_location").value;
      if (mob_location == "") {
        alert("location is empty");
      } else {
        count++;
        localStorage.setItem("mob_location", mob_location);
      }

      if (count == 5) {
        // alert("Form Data Submitted :)");
        window.location.href = "thank-you.html";
      } else {
        // alert("Please fill all the fields");
      }
    },
    error: function () {
      alert("There was an error :(  Please Try Again!");
    },
  });
}

function mob_thankyou() {
  var mob_name = localStorage.getItem("mob_email");
  document.querySelector(".render_email").innerHTML = mob_name;

  var mob_phno = localStorage.getItem("mob_phno");
  document.querySelector(".render_phone").innerHTML = mob_phno;

  var mob_date = localStorage.getItem("mob_date");
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var mob_d = new Date(mob_date);
  var mob_dayName = days[mob_d.getDay()];
  document.querySelector(".render_date").innerHTML = mob_dayName;

  var mob_time = localStorage.getItem("mob_time");
  document.querySelector(".render_time").innerHTML = mob_time;

  var mob_location = localStorage.getItem("mob_location");
  document.querySelector(".render_loc").innerHTML = mob_location;
}

function thankyou() {
  var name = localStorage.getItem("email");
  document.querySelector(".render_email").innerHTML = name;

  var phno = localStorage.getItem("phno");
  document.querySelector(".render_phone").innerHTML = phno;

  var date = localStorage.getItem("date");
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date(date);
  var dayName = days[d.getDay()];
  document.querySelector(".render_date").innerHTML = dayName;

  var time = localStorage.getItem("time");
  document.querySelector(".render_time").innerHTML = time;

  var location = localStorage.getItem("location");
  document.querySelector(".render_loc").innerHTML = location;
}

let screen_size;
function size() {
  screen_size = screen.width;
  localStorage.setItem("screen_size", screen_size);
}

function display() {
  var screen_size = localStorage.getItem("screen_size");
  if (screen_size > 430) {
    thankyou();
  } else {
    mob_thankyou();
  }
}

// $("#mob_date").flatpickr({
//   minDate: new Date().fp_incr(2),
//   maxDate: new Date().fp_incr(8),
//   disable: [
//     function (date) {
//       return date.getDay() === 2; // disable weekends
//     },
//   ],
//   locale: {
//     firstDayOfWeek: 0, // set start day of week to Monday
//   },
// });

//Desktop View
function modify(val) {
  const age0 = document.querySelector(".age0");
  const age1 = document.querySelector(".age1");
  const age2 = document.querySelector(".age2");
  const age3 = document.querySelector(".age3");
  const age4 = document.querySelector(".age4");
  const age5 = document.querySelector(".age5");
  const age6 = document.querySelector(".age6");
  const age7 = document.querySelector(".age7");
  let location = val;
  localStorage.setItem("location", location);
  switch (location) {
    case "Virar":
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";
      age4.style.display = "block";
      age5.style.display = "block";
      age6.style.display = "block";

      age0.style.display = "none";
      age7.style.display = "none";

      break;
    case "Vasai":
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";
      age4.style.display = "block";
      age5.style.display = "block";
      age6.style.display = "block";

      age0.style.display = "none";
      age7.style.display = "none";
      break;
    case "Mira Road":
      age2.style.display = "block";
      age4.style.display = "block";

      age0.style.display = "none";
      age1.style.display = "none";
      age3.style.display = "none";
      age5.style.display = "none";
      age6.style.display = "none";
      age7.style.display = "none";

      break;
    case "Goregaon":
      age4.style.display = "block";
      age5.style.display = "block";
      age6.style.display = "block";

      age0.style.display = "none";
      age1.style.display = "none";
      age2.style.display = "none";
      age3.style.display = "none";
      age7.style.display = "none";

      break;
    case "Malad":
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";
      age4.style.display = "block";
      age5.style.display = "block";
      age6.style.display = "block";

      age0.style.display = "none";
      age7.style.display = "none";
      break;
    case "Kandivali":
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";
      age4.style.display = "block";

      age0.style.display = "none";
      age5.style.display = "none";
      age6.style.display = "none";
      age7.style.display = "none";
      break;
    case "Borivali":
      age2.style.display = "block";
      age3.style.display = "block";
      age4.style.display = "block";
      age5.style.display = "block";
      age6.style.display = "block";
      age7.style.display = "block";

      age0.style.display = "none";
      age1.style.display = "none";
      break;
    case "Vile Parle":
      age0.style.display = "block";
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";
      age4.style.display = "block";
      age5.style.display = "block";
      age6.style.display = "block";
      age7.style.display = "block";

      break;
    case "Versova":
      age0.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";

      age1.style.display = "none";
      age4.style.display = "none";
      age5.style.display = "none";
      age6.style.display = "none";
      age7.style.display = "none";
      break;
    case "Juhu":
      age0.style.display = "block";
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";

      age4.style.display = "none";
      age5.style.display = "none";
      age6.style.display = "none";
      age7.style.display = "none";
      break;
    case "Bandra":
      age0.style.display = "block";
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";

      age4.style.display = "none";
      age5.style.display = "none";
      age6.style.display = "none";
      age7.style.display = "none";
      break;
    case "Andheri East":
      break;
    case "Lokhandwala":
      age0.style.display = "block";
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";
      age4.style.display = "block";
      age5.style.display = "block";

      age6.style.display = "none";
      age7.style.display = "none";
      break;
    case "Chembur":
      age1.style.display = "block";
      age2.style.display = "block";

      age0.style.display = "none";
      age3.style.display = "none";
      age4.style.display = "none";
      age5.style.display = "none";
      age6.style.display = "none";
      age7.style.display = "none";
      break;
    case "Mulund":
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";

      age0.style.display = "none";
      age4.style.display = "none";
      age5.style.display = "none";
      age6.style.display = "none";
      age7.style.display = "none";
      break;
    case "Airoli":
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";

      age0.style.display = "none";
      age4.style.display = "none";
      age5.style.display = "none";
      age6.style.display = "none";
      age7.style.display = "none";
      break;
    case "Thane Vartak Nagar":
      age0.style.display = "block";
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";
      age4.style.display = "block";

      age5.style.display = "none";
      age6.style.display = "none";
      age7.style.display = "none";
      break;
    case "Thane Ram Maruti Road":
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";
      age4.style.display = "block";

      age0.style.display = "none";
      age5.style.display = "none";
      age6.style.display = "none";
      age7.style.display = "none";
      break;
    case "Santacruz":
      age2.style.display = "block";
      age1.style.display = "block";

      age0.style.display = "none";
      age4.style.display = "none";
      age3.style.display = "none";
      age5.style.display = "none";
      age6.style.display = "none";
      age7.style.display = "none";
      break;
    case "Churchgate":
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";
      age4.style.display = "block";

      age0.style.display = "none";
      age5.style.display = "none";
      age6.style.display = "none";
      age7.style.display = "none";
      break;
    case "Pdp - Napean Sea":
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";
      age4.style.display = "block";
      age5.style.display = "block";
      age6.style.display = "block";

      age0.style.display = "none";
      age7.style.display = "none";

      break;
    case "Worli":
      age0.style.display = "block";
      age1.style.display = "block";

      age2.style.display = "none";
      age3.style.display = "none";
      age4.style.display = "none";
      age5.style.display = "none";
      age6.style.display = "none";
      age7.style.display = "none";
      break;
    case "Shivaji Park":
      age0.style.display = "block";
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";
      age4.style.display = "block";
      age5.style.display = "block";

      age6.style.display = "none";
      age7.style.display = "none";
      break;
    case "Thane, Gawandbaug":
      age0.style.display = "block";
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";
      age4.style.display = "block";
      age5.style.display = "block";
      age6.style.display = "block";
      age7.style.display = "block";
      break;
    case "Thane, Hiranandani Estate":
      age0.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";

      age1.style.display = "none";
      age4.style.display = "none";
      age5.style.display = "none";
      age6.style.display = "none";
      age7.style.display = "none";
      break;

    default:
      break;
  }
}

function anotherFunc(event) {
  var location = localStorage.getItem("location");
  var ageselect = event.target.value;
  console.log(ageselect);
  localStorage.setItem("age_desk", ageselect);

  $("#date").flatpickr({
    // dateFormat: "m-d-Y",
    minDate: new Date().fp_incr(2),
    maxDate: new Date().fp_incr(8),
    disable: [
      function (date) {
        if (location == "Virar") {
          return (
            date.getDay() === 2 ||
            date.getDay() === 4 ||
            date.getDay() === 6 ||
            date.getDay() === 0
          );
        } else if (location == "Vasai") {
          return (
            date.getDay() === 2 ||
            date.getDay() === 4 ||
            date.getDay() === 6 ||
            date.getDay() === 0
          );
        } else if (location == "Mira Road") {
          return (
            date.getDay() === 1 ||
            date.getDay() === 2 ||
            date.getDay() === 4 ||
            date.getDay() === 6 ||
            date.getDay() === 0
          );
        } else if (location == "Goregaon") {
          return (
            date.getDay() === 2 ||
            date.getDay() === 4 ||
            date.getDay() === 6 ||
            date.getDay() === 0
          );
        } else if (location == "Malad") {
          return (
            date.getDay() === 1 ||
            date.getDay() === 3 ||
            date.getDay() === 5 ||
            date.getDay() === 0
          );
        } else if (location == "Kandivali") {
          return (
            date.getDay() === 2 ||
            date.getDay() === 4 ||
            date.getDay() === 6 ||
            date.getDay() === 0
          );
        } else if (location == "Borivali") {
          if (ageselect === "14 - 16 years") {
            return (
              date.getDay() === 1 ||
              date.getDay() === 3 ||
              date.getDay() === 5 ||
              date.getDay() === 0
            );
          } else if (ageselect === "12 - 14 years") {
            return date.getDay() === 0;
          } else {
            return (
              date.getDay() === 2 ||
              date.getDay() === 4 ||
              date.getDay() === 6 ||
              date.getDay() === 0
            );
          }
        } else if (location == "Vile Parle") {
          if (ageselect === "4 - 6 years") {
            return (
              date.getDay() === 1 ||
              date.getDay() === 5 ||
              date.getDay() === 6 ||
              date.getDay() === 0
            );
          } else if (
            ageselect === "14 - 16 years" ||
            ageselect === "16 - 18 years"
          ) {
            return (
              date.getDay() === 1 ||
              date.getDay() === 3 ||
              date.getDay() === 5 ||
              date.getDay() === 0
            );
          } else {
            return (
              date.getDay() === 2 ||
              date.getDay() === 4 ||
              date.getDay() === 6 ||
              date.getDay() === 0
            );
          }
        } else if (location == "Versova") {
          if (ageselect === "10 - 12 years") {
            return (
              date.getDay() === 2 ||
              date.getDay() === 4 ||
              date.getDay() === 6 ||
              date.getDay() === 0
            );
          } else {
            return (
              date.getDay() === 1 || date.getDay() === 3 || date.getDay() === 5
            );
          }
        } else if (location == "Juhu") {
          return (
            date.getDay() === 2 ||
            date.getDay() === 4 ||
            date.getDay() === 6 ||
            date.getDay() === 0
          );
        } else if (location == "Bandra") {
          return (
            date.getDay() === 2 ||
            date.getDay() === 4 ||
            date.getDay() === 5 ||
            date.getDay() === 6 ||
            date.getDay() === 0
          );
        } else if (location == "Andheri East") {
        } else if (location == "Lokhandwala") {
          if (
            ageselect === "4 - 6 years" ||
            ageselect === "6 - 8 years" ||
            ageselect === "8 - 10 years"
          ) {
            return (
              date.getDay() === 2 ||
              date.getDay() === 4 ||
              date.getDay() === 5 ||
              date.getDay() === 6 ||
              date.getDay() === 0
            );
          } else {
            return (
              date.getDay() === 1 ||
              date.getDay() === 2 ||
              date.getDay() === 3 ||
              date.getDay() === 4 ||
              date.getDay() === 5
            );
          }
        } else if (location == "Chembur") {
          return (
            date.getDay() === 1 ||
            date.getDay() === 2 ||
            date.getDay() === 4 ||
            date.getDay() === 6 ||
            date.getDay() === 0
          );
        } else if (location == "Mulund") {
          if (ageselect === "10 - 12 years") {
            return (
              date.getDay() === 2 ||
              date.getDay() === 4 ||
              date.getDay() === 6 ||
              date.getDay() === 0
            );
          } else if (ageselect === "6 - 8 years") {
            return (
              date.getDay() === 1 ||
              date.getDay() === 2 ||
              date.getDay() === 3 ||
              date.getDay() === 4 ||
              date.getDay() === 5
            );
          } else {
            return date.getDay() === 2 || date.getDay() === 4;
          }
        } else if (location == "Airoli") {
          return (
            date.getDay() === 1 ||
            date.getDay() === 3 ||
            date.getDay() === 5 ||
            date.getDay() === 0
          );
        } else if (location == "Thane Vartak Nagar") {
          if (ageselect === "4 - 6 years" || ageselect === "12 - 14 years") {
            return (
              date.getDay() === 1 ||
              date.getDay() === 2 ||
              date.getDay() === 3 ||
              date.getDay() === 4 ||
              date.getDay() === 5
            );
          } else {
            return date.getDay() === 2 || date.getDay() === 4;
          }
        } else if (location == "Thane Ram Maruti Road") {
          return (
            date.getDay() === 1 ||
            date.getDay() === 3 ||
            date.getDay() === 5 ||
            date.getDay() === 6 ||
            date.getDay() === 0
          );
        } else if (location == "Santacruz") {
          return (
            date.getDay() === 1 ||
            date.getDay() === 3 ||
            date.getDay() === 5 ||
            date.getDay() === 6 ||
            date.getDay() === 0
          );
        } else if (location == "Churchgate") {
          return (
            date.getDay() === 1 ||
            date.getDay() === 3 ||
            date.getDay() === 5 ||
            date.getDay() === 6 ||
            date.getDay() === 0
          );
        } else if (location == "Pdp - Napean Sea") {
          return (
            date.getDay() === 1 ||
            date.getDay() === 3 ||
            date.getDay() === 5 ||
            date.getDay() === 6 ||
            date.getDay() === 0
          );
        } else if (location == "Worli") {
          if (ageselect === "4 - 6 years") {
            return (
              date.getDay() === 1 ||
              date.getDay() === 2 ||
              date.getDay() === 3 ||
              date.getDay() === 4 ||
              date.getDay() === 6 ||
              date.getDay() === 0
            );
          } else {
            return (
              date.getDay() === 1 ||
              date.getDay() === 3 ||
              date.getDay() === 4 ||
              date.getDay() === 6 ||
              date.getDay() === 0
            );
          }
        } else if (location == "Pdp - Napean Sea") {
          return (
            date.getDay() === 1 ||
            date.getDay() === 3 ||
            date.getDay() === 5 ||
            date.getDay() === 6 ||
            date.getDay() === 0
          );
        } else if (location == "Shivaji Park") {
          return date.getDay() === 6 || date.getDay() === 0;
        } else if (location == "Thane, Gawandbaug") {
          return (
            date.getDay() === 1 ||
            date.getDay() === 2 ||
            date.getDay() === 3 ||
            date.getDay() === 4 ||
            date.getDay() === 5
          );
        } else if (location == "Thane, Hiranandani Estate") {
          if (ageselect === "4 - 6 years") {
            return (
              date.getDay() === 1 || date.getDay() === 3 || date.getDay() === 5
            );
          } else {
            return date.getDay() === 5;
          }
        }
      },
    ],
    locale: {
      firstDayOfWeek: 1, // set start day of week to Monday
    },
  });
}

function datechanger(event) {
  var location = localStorage.getItem("location");
  var age = localStorage.getItem("age_desk");
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date(event.target.value);
  var dayName = days[d.getDay()];

  const time00 = document.querySelector(".time00");
  const time0 = document.querySelector(".time0");
  const time1 = document.querySelector(".time1");
  const time2 = document.querySelector(".time2");
  const time3 = document.querySelector(".time3");
  const time4 = document.querySelector(".time4");
  const time5 = document.querySelector(".time5");
  const time6 = document.querySelector(".time6");
  const time7 = document.querySelector(".time7");

  const ages0 = "4 - 6 years";
  const ages1 = "6 - 8 years";
  const ages2 = "8 - 10 years";
  const ages3 = "10 - 12 years";
  const ages4 = "12 - 14 years";
  const ages5 = "14 - 16 years";
  const ages6 = "16 - 18 years";
  const ages7 = "18 - 20 years";

  switch (location) {
    case "Virar":
      if (age == ages1 || age == ages2 || age == ages3) {
        time6.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time3.style.display = "none";
        time4.style.display = "none";
        time5.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      } else {
        time7.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time3.style.display = "none";
        time4.style.display = "none";
        time5.style.display = "none";
        time6.style.display = "none";
        time00.style.display = "none";
      }

      break;
    case "Vasai":
      if (age == ages1 || age == ages2 || age == ages3) {
        time5.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time3.style.display = "none";
        time4.style.display = "none";
        time6.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      } else {
        time6.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time3.style.display = "none";
        time4.style.display = "none";
        time5.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }
      break;
    case "Mira Road":
      time4.style.display = "block";

      time0.style.display = "none";
      time1.style.display = "none";
      time2.style.display = "none";
      time3.style.display = "none";
      time6.style.display = "none";
      time5.style.display = "none";
      time7.style.display = "none";
      time00.style.display = "none";

      break;
    case "Goregaon":
      time7.style.display = "block";

      time0.style.display = "none";
      time1.style.display = "none";
      time2.style.display = "none";
      time3.style.display = "none";
      time4.style.display = "none";
      time6.style.display = "none";
      time5.style.display = "none";
      time00.style.display = "none";

      break;
    case "Malad":
      time5.style.display = "block";

      time0.style.display = "none";
      time1.style.display = "none";
      time2.style.display = "none";
      time3.style.display = "none";
      time4.style.display = "none";
      time6.style.display = "none";
      time7.style.display = "none";
      time00.style.display = "none";

      break;
    case "Kandivali":
      if (age == ages1) {
        time2.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time5.style.display = "none";
        time3.style.display = "none";
        time4.style.display = "none";
        time6.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }
      if (age == ages2 || age == ages3) {
        time3.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time6.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }
      if (age == ages4) {
        time5.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time3.style.display = "none";
        time4.style.display = "none";
        time6.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }
      break;
    case "Borivali":
      if (age == ages6 || age == ages7) {
        time0.style.display = "block";

        time5.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time3.style.display = "none";
        time4.style.display = "none";
        time6.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      } else {
        time6.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time3.style.display = "none";
        time4.style.display = "none";
        time5.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }
      break;
    case "Vile Parle":
      if (age == ages0) {
        time3.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time6.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }

      if (age == ages1 || age == ages2) {
        time0.style.display = "block";
        time5.style.display = "block";

        time1.style.display = "none";
        time2.style.display = "none";
        time3.style.display = "none";
        time4.style.display = "none";
        time6.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }

      if (age == ages3 || age == ages4) {
        time6.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time3.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }

      if (age == ages5) {
        if (dayName == "Tuesday" || dayName == "Thursday") {
          time5.style.display = "block";

          time0.style.display = "none";
          time1.style.display = "none";
          time2.style.display = "none";
          time3.style.display = "none";
          time4.style.display = "none";
          time6.style.display = "none";
          time7.style.display = "none";
          time00.style.display = "none";
        }
        if (dayName == "Saturday") {
          time3.style.display = "block";

          time0.style.display = "none";
          time1.style.display = "none";
          time2.style.display = "none";
          time5.style.display = "none";
          time4.style.display = "none";
          time6.style.display = "none";
          time7.style.display = "none";
          time00.style.display = "none";
        }
      }

      if (age == ages6) {
        if (dayName == "Tuesday" || dayName == "Thursday") {
          time6.style.display = "block";

          time0.style.display = "none";
          time1.style.display = "none";
          time2.style.display = "none";
          time3.style.display = "none";
          time4.style.display = "none";
          time5.style.display = "none";
          time7.style.display = "none";
          time00.style.display = "none";
        }
        if (dayName == "Saturday") {
          time2.style.display = "block";

          time0.style.display = "none";
          time1.style.display = "none";
          time3.style.display = "none";
          time5.style.display = "none";
          time4.style.display = "none";
          time6.style.display = "none";
          time7.style.display = "none";
          time00.style.display = "none";
        }
      }

      if (age == ages7) {
        time00.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time6.style.display = "none";
        time7.style.display = "none";
        time3.style.display = "none";
      }

      break;
    case "Versova":
      if (age == ages3) {
        time3.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time6.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }

      if (age == ages0 || age == ages2) {
        if (dayName == "Tuesday" || dayName == "Thursday") {
          time6.style.display = "block";

          time0.style.display = "none";
          time1.style.display = "none";
          time2.style.display = "none";
          time5.style.display = "none";
          time4.style.display = "none";
          time3.style.display = "none";
          time7.style.display = "none";
          time00.style.display = "none";
        }
        if (dayName == "Saturday" || dayName == "Sunday") {
          time2.style.display = "block";

          time0.style.display = "none";
          time1.style.display = "none";
          time3.style.display = "none";
          time5.style.display = "none";
          time4.style.display = "none";
          time6.style.display = "none";
          time7.style.display = "none";
          time00.style.display = "none";
        }
      }

      break;
    case "Juhu":
      time3.style.display = "block";

      time0.style.display = "none";
      time1.style.display = "none";
      time2.style.display = "none";
      time5.style.display = "none";
      time4.style.display = "none";
      time6.style.display = "none";
      time7.style.display = "none";
      time00.style.display = "none";
      break;
    case "Bandra":
      time3.style.display = "block";

      time0.style.display = "none";
      time1.style.display = "none";
      time2.style.display = "none";
      time5.style.display = "none";
      time4.style.display = "none";
      time6.style.display = "none";
      time7.style.display = "none";
      time00.style.display = "none";
      break;
    case "Andheri East":
      break;
    case "Lokhandwala":
      if (age == ages4 || age == ages5) {
        time3.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time6.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      } else {
        time6.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time3.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }
      break;
    case "Chembur":
      time3.style.display = "block";

      time0.style.display = "none";
      time1.style.display = "none";
      time2.style.display = "none";
      time5.style.display = "none";
      time4.style.display = "none";
      time6.style.display = "none";
      time7.style.display = "none";
      time00.style.display = "none";
      break;
    case "Mulund":
      if (age == ages2 || age == ages3) {
        time6.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time3.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      } else {
        time1.style.display = "block";

        time0.style.display = "none";
        time3.style.display = "none";
        time2.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time6.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }
      break;
    case "Airoli":
      time3.style.display = "block";

      time0.style.display = "none";
      time1.style.display = "none";
      time2.style.display = "none";
      time5.style.display = "none";
      time4.style.display = "none";
      time6.style.display = "none";
      time7.style.display = "none";
      time00.style.display = "none";
      break;
    case "Thane Vartak Nagar":
      if (age == ages0) {
        time1.style.display = "block";

        time0.style.display = "none";
        time6.style.display = "none";
        time2.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time3.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }
      if (age == ages1) {
        if (dayName == "Saturday" || dayName == "Sunday") {
          time1.style.display = "block";

          time0.style.display = "none";
          time3.style.display = "none";
          time2.style.display = "none";
          time5.style.display = "none";
          time4.style.display = "none";
          time6.style.display = "none";
          time7.style.display = "none";
          time00.style.display = "none";
        } else {
          time6.style.display = "block";

          time0.style.display = "none";
          time1.style.display = "none";
          time2.style.display = "none";
          time5.style.display = "none";
          time4.style.display = "none";
          time3.style.display = "none";
          time7.style.display = "none";
          time00.style.display = "none";
        }
      }
      if (age == ages2 || age == ages3) {
        if (dayName == "Saturday" || dayName == "Sunday") {
          time3.style.display = "block";

          time0.style.display = "none";
          time1.style.display = "none";
          time2.style.display = "none";
          time5.style.display = "none";
          time4.style.display = "none";
          time6.style.display = "none";
          time7.style.display = "none";
          time00.style.display = "none";
        } else {
          time6.style.display = "block";

          time0.style.display = "none";
          time1.style.display = "none";
          time2.style.display = "none";
          time5.style.display = "none";
          time4.style.display = "none";
          time3.style.display = "none";
          time7.style.display = "none";
          time00.style.display = "none";
        }
      }

      if (age == ages4) {
        if (dayName == "Saturday" || dayName == "Sunday") {
          time1.style.display = "block";

          time0.style.display = "none";
          time3.style.display = "none";
          time2.style.display = "none";
          time5.style.display = "none";
          time4.style.display = "none";
          time6.style.display = "none";
          time7.style.display = "none";
          time00.style.display = "none";
        } else {
          time2.style.display = "block";

          time0.style.display = "none";
          time1.style.display = "none";
          time6.style.display = "none";
          time5.style.display = "none";
          time4.style.display = "none";
          time3.style.display = "none";
          time7.style.display = "none";
          time00.style.display = "none";
        }
      }

      break;
    case "Thane Ram Maruti Road":
      if (age == ages3 || age == ages4) {
        time5.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time6.style.display = "none";
        time2.style.display = "none";
        time4.style.display = "none";
        time3.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      } else {
        time6.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time3.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }
      break;
    case "Santacruz":
      time3.style.display = "block";

      time0.style.display = "none";
      time1.style.display = "none";
      time2.style.display = "none";
      time5.style.display = "none";
      time4.style.display = "none";
      time6.style.display = "none";
      time7.style.display = "none";
      time00.style.display = "none";
      break;
    case "Churchgate":
      time3.style.display = "block";

      time0.style.display = "none";
      time1.style.display = "none";
      time2.style.display = "none";
      time5.style.display = "none";
      time4.style.display = "none";
      time6.style.display = "none";
      time7.style.display = "none";
      time00.style.display = "none";
      break;
    case "Pdp - Napean Sea":
      time3.style.display = "block";

      time0.style.display = "none";
      time1.style.display = "none";
      time2.style.display = "none";
      time5.style.display = "none";
      time4.style.display = "none";
      time6.style.display = "none";
      time7.style.display = "none";
      time00.style.display = "none";

      break;
    case "Worli":
      if (age == ages0) {
        time5.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time6.style.display = "none";
        time2.style.display = "none";
        time4.style.display = "none";
        time3.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      } else {
        time3.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time6.style.display = "none";
        time2.style.display = "none";
        time4.style.display = "none";
        time5.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }
      break;
    case "Shivaji Park":
      time3.style.display = "block";

      time0.style.display = "none";
      time1.style.display = "none";
      time2.style.display = "none";
      time5.style.display = "none";
      time4.style.display = "none";
      time6.style.display = "none";
      time7.style.display = "none";
      time00.style.display = "none";
      break;
    case "Thane, Gawandbaug":
      if (age == ages5) {
        time2.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time6.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time3.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      } else if (age == ages6) {
        time2.style.display = "block";
        time3.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time6.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      } else if (age == ages7) {
        time3.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time6.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      } else {
        time5.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time6.style.display = "none";
        time3.style.display = "none";
        time4.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }

      break;
    case "Thane, Hiranandani Estate":
      if (age == ages0) {
        time3.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time6.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      } else if (age == ages2) {
        time5.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time6.style.display = "none";
        time3.style.display = "none";
        time4.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      } else if (age == ages3) {
        if (dayName == "Saturday" || dayName == "Sunday") {
          time2.style.display = "block";

          time0.style.display = "none";
          time1.style.display = "none";
          time3.style.display = "none";
          time6.style.display = "none";
          time5.style.display = "none";
          time4.style.display = "none";
          time7.style.display = "none";
          time00.style.display = "none";
        } else {
          time6.style.display = "block";

          time0.style.display = "none";
          time1.style.display = "none";
          time2.style.display = "none";
          time3.style.display = "none";
          time5.style.display = "none";
          time4.style.display = "none";
          time7.style.display = "none";
          time00.style.display = "none";
        }
      }
      break;

    default:
      break;
  }
}

// Mobile View
function mob_modify(val) {
  const age0 = document.querySelector(".m_age0");
  const age1 = document.querySelector(".m_age1");
  const age2 = document.querySelector(".m_age2");
  const age3 = document.querySelector(".m_age3");
  const age4 = document.querySelector(".m_age4");
  const age5 = document.querySelector(".m_age5");
  const age6 = document.querySelector(".m_age6");
  const age7 = document.querySelector(".m_age7");

  let location = val;
  localStorage.setItem("mob_location", location);
  switch (location) {
    case "Virar":
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";
      age4.style.display = "block";
      age5.style.display = "block";
      age6.style.display = "block";

      age0.style.display = "none";
      age7.style.display = "none";

      break;
    case "Vasai":
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";
      age4.style.display = "block";
      age5.style.display = "block";
      age6.style.display = "block";

      age0.style.display = "none";
      age7.style.display = "none";
      break;
    case "Mira Road":
      age2.style.display = "block";
      age4.style.display = "block";

      age0.style.display = "none";
      age1.style.display = "none";
      age3.style.display = "none";
      age5.style.display = "none";
      age6.style.display = "none";
      age7.style.display = "none";

      break;
    case "Goregaon":
      age4.style.display = "block";
      age5.style.display = "block";
      age6.style.display = "block";

      age0.style.display = "none";
      age1.style.display = "none";
      age2.style.display = "none";
      age3.style.display = "none";
      age7.style.display = "none";

      break;
    case "Malad":
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";
      age4.style.display = "block";
      age5.style.display = "block";
      age6.style.display = "block";

      age0.style.display = "none";
      age7.style.display = "none";
      break;
    case "Kandivali":
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";
      age4.style.display = "block";

      age0.style.display = "none";
      age5.style.display = "none";
      age6.style.display = "none";
      age7.style.display = "none";
      break;
    case "Borivali":
      age2.style.display = "block";
      age3.style.display = "block";
      age4.style.display = "block";
      age5.style.display = "block";
      age6.style.display = "block";
      age7.style.display = "block";

      age0.style.display = "none";
      age1.style.display = "none";
      break;
    case "Vile Parle":
      age0.style.display = "block";
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";
      age4.style.display = "block";
      age5.style.display = "block";
      age6.style.display = "block";
      age7.style.display = "block";

      break;
    case "Versova":
      age0.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";

      age1.style.display = "none";
      age4.style.display = "none";
      age5.style.display = "none";
      age6.style.display = "none";
      age7.style.display = "none";
      break;
    case "Juhu":
      age0.style.display = "block";
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";

      age4.style.display = "none";
      age5.style.display = "none";
      age6.style.display = "none";
      age7.style.display = "none";
      break;
    case "Bandra":
      age0.style.display = "block";
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";

      age4.style.display = "none";
      age5.style.display = "none";
      age6.style.display = "none";
      age7.style.display = "none";
      break;
    case "Andheri East":
      break;
    case "Lokhandwala":
      age0.style.display = "block";
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";
      age4.style.display = "block";
      age5.style.display = "block";

      age6.style.display = "none";
      age7.style.display = "none";
      break;
    case "Chembur":
      age1.style.display = "block";
      age2.style.display = "block";

      age0.style.display = "none";
      age3.style.display = "none";
      age4.style.display = "none";
      age5.style.display = "none";
      age6.style.display = "none";
      age7.style.display = "none";
      break;
    case "Mulund":
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";

      age0.style.display = "none";
      age4.style.display = "none";
      age5.style.display = "none";
      age6.style.display = "none";
      age7.style.display = "none";
      break;
    case "Airoli":
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";

      age0.style.display = "none";
      age4.style.display = "none";
      age5.style.display = "none";
      age6.style.display = "none";
      age7.style.display = "none";
      break;
    case "Thane Vartak Nagar":
      age0.style.display = "block";
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";
      age4.style.display = "block";

      age5.style.display = "none";
      age6.style.display = "none";
      age7.style.display = "none";
      break;
    case "Thane Ram Maruti Road":
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";
      age4.style.display = "block";

      age0.style.display = "none";
      age5.style.display = "none";
      age6.style.display = "none";
      age7.style.display = "none";
      break;
    case "Santacruz":
      age2.style.display = "block";
      age1.style.display = "block";

      age0.style.display = "none";
      age4.style.display = "none";
      age3.style.display = "none";
      age5.style.display = "none";
      age6.style.display = "none";
      age7.style.display = "none";
      break;
    case "Churchgate":
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";
      age4.style.display = "block";

      age0.style.display = "none";
      age5.style.display = "none";
      age6.style.display = "none";
      age7.style.display = "none";
      break;
    case "Pdp - Napean Sea":
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";
      age4.style.display = "block";
      age5.style.display = "block";
      age6.style.display = "block";

      age0.style.display = "none";
      age7.style.display = "none";

      break;
    case "Worli":
      age0.style.display = "block";
      age1.style.display = "block";

      age2.style.display = "none";
      age3.style.display = "none";
      age4.style.display = "none";
      age5.style.display = "none";
      age6.style.display = "none";
      age7.style.display = "none";
      break;
    case "Shivaji Park":
      age0.style.display = "block";
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";
      age4.style.display = "block";
      age5.style.display = "block";

      age6.style.display = "none";
      age7.style.display = "none";
      break;
    case "Thane, Gawandbaug":
      age0.style.display = "block";
      age1.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";
      age4.style.display = "block";
      age5.style.display = "block";
      age6.style.display = "block";
      age7.style.display = "block";
      break;
    case "Thane, Hiranandani Estate":
      age0.style.display = "block";
      age2.style.display = "block";
      age3.style.display = "block";

      age1.style.display = "none";
      age4.style.display = "none";
      age5.style.display = "none";
      age6.style.display = "none";
      age7.style.display = "none";
      break;

    default:
      break;
  }
}

function mob_anotherFunc(event) {
  var location = localStorage.getItem("mob_location");
  console.log(location);
  var ageselect = event.target.value;
  localStorage.setItem("mob_age_desk", ageselect);
  console.log(ageselect);

  $("#mob_date").flatpickr({
    // dateFormat: "m-d-Y",
    minDate: new Date().fp_incr(2),
    maxDate: new Date().fp_incr(8),
    disable: [
      function (date) {
        if (location == "Virar") {
          return (
            date.getDay() === 2 ||
            date.getDay() === 4 ||
            date.getDay() === 6 ||
            date.getDay() === 0
          );
        } else if (location == "Vasai") {
          return (
            date.getDay() === 2 ||
            date.getDay() === 4 ||
            date.getDay() === 6 ||
            date.getDay() === 0
          );
        } else if (location == "Mira Road") {
          return (
            date.getDay() === 1 ||
            date.getDay() === 2 ||
            date.getDay() === 4 ||
            date.getDay() === 6 ||
            date.getDay() === 0
          );
        } else if (location == "Goregaon") {
          return (
            date.getDay() === 2 ||
            date.getDay() === 4 ||
            date.getDay() === 6 ||
            date.getDay() === 0
          );
        } else if (location == "Malad") {
          return (
            date.getDay() === 1 ||
            date.getDay() === 3 ||
            date.getDay() === 5 ||
            date.getDay() === 0
          );
        } else if (location == "Kandivali") {
          return (
            date.getDay() === 2 ||
            date.getDay() === 4 ||
            date.getDay() === 6 ||
            date.getDay() === 0
          );
        } else if (location === "Borivali") {
          if (ageselect === "14 - 16 years") {
            return (
              date.getDay() === 1 ||
              date.getDay() === 3 ||
              date.getDay() === 5 ||
              date.getDay() === 0
            );
          } else if (ageselect === "12 - 14 years") {
            return date.getDay() === 0;
          } else {
            return (
              date.getDay() === 2 ||
              date.getDay() === 4 ||
              date.getDay() === 6 ||
              date.getDay() === 0
            );
          }
        } else if (location == "Vile Parle") {
          if (ageselect === "4 - 6 years") {
            return (
              date.getDay() === 1 ||
              date.getDay() === 5 ||
              date.getDay() === 6 ||
              date.getDay() === 0
            );
          } else if (
            ageselect === "14 - 16 years" ||
            ageselect === "16 - 18 years"
          ) {
            return (
              date.getDay() === 1 ||
              date.getDay() === 3 ||
              date.getDay() === 5 ||
              date.getDay() === 0
            );
          } else {
            return (
              date.getDay() === 2 ||
              date.getDay() === 4 ||
              date.getDay() === 6 ||
              date.getDay() === 0
            );
          }
        } else if (location == "Versova") {
          if (ageselect === "10 - 12 years") {
            return (
              date.getDay() === 2 ||
              date.getDay() === 4 ||
              date.getDay() === 6 ||
              date.getDay() === 0
            );
          } else {
            return (
              date.getDay() === 1 || date.getDay() === 3 || date.getDay() === 5
            );
          }
        } else if (location == "Juhu") {
          return (
            date.getDay() === 2 ||
            date.getDay() === 4 ||
            date.getDay() === 6 ||
            date.getDay() === 0
          );
        } else if (location == "Bandra") {
          return (
            date.getDay() === 2 ||
            date.getDay() === 4 ||
            date.getDay() === 5 ||
            date.getDay() === 6 ||
            date.getDay() === 0
          );
        } else if (location == "Andheri East") {
        } else if (location == "Lokhandwala") {
          if (
            ageselect === "4 - 6 years" ||
            ageselect === "6 - 8 years" ||
            ageselect === "8 - 10 years"
          ) {
            return (
              date.getDay() === 2 ||
              date.getDay() === 4 ||
              date.getDay() === 5 ||
              date.getDay() === 6 ||
              date.getDay() === 0
            );
          } else {
            return (
              date.getDay() === 1 ||
              date.getDay() === 2 ||
              date.getDay() === 3 ||
              date.getDay() === 4 ||
              date.getDay() === 5
            );
          }
        } else if (location == "Chembur") {
          return (
            date.getDay() === 1 ||
            date.getDay() === 2 ||
            date.getDay() === 4 ||
            date.getDay() === 6 ||
            date.getDay() === 0
          );
        } else if (location == "Mulund") {
          if (ageselect === "10 - 12 years") {
            return (
              date.getDay() === 2 ||
              date.getDay() === 4 ||
              date.getDay() === 6 ||
              date.getDay() === 0
            );
          } else if (ageselect === "6 - 8 years") {
            return (
              date.getDay() === 1 ||
              date.getDay() === 2 ||
              date.getDay() === 3 ||
              date.getDay() === 4 ||
              date.getDay() === 5
            );
          } else {
            return date.getDay() === 2 || date.getDay() === 4;
          }
        } else if (location == "Airoli") {
          return (
            date.getDay() === 1 ||
            date.getDay() === 3 ||
            date.getDay() === 5 ||
            date.getDay() === 0
          );
        } else if (location == "Thane Vartak Nagar") {
          if (ageselect === "4 - 6 years" || ageselect === "12 - 14 years") {
            return (
              date.getDay() === 1 ||
              date.getDay() === 2 ||
              date.getDay() === 3 ||
              date.getDay() === 4 ||
              date.getDay() === 5
            );
          } else {
            return date.getDay() === 2 || date.getDay() === 4;
          }
        } else if (location == "Thane Ram Maruti Road") {
          return (
            date.getDay() === 1 ||
            date.getDay() === 3 ||
            date.getDay() === 5 ||
            date.getDay() === 6 ||
            date.getDay() === 0
          );
        } else if (location == "Santacruz") {
          return (
            date.getDay() === 1 ||
            date.getDay() === 3 ||
            date.getDay() === 5 ||
            date.getDay() === 6 ||
            date.getDay() === 0
          );
        } else if (location == "Churchgate") {
          return (
            date.getDay() === 1 ||
            date.getDay() === 3 ||
            date.getDay() === 5 ||
            date.getDay() === 6 ||
            date.getDay() === 0
          );
        } else if (location == "Pdp - Napean Sea") {
          return (
            date.getDay() === 1 ||
            date.getDay() === 3 ||
            date.getDay() === 5 ||
            date.getDay() === 6 ||
            date.getDay() === 0
          );
        } else if (location == "Worli") {
          if (ageselect === "4 - 6 years") {
            return (
              date.getDay() === 1 ||
              date.getDay() === 2 ||
              date.getDay() === 3 ||
              date.getDay() === 4 ||
              date.getDay() === 6 ||
              date.getDay() === 0
            );
          } else {
            return (
              date.getDay() === 1 ||
              date.getDay() === 3 ||
              date.getDay() === 4 ||
              date.getDay() === 6 ||
              date.getDay() === 0
            );
          }
        } else if (location == "Pdp - Napean Sea") {
          return (
            date.getDay() === 1 ||
            date.getDay() === 3 ||
            date.getDay() === 5 ||
            date.getDay() === 6 ||
            date.getDay() === 0
          );
        } else if (location == "Shivaji Park") {
          return date.getDay() === 6 || date.getDay() === 0;
        } else if (location == "Thane, Gawandbaug") {
          return (
            date.getDay() === 1 ||
            date.getDay() === 2 ||
            date.getDay() === 3 ||
            date.getDay() === 4 ||
            date.getDay() === 5
          );
        } else if (location == "Thane, Hiranandani Estate") {
          if (ageselect === "4 - 6 years") {
            return (
              date.getDay() === 1 || date.getDay() === 3 || date.getDay() === 5
            );
          } else {
            return date.getDay() === 5;
          }
        }
      },
    ],
    locale: {
      firstDayOfWeek: 1, // set start day of week to Monday
    },
  });
}

function mob_datechanger(event) {
  var location = localStorage.getItem("mob_location");
  var age = localStorage.getItem("mob_age_desk");

  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date(event.target.value);
  var dayName = days[d.getDay()];

  const time00 = document.querySelector(".m_time00");
  const time0 = document.querySelector(".m_time0");
  const time1 = document.querySelector(".m_time1");
  const time2 = document.querySelector(".m_time2");
  const time3 = document.querySelector(".m_time3");
  const time4 = document.querySelector(".m_time4");
  const time5 = document.querySelector(".m_time5");
  const time6 = document.querySelector(".m_time6");
  const time7 = document.querySelector(".m_time7");

  const ages0 = "4 - 6 years";
  const ages1 = "6 - 8 years";
  const ages2 = "8 - 10 years";
  const ages3 = "10 - 12 years";
  const ages4 = "12 - 14 years";
  const ages5 = "14 - 16 years";
  const ages6 = "16 - 18 years";
  const ages7 = "18 - 20 years";

  switch (location) {
    case "Virar":
      if (age == ages1 || age == ages2 || age == ages3) {
        time6.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time3.style.display = "none";
        time4.style.display = "none";
        time5.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      } else {
        time7.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time3.style.display = "none";
        time4.style.display = "none";
        time5.style.display = "none";
        time6.style.display = "none";
        time00.style.display = "none";
      }

      break;
    case "Vasai":
      if (age == ages1 || age == ages2 || age == ages3) {
        time5.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time3.style.display = "none";
        time4.style.display = "none";
        time6.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      } else {
        time6.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time3.style.display = "none";
        time4.style.display = "none";
        time5.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }
      break;
    case "Mira Road":
      time4.style.display = "block";

      time0.style.display = "none";
      time1.style.display = "none";
      time2.style.display = "none";
      time3.style.display = "none";
      time6.style.display = "none";
      time5.style.display = "none";
      time7.style.display = "none";
      time00.style.display = "none";

      break;
    case "Goregaon":
      time7.style.display = "block";

      time0.style.display = "none";
      time1.style.display = "none";
      time2.style.display = "none";
      time3.style.display = "none";
      time4.style.display = "none";
      time6.style.display = "none";
      time5.style.display = "none";
      time00.style.display = "none";

      break;
    case "Malad":
      time5.style.display = "block";

      time0.style.display = "none";
      time1.style.display = "none";
      time2.style.display = "none";
      time3.style.display = "none";
      time4.style.display = "none";
      time6.style.display = "none";
      time7.style.display = "none";
      time00.style.display = "none";

      break;
    case "Kandivali":
      if (age == ages1) {
        time2.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time5.style.display = "none";
        time3.style.display = "none";
        time4.style.display = "none";
        time6.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }
      if (age == ages2 || age == ages3) {
        time3.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time6.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }
      if (age == ages4) {
        time5.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time3.style.display = "none";
        time4.style.display = "none";
        time6.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }
      break;
    case "Borivali":
      if (age == ages6 || age == ages7) {
        time0.style.display = "block";

        time5.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time3.style.display = "none";
        time4.style.display = "none";
        time6.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      } else {
        time6.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time3.style.display = "none";
        time4.style.display = "none";
        time5.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }
      break;
    case "Vile Parle":
      if (age == ages0) {
        time3.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time6.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }

      if (age == ages1 || age == ages2) {
        time0.style.display = "block";
        time5.style.display = "block";

        time1.style.display = "none";
        time2.style.display = "none";
        time3.style.display = "none";
        time4.style.display = "none";
        time6.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }

      if (age == ages3 || age == ages4) {
        time6.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time3.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }

      if (age == ages5) {
        if (dayName == "Tuesday" || dayName == "Thursday") {
          time5.style.display = "block";

          time0.style.display = "none";
          time1.style.display = "none";
          time2.style.display = "none";
          time3.style.display = "none";
          time4.style.display = "none";
          time6.style.display = "none";
          time7.style.display = "none";
          time00.style.display = "none";
        }
        if (dayName == "Saturday") {
          time3.style.display = "block";

          time0.style.display = "none";
          time1.style.display = "none";
          time2.style.display = "none";
          time5.style.display = "none";
          time4.style.display = "none";
          time6.style.display = "none";
          time7.style.display = "none";
          time00.style.display = "none";
        }
      }

      if (age == ages6) {
        if (dayName == "Tuesday" || dayName == "Thursday") {
          time6.style.display = "block";

          time0.style.display = "none";
          time1.style.display = "none";
          time2.style.display = "none";
          time3.style.display = "none";
          time4.style.display = "none";
          time5.style.display = "none";
          time7.style.display = "none";
          time00.style.display = "none";
        }
        if (dayName == "Saturday") {
          time2.style.display = "block";

          time0.style.display = "none";
          time1.style.display = "none";
          time3.style.display = "none";
          time5.style.display = "none";
          time4.style.display = "none";
          time6.style.display = "none";
          time7.style.display = "none";
          time00.style.display = "none";
        }
      }

      if (age == ages7) {
        time00.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time6.style.display = "none";
        time7.style.display = "none";
        time3.style.display = "none";
      }

      break;
    case "Versova":
      if (age == ages3) {
        time3.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time6.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }

      if (age == ages0 || age == ages2) {
        if (dayName == "Tuesday" || dayName == "Thursday") {
          time6.style.display = "block";

          time0.style.display = "none";
          time1.style.display = "none";
          time2.style.display = "none";
          time5.style.display = "none";
          time4.style.display = "none";
          time3.style.display = "none";
          time7.style.display = "none";
          time00.style.display = "none";
        }
        if (dayName == "Saturday" || dayName == "Sunday") {
          time2.style.display = "block";

          time0.style.display = "none";
          time1.style.display = "none";
          time3.style.display = "none";
          time5.style.display = "none";
          time4.style.display = "none";
          time6.style.display = "none";
          time7.style.display = "none";
          time00.style.display = "none";
        }
      }

      break;
    case "Juhu":
      time3.style.display = "block";

      time0.style.display = "none";
      time1.style.display = "none";
      time2.style.display = "none";
      time5.style.display = "none";
      time4.style.display = "none";
      time6.style.display = "none";
      time7.style.display = "none";
      time00.style.display = "none";
      break;
    case "Bandra":
      time3.style.display = "block";

      time0.style.display = "none";
      time1.style.display = "none";
      time2.style.display = "none";
      time5.style.display = "none";
      time4.style.display = "none";
      time6.style.display = "none";
      time7.style.display = "none";
      time00.style.display = "none";
      break;
    case "Andheri East":
      break;
    case "Lokhandwala":
      if (age == ages4 || age == ages5) {
        time3.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time6.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      } else {
        time6.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time3.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }
      break;
    case "Chembur":
      time3.style.display = "block";

      time0.style.display = "none";
      time1.style.display = "none";
      time2.style.display = "none";
      time5.style.display = "none";
      time4.style.display = "none";
      time6.style.display = "none";
      time7.style.display = "none";
      time00.style.display = "none";
      break;
    case "Mulund":
      if (age == ages2 || age == ages3) {
        time6.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time3.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      } else {
        time1.style.display = "block";

        time0.style.display = "none";
        time3.style.display = "none";
        time2.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time6.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }
      break;
    case "Airoli":
      time3.style.display = "block";

      time0.style.display = "none";
      time1.style.display = "none";
      time2.style.display = "none";
      time5.style.display = "none";
      time4.style.display = "none";
      time6.style.display = "none";
      time7.style.display = "none";
      time00.style.display = "none";
      break;
    case "Thane Vartak Nagar":
      if (age == ages0) {
        time1.style.display = "block";

        time0.style.display = "none";
        time6.style.display = "none";
        time2.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time3.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }
      if (age == ages1) {
        if (dayName == "Saturday" || dayName == "Sunday") {
          time1.style.display = "block";

          time0.style.display = "none";
          time3.style.display = "none";
          time2.style.display = "none";
          time5.style.display = "none";
          time4.style.display = "none";
          time6.style.display = "none";
          time7.style.display = "none";
          time00.style.display = "none";
        } else {
          time6.style.display = "block";

          time0.style.display = "none";
          time1.style.display = "none";
          time2.style.display = "none";
          time5.style.display = "none";
          time4.style.display = "none";
          time3.style.display = "none";
          time7.style.display = "none";
          time00.style.display = "none";
        }
      }
      if (age == ages2 || age == ages3) {
        if (dayName == "Saturday" || dayName == "Sunday") {
          time3.style.display = "block";

          time0.style.display = "none";
          time1.style.display = "none";
          time2.style.display = "none";
          time5.style.display = "none";
          time4.style.display = "none";
          time6.style.display = "none";
          time7.style.display = "none";
          time00.style.display = "none";
        } else {
          time6.style.display = "block";

          time0.style.display = "none";
          time1.style.display = "none";
          time2.style.display = "none";
          time5.style.display = "none";
          time4.style.display = "none";
          time3.style.display = "none";
          time7.style.display = "none";
          time00.style.display = "none";
        }
      }

      if (age == ages4) {
        if (dayName == "Saturday" || dayName == "Sunday") {
          time1.style.display = "block";

          time0.style.display = "none";
          time3.style.display = "none";
          time2.style.display = "none";
          time5.style.display = "none";
          time4.style.display = "none";
          time6.style.display = "none";
          time7.style.display = "none";
          time00.style.display = "none";
        } else {
          time2.style.display = "block";

          time0.style.display = "none";
          time1.style.display = "none";
          time6.style.display = "none";
          time5.style.display = "none";
          time4.style.display = "none";
          time3.style.display = "none";
          time7.style.display = "none";
          time00.style.display = "none";
        }
      }

      break;
    case "Thane Ram Maruti Road":
      if (age == ages3 || age == ages4) {
        time5.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time6.style.display = "none";
        time2.style.display = "none";
        time4.style.display = "none";
        time3.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      } else {
        time6.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time3.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }
      break;
    case "Santacruz":
      time3.style.display = "block";

      time0.style.display = "none";
      time1.style.display = "none";
      time2.style.display = "none";
      time5.style.display = "none";
      time4.style.display = "none";
      time6.style.display = "none";
      time7.style.display = "none";
      time00.style.display = "none";
      break;
    case "Churchgate":
      time3.style.display = "block";

      time0.style.display = "none";
      time1.style.display = "none";
      time2.style.display = "none";
      time5.style.display = "none";
      time4.style.display = "none";
      time6.style.display = "none";
      time7.style.display = "none";
      time00.style.display = "none";
      break;
    case "Pdp - Napean Sea":
      time3.style.display = "block";

      time0.style.display = "none";
      time1.style.display = "none";
      time2.style.display = "none";
      time5.style.display = "none";
      time4.style.display = "none";
      time6.style.display = "none";
      time7.style.display = "none";
      time00.style.display = "none";

      break;
    case "Worli":
      if (age == ages0) {
        time5.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time6.style.display = "none";
        time2.style.display = "none";
        time4.style.display = "none";
        time3.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      } else {
        time3.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time6.style.display = "none";
        time2.style.display = "none";
        time4.style.display = "none";
        time5.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }
      break;
    case "Shivaji Park":
      time3.style.display = "block";

      time0.style.display = "none";
      time1.style.display = "none";
      time2.style.display = "none";
      time5.style.display = "none";
      time4.style.display = "none";
      time6.style.display = "none";
      time7.style.display = "none";
      time00.style.display = "none";
      break;
    case "Thane, Gawandbaug":
      if (age == ages5) {
        time2.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time6.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time3.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      } else if (age == ages6) {
        time2.style.display = "block";
        time3.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time6.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      } else if (age == ages7) {
        time3.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time6.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      } else {
        time5.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time6.style.display = "none";
        time3.style.display = "none";
        time4.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      }

      break;
    case "Thane, Hiranandani Estate":
      if (age == ages0) {
        time3.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time6.style.display = "none";
        time5.style.display = "none";
        time4.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      } else if (age == ages2) {
        time5.style.display = "block";

        time0.style.display = "none";
        time1.style.display = "none";
        time2.style.display = "none";
        time6.style.display = "none";
        time3.style.display = "none";
        time4.style.display = "none";
        time7.style.display = "none";
        time00.style.display = "none";
      } else if (age == ages3) {
        if (dayName == "Saturday" || dayName == "Sunday") {
          time2.style.display = "block";

          time0.style.display = "none";
          time1.style.display = "none";
          time3.style.display = "none";
          time6.style.display = "none";
          time5.style.display = "none";
          time4.style.display = "none";
          time7.style.display = "none";
          time00.style.display = "none";
        } else {
          time6.style.display = "block";

          time0.style.display = "none";
          time1.style.display = "none";
          time2.style.display = "none";
          time3.style.display = "none";
          time5.style.display = "none";
          time4.style.display = "none";
          time7.style.display = "none";
          time00.style.display = "none";
        }
      }
      break;

    default:
      break;
  }
}
