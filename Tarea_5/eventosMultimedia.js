let video = document.getElementById("video")

video.addEventListener("play", (evt) => {
  console.log("Diste play")
})

video.addEventListener("ended", (evt) => {
  console.log("Termino el video")
})

video.addEventListener("pause", (evt) => {
  console.log("Medio pausado")
})