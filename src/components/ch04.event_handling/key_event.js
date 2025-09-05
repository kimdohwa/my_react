function App() {

    const KeyboardEven = (pram, event) => {
        console.log(event);
        console.log(`파라미터 : ${pram}`);
        console.log(`이벤트타입 : ${event.type}`);
        console.log(`이벤트요소 : ${event.target}`);
        console.log(`입력된값(아스키코드) : ${event.keyCode}`);
        console.log(`입력된값(문자열) : ${event.key}`);
        console.log(`입력된값(문자열) : ${event.ctrlKey}`);
        console.log(`입력된값(문자열) : ${event.altKey}`);
        console.log(`입력된값(문자열) : ${event.shiftKey}`);

        if (event.keyCode >= 48 && event.keyCode <= 57) {
            console.log(`숫자입력`);
        } else {
            console.log(`숫자아님`);
        }

    }

    return (
        <div className="App">
            <h2>KEY 이벤트</h2>
            Key Down :
            <input onKeyDown={(event) => KeyboardEven('hello', event)}
                onKeyUp={(event) => KeyboardEven('hello', event)} /><br />
        </div>
    );

}

export default App;