
const secondHandle = document.querySelector('.handle__second')
const minuteHandle = document.querySelector('.handle__minute')
const hourHandle = document.querySelector('.handle__hour')


// requestAnimationFrame(setHandles)
setInterval(() => {
    setHandles()
}, 1000)
function setHandles() {

const d = new Date()
const hours = d.getHours()
const minutes = d.getMinutes()
const seconds = d.getSeconds()

const extraminutesAngle = seconds * 0.1
const minutesAngle = minutes * 6 + extraminutesAngle

const extrahoursAngle = minutes * 0.5
const hoursAngle = hours * 30 + extrahoursAngle


hourHandle.style.transform = `translateX(-50%) rotate(${hoursAngle}deg)`
minuteHandle.style.transform = `translateX(-50%) rotate(${minutesAngle}deg)`
secondHandle.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`
// requestAnimationFrame(setHandles)

}