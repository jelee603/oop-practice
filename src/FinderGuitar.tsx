import {ChangeEvent, useState} from 'react';

interface Guitar {
    serialNumber: string,
    price: bigint,
    builder: string,
    model: string,
    type: string,
    backWood: string,
    topWood: string,
}

interface Inventory {
    guitars: Guitar[],
}

const FinderGuitar = () => {
    const [search, setSearch] = useState<string>('');
    const [guitar, setGuitar] = useState<string>('');

    const onSearch = () => {
        setSearch(`Sorry, ${guitar}, we have nothing for you.`);
    };
    
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setGuitar(e.target.value);
    };

   return (
    <div>
        Finder Guitar
        <input type="text" name="guitar" onChange={onChange}></input>
        <button type="button" onClick={onSearch}>찾기</button><br/>
        <span>{search}</span>
    </div>
    );
};

export default FinderGuitar;
