function throttle(func, delay) {
    let lastFunc;
    let lastRan;

    return function (...args) {
        const context = this;
        if(!lastRan) {  // 처음 실행시 함수를 즉시 실행하고 실행시간(lastRan)을 저장함
            func.call(context, ...args);
            lastRan = Date.now();
        } else {
            if (lastFunc) clearTimeout(lastFunc);   // 이후 함수를 실행하는 요청이 오면 setTimeout() 함수를 실행하나
            lastFunc = setTimeout( function() {     // 지연시간을 계산하고 이 값이 delay보다 커야 함수를 실행함
                if ((Date.now() - lastRan) >= delay) {
                    func.call(context, ...args);
                    lastRan = Date.now();
                }
            }, delay - (Date.now() - lastRan));
        }
    }
}

var checkPosition = () => {
    const offset = 500;
    const currentScrollPosition = window.pageYOffset;
    const pageBottomPosition= document.body.offsetHeight - window.innerHeight - offset;

    if (currentScrollPosition >= pageBottomPosition) {
        // fetch('/page/next');
        console.log('다음 페이지 로딩');
    }
};

var infiniteScroll = throttle(checkPosition, 300);
window.addEventListener('scroll', infiniteScroll);