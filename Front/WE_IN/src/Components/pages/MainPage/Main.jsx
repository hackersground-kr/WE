import Layout from "../../Layout/Layout";
import Menu from "./components/Menu";
import "./Main.css";
import Accordion from "./components/Accordion";
import Meow from "../../../assets/meow.png";
import camera from "../../../assets/camera.jpg";
import coffee from "../../../assets/coffee.jpg";
import cello from "../../../assets/cello.jpg";
import food from "../../../assets/food.jpg";
import draw from "../../../assets/draw.jpg";
import book from "../../../assets/book.jpg";
// import ReadingGlass from "../../../assets/search.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
const Main = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      const progress = scrollPosition / (documentHeight - windowHeight);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="container"
      style={{ backgroundColor: `rgba(14, 17, 37, ${1 - scrollProgress})` }}
    >
      <Layout />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="bannerTitle1">WE IN</div>
      <div className="bannerTitle2">새로운 배움과 새로운 경험을</div>
      <div className="bannerTitle3">경험하세요</div>

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

      <div className="Main-title">
        <h1>딱 맞는 노인 전문가를 찾아 드립니다!</h1>
        <div className="search">
          <div className="searchWord">
            {" "}
            <span>∣</span>어떤 분야의 전문가를 찾으시나요?
          </div>
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
            <Link to="/register">
              <div className="ClickContents1">
                <img src={Meow} alt="cat" />
                <h4>고양이와 함께하는 반려동물 원데이클래스</h4>
                <p>반려동물·고양이 | 김규회수의사</p>
              </div>
            </Link>
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
      <Container className="Popular-Contents">
        <h1 className="popularTitle">
          지금 가장 많이 듣는
          <br />
          베스트 클래스 TOP4
        </h1>
        <Box className="SectionBox">
          <Box className="SectionContents1">
            <img src={food} alt="food" />
            <h4>
              전직 미슐랭 요리사와 함께 하는 <br /> 이탈리아 가정식 클래스
            </h4>
            <p>요리·음료 | 요리왕효성</p>
          </Box>
          <Box className="SectionContents2">
            <img src={draw} alt="draw" />
            <h4>장휘영의 그림 잘 그리는 법</h4>
            <p>드로잉 | 장휘영</p>
          </Box>
          <Box className="SectionContents3">
            <img src={book} alt="book" />
            <h4>오래 남는 독서, 채교수의 독쓰</h4>
            <p>라이프스타일 | 채교수</p>
          </Box>
          <Box className="SectionContents4">
            <img src={Meow} alt="cat" />
            <h4>고양이와 함께하는 반려동물 원데이클래스</h4>
            <p>반려동물·고양이 | 김규회수의사</p>
          </Box>
        </Box>
      </Container>

      <Container sx={{ height: 300 }}></Container>

      <Container className="FAQ" sx={{ mb: 7 }}>
        <h2> 자주 묻는 질문 </h2>
        <Accordion />
      </Container>
      <Menu />
    </div>
  );
};

export default Main;
