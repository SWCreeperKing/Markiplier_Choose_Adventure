let start = "1."
let endingsFound = []

function loadVideos(videoSetNum) {
    start = videoSetNum + "."
    reloadVideo()
}

function reloadVideo() {
    let iframe = document.getElementById("video")
    iframe.src = "https://www.youtube.com/embed/" + line[start] + "?rel=0&autoplay=1";
}


function toFirst() {
    start = start.charAt(0)+"."
    reloadVideo()
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

function setStart(strt) {
    start = strt
    reloadVideo()
}

function ending() {
    let key = start.charAt(0)
    if (key in endingsFound) {
        if (!endingsFound[key].includes(start)) endingsFound[key].push(start)
    } else endingsFound[key] = [start]
    save()
    loadEndings()
}

function loadEndings() {
    let div = document.getElementById("endings")
    div.innerHTML = ""
    let ends = {}
    for (const ending in endingNum) {
        let key = ending.charAt(0)
        if (!(key in endingsFound)) continue
        if (endingsFound[key] === null) continue
        if (!(endingsFound[key].includes(ending))) continue
        if (key in ends) ends[key].push(ending)
        else ends[key] = [ending]
    }
    for (const end in ends) {
        console.log("string: " + getString(ends[end]))
        div.innerHTML += getString(ends[end])
    }
}

function getString(arr) {
    if (arr === undefined || arr.length < 1) return ""
    let divString = ""
    for (const key of arr) {
        let end = endingNum[key]
        divString += "<li><button onclick=\"setStart('" + key + "')\">" + end[0] + ". " + end[1] + "</button></li>"
    }
    return "<ul>" + divString + "</ul>"
}

function reset() {
    localStorage.removeItem("endings")
    localStorage.removeItem("start")
    endingsFound = {}
    loadEndings()
    start = "1."
    reloadVideo()
}

function save() {
    localStorage.setItem("endings", JSON.stringify(endingsFound))
    localStorage.setItem("start", JSON.stringify(start))
}
