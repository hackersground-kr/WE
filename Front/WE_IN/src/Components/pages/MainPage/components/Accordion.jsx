import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  return (
    <div className="acoordian-body">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="subtitle2">
            WE IN 서비스란 무엇인가요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography textAlign="left">
            대구의 고령화 문제를 해결하고자 노인이 여러 사용자들에게 배움을
            제공하며 소통의 장을 마련하여 세대간의 갈등을 완화시키기 위한
            서비스입니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="subtitle2">
            어떤 클래스들이 포함되어 있나요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography textAlign="left">
            원하시는 만큼 클래스를 무제한 수강할 수 있어요. 더불어
            크리에이터와의 간담회, 준비물 할인 등 매월 구독자를 대상으로
            진행되는 이벤트에도 참여하실 수 있습니다.
            <br /> 위 [카테고리] 버튼을 통해 매일 새롭게 업데이트되는 다양한
            분야의 클래스들을 보실 수 있어요.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="subtitle2">
            어떤 기기에서 사용할 수 있나요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography textAlign="left">
            WE IN 서비스는 다음과 같은 기기에서 이용할 수 있습니다:
            <ol>
              <li>
                모바일 기기: iOS 및 Android 기반의 스마트폰이나 휴대폰에서 WE IN
                앱을 설치하여 이용할 수 있습니다. 모바일 앱을 통해 강의를
                수강하고 소통의 장에 참여할 수 있습니다.
              </li>
              <li>
                태블릿: iPad, Android 태블릿 등의 대형 모바일 디바이스에서도 WE
                IN 서비스를 이용할 수 있습니다. 화면 크기가 큰 장점을 활용하여
                보다 편리하게 강의를 시청하고 기타 기능을 활용할 수 있습니다.
              </li>
              <li>
                개인 컴퓨터: WE IN 서비스는 대부분의 PC 운영체제에서 동작합니다.
                Windows, macOS, Linux 등을 사용하는 PC나 노트북에서 웹
                브라우저를 통해 WE IN 웹사이트에 접속하여 수강할 수 있습니다.
              </li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="subtitle2">
            WE IN 서비스에서 제공되는 클래스는 어떤 분야들이 있나요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography textAlign="left">
            WE IN 서비스에서는 다양한 분야의 클래스를 제공합니다. 몇 가지
            예시로는 다음과 같은 분야들이 있습니다:
            <ol>
              <li>
                요리 및 베이킹: 다양한 요리와 베이킹 기술을 배울 수 있는
                클래스가 있습니다. 음식 조리법, 디저트 제작, 특정 요리 문화 등에
                대한 학습이 가능합니다.
              </li>
              <li>
                예술과 공예: 회화, 수채화, 조각, 장식품 제작 등 예술과 공예
                분야의 다양한 기술과 기법을 배울 수 있습니다.
              </li>
              <li>
                음악: 악기 연주, 보컬 기술, 음악 이론 등 음악 분야에 관련된
                클래스가 제공됩니다.
              </li>
              <li>
                언어와 문화: 다른 언어의 기초를 학습하거나 특정 언어로의 번역
                기술을 습득할 수 있는 클래스가 있으며, 다양한 문화와 관련된
                학습도 가능합니다.
              </li>
              <li>
                건강과 피트니스: 요가, 필라테스, 태권도 등의 운동 클래스뿐만
                아니라 건강 관리와 올바른 식단에 관한 정보도 얻을 수 있습니다.
              </li>
              <li>
                인터넷과 디지털 기술: 컴퓨터 기초, 소셜 미디어 사용법, 사진 편집
                등 인터넷과 디지털 기술에 관련된 클래스도 제공됩니다.
              </li>
            </ol>
            위의 예시는 일부이며, WE IN 서비스는 매일 새로운 클래스를
            업데이트하므로 다양한 분야에서 배울 수 있는 기회가 계속해서
            제공됩니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="subtitle2">
            WE IN 서비스의 이벤트에는 어떻게 참여할 수 있나요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography textAlign="left">
            WE IN 서비스의 이벤트에 참여하려면 다음과 같은 방법을 이용할 수
            있습니다:
            <ol>
              <li>
                이벤트 공지: WE IN 앱이나 웹사이트에서 이벤트에 대한 공지를
                확인하세요. 이벤트에 대한 상세 정보, 참여 방법, 기간 등이 안내될
                것입니다.
              </li>
              <li>
                이벤트 페이지: 이벤트 전용 페이지를 방문하여 참여 방법과 조건을
                확인하세요. 이벤트 페이지에서는 이벤트에 필요한 조건이나 참여
                방법이 안내될 것입니다.
              </li>
              <li>
                구독자 이메일 또는 푸시 알림: WE IN 서비스는 구독자들에게 이벤트
                정보를 전달하기 위해 이메일 또는 푸시 알림을 보낼 수 있습니다.
                정기적으로 이메일을 확인하거나 푸시 알림을 확인하여 이벤트에
                참여할 수 있는 안내를 받으세요.
              </li>
            </ol>
            참여 방법과 이벤트 종류는 이벤트마다 다를 수 있으니, 공지사항을
            주의깊게 확인하고 참여 조건을 충족시키는 방법으로 이벤트에 참여할 수
            있습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
