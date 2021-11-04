import { ChangeEvent, useState } from 'react';
import { Guitar } from './classes/Guitar';
import { Inventory } from './classes/Inventory';
import { Type, Builder, Wood } from './types';

const FinderGuitar = () => {
    const [result, setResult] = useState<string>('');
    const [guitar, setGuitar] = useState<string>('');
    const inventory = new Inventory();
    inventory.addGuitar("V95693", 1499, Builder.FENDER, "Stratocastor", Type.ELECTRIC, Wood.ALDER, Wood.ALDER);

    const onSearch = () => {
        if (guitar !== "" && guitar == Builder.FENDER) {
            const searchGuitar = new Guitar("", 0, Builder.FENDER, "Stratocastor", Type.ELECTRIC, Wood.ALDER, Wood.ALDER);
            const {serialNumber, builder, model, type, backWood} = inventory.search(searchGuitar);
            setResult(`Find, ${serialNumber} ${builder} ${model} ${type} ${backWood}`);
        } else {
            setResult(`Sorry, we have nothing for you.`);
        }
    };
    
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setGuitar(e.target.value);
    };

   return (
    <div>
        Finder Guitar Builder
        <input type="text" name="guitar" onChange={onChange}></input>
        <button type="button" onClick={onSearch}>찾기</button>
        <br/>
        <span>{result}</span>

    </div>
    );
};

export default FinderGuitar;
