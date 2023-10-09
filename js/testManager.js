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
    isEnd= false;

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

        this.textBox = this.object.getComponent('text');
        this.textBox.text = " ";
        
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
        //this.isBoardFull();
    }
    


    //Checking who is winner
    isWin() {
        
        for(var i = 0; i < 3; i++){
            
            //Horizontal Check
            if(this.blockArray[i][0].player !== '0' && this.blockArray[i][0].player === this.blockArray[i][1].player && this.blockArray[i][1].player === this.blockArray[i][2].player){
                    
                this.isEnd = true;

                if(this.blockArray[i][i].player === '1'){
                    this.textBox.text = "Player1 is winner";
                }
                
                if(this.blockArray[i][i].player === '2'){
                    this.textBox.text = "Player2 is winner"
                }
            }

            //Vertiacal Check
            if(this.blockArray[0][i].player !== '0' && this.blockArray[0][i].player === this.blockArray[1][i].player && this.blockArray[1][i].player === this.blockArray[2][i].player){
                    
                this.isEnd = true;
                
                if(this.blockArray[i][i].player === '1'){
                    this.textBox.text = "Player1 is winner";
                }
                
                if(this.blockArray[i][i].player === '2'){
                    this.textBox.text = "Player2 is winner"
                }
            }            
        }

        /*
        //Diagonal Check
        if(this.blockArray[0][0].player !== '0' && this.blockArray[0][0].player === this.blockArray[1][1].player && this.blockArray[1][1].player === this.blockArray[2][2].player){
                
            this.isEnd = true;

            if(this.blockArray[0][0].player === '1'){
                this.textBox.text = "Player1 is winner";
            }

            if(this.blockArray[0][0].player === '2'){
                this.textBox.text = "Player1 is winner";
            }
        }
        */
    }

    //Checking board is full
    isBoardFull(){

        if(this.blockArray[0][0].player !== '0' && this.blockArray[0][1].player !== '0' && this.blockArray[0][2].player !== '0' && this.blockArray[1][0].player !== '0' && this.blockArray[1][1].player !== '0' && this.blockArray[1][2].player !== '0' && this.blockArray[2][0].player !== '0' && this.blockArray[2][1].player !== '0' && this.blockArray[2][2].player !== '0'){
                
            this.isEnd = true;
            
            this.textBox.text = "Board is full";
            console.log("Board is full");
        }
    }

    //turn player
    blockWasClicked()
    {
        this.isPlayer1 = !this.isPlayer1;
    }
}
