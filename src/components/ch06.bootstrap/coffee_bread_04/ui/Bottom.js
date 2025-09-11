import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function App({ msg, onClickTobottom }) {

    const ClickMenu = (event) => {
        //우리는 id속성에 mode 값을 작성하였습니다.
        const targetId = event.target.id;
        onClickTobottom(targetId);
    }

    return (
        <>
            <ButtonGroup aria-label="Basic example" >
                <Button id='get_insert' variant="secondary" onClick={ClickMenu}>생성</Button>{' '}
                <Button id='get_update' variant="secondary" onClick={ClickMenu}>수정</Button>{' '}
                <Button id='get_delete' variant="secondary" onClick={ClickMenu}>삭제</Button>{' '}
                <Button id='get_category' variant="secondary" onClick={ClickMenu}>카테고리 추가</Button>{' '}
            </ButtonGroup >
            <br></br><br></br>
            {msg}
        </>
    );

}

export default App;