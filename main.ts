let score = 0
let highScore = 0
let computersChoice = randint (1,10)
let count = 0

input.onButtonPressed(Button.AB, function () {
    let playersChoice = 0
    basic.showString("Icon you're looking for:")
    if (computersChoice == 1){
        basic.showIcon(IconNames.Angry)
    }
    else if (computersChoice == 2){
        basic.showIcon(IconNames.Duck)
    }
    else if (computersChoice == 3){
        basic.showIcon(IconNames.Butterfly)
    }
    else if (computersChoice == 3){
        basic.showIcon(IconNames.SmallHeart)
    }
    else if (computersChoice == 4){
        basic.showIcon(IconNames.Duck)
    }
    else if (computersChoice == 5){
        basic.showIcon(IconNames.Happy)
    }
    else if (computersChoice == 6){
        basic.showIcon(IconNames.Ghost)
    }
    else if (computersChoice == 7){
        basic.showIcon(IconNames.Cow)
    }
    else if (computersChoice == 8){
        basic.showIcon(IconNames.Giraffe)
    }
    else if (computersChoice == 9){
        basic.showIcon(IconNames.Rollerskate)
    }
    else {
        basic.showIcon(IconNames.Umbrella)
    }
    for (let x=0; x<30; x++){
        let randomIcons = randint(1,10)
        if (randomIcons == 1){
            basic.showIcon(IconNames.Angry)
            randomIcons = randint(1,10)
        }
        else if (randomIcons == 2){
            basic.showIcon(IconNames.Duck)
            randomIcons = randint(1,10)
        }
        else if (randomIcons == 3){
            basic.showIcon(IconNames.Butterfly)
            randomIcons = randint(1,10)
        }
        else if (randomIcons == 3){
            basic.showIcon(IconNames.SmallHeart)
            randomIcons = randint(1,10)
        }
        else if (randomIcons == 4){
            basic.showIcon(IconNames.Duck)
            randomIcons = randint(1,10)
        }
        else if (randomIcons == 5){
            basic.showIcon(IconNames.Happy)
            randomIcons = randint(1,10)
        }
        else if (randomIcons == 6){
            basic.showIcon(IconNames.Ghost)
            randomIcons = randint(1,10)
        }
        else if (randomIcons == 7){
            basic.showIcon(IconNames.Cow)
            randomIcons = randint(1,10)
        }
        else if (randomIcons == 8){
            basic.showIcon(IconNames.Giraffe)
            randomIcons = randint(1,10)
        }
        else if (randomIcons == 9){
            basic.showIcon(IconNames.Rollerskate)
            randomIcons = randint(1,10)
        }
        else {
            basic.showIcon(IconNames.Umbrella)
            randomIcons = randint(1,10)
        } 
    }  

    input.onButtonPressed(Button.A, function () {
        playersChoice += 1
        if (playersChoice == 1){
        basic.showIcon(IconNames.Angry)
        }
        else if (playersChoice == 2){
            basic.showIcon(IconNames.Duck)
        }
        else if (playersChoice == 3){
            basic.showIcon(IconNames.Butterfly)
        }
        else if (playersChoice == 3){
            basic.showIcon(IconNames.SmallHeart)
        }
        else if (playersChoice == 4){
            basic.showIcon(IconNames.Duck)
        }
        else if (playersChoice == 5){
            basic.showIcon(IconNames.Happy)
        }
        else if (playersChoice == 6){
            basic.showIcon(IconNames.Ghost)
        }
        else if (playersChoice == 7){
            basic.showIcon(IconNames.Cow)
        }
        else if (playersChoice == 8){
            basic.showIcon(IconNames.Giraffe)
        }
        else if (playersChoice == 9){
            basic.showIcon(IconNames.Rollerskate)
        }
        else {
            basic.showIcon(IconNames.Umbrella)
        }
        if (playersChoice == 11){
            playersChoice = 1
        }
    })
    input.onButtonPressed(Button.B, function (){
        if (playersChoice == computersChoice){
            basic.showString("Correct")
            score += 1
            basic.showNumber(score)
            computersChoice = randint(1,10)
            count +=1
        }
        else{
            basic.showString("Wrong")
            computersChoice = randint(1,10)
            count +=1
        }
    })
    if (count == 11){
        basic.showString("Game over")
        basic.showNumber (score)
        if (score > highScore){
            highScore = score
            basic.showString("New highscore")
            basic.showNumber(highScore)
            score = 0
        }
    }
})