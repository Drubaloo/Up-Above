$(`#submit`).on(`click`, function (event) {
    event.preventDefault()

    var queryURL = `https://api.nasa.gov/planetary/apod?date=` + $(`#year`).val() + `-` + $(`#month`).val() + `-` + $(`#day`).val() + `&api_key=FqKeM986TCmDmnbE8alw7dbFd9bAGT3hhgaEGrpt`

    $(`#potd`).attr(`src`, '')
    $(`#info`).empty()

    $.ajax({
        url: queryURL,
        method: "GET"

    }).then(function (response) {

        var potd = response.hdurl

        $(`#potd`).attr(`src`, potd)
        $(`#potd`).css({ 'width': '700px', 'height': '700px' })

        document.getElementById(`nasaInfo`).classList.add(`section`)
        document.getElementById(`nasaInfo`).classList.remove(`bottom`)

        var info = response.explanation

        $(`#info`).text(info)

    })

})
