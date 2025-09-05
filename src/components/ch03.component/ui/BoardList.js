function App() {
    const boardList = [
        {
            id: 1,
            title: "React 기초 배우기",
            content: "React의 기본 개념과 컴포넌트 구조를 학습하는 게시물입니다.",
            author: "홍길동",
            date: "2025-09-04"
        },
        {
            id: 2,
            title: "JavaScript 비동기 처리",
            content: "Promise, async/await 등을 활용한 비동기 처리 방법을 정리한 글입니다.",
            author: "김철수",
            date: "2025-09-03"
        },
        {
            id: 3,
            title: "CSS Flexbox 완벽 가이드",
            content: "Flexbox를 활용한 레이아웃 구성과 실전 예제 게시물입니다.",
            author: "박영희",
            date: "2025-09-02"
        },
        {
            id: 4,
            title: "Node.js Express 서버 구축",
            content: "Node.js와 Express를 사용하여 간단한 웹 서버를 구축하는 방법을 설명합니다.",
            author: "이민수",
            date: "2025-09-01"
        }
    ];

    const boardtable = boardList.map((boardone) => (
        <tr>
            <td>{boardone.id}</td>
            <td>{boardone.title}</td>
            <td>{boardone.content}</td>
            <td>{boardone.author}</td>
            <td>{boardone.date}</td>
        </tr>
    ));



    return (
        <div className="App">
            게시판
            <table border={1}>
                <thead>
                    <tr>
                        <th>아이디</th>
                        <th>제목</th>
                        <th>내용</th>
                        <th>작성자</th>
                        <th>작성일자</th>
                    </tr>
                </thead>
                <tbody>
                    {boardtable}
                </tbody>
            </table>
        </div>
    );

}

export default App;