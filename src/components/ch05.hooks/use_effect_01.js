import { useEffect, useState } from "react";

function App() {

    const imageSize = 200; // 이미지 크기
    const imagePath = '/images'; //이미지 경로
    const interval = 1000; //타이머를 위한 인터벌

    const [count, setCount] = useState(0);
    const [image, setImage] = useState(`${imagePath}/ciabatta_01.png`);

    //타이머에 의하여 랜던하게 보여줄 이미지배열
    const imageArray = [
        'brioche_03.png',
        'croissant_03.png',
        'french_baguette_02.png',
        'ciabatta_04.png',
    ]

    const SomeAction = () => {
        //console.log('하하하');
        //카운터의 변수를 interval간격으로 1씩 증가시킵니다.
        setCount((count) => count + 1);

        // //배열 요소중 임의의 1개를 추출하여 이미지를 보여줍니다.
        const randomIdx = Math.floor(imageArray.length * Math.random());
        const randomImage = imageArray[randomIdx];
        setImage(`${imagePath}/${randomImage}`);

    }


    const MyTimer = () => {
        //setTimeout(동작, 인터벌) ;
        const timerId = setTimeout(SomeAction, interval);

        setTimeout(() => {
            clearTimeout(timerId);
            console.log(`타이머 종료(5초 경과)`)
        }, 5000)
    }

    useEffect(MyTimer);
    return (
        <>
            <h1>카운터 : {count} </h1>
            <div>
                <img src={image} alt="이미지대안" width={imageSize} height={imageSize} />
            </div>
        </>
    );

}

export default App;