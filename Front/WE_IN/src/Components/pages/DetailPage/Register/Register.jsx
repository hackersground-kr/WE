import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import Typography from "@mui/joy/Typography";
/*
import Download from "@mui/icons-material/Download";
import InsertLink from "@mui/icons-material/InsertLink";
import Crop from "@mui/icons-material/Crop";
import Button from "@mui/joy/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/joy/IconButton";
import Close from "@mui/icons-material/Close";

*/

const Register = () => {
  return (
    <Box
      sx={{
        alignSelf: "center",
        maxWidth: "100%",
        minWidth: { xs: 220, sm: 360, md: 768, lg: 992, xl: 1200 },
        mx: "auto",
        overflow: "auto",
      }}
    >
      <Sheet sx={{ p: 2 }}>
        <Sheet
          variant="outlined"
          sx={{
            borderRadius: "md",
            overflow: "auto",
            borderColor: "background.level2",
            bgcolor: "background.level1",
          }}
        >
          <AspectRatio>
            <img alt="" src="/static/images/meow.jpg" />
          </AspectRatio>
        </Sheet>
      </Sheet>

      <Box sx={{ mt: 3, mb: 4 }}>
        <Typography level="h2" textAlign="left">
          고양이와 함께하는 반려동물 원데이클래스
        </Typography>
      </Box>

      <Tabs
        defaultValue={0}
        sx={{
          bgcolor: "background.body",
          "--Tab-height": "48px",
        }}
      >
        <Box
          sx={{
            "--_shadow-height": "16px",
            height: 0,
            position: "sticky",
            top: "calc(var(--Tab-height) - var(--main-paddingTop, 0px) + var(--Header-height, 0px) - (var(--_shadow-height) / 2))",
            zIndex: 1,
            "&::before": {
              content: '""',
              display: "block",
              position: "relative",
              zIndex: 1,
              height: "var(--_shadow-height)",
              background:
                "radial-gradient(closest-side, rgba(0 0 0 / 0.12), transparent 100%)",
            },
          }}
        />
        <TabList
          variant="plain"
          size="sm"
          sx={(theme) => ({
            "--List-padding": "0px",
            "--ListItem-minHeight": "var(--Tab-height)",
            "--Chip-minHeight": "20px",
            "--_TabList-bg": theme.vars.palette.background.body,
            backgroundColor: "var(--_TabList-bg)",
            boxShadow: `inset 0 -1px 0 0 ${theme.vars.palette.divider}`,
            position: "sticky",
            top: "calc(-1 * (var(--main-paddingTop, 0px) - var(--Header-height, 0px)))",
            zIndex: 10,
            width: "100%",
            overflow: "auto hidden",
            alignSelf: "flex-start",
            borderRadius: 0,
            scrollSnapType: "inline",
            "&::after": {
              pointerEvents: "none",
              display: { xs: "block", sm: "none" },
              content: '""',
              position: "sticky",
              top: 0,
              width: 40,
              flex: "none",
              zIndex: 1,
              right: 0,
              borderBottom: "1px solid transparent",
              background: `linear-gradient(to left, var(--_TabList-bg), rgb(0 0 0 / 0))`,
              backgroundClip: "content-box",
            },
            "&::-webkit-scrollbar": {
              width: 0,
              display: "none",
            },
            [`& .${tabClasses.root}`]: {
              "&:first-of-type": {
                ml: "calc(-1 * var(--ListItem-paddingX))",
              },
              scrollSnapAlign: "start",
              bgcolor: "transparent",
              boxShadow: "none",
              flex: "none",
              "&:hover": {
                bgcolor: "transparent",
              },
              [`&.${tabClasses.selected}`]: {
                color: "#2F6731",
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  zIndex: 1,
                  bottom: 0,
                  left: "var(--ListItem-paddingLeft)",
                  right: "var(--ListItem-paddingRight)",
                  height: "2px",
                  bgcolor: "#2F6731",
                },
              },
            },
          })}
        >
          <Tab value={0}>상세보기</Tab>
          <Tab value={1}>커리큘럼</Tab>
          <Tab value={2}>리뷰</Tab>
        </TabList>

        <Box
          sx={{
            pt: 1,
            pb: 10,
            display: "grid",
            gridTemplateColumns: {
              xs: "100%",
            },
            columnGap: { xs: 2, sm: 3, md: 4 },
            rowGap: { xs: 2, sm: 2.5 },
            "& > hr": {
              gridColumn: "1/-1",
            },
          }}
        >
          <Typography textAlign="left">
            <h1>상세보기</h1>

            <h2>환영합니다!</h2>

            <p>
              반려동물을 사랑하고 있는 모든 분들에게 특별한 소식이 있습니다!
              고양이와 함께하는 반려동물 원데이 클래스를 소개합니다.
            </p>

            <p>
              고양이는 우리의 일상에 활기와 행복을 불어넣어주는 사랑스러운
              동반자입니다. 그들은 우아하면서도 귀여운 모습으로 우리의 마음을
              사로잡고, 적극적인 상호작용과 애착을 제공하여 우리에게 무한한
              위안을 줍니다. 이 원데이 클래스에서는 고양이와 함께하는 특별한
              시간을 보내며 그들과의 깊은 연결을 형성하는 기회를 제공합니다.
            </p>
            <br />

            <h2>반려동물 돌봄 기초</h2>
            <p>
              이 클래스는 반려동물을 키우는 경험이 있는 사람들과 그렇지 않은
              사람들 모두에게 열려 있습니다. 새로운 반려동물 주인들은 고양이와의
              상호작용 방법과 기본적인 돌봄 기술을 배울 수 있습니다. 반면에,
              고양이를 오랫동안 키워온 경험이 있는 사람들은 고급 훈련 기술과
              심화된 상호작용 방법을 익힐 수 있습니다.
            </p>
            <br />

            <h2>주요 주제</h2>
            <ol>
              <li>
                반려동물 돌봄 기초: 고양이의 건강을 유지하고 행복하게 키우기
                위해 필요한 기본 돌봄 방법에 대해 배웁니다.
              </li>
              <li>
                음식 및 영양: 고양이의 식사 요구 사항과 올바른 식이 방법을
                이해하고, 건강한 식단을 제공하는 방법을 배웁니다.
              </li>
              <li>
                행동 훈련: 고양이의 행동을 이해하고 원하는 행동을 가르치는
                방법을 배우게 됩니다.
              </li>
              <li>
                재미있는 활동과 게임: 고양이를 즐겁게 활동시킬 수 있는 다양한
                장난감과 게임에 대해 알아보고, 그들과 함께 즐거운 시간을 보낼 수
                있는 방법을 배웁니다.
              </li>
              <li>
                고양이의 심리적 요구: 고양이가 안정적이고 행복한 삶을 살 수
                있도록 심리적인 요구 사항을 이해하고 지원하는 방법을 배웁니다.
              </li>
            </ol>
            <br />

            <p>
              반려동물과 함께하는 시간은 귀중하며, 고양이와의 깊은 연결은
              상쾌하고 보람찬 경험이 될 것입니다. 이 원데이 클래스를 통해
              고양이와의 삶을 더욱 풍요롭게 만들어보세요. 실용적인 조언과 훈련
              기술을 배우면서 동시에 다른 반려동물을 사랑하는 이들과 교류하고
              소통할 수 있는 소중한 경험을 누리실 수 있습니다. 지금 참가 신청을
              해보세요!
            </p>
          </Typography>

          <Typography
            sx={{ mb: 2 }}
            borderTop="0.5px solid gray"
            textAlign="left"
          >
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
        </Box>
      </Tabs>
    </Box>
  );
};

export default Register;
