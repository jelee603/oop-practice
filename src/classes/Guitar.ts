import { GuitarSpec } from './GuitarSpec';
export class Guitar {
    serialNumber: string;
    price: number;
    spec: GuitarSpec;
    
    constructor(serialNumber: string, price: number, spec: GuitarSpec) {
        this.serialNumber = serialNumber;
        this.price = price;
        this.spec = spec;
    }

    getSerialNumber = () => {
        return this.serialNumber;
    }

    getPrice = () => {
        return this.price;
    }

    setPrice = (newPrice:number) => {
        this.price = newPrice;
    }

    getSpec = () => {
        return this.spec;
    }
}