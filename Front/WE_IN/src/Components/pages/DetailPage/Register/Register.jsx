import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/joy/Typography";
import PropTypes from "prop-types";
import LectureInfo from "./dummy/LectureInfo";
import LectureCurriculum from "./dummy/LectureCurriculum";
import LectureReview from "./dummy/LectureReview";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

/*
import Download from "@mui/icons-material/Download";
import InsertLink from "@mui/icons-material/InsertLink";
import Crop from "@mui/icons-material/Crop";
import Button from "@mui/joy/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/joy/IconButton";
import Close from "@mui/icons-material/Close";
import TabList from "@mui/joy/TabList";
*/

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Register = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

      <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 3, mb: -2 }}>
        <Link underline="hover" color="inherit" href="/">
          반려동물
        </Link>
        <Typography color="text.primary">고양이</Typography>
      </Breadcrumbs>

      <Box sx={{ mt: 3, mb: 4 }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Typography level="h2" textAlign="left">
            고양이와 함께하는 반려동물 원데이클래스
          </Typography>
          <Button variant="contained" size="large">
            지금 수강하러 가기
          </Button>
        </Stack>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="상세보기" {...a11yProps(0)} />
            <Tab label="커리큘럼" {...a11yProps(1)} />
            <Tab label="리뷰" {...a11yProps(2)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <LectureInfo />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <LectureCurriculum />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <LectureReview />
        </TabPanel>
      </Box>
    </Box>
  );
};

export default Register;
