import React, { useState, useEffect } from 'react';

function UseEffectDemo() {
    const [agree, setAgree] = useState(false);

    // useEffect는 클래스형 컴포넌트의 componentDidMount와 유사한 기능을 함. 컴포넌트가 업데이트될 시 수행
    useEffect(() => {
        console.log("페이지 로드 또는 UI 변경")
    });

    // 두 번째 매개변수를 빈 배열을 전달하면 페이지 최초 로드시에만 실행
    useEffect(() => {
        console.log("페이지 로드")
    }, []);

    return (
        <>
            <h1>UseEffectDemo</h1>
            <input type="checkbox" value={agree} onChange={() => setAgree(agree => !agree)} />
            {agree ? "동의함" : "동의하지 않음"}
        </>
    );
}

export default UseEffectDemo;