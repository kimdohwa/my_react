import { Button, Form, InputGroup } from "react-bootstrap";
import './../Css/FormStyle.css'

function App({ onSubmitInsert, categories }) {
    const comment = '등록';//코드에서 반복적인 단어는 변수로 만들어 jsx문법으로 처리하세요.

    //개발자가 전송버튼을 눌러서, 전송 이벤트에 의하여 이 함수가 동작합니다.
    const SubmitedData = (event) => {
        event.preventDefault(); // 이벤트 전파방지
        const formData = event.target; //전송된 폼 양식 객체 정보
        onSubmitInsert(formData);
    }

    //categories 배열을 이용하여 동적 콤보박스 만들기
    const categoryOptions = categories.map((cate, index) =>
        // cate는 카테고리 1개를 의미하는 변수입니다.
        //파일 CreateCategory를 참조하여 코딩하도록 합니다.
        <option key={index} value={cate.english}>{cate.korean}</option>
    );

    return (
        <div>
            <h2>상품 {comment}</h2>
            <form action='#' onSubmit={SubmitedData}>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">이름</InputGroup.Text>
                    <Form.Control type='text' name='name'></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">가격</InputGroup.Text>
                    <Form.Control type='text' name='price'></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">카테고리</InputGroup.Text>
                    <Form.Select name='category'>
                        {/*양식의 카테고리 콤보상자는 동적으로 생성되어야 합니다.*/}
                        <option value='-'>--카테고리를 선택해주세요</option>
                        {categoryOptions}
                    </Form.Select>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">재고</InputGroup.Text>
                    <Form.Control type='text' name='stock'></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">이미지파일</InputGroup.Text>
                    <Form.Control type='text' name='image'></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">설명</InputGroup.Text>
                    <Form.Control as='textarea' name='description'></Form.Control>
                </InputGroup>
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg" type="submit">{comment}</Button>
                </div>
            </form>
        </div>
    );

}

export default App;