let start = "1."
let endingsFound = []
let showEndings = false

function loadVideos(videoSetNum) {
    start = videoSetNum + "."
    reloadVideo()
}

function reloadVideo() {
    let iframe = document.getElementById("video")
    iframe.src = "https://www.youtube.com/embed/" + line[start] + "?rel=0&autoplay=1";
}

function option1() {
    if (start in endingNum) {
        ending()
        return
    }
    start += "1"
    reloadVideo();
}

function option2() {
    if (start in endingNum) {
        ending()
        return
    }
    start += "2"
    reloadVideo();
}

function back() {
    if (start in endingNum) ending()
    if (start.slice(-1) === ".") return
    start = start.slice(0, -1)
    reloadVideo()
}

function ending() {
    if (start in endingsFound) return
    endingsFound.push(start)
}
