import React from "react";

function handleClick() {
    console.log('[3] 함수 직접 호출')
}

function OnClickEventHandler() {
    return (
        <>
            <h1>OnClickEventHandler</h1>
            <button onClick={function () { console.log('[1] 무명 메서드 호출') }}>[1] 무명 메서드 호출</button>
            <button onClick={() => { console.log('[2] 무명 메서드 호출') }}>[2] 화살표 함수 사용 호출</button>
            <button onClick={handleClick}>[3] 함수 직접 호출</button>
        </>
    );
}

export default OnClickEventHandler;