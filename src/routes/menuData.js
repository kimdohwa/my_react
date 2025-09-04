//메뉴 목록을 만들어 주는 페이지
//export 키워드는 외부에서 참조 가능하도록 길을 틔워줌
export const menuData = [
    {
        chapter: 'ch02. ECMAScript',
        items: [
            { path: '/let_const', leabel: 'let & const 실습' },
            { path: '/templet_string', leabel: '탬플릿 문자열' },
            { path: '/make_subject_list', leabel: '과목 목록 표시' },
            { path: '/make_function', leabel: '함수 만들기' },
            { path: '/arrow_function', leabel: '화살표 함수' },
            { path: '/array_map', leabel: '배열 함수(map)' },
            { path: '/spread_operator', leabel: '전개 연산자' },
        ]
    },
    {
        chapter: 'ch03. Component',
        items: [
            { path: '/components01', leabel: '클래스형 컴포넌트' },
            { path: '/components02', leabel: '함수형 컴포넌트' },
            { path: '/component_separate', leabel: '컴포넌트별 분리하기' },
            { path: '/file_separator', leabel: '파일 분리' },
            { path: '/use_props', leabel: 'props 사용하기' },
            { path: '/array_and_table_01', leabel: '테이블 만들기 01' }
        ]
    },
    //여기에 4장, 5장 .. 내용을 계속 추가하면 됩니다. 
];