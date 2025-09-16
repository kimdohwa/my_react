//'react-router-dom'은 라우팅을 위한 라이브러리 입니다.
//기본으로 설치가 안되어 있으니 , 차후 설치를 해주어야 합니다.
// npm install react-router-dom 엔터
import { Routes, Route } from 'react-router-dom';

//ch02 장 
//기호 . 은 현재폴더, .. 는 상위폴더, /는 폴더 구분자
//import 앱이름 from '전체경로/파일명'
import AppMakeArray01 from './../components/ch01.react_basic/make_array_01';
import AppMathObject01 from './../components/ch01.react_basic/math_object_01';
import AppIfExercise from './../components/ch01.react_basic/if_exercise';
import AppSwitchExercise from './../components/ch01.react_basic/switch_exercise';
import AppTypeOfNumber from './../components/ch01.react_basic/typeof_number';
import AppForm_exam from './../components/ch01.react_basic/form_exam';
import AppTable_exam from './../components/ch01.react_basic/table_exam';


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
import AppFile_separator from './../components/ch03.component/file_separator'
import AppUse_props from './../components/ch03.component/use_props'
import AppMaketable_01 from './../components/ch03.component/array_and_table_01'
import AppMaketable_02 from './../components/ch03.component/array_and_table_02'
import AppClick_Event from './../components/ch04.event_handling/click_event'
import AppChange_Event from './../components/ch04.event_handling/change_event'
import AppMouse_event from './../components/ch04.event_handling/mouse_event'
import AppKey_event from './../components/ch04.event_handling/key_event'
import AppCombo_change from './../components/ch04.event_handling/combo_change'
import AppSubmit_event from './../components/ch04.event_handling/submit_event'
import AppUse_state from './../components/ch05.hooks/use_state'
import AppUse_state02 from './../components/ch05.hooks/useState_02'
import AppUse_state03 from './../components/ch05.hooks/useState_03'
import AppUse_state04 from './../components/ch05.hooks/useState_04'
import AppUse_effect_01 from './../components/ch05.hooks/use_effect_01'
import AppUse_effect_02 from './../components/ch05.hooks/use_effect_02'
import AppUse_effect_03 from './../components/ch05.hooks/use_effect_03'
import Appcafe01 from './../components/ch06.bootstrap/coffee_bread_01/main'
import Appcafe02 from './../components/ch06.bootstrap/coffee_bread_02/main'
import Appcafe03 from './../components/ch06.bootstrap/coffee_bread_03/main'
import Appcafe04 from './../components/ch06.bootstrap/coffee_bread_04/main'
import Appcafe05 from './../components/ch06.bootstrap/coffee_bread_05/main'
import Appcafe06 from './../components/ch06.bootstrap/coffee_bread_06/main'
import Appcafe07 from './../components/ch06.bootstrap/coffee_bread_07/main'


function AppRoutes() {
    return (
        <Routes>
            {/*element 속성에는 컴포넌트 자체가 아니라 jsx요소를 넣어야합니다 .*/}
            <Route path='/' element={<AppLetConst />} /> {/*메인페이지설정*/}
            <Route path='/make_array_01' element={<AppMakeArray01 />} />
            <Route path='/math_object_01' element={<AppMathObject01 />} />
            <Route path='/if_exercise' element={<AppIfExercise />} />
            <Route path='/switch_exercise' element={<AppSwitchExercise />} />
            <Route path='/typeof_number' element={<AppTypeOfNumber />} />
            <Route path='/form_exam' element={<AppForm_exam />} />
            <Route path='/table_exam' element={<AppTable_exam />} />
            <Route path='/let_const' element={<AppLetConst />} />
            <Route path='/templet_string' element={<AppTemplateString />} />
            <Route path='/make_subject_list' element={<AppMakeSubjectList />} />
            <Route path='/make_function' element={<AppMakefunction />} />
            <Route path='/arrow_function' element={<AppArrow_function />} />
            <Route path='/array_map' element={<AppArray_map />} />
            <Route path='/spread_operator' element={<AppSpread_operator />} />
            <Route path='/components01' element={<AppComponents01 />} />
            <Route path='/components02' element={<AppComponents02 />} />
            <Route path='/component_separate' element={<AppComponent_separate />} />
            <Route path='/file_separator' element={<AppFile_separator />} />
            <Route path='/use_props' element={<AppUse_props />} />
            <Route path='/array_and_table_01' element={<AppMaketable_01 />} />
            <Route path='/array_and_table_02' element={<AppMaketable_02 />} />
            <Route path='/click_event' element={<AppClick_Event />} />
            <Route path='/change_event' element={<AppChange_Event />} />
            <Route path='/mouse_event' element={<AppMouse_event />} />
            <Route path='/key_event' element={<AppKey_event />} />
            <Route path='/combo_change' element={<AppCombo_change />} />
            <Route path='/submit_event' element={<AppSubmit_event />} />
            <Route path='/use_state' element={<AppUse_state />} />
            <Route path='/useState_02' element={<AppUse_state02 />} />
            <Route path='/useState_03' element={<AppUse_state03 />} />
            <Route path='/useState_04' element={<AppUse_state04 />} />
            <Route path='/use_effect_01' element={<AppUse_effect_01 />} />
            <Route path='/use_effect_02' element={<AppUse_effect_02 />} />
            <Route path='/use_effect_03' element={<AppUse_effect_03 />} />
            <Route path='/coffee_bread_01/main' element={<Appcafe01 />} />
            <Route path='/coffee_bread_02/main' element={<Appcafe02 />} />
            <Route path='/coffee_bread_03/main' element={<Appcafe03 />} />
            <Route path='/coffee_bread_04/main' element={<Appcafe04 />} />
            <Route path='/coffee_bread_05/main' element={<Appcafe05 />} />
            <Route path='/coffee_bread_06/main' element={<Appcafe06 />} />
            <Route path='/coffee_bread_07/main' element={<Appcafe07 />} />

        </Routes>
    );
};

export default AppRoutes;
