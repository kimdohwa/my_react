import Table from 'react-bootstrap/Table';


function App({ contents, onClickToContent, categories }) {

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
                {contents.map((item, index) => {
                    /*find 함수를 사용하여 매칭 되는 카테고리를 찾습니다.*/
                    const match = categories.find((cate) => cate.english === item.category);

                    return (
                        <tr id={item.id} key={index}>
                            <td align='center' onClick={ClickItem}>{item.name}</td>
                            <td align='right' onClick={ClickItem}>{Number(item.price).toLocaleString()} 원</td>
                            {/* match가 의미있는 데이터이면 '한글'을, 아니면 원래값을 표시함 */}
                            <td align='center' onClick={ClickItem}>{match ? match.korean : item.category}</td>
                        </tr>
                    );

                })}
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