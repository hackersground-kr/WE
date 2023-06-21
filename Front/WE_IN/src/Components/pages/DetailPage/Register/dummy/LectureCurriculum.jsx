import Typography from "@mui/joy/Typography";

const LectureCurriculum = () => {
  return (
    <>
      <Typography sx={{ mb: 2 }} borderTop="0.5px solid gray" textAlign="left">
        <h1>커리큘럼</h1>
        <ol>
          <li>
            <h3>반려동물 돌봄 기초</h3>
            1-1. 고양이와의 상호작용 방법
            <br />
            1-2. 기본적인 돌봄 기술 습득
          </li>
          <li>
            <h3>영양 및 식사 관리</h3>
            <p>
              2-1. 고양이의 식사 요구사항 이해
              <br />
              2-2. 건강한 식단 제공 방법
              <br />
            </p>
          </li>
          <li>
            <h3>행동 훈련</h3>
            <p>
              3-1. 고양이의 행동 이해
              <br />
              3-2. 원하는 행동 가르치는 방법
              <br />
            </p>
          </li>
          <li>
            <h3>재미있는 활동과 게임</h3>
            <p>
              4-1. 고양이를 즐겁게 활동시킬 수 있는 장난감과 게임 소개
              <br />
              4-2. 고양이와 함께하는 즐거운 시간 보내는 방법
              <br />
            </p>
          </li>
          <li>
            <h3>심리적 요구와 스트레스 관리</h3>
            <p>
              5-1. 고양이의 심리적 요구 이해
              <br />
              5-2. 안정적이고 행복한 삶을 위한 스트레스 관리 방법
              <br />
            </p>
          </li>
        </ol>
      </Typography>
    </>
  );
};

export default LectureCurriculum;
