import { ChangeEvent, useState } from 'react';
import { Guitar } from '../classes/FinderGuitar/Guitar';
import { GuitarSpec } from '../classes/FinderGuitar/GuitarSpec';
import { Inventory } from '../classes/FinderGuitar/Inventory';
import { Type, Builder, Wood } from '../classes/FinderGuitar/types';

const FinderGuitar = () => {
    const [result, setResult] = useState<string>('');
    const [txtGuitar, setTextGuitar] = useState<string>('');
    const inventory = new Inventory();
    
    inventory.addGuitar("V95693", 1499, Builder.FENDER, "Stratocastor", Type.ELECTRIC, Wood.ALDER, Wood.ALDER);
    inventory.addGuitar("V95121", 1549, Builder.FENDER, "Stratocastor", Type.ELECTRIC, Wood.ALDER, Wood.ALDER);
    inventory.addGuitar("V91111", 1600, Builder.MARTIN, "OM-18", Type.ACOUSTIC, Wood.MAHOGANY, Wood.ADIRONDACK);

    const onSearch = () => {
        if (txtGuitar !== "" && txtGuitar.includes(Builder.FENDER || Builder.MARTIN)) {
            const spec = new GuitarSpec(Builder.FENDER, "Stratocastor", Type.ELECTRIC, Wood.ALDER, Wood.ALDER);
            const matchingGuitars = inventory.search(spec);
            const finder = [];

            if (matchingGuitars) {
                for (let i = 0; i < matchingGuitars.length; i++) {
                    const guitar = matchingGuitars[i];
                    finder.push(`We have a ${guitar.getBuilder()} ${guitar.getType()} guitar: ${guitar.getBackWood()} back and sides, ${guitar.getTopWood()} top.
                    You can have it only $${guitar.price}!
                    `);
                }
            }
            setResult(`${finder.join('\r\n')}`);
        } else {
            setResult(`Sorry, we have nothing for you.`);
        }
    };
    
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTextGuitar(e.target.value);
    };

   return (
    <div onKeyPress={(e) => { 
        if(e.key=='Enter') {
            onSearch();
            }
        }
    }>
        Finder Guitar Builder
        <input type="text" name="guitar" onChange={onChange}></input>
        <button type="button" onClick={onSearch}>??????</button>
        <br/>
        <br/>
        <span style={{whiteSpace:'pre-line'}}>{result}</span>

    </div>
    );
};

export default FinderGuitar;
