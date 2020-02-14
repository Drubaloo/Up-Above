// 199: Uranus
// 208: Pluto
// 219: Neptune
// 238: Jupiter
// 239: Mars
// 240: Mercury
// 241: Saturn
// 243: Earth
// 244: Venus

// moon variables
var moon1 = $("#mercury-moon")
var moon2 = $("#venus-moon")
var moon3 = $("#earth-moon")
var moon4 = $("#mars-moon")
var moon5 = $("#jupiter-moon")
var moon6 = $("#saturn-moon")
var moon7 = $("#uranus-moon")
var moon8 = $("#neptune-moon")
var moon9 = $("#pluto-moon")

// discovered variables
// var mercuryDiscovered = $("#mercury-discovered")
// var venusDiscovered = $("#venus-discovered")
// var earthDiscovered = $("#earth-discovered")
// var marsDiscovered = $("#mars-discovered")
// var jupiterDiscovered = $("#jupiter-discovered")
// var saturnDiscovered = $("#saturn-discovered")
// var uranusDiscovered = $("#uranus-discovered")
// var neptuneDiscovered = $("#neptune-discovered")
// var plutoDiscovered = $("#pluto-discovered")


var planets = [240, 244, 243, 239, 238, 241, 199, 219, 208]
var queryURL = "https://api.le-systeme-solaire.net/rest/bodies/"
$.ajax({
    url: queryURL,
    method: "GET"

}).then(function (response) {
    console.log(response.bodies[planets[2]].moons.length)

//   var planetIndex = 1;
//     for (var i = 0; i < planets.length; i++) {

//         moon1.text(response.bodies[planets][i].moons)

        

//         planetIndex += 1;

//     }
})