import {Component, Property} from '@wonderlandengine/api';

import {TextManager} from './textManager.js';

/**
 * gameManager
 */
export class GameManager extends Component {
    static TypeName = 'gameManager';
    /* Properties that are configurable in the editor */
    static Properties = {

        textManager:Property.object(),

        block0: Property.object(),
        block1: Property.object(),
        block2: Property.object(),
        block3: Property.object(),
        block4: Property.object(),
        block5: Property.object(),
        block6: Property.object(),
        block7: Property.object(),
        block8: Property.object() 
    };

    isPlayer1 = true;
    isEnd= false;

    isWinner1 = false;
    isWinner2 = false;

    isFull = false;


    init() {
        //console.log('init() with param', this.param);
    }

    start() {
        //console.log('start() with param', this.param);

        //this.textBox = this.object.getComponent('text');
        //this.textBox.text = " ";

        this.textManager = this.textManager.getComponent(TextManager);

        
        this.b0 = this.block0.getComponent('block');
        this.b1 = this.block1.getComponent('block');
        this.b2 = this.block2.getComponent('block');
        this.b3 = this.block3.getComponent('block');
        this.b4 = this.block4.getComponent('block');
        this.b5 = this.block5.getComponent('block');
        this.b6 = this.block6.getComponent('block');
        this.b7 = this.block7.getComponent('block');
        this.b8 = this.block8.getComponent('block');
        
        this.blockArray = [
            [this.b0, this.b1, this.b2],
            [this.b3, this.b4, this.b5],
            [this.b6, this.b7, this.b8]
        ]
    }



    update(dt) {
        /* Called every frame. */
    }



    //checking the winner
    isWin() {
        
        for(var i = 0; i < 3; i++){
            
            //Horizontal Check
            if(this.blockArray[i][0].player !== '0' && this.blockArray[i][0].player === this.blockArray[i][1].player && this.blockArray[i][1].player === this.blockArray[i][2].player){
                    
                this.isEnd = true;

                if(this.blockArray[i][i].player === '1'){
                    //this.textBox.text = "Player1 is winner";
                    this.isWinner1 = true;
                }
                
                if(this.blockArray[i][i].player === '2'){
                    //this.textBox.text = "Player2 is winner"
                    this.isWinner2 = true;
                }
            }

            //Vertical Check
            if(this.blockArray[0][i].player !== '0' && this.blockArray[0][i].player === this.blockArray[1][i].player && this.blockArray[1][i].player === this.blockArray[2][i].player){
                    
                this.isEnd = true;
                
                if(this.blockArray[i][i].player === '1'){
                    //this.textBox.text = "Player1 is winner";
                    this.isWinner1 = true;
                }
                
                if(this.blockArray[i][i].player === '2'){
                    //this.textBox.text = "Player2 is winner"
                    this.isWinner2 = true;
                }
            }            
        }

        
        //Diagonal Check
        // \
        if(this.blockArray[0][0].player !== '0' && this.blockArray[0][0].player === this.blockArray[1][1].player && this.blockArray[1][1].player === this.blockArray[2][2].player){
                
            this.isEnd = true;

            if(this.blockArray[0][0].player === '1'){
                //this.textBox.text = "Player1 is winner";
                this.isWinner1 = true;
            }

            if(this.blockArray[0][0].player === '2'){
                //this.textBox.text = "Player1 is winner";
                this.isWinner2 = true;
            }
        }

        // /
        if(this.blockArray[0][2].player !== '0' && this.blockArray[0][2].player === this.blockArray[1][1].player && this.blockArray[1][1].player === this.blockArray[2][0].player){
            this.isEnd = true;

            if(this.blockArray[0][2].player === '1'){

                this.isWinner1 = true;
            }

            if(this.blockArray[0][2].player === '2'){
                
                this.isWinner2 = true;
            }
        }

        if(this.isWinner1 || this.isWinner2){
            
            this.textManager.updateText();
        }
        
    }

    //Checking board is full
    isBoardFull(){

        if(this.blockArray[0][0].player !== '0' && this.blockArray[0][1].player !== '0' && this.blockArray[0][2].player !== '0' && this.blockArray[1][0].player !== '0' && this.blockArray[1][1].player !== '0' && this.blockArray[1][2].player !== '0' && this.blockArray[2][0].player !== '0' && this.blockArray[2][1].player !== '0' && this.blockArray[2][2].player !== '0'){
                
            this.isEnd = true;
            
            this.isFull = true;
            //this.textBox.text = "Board is full";
            //console.log("Board is full");

            this.textManager.updateText();
        }
    }

    //turn player
    blockWasClicked()
    {
        this.isPlayer1 = !this.isPlayer1;

        this.isWin();
        this.isBoardFull();
    }
}
