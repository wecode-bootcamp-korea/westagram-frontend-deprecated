//반복함수
const repeatFunction = (elements, functionName, eventName) => {
    for (let element of elements) {
        element.addEventListener(eventName, (e) => {
            functionName(e.target);
        })
    };
}
