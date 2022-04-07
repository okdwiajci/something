input.onButtonPressed(Button.A, function () {
    counter += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(counter)
    basic.pause(1000)
    basic.clearScreen()
})
let counter = 0
counter = 0
