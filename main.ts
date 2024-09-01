/**
 * Si T >34ºC no se desarrollan
 * 
 * Si T<26ºC no se desarrollan
 */
basic.forever(function () {
    basic.showNumber(input.temperature())
    while (input.temperature() > 34) {
        basic.showNumber(input.temperature())
        basic.showString("T. Alta")
    }
    while (input.temperature() < 26) {
        basic.showNumber(input.temperature())
        basic.showString("T. Baja")
    }
    while (input.temperature() >= 26 && input.temperature() <= 34) {
        basic.showNumber(input.temperature())
        basic.showString("T. Normal")
    }
})
