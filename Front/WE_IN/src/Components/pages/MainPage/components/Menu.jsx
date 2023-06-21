
import "./css/Menu.css";

const Menu = () => {
  return (
    <div className="menu">
        <div className="up_menu">
            
            <div className="sev">
                <h1>WE IN</h1>
                <br/>
                <p>WE IN 이란?</p>
                <p>WE IN 활용방법</p>
            </div>
            <div className="sev">
                <h1>카테고리</h1>
                <br/>
                <p>카테고리란?</p>
                <p>카테고리 사용방법</p>
            </div>
            <div className="sev">
                <h1>내 주변 클래스</h1>
                <br/>
                <p>내 주변 클라스란?</p>
                <p>내 주변 클래스 이용하기</p>
            </div>
        </div>
        <div className="down_menu">
            <p className="explain">
                © 2023 All Rights Reserved. {'<'}Microsoft HACKERS GROUND{'>'} 
            </p>
            <p>

            </p>
            <p className="explain">
                Team WE Project : {'<'}WE IN{'>'}
            </p>
            <p className="explain">
                Member : 김규회 여다영 장휘영 채준혁 황효성
            </p>
        </div>
    </div>
  );
}

export default Menu;