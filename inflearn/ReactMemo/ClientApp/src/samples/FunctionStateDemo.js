import React, { useState } from 'react';

// useState() 훅을 사용하여 함수형 컴포넌트의 상태 관리

function FunctionStateDemo() {
    const [myMessage, setMyMessage] = useState("Hi");

    return (
        <>
            <h1>{myMessage}</h1>
            <button onClick={() => setMyMessage("Hello")}>
                Hello
            </button>
            <button onClick={() => setMyMessage("Bye")}>
                Bye
            </button>
        </>
    );
}

export default FunctionStateDemo;