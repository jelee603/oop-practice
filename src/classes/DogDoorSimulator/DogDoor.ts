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

    progress = (callback: Function) => {
        callback(`\nFido has gone outside...`);
        const timer = setTimeout(() => {
            callback(`\nFido's all done...`);
            callback(`\nFido's back inside...`);
            clearTimeout(timer);
        }, 1000);
    } 

}