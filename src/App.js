//특정 페이지로 이동을 하기 위한 링크
import { Link } from 'react-router-dom';

//개발자가 작성한 외부 모듈의 일부를 임포트 합니다.
import AppRoutes from "./routes/AppRoutes";
import { menuData } from "./routes/menuData";
//이문서의 스타일은 App.css가 담당합니다. 
import './style/App.css'

function App() {
    return (

        <div className="App">
            <h1>React Example Navigation</h1>
            <table border='1'>
                <tr>
                    {menuData.map((item) => (<th>{item.chapter}</th>))}
                    {/*item 은 메뉴데이터에 들어간 챕터02(원소1번)을 지칭합니다.*/}
                </tr>
                <tr>
                        {menuData.map((item) => (
                            <td key={item.chapter}>
                                <ul>
                                {item.items.map((bean)=>(
                                    <li key={bean.path}>
                                        <Link to={bean.path}>{bean.leabel}</Link>
                                    </li>
                                ))}
                                </ul>
                            </td>
                            ))}
                </tr>
            </table>

            {/*라우터모음*/}
            <AppRoutes />
        </div>
    );
}

export default App;