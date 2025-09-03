//'react-router-dom'은 라우팅을 위한 라이브러리 입니다.
//기본으로 설치가 안되어 있으니 , 차후 설치를 해주어야 합니다.
// npm install react-router-dom 엔터
import {Routes, Route} from 'react-router-dom';

//ch02 장 
//기호 . 은 현재폴더, .. 는 상위폴더, /는 폴더 구분자
//import 앱이름 from '전체경로/파일명'
import AppLetConst from './../components/ch02.es6_syntax/let_const';
import AppTemplateString from './../components/ch02.es6_syntax/template_string'
import AppMakeSubjectList from './../components/ch02.es6_syntax/make_subject_list'
import AppMakefunction from './../components/ch02.es6_syntax/make_function'
import AppArrow_function from './../components/ch02.es6_syntax/arrow_function'
import AppArray_map from './../components/ch02.es6_syntax/array_map'
import AppSpread_operator from './../components/ch02.es6_syntax/spread_operator'
import AppComponents01 from './../components/ch03.component/components01'
import AppComponents02 from './../components/ch03.component/components02'
import AppComponent_separate from './../components/ch03.component/component_separate'


function AppRoutes(){
    return(
    <Routes>
        {/*element 속성에는 컴포넌트 자체가 아니라 jsx요소를 넣어야합니다 .*/}
            <Route path='/let_const' element={<AppLetConst />}/>
            <Route path='/templet_string' element={<AppTemplateString />}/>
            <Route path='/make_subject_list' element={<AppMakeSubjectList />}/>
            <Route path='/make_function' element={<AppMakefunction />}/>
            <Route path='/arrow_function' element={<AppArrow_function />}/>
            <Route path='/array_map' element={<AppArray_map />}/>
            <Route path='/spread_operator' element={<AppSpread_operator />}/>
            <Route path='/components01' element={<AppComponents01 />}/>
            <Route path='/components02' element={<AppComponents02 />}/>
            <Route path='/component_separate' element={<AppComponent_separate />}/>

    </Routes>
    );
};

export default AppRoutes;
