function App({ title, comment }) {//메인페이지에서 전달받은 프로퍼티 사용
    console.log('샘플');

    return (
        <>
            <h2>{title}</h2>
            {comment}
        </>

    );

}

export default App;