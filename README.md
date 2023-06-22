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





## 시작하기

> **여러분의 제품/서비스를 Microsoft 애저 클라우드에 배포하기 위한 절차를 구체적으로 나열해 주세요.**
