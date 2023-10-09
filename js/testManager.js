import {Component, Property, MeshComponent} from '@wonderlandengine/api';
import { Test } from './test';

/**
 * testManager
 */
export class TestManager extends Component {
    static TypeName = 'testManager';
    /* Properties that are configurable in the editor */
    static Properties = {
        //param: Property.float(1.0)
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
    isWinning = false;

    static onRegister(engine) {
        /* Triggered when this component class is registered.
         * You can for instance register extra component types here
         * that your component may create. */
    }

    init() {
        console.log('init() with param', this.param);
    }

    start() {
        //console.log('start() with param', this.param);
        
        this.b0 = this.block0.getComponent('test');
        this.b1 = this.block1.getComponent('test');
        this.b2 = this.block2.getComponent('test');
        this.b3 = this.block3.getComponent('test');
        this.b4 = this.block4.getComponent('test');
        this.b5 = this.block5.getComponent('test');
        this.b6 = this.block6.getComponent('test');
        this.b7 = this.block7.getComponent('test');
        this.b8 = this.block8.getComponent('test');
        
        this.blockArray = [
            [this.b0, this.b1, this.b2],
            [this.b3, this.b4, this.b5],
            [this.b6, this.b7, this.b7]
        ]
    }

    update(dt) {
        /* Called every frame. */
        this.isWin();
        this.isBoardFull();
    }
    
    //Checking who is winner
    isWin() {
        
        for(var i = 0; i < 3; i++){
            
            //Horizontal Check
            if(this.blockArray[i][0].player !== '0'){
                
                //Player1 win
                if(this.blockArray[i][0].player === '1' && this.blockArray[i][1].player === '1' && this.blockArray[i][2].player === '1'){
                    
                    this.isWinning = true;
                    console.log("Player1 is winner");
                }

                //Player2 win
                if(this.blockArray[i][0].player === '2' && this.blockArray[i][1].player === '2' && this.blockArray[i][2].player === '2'){
                    
                    this.isWinning = true;
                    console.log("Player2 is winner");
                }
            }

            //Vertical Check
            if(this.blockArray[0][i].player !== '0'){

                //Player1 win
                if(this.blockArray[0][i].player === '1' && this.blockArray[1][i].player === '1' && this.blockArray[2][i].player === '1'){
                    
                    this.isWinning = true;
                    console.log("Player1 is winner");
                }

                //Player2 win
                if(this.blockArray[0][i].player === '2' && this.blockArray[1][i].player === '2' && this.blockArray[2][i].player === '2'){
                    
                    this.isWinning = true;
                    console.log("Player2 is winner");
                }
            }
        }
    }

    //Checking board is full
    isBoardFull(){   
        if(this.isWinning === false){
            if(this.blockArray[0][0].player !== '0' && this.blockArray[0][1].player !== '0' && this.blockArray[0][2].player !== '0' && this.blockArray[1][0].player !== '0' && this.blockArray[1][1].player !== '0' && this.blockArray[1][2].player !== '0' && this.blockArray[2][0].player !== '0' && this.blockArray[2][1].player !== '0' && this.blockArray[2][2].player !== '0'){
                console.log("Board is full");
            }
        }
    }

    //turn player
    blockWasClicked()
    {
        this.isPlayer1 = !this.isPlayer1;
    }
}
