import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const LectureReview = () => {
  return (
    <>
      <Card sx={{ minWidth: 275, borderRadius: 2.5 }}>
        <CardContent>
          <Stack>
            <Typography variant="h5" textAlign="left">
              엄청난 경험과 즐거움! 고양이와 함께하는 원데이 클래스 추천합니다!
            </Typography>
            <Rating name="read-only" value={5} readOnly sx={{ mt: 1 }}></Rating>
            <Typography textAlign="left" sx={{ mt: 1, mb: 2 }}>
              채준혁
            </Typography>
          </Stack>
          <Typography variant="body2" textAlign="left" fontSize="16px">
            <p>
              이 고양이와 함께하는 반려동물 원데이 클래스는 저에게 놀라운
              경험이었습니다. 클래스를 마치고 나서, 제가 얻은 지식과 능력 향상에
              정말 감사하게 됐습니다.
            </p>
            <p>
              첫째로, 이 클래스에서 제가 배운 것 중 하나는 고양이와의 상호작용
              방법에 대한 이해입니다. 이전에는 고양이의 신호와 행동을 해석하기
              어려웠지만, 이제는 그들의 신호를 더 잘 이해하고 적절한 상호작용을
              할 수 있습니다. 이를 통해 고양이와 더욱 깊은 연결을 형성할 수 있게
              되었습니다.
            </p>
            <p>
              둘째로, 영양 및 식사 관리에 대한 지식을 습득했습니다. 이
              클래스에서 배운 올바른 식단과 영양 요구사항을 고양이에게
              제공함으로써, 그들의 건강과 웰빙을 향상시킬 수 있었습니다.
              이전에는 고양이의 식사에 대해 자신감이 없었지만, 이제는 올바른
              식사 방법을 통해 고양이의 건강을 돌보고 있습니다.
            </p>
            <p>
              세 번째로, 이 클래스에서 제가 획득한 가장 소중한 능력은 고양이의
              훈련입니다. 고양이가 원하는 행동을 가르치는 방법과 효과적인 훈련
              기술을 배웠습니다. 이를 통해 고양이의 예절 향상과 원하는 행동을 잘
              이해하고 제어할 수 있게 되었습니다. 이는 고양이와의 일상 생활을
              더욱 원활하게 만들어주었습니다.
            </p>
            <p>
              마지막으로, 이 클래스에서 배운 재미있는 활동과 게임은 저와 고양이
              사이의 유대감을 높여주었습니다. 다양한 장난감과 게임을 통해
              고양이와 즐거운 시간을 보낼 수 있고, 그들의 체육 운동과 지적
              자극을 증진시킬 수 있었습니다. 이제는 고양이와 함께 더욱 활발하고
              즐겁게 놀 수 있게 되었습니다.
            </p>
            <p>
              전반적으로, 고양이와 함께하는 반려동물 원데이 클래스는 제게 많은
              도움이 되었습니다. 상호작용 방법, 영양 관리, 훈련 기술, 그리고
              즐거운 활동과 게임에 대한 이해가 크게 향상되었습니다. 이제
              고양이와 함께 보내는 시간이 훨씬 의미있고 풍요로워졌으며, 저와
              고양이 사이의 연결이 더욱 강해진 것을 느낄 수 있습니다. 이 원데이
              클래스를 적극 추천하고 싶습니다!
            </p>
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 275, borderRadius: 2.5, mt: 3 }}>
        <CardContent>
          <Stack>
            <Typography variant="h5" textAlign="left">
              고양이와의 놀라운 시간을 선사한 원데이 클래스
            </Typography>
            <Rating name="read-only" value={5} readOnly sx={{ mt: 1 }}></Rating>
            <Typography textAlign="left" sx={{ mt: 1, mb: 2 }}>
              황효성
            </Typography>
          </Stack>
          <Typography variant="body2" textAlign="left" fontSize="16px">
            <p>
              와우! 이 고양이 원데이 클래스 진짜 대박이었어요! 얼마 전에
              참여했는데, 너무나도 유익하고 재미있었어요!
            </p>
            <p>
              첫째로, 이번 클래스에서 고양이와의 상호작용 방법을 배웠는데, 정말
              대단하더라구요! 예전에는 고양이가 뭘 원하는지 모르겠어서
              당황했는데 이제는 뭔가 의미있는 신호를 주고받을 수 있게 되었어요.
              그래서 이제는 서로에게 잘 대처하고 더 가까워진 느낌이에요. 우리
              고양이도 엄청 좋아해요!
            </p>
            <p>
              둘째로, 영양 및 식사 관리에 대한 내용도 배웠어요. 정말 인상깊은 건
              고양이가 어떤 음식을 좋아하고 어떤 음식을 피해야 하는지 알게 된
              거에요. 이제는 건강한 식단으로 우리 고양이를 돌보고 있어요. 사실
              나한테도 이걸 적용할 수 있을까 싶었는데, 덕분에 우리 가족 전체가
              건강한 식습관을 가지게 된 것 같아요!
            </p>
            <p>
              셋째로, 훈련 기술에 대해서도 배웠어요. 원래 우리 고양이는 장난감에
              빠져서 아무리 부르면 안 나왔거든요. 그런데 이번에 배운 훈련 기술을
              적용해보니까 말을 잘 듣게 되었어요. 이제는 "앉아", "뒤돌아봐" 같은
              명령에 잘 반응하고 제 지시에 따라 움직여줘요. 우리 고양이가 이렇게
              똑똑하다니 정말 놀랍고 기분이 좋아요!
            </p>
            <p>
              마지막으로, 클래스에서 알려준 다양한 활동과 게임도 진짜
              재미있었어요. 고양이와 함께하는 시간이 이렇게 즐겁다니 정말
              대박이에요! 어떤 장난감이 좋은지, 어떻게 고양이와 더 재미있게 놀
              수 있는지 등 다양한 아이디어를 얻을 수 있었어요. 이제는 고양이와
              함께 놀 때마다 우리 모두 즐거운 시간을 보내고 있어요!
            </p>
            <p>
              정말 감사해요! 이 원데이 클래스 덕분에 우리 가족의 반려동물 생활이
              훨씬 더 풍성해졌어요. 참여해본 모든 사람들에게 강력하게
              추천합니다!
            </p>
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 275, borderRadius: 2.5, mt: 3 }}>
        <CardContent>
          <Stack>
            <Typography variant="h5" textAlign="left">
              고양이와 함께하는 원데이 클래스, 최고였어요!
            </Typography>
            <Rating name="read-only" value={4} readOnly sx={{ mt: 1 }}></Rating>
            <Typography textAlign="left" sx={{ mt: 1, mb: 2 }}>
              장휘영
            </Typography>
          </Stack>
          <Typography variant="body2" textAlign="left" fontSize="16px">
            <p>
              이 고양이 원데이 클래스에 참여해서 정말 행복한 시간을 보냈습니다!
              기대 이상으로 특별하고 유익한 경험이었어요.
            </p>
            <p>
              고양이와의 상호작용 방법을 배웠는데, 이제는 고양이의 표현을 더 잘
              이해하고 상호작용할 수 있어요.
            </p>
            <p>
              영양 관리와 식사에 대한 정보를 배웠어요. 고양이가 좋아하는 음식과
              피해야 할 음식을 알게 되었어요.
            </p>
            <p>
              훈련 기술을 배워서 고양이와 더 즐거운 시간을 보낼 수 있게
              되었어요. 고양이가 간단한 명령에 잘 반응하고 함께하는 활동과
              게임에서 더 즐거워해요.
            </p>
            <p>
              원데이 클래스에서 알려준 다양한 활동과 게임은 정말 재미있었어요.
              고양이와 함께하는 놀이시간이 더욱 특별하고 의미있는 시간으로
              바뀌었어요.
            </p>
            <p>
              이 원데이 클래스로 인해 우리 가족과 고양이와의 일상이 더욱
              풍요로워졌어요. 추천하고 싶은 이유가 이제서야 완전히 이해되네요!
            </p>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default LectureReview;
