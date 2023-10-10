import {Component, Property} from '@wonderlandengine/api';

import {GameManager} from './gameManager.js';

/**
 * textManager
 */
export class TextManager extends Component {
    static TypeName = 'textManager';
    /* Properties that are configurable in the editor */
    static Properties = {

        gameManager: Property.object()
    };

    gameManager;

    init() {
        //console.log('init() with param', this.param);
    }

    start() {
        //console.log('start() with param', this.param);

        this.textBox = this.object.getComponent('text');
        this.textBox.text = " ";

        this.gameManager = this.gameManager.getComponent(GameManager);
    }

    // update(dt) {
    // /* Called every frame. */

    //     this.gameManager.isWin();

    //     if(this.gameManager.isWinner1 === true){

    //         this.textBox.text = "Player 1 Win!";
    //     }
        
    //     if(this.gameManager.isWinner2 === true){

    //         this.textBox.text = "Player 2 Win!";
    //     }



    //     this.gameManager.isBoardFull();

    //     if(this.gameManager.isFull === true){

    //         this.textBox.text = "Board is full";
    //     }
    // }

    updateText() {
    
        if(this.gameManager.isWinner1 === true){
    
            this.textBox.text = "Player 1 Win!";
        }
            
        if(this.gameManager.isWinner2 === true){
    
            this.textBox.text = "Player 2 Win!";
        }
    
    
    
        if(this.gameManager.isFull === true){
    
            this.textBox.text = "Board is full";
        }
    }
}
