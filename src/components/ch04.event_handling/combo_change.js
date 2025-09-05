function App() {

    console.log();

    const choice = (evt) => {

        const choicelist = evt.target.value.split(',');
        console.log(choicelist);

        // choicelist.map((item) => {
        //     document.getElementById('result').value = { item }
        //     const itemOne = document.getElementById('result').value
        //     console.log(itemOne);

        //     return { itemOne }
        // })
        return (choicelist)
    }

    const breadlist = () => {
        const a = choice.map((item) => { return item });

        console.log(a);

    }

    return (
        <div className="App">
            콤보박스 - 선택 - 목록 태그로 보여주기 - 클릭하면 alert 표시 및 이미지
            <p />
            <select onChange={choice}>
                <option value='목록을 선택해 주세요' >선택</option>
                <option value='바게뜨,소금빵'>빵</option>
                <option value='아메리카노, 라떼'>커피</option>
            </select>
            <div>

            </div>
        </div >
    );

}

export default App;