//프로그램 모드에 따라서 화면을 분기해주는 스위치 앱

import Display from './Display';
import CreateContent from './CreateContent';
import UpdateContent from './UpdateContent';
import CreateCategory from './CreateCategory';

function App({ mode, product, onSubmitInsert, onSubmitUpdate, onSubmitCategoryAdd, categories }) {
    console.log(`현재 모드 : ${mode}`);

    const onSwitchInsert = (formData) => {
        console.log(`등록버튼 누름(switcher)`);
        onSubmitInsert(formData);//넘어온 폼 정보를 main 파일로 넘김

    }
    const onSwitchUpdate = (formData) => {
        console.log(`수정버튼 누름(switcher)`);
        onSubmitUpdate(formData);//수정된 폼 정보를 main 파일로 넘김
    }

    const onSwitchCategory = (formData) => {
        console.log(`카테고리 추가 버튼 누름(switcher)`);
        onSubmitCategoryAdd(formData);//넘어온 폼 정보를 main 파일로 넘김
    }

    switch (mode) {
        case 'detail'://특정상품 상세보기
            return <Display product={product} categories={categories} />;
        case 'get_insert'://상품 등록 화면으로 이동
            return <CreateContent onSubmitInsert={onSwitchInsert} categories={categories} />;
        case 'get_update'://상품 수정 화면으로 이동
            // product는 이전에 사용자가 입력했던 데이터로써, 수정하고자 하는 항목입니다.
            return <UpdateContent product={product} onSubmitUpdate={onSwitchUpdate} categories={categories} />;
        case 'get_category'://신규 카테고리 추가 화면으로 이동
            return <CreateCategory onSubmitCategoryAdd={onSwitchCategory} />;

        case 'read'://읽기모드
            return <div />;
        default:
            return null;
    }

}

export default App;