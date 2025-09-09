import { useEffect, useState } from "react";

function App() {

    const imageSize = 300; //이미지 사이즈
    const imagePath = '/images'; //이미지 경로

    const [count, setCount] = useState(0); // 카운터 변수
    const [twoTimes, setTwoTimes] = useState(0); // 카운터 2배수 변수
    const [another, setAnother] = useState(0); // 카운터 3배수 +1 변수
    const [image, setImage] = useState(`${imagePath}/ciabatta_01.png`);
    const [imageIdx, setImageIdx] = useState(0);//현재 선택된 이미지의 색인 번호

    const imageArray = [
        'brioche_03.png',
        'croissant_03.png',
        'french_baguette_02.png',
        'ciabatta_04.png',
    ]

    const TodoSomething = () => {
        console.log('카운트 변수 값 : ' + count);
        setTwoTimes(() => 2 * count);
        setAnother(() => 3 * count + 1);
        console.log('현재 이미지의 색인번호 : ' + imageIdx);

        const currentImage = `${imagePath}/${imageArray[imageIdx]}`;
        setImage(currentImage);//해당 이미지 변경
        setImageIdx(imageIdx + 1);// 이미지의 색인 번호 +1
        if (imageIdx === imageArray.length - 1) {
            setImageIdx(0);
        }

    }

    //최초 1번 화면 갱신(렌더링) 되고 나서 , count가 바뀔 때마다 다시 그리기를 해줍니다.
    useEffect(TodoSomething, [count]);

    return (
        <div className="App">
            <table>
                <tbody>
                    <tr>
                        <td style={{ border: '1px solid black' }}>카운터</td>
                        <td style={{ border: '1px solid black' }}>{count}</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black' }}>2곱하기</td>
                        <td style={{ border: '1px solid black' }}>{twoTimes}</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black' }}>3곱하기 더하기 1</td>
                        <td style={{ border: '1px solid black' }}>{another}</td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <button onClick={() => { setCount((count) => count + 1) }}>
                &nbsp;카운트 값 1더하기&nbsp;
            </button>
            <br /><br />
            <div>
                <img src={image} alt='대안이미지' width={imageSize} height={imageSize} />
            </div>
        </div>
    );

}

export default App;