import React, { useState } from 'react';
import { DogDoor } from '../classes/DogDoor';
import { Remote } from '../classes/Remote';

const door = new DogDoor();
const remote = new Remote(door);

const DogDoorSimulator = () => {
    const [log, setLog] = useState(['']);

    const spanStyle = {
        display: "block",
        borderBottom: "0.5px solid #ccc",
        fontSize: "15px",
        lineHeight: "25px",
        paddingLeft: "10px",
    };
    
    function onClick() {
        showLog('Pressing the remote control button...');
        remote.pressButton(showLog);
    }

    function showLog(text: string) {
        setLog((prevArray) => [...prevArray, text]);
    }

    return (
    <div>
        <button type="button" onClick={onClick}>깅아지 문 테스트</button>
        <div>{log.map((item: string, index: number) => item !== "" && <span style={spanStyle} key={index}>{item}</span>)}</div>
    </div>
    
    );

};

export default DogDoorSimulator;