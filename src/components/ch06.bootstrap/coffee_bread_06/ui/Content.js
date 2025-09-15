import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import { ListGroup } from 'react-bootstrap';



function App({ contents, onClickToContent, categories, onOrderByClick, orderInfo }) {

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

    /*사용자가 드롭다운 버튼을 클릭했습니다. 상위 컴포넌트에게 정렬 방식을 알려주는 함수 입니다. */
    const ClickButtonGroup = (event) => {
        event.preventDefault();//이벤트 전파 동작 방지
        const target_id = event.target.id; //이벤트 동작을 일으킨 요소의 unique한 id 정보

        //orderColumnList : 정렬할 컬럼정보와 관련있는 배열
        const orderColumnList = ['name', 'price', 'category']

        //클릭한 항목의 id가 orderColumnList 배열에 포함되어있으면 true를 반환해 줍니다.
        const isColumn = orderColumnList.includes(target_id);
        if (isColumn) {//정렬할 컬럼 선택
            onOrderByClick(target_id, orderInfo.ordering);

        } else {//정렬 방식 선택
            onOrderByClick(orderInfo.column, target_id);

        }
    }

    //여러곳에서 사용되는 문구는 상수(contant) 형태로 작성하여 재활용 하면 편리합니다.
    const OrderColumn = '정렬할 컬럼';
    const OrderType = '정렬 방식';

    return (
        <>
            <Table>
                <tbody>
                    <tr>

                        {/*width를 10%로 설정한이유는 Dropdown 항목들이 붙어있는거 처럼 설정하기위하여 코딩함 */}
                        <td width='10%' valign='middle'>{/*수직정렬 가운데 */}
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {OrderColumn}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item id='name' onClick={ClickButtonGroup} >이름</Dropdown.Item>
                                    {/* id 속성으로 어떠한 항목이 클릭되었는지를 파악합니다. */}
                                    {/* id 속성의 값은 영문 컬럼으로 명명합니다. */}
                                    <Dropdown.Item id='price' onClick={ClickButtonGroup}>가격</Dropdown.Item>
                                    <Dropdown.Item id='category' onClick={ClickButtonGroup}>카테고리</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                        <td valign='middle'>{/*수직정렬 가운데 */}
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {OrderType}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {/* id 속성의 값은 데이터 베이스 정렬 관련 용어로 명명합니다. */}
                                    <Dropdown.Item id='asc' onClick={ClickButtonGroup}>오름차순</Dropdown.Item>
                                    <Dropdown.Item id='desc' onClick={ClickButtonGroup}>내림차순</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                        <td valign='middle'>
                            <ListGroup horizontal>
                                <ListGroup.Item>
                                    {OrderColumn}
                                </ListGroup.Item>
                                <ListGroup.Item>{OrderType}</ListGroup.Item>
                            </ListGroup>
                        </td>
                    </tr>
                </tbody>
            </Table>
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
        </>
    );

}

export default App;