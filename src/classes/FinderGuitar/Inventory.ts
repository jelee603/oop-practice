import { Guitar } from "./Guitar";
import { GuitarSpec } from "./GuitarSpec";
import { Builder, Type, Wood  } from "./types/index";
export class Inventory {
    guitars: Array<Guitar>;

    constructor() {
        this.guitars = [];
    }

    addGuitar = (serialNumber: string, price: number, builder: Builder, model: string, type: Type, backWood: Wood, topWood: Wood) => {
        const spec = new GuitarSpec(builder, model, type, backWood, topWood);
        const guitar = new Guitar(serialNumber, price, spec);
        
        this.guitars.push(guitar);
    }

    getGuitar = (serialNumber: string) => {
        return this.guitars.find(v => v.serialNumber === serialNumber) || null;
    }

    search = (searchSpec: GuitarSpec) => {
        const guitars = this.guitars;
        const matchingGuitars = [];

        if (guitars.length) {
            for (let i = 0; i < guitars.length; i++) {
                const guitar = guitars[i].getSpec();
                const serialNumber = guitars[i].getSerialNumber();
                const price = guitars[i].getPrice();

                if (searchSpec.getBuilder() != guitar.getBuilder())
                    continue;

                const model = searchSpec.getModel().toLocaleLowerCase();
                if ((model != null) && (model != "") && model != guitar.getModel().toLocaleLowerCase()) {
                    continue;
                }

                if (searchSpec.getType() != guitar.getType()) {
                    continue;
                }
                if (searchSpec.getTopWood() != guitar.getTopWood()) {
                    continue;
                }
                matchingGuitars.push({serialNumber, price, ...guitar});
            }
            return matchingGuitars;
        } else {
            return null;
        }
    }

    
}