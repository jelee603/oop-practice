import { Builder, Type, Wood } from '../types/index';

export class GuitarSpec {
  builder: Builder;
  model: string;
  type: Type;
  backWood: Wood;
  topWood: Wood;

  constructor(
    builder: Builder,
    model: string,
    type: Type,
    backWood: Wood,
    topWood: Wood
  ) {
    this.builder = builder;
    this.model = model;
    this.type = type;
    this.backWood = backWood;
    this.topWood = topWood;
  }

  getBuilder = () => {
    return this.builder;
  };

  getModel = () => {
    return this.model;
  };

  getType = () => {
    return this.type;
  };

  getBackWood = () => {
    return this.backWood;
  };

  getTopWood = () => {
    return this.topWood;
  };
}
