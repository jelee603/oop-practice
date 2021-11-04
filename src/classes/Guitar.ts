import { Builder, Type, Wood  } from "../types/index";

export class Guitar {
    serialNumber: string;
    price: number;
    builder: Builder;
    model: string;
    type: Type;
    backWood: Wood;
    topWood: Wood;
    
    constructor(serialNumber: string, price: number, builder: Builder, model: string, type: Type, backWood: Wood, topWood: Wood) {
        this.serialNumber = serialNumber;
        this.price = price;
        this.builder = builder;
        this.model = model;
        this.type = type;
        this.backWood = backWood;
        this.topWood = topWood;
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

    getBuilder = () => {
        return this.builder;
    }

    getModel = () => {
        return this.model;
    }

    getType = () => {
        return this.type;
    }

    getBackWood = () => {
        return this.backWood;
    }

    getTopWood = () => {
        return this.topWood;
    }


}