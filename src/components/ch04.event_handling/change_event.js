function App() {


    const ChangeEvent = (event) => {

        const eventArray = [];
        for (const evt in event) {
            eventArray.push(evt);
        }
        console.log(event.type);
        console.log(event.target); //이벤트발생시 연결되어있는 태그확인

        console.log(`event.target 내의 속성확인하기`);
        for (const item in event.target) {
            // console.log(item);
        }

        const target_id = event.target.id;
        const target_value = event.target.value;

        console.log(`요소 아이디 : ${target_id}`);//이벤트발생시 연결되어있는 태그내의 아이디확인
        console.log(`요소 값 : ${target_value}`);//이벤트발생시 연결되어있는 태그 내의 값확인(사진 주소)


        if (target_id === 'input_box') {
            console.log(`입력상자 내용: ${target_value}`);
        } else if (target_id === 'menu_select') {
            console.log(`선택된 콤보 상자 값 : ${target_value} `);
            if (target_value === '-') {
                //alert 함수는 사용자에게 메시지를 일방적으로 보여 주는 창입니다.
                //confirm 함수와 prompt 함수도 공부하세요
                document.getElementById('image01').src = `${target_value}`;
                alert('보여줄 이미지를 선택해주셔야 합니다.');
            } else {
                document.getElementById('image01').src = `${target_value}`;
                document.getElementById('image01').width = 300;
                document.getElementById('image01').height = 200;
            }
        }
    }


    return (
        <div className="App">
            <h2>Change 이벤트</h2>
            <input id="input_box" onChange={ChangeEvent} />
            <br />
            <select id='menu_select' onChange={ChangeEvent}>
                {/* 확장자 꼭 넣어야함 */}
                <option value='-'>항목을 선택해주세요</option>
                <option value='americano01_bigsize.png'>아메리카노</option>
                <option value='french_baguette_01_bigsize.png'>프렌치 바게트</option>
                <option value='croissant_03_bigsize.png'>크로아상</option>
                <option value='brioche_04_bigsize.png'>브리오슈</option>
            </select>
            <br />
            {/* alt 속성은 해당 이미지가 없을 때 보여주는 글자를 지정하는 속성입니다. */}
            <img id="image01" src="" alt="NoImage" />

        </div>
    );

}

export default App;