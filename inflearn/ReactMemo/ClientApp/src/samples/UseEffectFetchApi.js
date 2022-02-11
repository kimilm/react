import React, { useState, useEffect } from "react";

// useEffect를 사용하여 페이지 로드시 API 호출하기

function UseEffectFetchApi() {

    const [forecasts, setForecasts] = useState(null);

    // 페이지 로드 이벤트
    useEffect(() => {
        //ASP.NET core Web 생성시 기본 작성되는 Api
        fetch('/weatherforecast')
            .then(response => response.json())
            .then(setForecasts)
            .catch(console.error);
    }, []);

    return (
        <>
            <h1>UseEffectFetchApi</h1>
            {JSON.stringify(forecasts)}
        </>
    );
}

export default UseEffectFetchApi;