function App() {
    const memberList = [
        {
            id: "hong123",
            name: "홍길동",
            email: "hong123@example.com",
            joinDate: "2024-06-15",
            age: 10
        },
        {
            id: "kimc456",
            name: "김철수",
            email: "kimc456@example.com",
            joinDate: "2024-07-20",
            age: 15
        },
        {
            id: "park789",
            name: "박영희",
            email: "park789@example.com",
            joinDate: "2024-08-05",
            age: 20
        },
        {
            id: "lee101",
            name: "이민수",
            email: "lee101@example.com",
            joinDate: "2024-09-12",
            age: 25
        }
    ];

    const membertable = memberList.map((memberone) => {

        let result = '';

        if (memberone.age < 20) {
            result = '미성년자'
        } else {
            result = '성인'
        }

        return (
            <tr>
                <td>{memberone.id}</td>
                <td>{memberone.name}</td>
                <td>{memberone.email}</td>
                <td>{memberone.joinDate}</td>
                <td>{memberone.age}</td>
                <td>{result}</td>
            </tr>)
    });

    return (
        <div className="App">
            고객표
            <table border={1}>
                <thead>

                    <tr>
                        <th>아이디</th>
                        <th>이름</th>
                        <th>이메일</th>
                        <th>가입날짜</th>
                        <th>나이</th>
                        <th>성인여부</th>
                    </tr>
                </thead>
                <tbody>
                    {membertable}
                </tbody>
            </table>
        </div>
    );

}

export default App;