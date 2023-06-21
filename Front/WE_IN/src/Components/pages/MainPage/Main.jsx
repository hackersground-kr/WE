import Layout from "../../Layout/Layout";
// import SimpleSlider from "./components/Carousel";
import Menu from "./components/Menu";
import "./Main.css";
import MainBanner from "../../../assets/MainPageImage.png";
import Accordion from "./components/Accordion";
import Meow from "../../../assets/meow.png";
import camera from "../../../assets/camera.jpg";
import coffee from "../../../assets/coffee.jpg";
import cello from "../../../assets/cello.jpg";
import food from "../../../assets/food.jpg";
import draw from "../../../assets/draw.jpg";
import book from "../../../assets/book.jpg";
// import ReadingGlass from "../../../assets/search.png";
import { useState } from "react";

const Main = () => {
  const [enteredSearch, setEnteredSearch] = useState("");

  const searchChangeHandler = (event) => {
    setEnteredSearch(event.target.value);
  };

  return (
    <div>
      <Layout />
      <img src={MainBanner} alt="banner1" className="Ad" />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="Main-title">
        <h1>딱 맞는 노인 전문가를 찾아 드립니다!</h1>
        <div className="search">
          <input
            className="searchWord"
            type="text"
            value={enteredSearch}
            onChange={searchChangeHandler}
            placeholder="어떤 분야의 전문가를 찾으시나요?"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="Recommend-Contents">
        <header className="Recommend-Title">회원님을 위한 추천 컨텐츠</header>
        <section className="Recommend-Section">
          <ul className="list-Style">
            <div className="ClickContents1">
              <img src={Meow} alt="cat" />
              <h4>고양이와 함께하는 반려동물 원데이클래스</h4>
              <p>반려동물·고양이 | 김규회수의사</p>
            </div>
            <div className="ClickContents2">
              <img src={camera} alt="camera" />
              <h4>15년차 프로 포토그래퍼가 알려주는 사진 조명</h4>
              <p>사진·영상 | 빛</p>
            </div>
            <div className="ClickContents3">
              <img src={coffee} alt="coffee" />
              <h4>4가지 도구로 경험하는 다채로운 커피의 세계</h4>
              <p>요리·음료 | 커피브라더스</p>
            </div>
            <div className="ClickContents4">
              <img src={cello} alt="cello" />
              <h4>클래식한스푼과 함께하는 첼로 아카데미</h4>
              <p>음악 | 클래식과함께</p>
            </div>
          </ul>
        </section>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="Popular-Contents">
        <h1 className="popularTitle">
          지금 가장 많이 듣는
          <br />
          베스트 클래스 TOP4
        </h1>
        <div className="SectionBox">
          <div className="SectionContents1">
            <img src={food} alt="food" />
            <h4>전직 미슐랭 요리사와 함께 하는 <br/> 이탈리아 가정식 클래스</h4>
            <p>요리·음료 | 요리왕효성</p>
          </div>
          <div className="SectionContents2">
            <img src={draw} alt="draw" />
            <h4>장휘영의 그림 잘 그리는 법</h4>
            <p>드로잉 | 장휘영</p>
          </div>
          <div className="SectionContents3">
            <img src={book} alt="book" />
            <h4>오래 남는 독서, 채교수의 독쓰</h4>
            <p>라이프스타일 | 채교수</p>
          </div>
          <div className="SectionContents4">
            <img src={Meow} alt="cat" />
            <h4>고양이와 함께하는 반려동물 원데이클래스</h4>
            <p>반려동물·고양이 | 김규회수의사</p>
          </div>
        </div>
      </div>
    
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="FAQ">
        <h2> 자주 묻는 질문 </h2>
        <Accordion />
      </div>
      <Menu />
    </div>
  );
};

export default Main;
