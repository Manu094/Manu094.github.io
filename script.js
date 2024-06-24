const sideWave = document.querySelector("#side-wave");
const arrows = document.getElementsByClassName("arrow-button")
const waveRatio = 1/3
const waveWidth = window.innerHeight * waveRatio
const waveScreenProportion = window.innerWidth / waveWidth


let pages = document.getElementsByClassName("page")


const pageSections = {
  hero: {
    scaleX: 0.1,
    color: "var(--wave-hero-color)",
  },
  vision: {
    scaleX: 0.15,
    color: "var(--wave-vision-color)",
  },
  works: {
    scaleX: 0.2,
    color: "var(--wave-works-color)",
  },
  contact: {
    scaleX: 0.25,
    color: "var(--wave-contact-color)",
  },
}

function elmntScale(entry) {
  let sectId = entry.target.attributes.id.value
  let scale = pageSections[sectId].scaleX
  return scale * waveScreenProportion
}

function elmntColor(entry) {
  let sectId = entry.target.attributes.id.value
  let color = pageSections[sectId].color
  return color
}

function changeTitleColor(entry){
  let sectId = entry.target.attributes.id.value
  let titleElmnt = document.querySelector(`#${sectId}-shortcut`)
  let color = pageSections[sectId].color
  titleElmnt.style.borderColor = `${color}`
}

function resetTitleColor(entry) {
  let sectId = entry.target.attributes.id.value
  let titleElmnt = document.querySelector(`#${sectId}-shortcut`)
  titleElmnt.style.borderColor = "transparent"
}


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const intersecting = entry.isIntersecting
    if (intersecting) {
      sideWave.style.transform = `scalex(${elmntScale(entry)})`
      sideWave.style.color = `${elmntColor(entry)}`
      changeTitleColor(entry)
    }
    else {
      resetTitleColor(entry)
    }
  })
}, { threshold: [0.7]})



observer.observe(document.querySelector("#hero"))
observer.observe(document.querySelector("#vision"))
observer.observe(document.querySelector("#works"))
observer.observe(document.querySelector("#contact"))