basic.forever(function () {
    basic.showNumber(input.temperature())
    while (input.temperature() > 25) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Happy)
    }
    while (input.temperature() < 23) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Sad)
    }
})
