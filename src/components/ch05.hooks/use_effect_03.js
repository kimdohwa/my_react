import { useEffect, useState } from "react";

function App() {
    //해당 사이트에서 다운 받은 정보를 저장할 비어 있는 배열 
    const [receivedData, setReceivedData] = useState([]);

    const GetUrlData = () => {
        const url = 'https://jsonplaceholder.typicode.com/photos';
        fetch(url)
            .then((response) => response.json()) /*json을 자바 스크립트 객체로 변환*/
            .then((data) => { /*data는 변환된 자바 스크립트 객체*/
                // console.log(data);
                setReceivedData(data);
            });
    }

    useEffect(GetUrlData, []);

    const DataList = () => {
        const sliceArray = receivedData.slice(0, 10);//0이상 10미만
        const showData = sliceArray.map((item) =>
            <li key={item.id}>
                {item.title}
                (<a href={item.url}>{item.url}</a>)
            </li>
        );

        return <ol>{showData}</ol>;
    }

    //2번째 매개 변수가 []이므로, GetUrlData 함수는 1번만 호출됩니다.

    return (
        <div className="App">
            <DataList />
        </div>
    );

}

export default App;