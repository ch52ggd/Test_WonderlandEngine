import {Component, Property} from '@wonderlandengine/api';

/**
 * testManager
 */
export class TestManager extends Component {
    static TypeName = 'testManager';
    /* Properties that are configurable in the editor */
    static Properties = {
        //param: Property.float(1.0)
        
        
    };

    isPlayer1 = true;

    gameBoard = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
    ];
    


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
    }

    update(dt) {
        /* Called every frame. */
    }


    //Checking who is winner
    isWin(){

    }

    //Checking board is full
    isBoardFull(){

    }

    //turn player
    blockWasClicked()
    {
        this.isPlayer1 = !this.isPlayer1;
        console.log(this.isPlayer1);
    }
}
