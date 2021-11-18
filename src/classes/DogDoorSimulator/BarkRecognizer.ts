import { DogDoor } from "./DogDoor";

export class BarkRecognizer {
    door: DogDoor;
    
    constructor(door: DogDoor) {
        this.door = door;
    }

    recognize = (bark: string, callback: Function) => {
        console.log(`BarkRecognizer: Heard a ${bark}`);
        
        callback(`BarkRecognizer: Heard a ${bark}`);
        this.door.open(callback);
    }
}