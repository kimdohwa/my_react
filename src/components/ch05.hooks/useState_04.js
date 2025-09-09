import { useState } from "react";

function App() {

    const [name, setName] = useState(''); // 이름
    const [age, setAge] = useState(0); // 나이

    //회원 명단(사실 이 데이터는 SpringBoot에서 받아오는게 맞습니다.)
    const [members, setMembers] = useState([
        { id: 1, name: '김길선', age: 22 },
        { id: 2, name: '임우영', age: 45 },
        { id: 3, name: '황인태', age: 60 },
        { id: 4, name: '윤철용', age: 15 },
    ]);


    //<li> 태그의 항목을 더블 클릭하면 해당 행 (row)를 삭제해주는 함수 입니다.
    const RemoveSelectedRow = (event) => {
        const id = event.target.id;
        console.log('데이터 타입 확인 : ' + typeof id)//타입 주의요망
        console.log('선택한 항목 id : ' + id)

        //제거를 위하여 선택한 항목을 제외하고, 나머지를 필터링하면 됩니다.
        const filteredData = members.filter((bean) => bean.id !== Number(id));
        setMembers(filteredData);
    }

    const memberList = members.map((bean) => {
        //목록 내역을 <li>태그 형식으로 만들어서 반환한다.
        // 더블 클릭시 해당 항목을 목록에서 제거합니다. 
        return <li id={bean.id} key={bean.id} onDoubleClick={RemoveSelectedRow}>{bean.name}({bean.age})</li>;
    });


    const NameChange = (event) => {
        const targetValue = event.target.value;
        console.log(`이름 : ${targetValue}`);
        setName(targetValue);
    }

    const AgeChange = (event) => {
        const targetValue = event.target.value;
        console.log(`나이 : ${targetValue}`);
        setAge(targetValue);
    }
    // 새롭게 추가되는 회원의 id번호를 기억하기 위한 state입니다.
    const [nextId, setNextId] = useState(0);

    const addMember = () => {
        //members 배열에서 id항목들만 추출합니다.
        //결과는 객체로 되어있기때문에, ... 연산자를 사용하여 스칼라데이터로 만든다음 
        // max()메소드를 이용하여 최대값을 추출합니다.
        const newNextId = Math.max(...members.map((bean) => bean.id)) + 1;

        // 신규 id 와 입력한 데이터를 이전배열 members에 concat()메소드를 이용하여 추가합니다.
        const newMembers = members.concat({ id: newNextId, name: name, age: age });
        setMembers(newMembers);

        //입력양식 초기화
        setName('');
        setAge(0);

        //다음 추가를 위하여 식별자 번호를 +1증가 시키기
        setNextId(newNextId + 1);
    }

    return (
        <div className="App">
            이름 : &nbsp;&nbsp; <input type="text" value={name} onChange={NameChange}></input>
            <br />
            나이 : &nbsp;&nbsp; <input type="text" value={age} onChange={AgeChange}></input>
            <br /><br />
            <button onClick={addMember}>추가</button>
            <br />
            <h4>회원 목록</h4>
            <ul>{memberList}</ul>
        </div>
    );

}

export default App;