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
import Header from "/src/Components/Layout/Header";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

/*
import Download from "@mui/icons-material/Download";
import InsertLink from "@mui/icons-material/InsertLink";
import Crop from "@mui/icons-material/Crop";
import Button from "@mui/joy/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/joy/IconButton";
import Close from "@mui/icons-material/Close";
import TabList from "@mui/joy/TabList";
import LectureApplyDialog from './dummy/LectureApplyDialog';
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
  const [open, setOpen] = React.useState(false);
  const [open_a, setOpen_a] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickAlert = () => {
    setOpen_a(true);
    setOpen(false);
  };

  const handleClickAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen_a(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <>
      <Header />
      <Box
        sx={{
          alignSelf: "center",
          maxWidth: "90%",
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
              <img alt="" src="/src/assets/meow.png" />
            </AspectRatio>
          </Sheet>
        </Sheet>

        <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 3, mb: -2 }}>
          <Link underline="hover" color="inherit" href="/">
            반려동물
          </Link>
          <Typography color="text.primary">
            고양이 &nbsp;| &nbsp;김규회수의사
          </Typography>
        </Breadcrumbs>

        <Box sx={{ mt: 3, mb: 4 }}>
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Typography level="h2" textAlign="left">
              고양이와 함께하는 반려동물 원데이클래스
            </Typography>
            <Button variant="contained" size="large" onClick={handleClickOpen}>
              지금 수강하러 가기
            </Button>
            <Snackbar
              open={open_a}
              autoHideDuration={6000}
              onClose={handleClickAlertClose}
            >
              <Alert
                onClose={handleClickAlertClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                수강 신청이 완료되었습니다.
              </Alert>
            </Snackbar>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"신청 폼 작성"}
              </DialogTitle>
              <DialogContent>
                <TextField
                  id="outlined-basic"
                  label="이름을 입력해주세요."
                  variant="outlined"
                  sx={{ width: 300, mt: 1 }}
                />

                <DialogContentText id="alert-dialog-description" sx={{ mt: 1 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DateTimePicker"]}>
                      <DateTimePicker label="일정과 시간을 선택해주세요." />
                    </DemoContainer>
                  </LocalizationProvider>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>취소</Button>
                <Button onClick={handleClickAlert} autoFocus>
                  신청
                </Button>
              </DialogActions>
            </Dialog>
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
    </>
  );
};

export default Register;
