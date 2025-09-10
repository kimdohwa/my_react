import Table from 'react-bootstrap/Table';


function App({ contents, onClickToContent }) {

    //테이블 특정 행의 셀 1개를 클릭했습니다.
    const ClickItem = (event) => {
        //선택한 항목의 부모 요소의 id를 읽어서 할당합니다.
        const itemId = event.target.parentNode.id
        console.log(`선택된 상품 id : ${itemId}`)

        onClickToContent(itemId); //상위컴포넌트에 해당 id를 넘겨줍니다.
    }



    const productList = () => {
        return (
            <tbody>
                {contents.map((item, index) => (
                    <tr id={item.id} key={index}>
                        <td align='center' onClick={ClickItem}>{item.name}</td>
                        <td align='right' onClick={ClickItem}>{Number(item.price).toLocaleString()} 원</td>
                        <td align='center' onClick={ClickItem}>{item.category === 'bread' ? '빵' : '음료수'}</td>
                    </tr>
                ))}
            </tbody>
        );
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr align='center'>
                    <th>이름</th>
                    <th>가격</th>
                    <th>카테고리</th>
                </tr>
            </thead>
            {/* 화살표 함수를 사용하여 상품 목록을 만들어 줍니다. */}
            {productList()}
        </Table>
    );

}

export default App;