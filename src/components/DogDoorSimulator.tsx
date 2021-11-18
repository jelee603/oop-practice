import React, { useState } from 'react';
import { DogDoor } from '../classes/DogDoor';
import { Remote } from '../classes/Remote';

const door = new DogDoor();
const remote = new Remote(door);

const DogDoorSimulator = () => {
    const [log, setLog] = useState(['']);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const spanStyle = {
        display: "block",
        borderBottom: "0.5px solid #ccc",
        fontSize: "15px",
        lineHeight: "25px",
        paddingLeft: "10px",
    };
    
    function onClick() {
        remote.pressButton(showLog);
        setButtonDisabled(true);
    }

    function showLog(text: string) {
        setLog((prevArray) => [...prevArray, text]);
    }

    return (
    <div>
        <div>Pressing the remote control button...</div>
        <button type="button" onClick={onClick} disabled={buttonDisabled}>깅아지 문 테스트</button>
        <div>{log.map((item: string, index: number) => item !== "" && <span style={spanStyle} key={index}>{item}</span>)}</div>
    </div>
    
    );

};

export default DogDoorSimulator;