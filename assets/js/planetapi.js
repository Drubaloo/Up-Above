// 199: Uranus
// 208: Pluto
// 219: Neptune
// 238: Jupiter
// 239: Mars
// 240: Mercury
// 241: Saturn
// 243: Earth
// 244: Venus

var planets = [240, 244, 243, 239, 238, 241, 199, 219, 208]
var queryURL = "https://api.le-systeme-solaire.net/rest/bodies/"
$.ajax({
    url: queryURL,
    method: "GET"

}).then(function (response) {

    // moon length
    for (var i = 0; i < planets.length; i++) {
        if (!response.bodies[planets[i]].moons) {
            $(`#${response.bodies[planets[i]].id}-moon`).text("Moons: 0")
        } else {
            $(`#${response.bodies[planets[i]].id}-moon`).text("Number of Moons: " + response.bodies[planets[i]].moons.length)
        }
        //gravity
        $(`#${response.bodies[planets[i]].id}-gravity`).text("Gravity: " + response.bodies[planets[i]].gravity + " m/s\xB2")
    }
})