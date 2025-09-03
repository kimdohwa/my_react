function App(){
    console.log('함수만들기 예시');
    console.log('함수선언문');
    
    function jegob01(a,b){

        if(b== undefined){    
            console.log('매개 변수에 값 할당이 안되면 undefined입니다.')
            console.log('b : '+ b)
    }
        return (a*a)+(b*b) ;
    }

    let su01 = 2;
    let su02 = 3;
    let msg =`jegob01(${su01},${su02}) 실행결과 `;
    console.log(msg+jegob01(su01,su02));

    console.log(jegob01(5))
    console.log(jegob01('NaN은 Nat A Number의 줄임말 입니다.'))

    console.log('\n함수 표현식');
    const jegob02 = function(a,b=5){return (a*a)+(b*b)};
//b의 디폴트값 설정
    let su03 = 4;
    let su04 = 5;
    msg =`jegob02(${su03},${su04}) 실행결과 `;
    console.log(msg+jegob01(su03,su04));

    console.log(jegob02(3));
//b의 디폴트값이 설정되어있기때문에 매개변수를 한개만 넣어도 식 성립
    return(
<div className="App">
     샘플
</div>
    );
}
export default App;