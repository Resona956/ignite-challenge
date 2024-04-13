let Dice_Number = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Square)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    Dice_Number = randint(1, 8)
    if (Dice_Number == 1) {
        basic.showNumber(1)
    }
    if (Dice_Number == 2) {
        basic.showNumber(2)
    }
    if (Dice_Number == 3) {
        basic.showNumber(3)
    }
    if (Dice_Number == 4) {
        basic.showNumber(4)
    }
    if (Dice_Number == 5) {
        basic.showNumber(5)
    }
    if (Dice_Number == 6) {
        basic.showNumber(6)
    }
    if (Dice_Number == 7) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
    if (Dice_Number == 8) {
        basic.showLeds(`
            # . # . .
            . # . # .
            . # . # .
            . # # # .
            # # # # #
            `)
    }
})
