export class DogDoor {
    isOpen: boolean;
    
    constructor() {
        this.isOpen = false;
    }

    open = (callback: Function) => {
        console.log('The dog door opens');
   
        this.isOpen = true;
        callback('The dog door opens'); 
    }

    close = (callback: Function) => {
        console.log('The dog door closes');
        this.isOpen = false;

        callback('The dog door closes');
    }

}