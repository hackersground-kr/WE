import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


export default function SimpleAccordion() {
  return (
    <div className="acoordian-body">
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>WE IN 서비스란 무엇인가요?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            대구의 고령화 문제를 해결하고자 노인이 여러 사용자들에게 배움을 제공하며 소통의 장을 마련하여 세대간의 갈등을 완화시키기 위한 서비스입니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>어떤 클래스들이 포함되어 있나요?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          원하시는 만큼 클래스를 무제한 수강할 수 있어요. 더불어 크리에이터와의 간담회, 준비물 할인 등 매월 구독자를 대상으로 진행되는 이벤트에도 참여하실 수 있습니다.<br/> 위 [카테고리] 버튼을 통해 매일 새롭게 업데이트되는 다양한 분야의 클래스들을 보실 수 있어요.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>어떤 기기에서 사용할 수 있나요?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          모바일, 태블릿, PC 대부분의 기기에서 수강하실 수 있습니다. 아침 출근길, 저녁 나만의 시간 언제든지 앱으로 언제 어디서나 수강하실 수 있어요.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
