function Left () {
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 0)
    StopIn(400)
}
function StopIn (time: number) {
    basic.pause(time)
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
}
function Forward (time: number) {
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P2, 0)
    StopIn(time)
}
input.onButtonPressed(Button.A, function () {
    Forward(1000)
    Left()
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    Forward(1000)
    Right()
})
function Right () {
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P2, 180)
    StopIn(400)
}
function Backward (time: number) {
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 180)
    StopIn(time)
}
