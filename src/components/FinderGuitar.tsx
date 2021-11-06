import { ChangeEvent, useState } from 'react';
import { Guitar } from '../classes/Guitar';
import { Inventory } from '../classes/Inventory';
import { Type, Builder, Wood } from '../types';

const FinderGuitar = () => {
    const [result, setResult] = useState<string>('');
    const [txtGuitar, setTextGuitar] = useState<string>('');
    const inventory = new Inventory();
    inventory.addGuitar("V95693", 1499, Builder.FENDER, "Stratocastor", Type.ELECTRIC, Wood.ALDER, Wood.ALDER);
    inventory.addGuitar("V95121", 1549, Builder.FENDER, "Stratocastor", Type.ELECTRIC, Wood.ALDER, Wood.ALDER);

    const onSearch = () => {
        if (txtGuitar !== "" && txtGuitar == Builder.FENDER) {
            const searchGuitar = new Guitar("", 0, Builder.FENDER, "Stratocastor", Type.ELECTRIC, Wood.ALDER, Wood.ALDER);
            const matchingGuitars = inventory.search(searchGuitar);
            const finder = [];

            if (matchingGuitars) {
                for (let i = 0; i < matchingGuitars.length; i++) {
                    const guitar = matchingGuitars[i];
                    finder.push(`We have a ${guitar.getBuilder()} ${guitar.getType()} guitar: ${guitar.getBackWood()} back and sides, ${guitar.getTopWood()} top.
                    You can have it only $${guitar.getPrice()}!
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
    <div onKeyPress={onSearch}>
        Finder Guitar Builder
        <input type="text" name="guitar" onChange={onChange}></input>
        <button type="button" onClick={onSearch}>찾기</button>
        <br/>
        <br/>
        <span style={{whiteSpace:'pre-line'}}>{result}</span>

    </div>
    );
};

export default FinderGuitar;
