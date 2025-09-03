function App() {
    const function01 = function () {
        return 'hello~~world';
    }
    const function02 = () => {
        return '여러분 안녕';
    }
    const function03 = () => '어서오세요~ 방가워요';

    console.log('\n매개변수가 없는 함수표현식');
    console.log(function01());

    console.log('\n매개변수가 없는 화살표 함수');
    console.log(function02());

    console.log('\n중괄호와 return 문이 없는 화살표 함수');
    console.log(function03());

    const function04 = (name) => {
        if (name == undefined) {
            return `누구신가요?`;
        } else {
            return `hello~ ${name}님 !`;
        }
    }

    const name = '김철수';
    console.log('\n매개변수 1개짜리');
    console.log(function04());
    console.log(function04(name));

    const function05 = (first, second) => {
        return `${first} 더하기 ${second}(은)는 ${first + second}입니다.`;
    }
    console.log('\n매개변수 2개짜리');
    console.log(function05(10, 20));

    console.log('\n중괄호와 return 문이 없는 매개 변수가 2개짜리 화살표함수');
    const function06 = (first, second) => `${first} 곱하기 ${second}(은)는 ${first * second}입니다.`
    console.log(function06(10, 20));

    const adultCheck = (name, age) => {
        let adult = `${age > 19 ? '성인' : '미성년자'}`;
        const result = `${name}(${age}세)님은 ${adult}입니다.`;
        return result;
    }
    console.log(adultCheck('김철수', 15));

    console.log('반환타입이 객체인 경우');
    const function07 = (first, second) => {
        const result = { add: first + second, mul: first * second };
        return result;
    }
    console.log(function07(14, 5));

    console.log('대괄호 기호와 key 이름을 이용하여 접근이 가능합니다.');
    //키이름 -> add, mul
    console.log('덧셈결과 : '+function07(14,5)['add']);
    console.log('곱셈결과 : '+function07(14,5)['mul']);
    console.log('곱셈결과 : '+function07(14,5).mul);//<- 참조방식도 사용은 가능

    let answer = function07(10,20);
    console.log(answer['add']);
    console.log(answer.mul);
    
    


    return (
        <div className="App">
            화살표함수
        </div>
    );

}

export default App;