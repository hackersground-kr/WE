# `WE팀` - `WE_IN (노인과 청년이 함께하는 원데이 클래스)`

해커그라운드 해커톤에 참여하는 `WE` 팀의 `WE_IN`입니다.

## 참고 문서

> 아래 두 링크는 해커톤에서 앱을 개발하면서 참고할 만한 문서들입니다. 이 문서들에서 언급한 서비스 이외에도 더 많은 서비스들이 PaaS, SaaS, 서버리스 형태로 제공되니 참고하세요.

- [순한맛](./REFERENCES_BASIC.md)
- [매운맛](./REFERENCES_ADVANCED.md)

## 제품/서비스 소개

<!-- 아래 링크는 지우지 마세요 -->
[제품/서비스 소개 보기](TOPIC.md)
<!-- 위 링크는 지우지 마세요 -->

## 오픈 소스 라이센스

<!-- 아래 링크는 지우지 마세요 -->
[오픈소스 라이센스 보기](./LICENSE)
<!-- 위 링크는 지우지 마세요 -->

## 설치 방법

> **아래 제공하는 설치 방법을 통해 심사위원단이 여러분의 제품/서비스를 실제 Microsoft 애저 클라우드에 배포하고 설치할 수 있어야 합니다. 만약 아래 설치 방법대로 따라해서 배포 및 설치가 되지 않을 경우 본선에 진출할 수 없습니다.**
### [Frontend]

0. https://github.com/hackersground-kr/WE 로 접속해서 레포지토리를 fork 해온다. <br>
0. fork 해온 레포지토리를 터미널에서 연다.
   <br> 터미널에 다음 명령어를 순서대로 입력한다.
    - cd Front/WE_IN  을 입력해 해당 폴더로 들어간다.
    - npm install
    - npm run build
    - dist 파일 생성 되었는지 확인 한다 -> .gitignore 파일에서 dist 관련된 파일을 모두 주석처리한다. (node_modules 밑에 두줄을 주석처리한다)
<br>
![dist](https://github.com/hackersground-kr/WE/assets/87405971/dbeb29fd-a650-4456-b0d6-2c967e49b3d2)


    - git push 해서 dist 파일이 나의 포크레포지토리에 올라온 것을 확인한다.
2. https://portal.azure.com/#home 에 접속합니다. (로그인 필요)
3. 리소스 만들기 -> 웹/앱 만들기로 들어간다
   - 프로젝트 세부 정보
   - 인스턴스 정보 <br>
      이름 : "임의 작성" <br>
       게시 : 정적 웹 앱 <br>
   - Azure Functions 및 준비 세부 정보 : East Asia를 제외한 모든 나라 중에 하나를 선택하면 된다.(EX) CentralUS)
     <br>
     ![eastAsiano](https://github.com/hackersground-kr/WE/assets/87405971/f17b3dc3-dd2b-4bd3-8a03-3357cb0af681)

   - 배포 세부 정보 : GitHub <br>
     조직 : 본인 깃헙 아이디 <br>
     리포지토리 : 포크해온 리포지 토리 (=WE)<br>
     분기 : main
   - 빌드 세부 정보 : React <br>
     앱 위치 : **/Front/WE_IN/dist**<br>
     API 위치 : (생략)<br>
     출력 위치 : build
   - 검토



### 사후 준비 사항

> **여러분의 제품/서비스를 Microsoft 애저 클라우드에 배포하기 위해 사전에 필요한 준비 사항들을 적어주세요.**
### 배포 완성 사진
[Frontend]
![image](https://github.com/hackersground-kr/WE/assets/87405971/edaa7c26-8dba-4846-8a5c-b10fda3af1ea)

<br>

### [Backend]

<br>

애저 SQL

<br>
1. 애저 포탈에 접속한다. https://portal.azure.com/#home
   <img width="1260" alt="스크린샷 2023-06-22 오후 10 09 00" src="https://github.com/hackersground-kr/WE/assets/87405998/7de332d2-bea4-4ab2-8922-4d51706a1001">

2. 팀 리소스 그룹에 접속한다.
   <img width="1440" alt="스크린샷 2023-06-23 오전 6 57 33" src="https://github.com/hackersground-kr/WE/assets/87405998/bcc5f284-ae1e-4161-a9e6-cd8c92abe936">

3. 왼쪽 상단의 만들기를 클릭한다.
   <img width="1440" alt="스크린샷 2023-06-23 오전 6 58 20" src="https://github.com/hackersground-kr/WE/assets/87405998/267b82e1-80ea-4ccc-9033-2a1524bed579">


4. SQL 데이터베이스를 선택한다.
   <img width="1440" alt="스크린샷 2023-06-22 오후 10 20 09" src="https://github.com/hackersground-kr/WE/assets/87405998/e0f7b4d3-0a19-444a-b8b8-7cbca900532e">

5. 만들기를 누른다.
   <img width="1440" alt="스크린샷 2023-06-22 오후 10 12 20" src="https://github.com/hackersground-kr/WE/assets/87405998/e33866de-67ed-4551-bfc6-b82250db9745">


6. 리소스 그룹을 정해주고, 데이터베이스 이름을 정하고, 서버를 새로 만든다. 그런 다음, 검토 + 만들기를 누르면 생성이 된다.
    <img width="1258" alt="스크린샷 2023-06-22 오후 10 18 38" src="https://github.com/hackersground-kr/WE/assets/87405998/d8f7fbff-4f6c-4a4b-9c1c-ce45f3fcb19b">

7. 깃허브에 테스트용 레포를 만든다. 이때 Maven으로 설정해야 한다.
   <img width="1440" alt="스크린샷 2023-06-23 오전 7 33 12" src="https://github.com/hackersground-kr/WE/assets/87405998/3e06178e-2767-4592-9f2b-9650f882cff3">


8. 사진에 있는 것처럼 pom.xml에 dependency를 추가한다.
    <img width="581" alt="KakaoTalk_Photo_2023-06-22-22-16-52 001" src="https://github.com/hackersground-kr/WE/assets/87405998/933a5b41-88dd-4f55-9892-f5c240286553">

9. SQL 데이터베이스에 왼쪽 메뉴에 설정 > 연결 문자열 > JDBC에 있는 SQL 인증을 사진에 맞게 application.properties에 작성한다.
    <img width="933" alt="KakaoTalk_Photo_2023-06-22-23-55-53" src="https://github.com/hackersground-kr/WE/assets/87405998/ce6d8797-283e-46fd-b402-9cbad9e5ff61">

10. 추가로 application.properties에 설정한 유저의 아이디와 비밀번호를 작성한다.
    <img width="1075" alt="KakaoTalk_Photo_2023-06-22-22-16-52 002" src="https://github.com/hackersground-kr/WE/assets/87405998/26a3162e-49cd-484d-86a1-56b0cf62110b">

12. project를 실행한다.
<br>

서버배포
<br>
1. 팀 리소스 그룹에 접속한다.
   <img width="1440" alt="스크린샷 2023-06-23 오전 6 57 33" src="https://github.com/hackersground-kr/WE/assets/87405998/d5bc8936-920b-4471-9fec-8c0bc48e6e25">

2. 왼쪽 상단의 만들기를 클릭한다.
   <img width="1440" alt="스크린샷 2023-06-23 오전 6 58 20" src="https://github.com/hackersground-kr/WE/assets/87405998/a81a476f-2842-4917-bee9-444999784504">

3. 웹 앱을 선택한다.
   <img width="1440" alt="스크린샷 2023-06-23 오전 7 00 52" src="https://github.com/hackersground-kr/WE/assets/87405998/1b346ce5-3f5a-467b-bca7-f9262e110ff8">

5. 만들기를 누른다.
   <img width="1440" alt="스크린샷 2023-06-23 오전 7 01 22" src="https://github.com/hackersground-kr/WE/assets/87405998/5deca853-f4c9-4128-a1f5-ca62c6c163b6">


6. 리소스 그룹을 선택하고, 이름 작성하고 런타임 스택은 각자가 개발하는 것에 맞게 하고 검토 + 만들기 한다.
   <img width="1440" alt="스크린샷 2023-06-22 오후 10 21 08" src="https://github.com/hackersground-kr/WE/assets/87405998/bd0a6aac-8ceb-4fff-8b76-b0162d8c0748">

7. 만들어진 서버의 왼쪽의 배포 > 배포 센터에 접속한다.
    <img width="1440" alt="스크린샷 2023-06-22 오후 10 21 37" src="https://github.com/hackersground-kr/WE/assets/87405998/eb68e373-a235-4393-b063-d557c607e42f">

8. 상단의 설정을 눌러서 현재 연결하고자 하는 깃허브 프로젝트와 연결한다.
    <img width="1440" alt="스크린샷 2023-06-22 오후 10 21 52" src="https://github.com/hackersground-kr/WE/assets/87405998/c2e622cc-4aa9-490a-a2eb-dde93071910c">

9. 깃허브로 돌아가서 build와 deploy과정을 지켜본다.
   <br>
10. 완료가 되면, server주소를 가지고 접속을 해본다.
<br>

### 배포 완성 사진
<img width="1440" alt="KakaoTalk_Photo_2023-06-22-23-47-11" src="https://github.com/hackersground-kr/WE/assets/87405998/697d90bd-3e47-44ba-b2bd-673f7459ce85">

### 배포 후 SQL 보는 법
<img width="1440" alt="스크린샷 2023-06-22 오후 10 19 28" src="https://github.com/hackersground-kr/WE/assets/87405998/2598db61-a92b-432b-b4a0-2927e1b64cb4">


## 시작하기

> **여러분의 제품/서비스를 Microsoft 애저 클라우드에 배포하기 위한 절차를 구체적으로 나열해 주세요.**
