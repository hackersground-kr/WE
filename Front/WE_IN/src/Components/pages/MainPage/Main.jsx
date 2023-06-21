import Header from "../../Layout/Header";
// import SimpleSlider from "./components/Carousel";
import Menu from "./components/Menu";
import "./Main.css";
import MainBanner from "../../../assets/MainPageImage.png";
// import ReadingGlass from "../../../assets/search.png";
import { useState } from "react";

const Main = () => {
  const [enteredSearch, setEnteredSearch] = useState("");

  const searchChangeHandler = (event) => {
    setEnteredSearch(event.target.value);
  };

  return (
    <div>
      <Header />
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
            <ul></ul>
        </section>
      </div>
      <Menu />
    </div>
  );
};

export default Main;
