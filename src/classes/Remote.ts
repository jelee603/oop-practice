import { DogDoor } from "./DogDoor";

export class Remote {
    door: DogDoor;
    
    constructor(door: DogDoor) {
        this.door = door;
    }

    pressButton = (callback: Function) => {
        console.log('Pressing the remote control button...');
        
        if (this.door.isOpen) {
            this.door.close(callback);
        } else {
            this.door.open(callback);
        }

        this.door.progress(callback);

        const timer = setTimeout(() => {
            this.door.close(callback);   
            clearTimeout(timer);
        }, 5000);
    } 
    
}