import { Guitar } from "./Guitar";
import { Builder, Type, Wood  } from "../types/index";


export class Inventory {
    guitars: Array<Guitar>;

    constructor() {
        this.guitars = [];
    }

    addGuitar = (serialNumber: string, price: number, builder: Builder, model: string, type: Type, backWood: Wood, topWood: Wood) => {
        const guitar = new Guitar(serialNumber, price, builder, model, type, backWood, topWood);
        this.guitars.push(guitar);
    }

    getGuitar = (serialNumber: string) => {
        return this.guitars.find(v => v.serialNumber === serialNumber) || null;
    }

    search = (searchGuitar: Guitar) => {
        const guitars = this.guitars;
        const matchingGuitars = [];

        if (guitars.length) {
            for (let i = 0; i < guitars.length; i++) {
                const guitar = guitars[i];

                if (searchGuitar.getBuilder() != guitar.getBuilder())
                    continue;

                const model = searchGuitar.getModel().toLocaleLowerCase();
                if ((model != null) && (model != "") && model != guitar.getModel().toLocaleLowerCase()) {
                    continue;
                }

                if (searchGuitar.getType() != guitar.getType()) {
                    continue;
                }
                if (searchGuitar.getTopWood() != guitar.getTopWood()) {
                    continue;
                }
                matchingGuitars.push(guitar);
            }
            return matchingGuitars;
        } else {
            return null;
        }
    }

    
}