function App(){
//es5 버전
    let string1 = 'hello';
    let string2 = 'world';
    let greeting = string1+' '+string2 ;
    console.log('greeting : '+ greeting);

    let product = {name : 'apple', price:20000}; //상품객체
    let msg ='제품 : '+product.name+' '+'가격 : '+product.price.toLocaleString();
    console.log(msg);

    let multLine = 'hello\neveryone';
    console.log(multLine);

    let value1 =14;
    let value2 =5;
    let boolValue = false ;
    let operator1 = '연산결과 :'+(value1*value2);
    console.log(operator1);

    let operator2 = '삼항 연산자 : '+ (boolValue ? '참' : '거짓');
    console.log(operator2);

    //es6 버전 이후
    
    let string3 = '여러분';
    let string4 = '반갑습니다.';
    
    //template literal는 백틱(`)문자를 사용하여 데이터를 표현하는 방식
    //백틱을 사용하고, 수식의 표현은 ${} 기호를 사용합니다.
    
    greeting = `${string3}~~~${string4}` ;
    console.log('인삿말 : '+ greeting);

    product = {name : 'react', price:30000};
    msg = `제품 ${product.name}의 가격은 ${product.price.toLocaleString()}원 입니다.`
    console.log(msg);
    //toLocaleString() 는 3자리마다 콤마유형으로 변경해주는 메소드 입니다.
    let discount = 0.3 ;
    msg = `할인가 : ${(product.price*(1-discount)).toLocaleString()}원`
    console.log(msg);

    multLine =
    `여러분
안녕하세요`;
    console.log(multLine);

    boolValue = 14>5 ;
    operator1 = `덧셈 결과 : ${value1+value2}`
    console.log(operator1);
    operator2 =`삼항연산자 : ${boolValue ? '참':'거짓'}`
    console.log(operator2);

    return(
        <div className="App">
        탬플릿 문자열
        </div>
    );
}

export default App;