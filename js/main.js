const d = document;
let game = ["rock", "scissor", "paper"];


const rock = d.getElementById('rock');
const paper = d.getElementById('paper');
const scissor = d.getElementById('scissor');
const play = d.getElementById('play');

class Juego{

    constructor(s){
        this.random = Math.floor(Math.random()*3);
        this.computer = game[this.random];
        this.active(this.computer, s);
        this.computer = this.changeWeapon(this.computer);
        this.you = this.changeWeapon(s.id);
        this.validate(this.computer, this.you);
    }

    active(computer, you){
        this.select = d.getElementById(computer+'-computer');
        this.select.classList.add('active');
        this.youselect = you;
        this.youselect.classList.add('active');
    }

    changeWeapon(w){
        switch(w){
            case 'rock': return 0
                        break;
            case 'paper': return 1
                        break;
            default: return 2;
        }
    }


    //0 = rock
    //1 = paper
    //2 = scissor

    validate(computer, you){
        console.log("computer " +this.computer);
        console.log("you " +this.you);
        
        /*if(you == computer){
            this.tie();
            console.log('Empataste');
        }else if(you == 0 && computer == 1){
            this.loss();
            console.log('Perdiste');
        }else if(you == 0 && computer == 2){
            this.win();
            console.log('Ganaste');
        }else if(you == 1 && computer == 0){
            this.win();
            console.log('Ganaste');
        }else if(you == 1 && computer == 2){
            this.loss();
            console.log('Perdiste');
        }else if(you == 2 && computer == 0){
            this.loss();
            console.log("Perdiste");
        }else if(you == 2 && computer == 1){
            this.win();
            console.log('Ganaste');
        }*/

        if(you == computer){
            this.tie();
            console.log('Empataste');
        }else if(you == 0 && computer == 1 || you == 1 && computer == 2 || you == 2 && computer == 0){
            this.loss();
            console.log('Perdiste');
        }else if(you == 0 && computer == 2 || you == 1 && computer == 0 || you == 2 && computer == 1){
            this.win();
            console.log('Ganaste');
        }

    }

    tie(){
        tie.style.visibility = 'visible';
        setTimeout(() => {
            tie.style.visibility = 'hidden';
            this.select.classList.remove('active');
            this.youselect.classList.remove('active');
            countTie.textContent++;
        }, 2000);
    }

    win(){
        win.style.visibility = 'visible';
        setTimeout(() => {
            win.style.visibility = 'hidden';
            this.select.classList.remove('active');
            this.youselect.classList.remove('active');
            countWin.textContent++;
        }, 2000);
    }

    loss(){
        loss.style.visibility = 'visible';
        setTimeout(() => {
            loss.style.visibility = 'hidden';
            this.select.classList.remove('active');
            this.youselect.classList.remove('active');
            countLoss.textContent++;
        }, 2000);
    }

}



let btnStart = d.getElementById('btn-start');
btnStart.addEventListener('click', () =>{
    
    play.style.visibility = "hidden";

    rock.addEventListener('click', () => {
        var startGame = new Juego(rock);
    });

    paper.addEventListener('click', () => {
        var startGame = new Juego(paper);
    });

    scissor.addEventListener('click', () => {
        var startGame = new Juego(scissor);
    });

});

