import "./css/Menu.css";
import Stack from "@mui/material/Stack";
import { Typography, Container } from "@mui/material";

const Menu = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={10}
        sx={{ backgroundColor: "#393732" }}
      >
        <Stack direction="col">
          <Typography sx={{ color: "white", my: 5 }}>
            <h2>WE IN</h2>
            <p>WE IN 이란?</p>
            <p>WE IN 활용방법</p>
          </Typography>
        </Stack>
        <Stack direction="col">
          <Typography sx={{ color: "white" }}>
            <h2>카테고리</h2>
            <p>카테고리란?</p>
            <p>카테고리 사용방법</p>
          </Typography>
        </Stack>
        <Stack direction="col">
          <Typography sx={{ color: "white" }}>
            <h2>내 주변 클래스</h2>
            <p>내 주변 클라스란?</p>
            <p>내 주변 클래스 이용하기</p>
          </Typography>
        </Stack>

        <Typography>
          <p className="explain">
            © 2023 All Rights Reserved. {"<"}Microsoft HACKERS GROUND{">"}
          </p>
          <p></p>
          <p className="explain">
            Team WE Project : {"<"}WE IN{">"}
          </p>
          <p className="explain">Member : 김규회 여다영 장휘영 채준혁 황효성</p>
        </Typography>
      </Stack>
    </>
  );
};

export default Menu;
