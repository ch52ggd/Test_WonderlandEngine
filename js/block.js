import {Component, Property, Material, MeshComponent} from '@wonderlandengine/api';

import {GameManager} from './gameManager.js';

/**
 * block
 */
export class Block extends Component {
    static TypeName = 'block';
    /* Properties that are configurable in the editor */
    static Properties = {

        player1Material: Property.material(),
        player2Material: Property.material(),
        gameManager: Property.object()
    };

    meshComponent;
    gameManager;

    player = '0';

    init() {
        //console.log('init() with param', this.param);
    }

    start() {
        //console.log('start() with param', this.param);

        this.cursorTarget = this.object.getComponent('cursor-target');
        this.cursorTarget.addClickFunction(this.onClick.bind(this));

        this.meshComponent = this.object.getComponent(MeshComponent);

        this.gameManager = this.gameManager.getComponent(GameManager);
    }

    update(dt) {
        /* Called every frame. */
    }

    onClick(){
        //console.log("Hello "+ this.object.name);

        //click ignore
        if(this.meshComponent.material.equals(this.player1Material) || this.meshComponent.material.equals(this.player2Material)){
            console.log("click ignore");
            return;
        }
        else if(this.gameManager.isEnd === true){
            console.log("click ignore");
        }
        else{
            if(this.gameManager.isPlayer1 === true){
                this.meshComponent.material = this.player1Material;
                this.player = '1';
            }
            else{
                this.meshComponent.material = this.player2Material;
                this.player = '2';
            }
        }

        //Tell the server, that this block was clicked.
        this.gameManager.blockWasClicked();
    }
}
