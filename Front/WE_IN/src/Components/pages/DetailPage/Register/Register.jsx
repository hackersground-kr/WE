import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import Typography from "@mui/joy/Typography";
import LectureInfo from "./dummy/LectureInfo";
import LectureCurriculum from "./dummy/LectureCurriculum";
import LectureReview from "./dummy/LectureReview";
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
          <LectureInfo></LectureInfo>
          <LectureCurriculum></LectureCurriculum>
          <LectureReview></LectureReview>
        </Box>
      </Tabs>
    </Box>
  );
};

export default Register;
