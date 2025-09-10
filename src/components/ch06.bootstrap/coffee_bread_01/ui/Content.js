import Table from 'react-bootstrap/Table';


function App({ contents }) {

    const productList = () => {
        return (
            <tbody>
                {contents.map((item, index) => (
                    <tr key={index}>
                        <td align='center'>{item.name}</td>
                        <td>{Number(item.price).toLocaleString()} 원</td>
                        <td>{item.category === 'bread' ? '빵' : '음료수'}</td>
                    </tr>
                ))}
            </tbody>
        );
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th align='center'>이름</th>
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