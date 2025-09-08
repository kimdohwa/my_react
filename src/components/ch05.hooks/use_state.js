//react 라이브러리에서 useState라는 hooks을 좀 사용하겟습니다.
import { useState } from "react";

function App() {
    //const [스테이트이름, 셋터메소드이름] = useState('기본값')
    const [color, setColor] = useState('red');
    const [name, setName] = useState('카푸치노');
    const [image, setimage] = useState('americano01_bigsize.png');

    const clickEvent = (event) => {
        console.log(`현재 색상 : ${color}`);
        if (color === 'red') {
            setColor('blue')
            setName('크로와상')
            setimage('croissant_03_bigsize.png')
        } else {
            setColor('red')
            setName('카푸치노')
            setimage('americano01_bigsize.png')
        }
    }

    return (
        <div className="App">
            <h1>My favoriter color is {color}</h1>

            {/* 외부 {} 기호는 jsx표현식에 사용하는 중괄호
                내부 {} 기호는 자바 스크립트 객체 표현시 사용하는 중괄호 */}
            <span style={{ color: color, fontWeight: 'bold' }}>글자색상</span>
            <br /><br />
            <button type='button' onClick={clickEvent}>
                클릭시 이미지 변경 및 {color} 색상으로 변경
            </button >
            <br /><br />
            <h4>{name}</h4>
            <img src={image} alt='하하하' width={210} height={210}></img>
        </div>
    );

}

export default App;