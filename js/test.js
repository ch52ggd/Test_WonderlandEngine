import {Component, Property, Material, MeshComponent} from '@wonderlandengine/api';

import {TestManager} from './testManager.js';

/**
 * test
 */
export class Test extends Component {
    static TypeName = 'test';
    /* Properties that are configurable in the editor */
    static Properties = {
        player1Material: Property.material(),
        player2Material: Property.material(),
        gameManager: Property.object()
    };

    meshComponent;
    gameManager;


    
    init() {
        //console.log('init() with param', this.param);
    }

    start() {
        //console.log('start() with param', this.param);

        this.cursorTarget = this.object.getComponent('cursor-target');
        this.cursorTarget.addClickFunction(this.onClick.bind(this));

        this.meshComponent = this.object.getComponent(MeshComponent);

        this.gameManager = this.gameManager.getComponent(TestManager);
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
        else{
            if(this.gameManager.isPlayer1 === true){
                this.meshComponent.material = this.player1Material;
            }
            else{
                this.meshComponent.material = this.player2Material;
            }
        }

        //Tell the server, that this block was clicked.
        this.gameManager.blockWasClicked();
    }
}
