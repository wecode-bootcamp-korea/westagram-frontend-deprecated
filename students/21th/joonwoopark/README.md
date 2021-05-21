# Westagram

- Indent 제대로 할 것
- Wecode CSS Convention 따를 것
- console.log 남기지 않을 것

## Todo

### 필수

- [x] 1. 로그인 페이지 레이아웃
- [x] 2. ID, PW 입력 시 로그인 버튼 활성화 기능
- [x] 3. 메인 페이지 레이아웃
- [x] 4. 댓글 내용 입력 후 Enter키, 게시 버튼 클릭 시 댓글 추가

### 선택

- [x] 5. ID, PW 검증
- [x] 6. 댓글 좋아요 / 삭제 기능
- [x] 7. 검색 창을 통한 ID 검색
- [x] 8. nav 프로필 사진 클릭 시 확장 메뉴 디스플레이
- [x] 9. 반응형 웹페이지

### 개인 목표

- [x] 스토리 데이터베이스 객체 만들어서 불러오기
- [x] 회원님을 위한 추천도 위처럼 데이터에서 불러오기

---

## Review에 명시된 고쳐야 할 것

### login.html

- [x] autofocus 중복 적용 삭제
- [x] disable 삭제
- [x] footer > div > span 구조 Sementic하게 수정

### main.html

- [x] nav > div > h3 구조 Sementic하게 수정
- [x] search-container, nav-button-container div 수정
- [x] header태그 잘못사용 된 것 수정 : line 65
- [x] img src보다 alt가 먼저 오게 수정
- [x] footer > div > span sementic하게 수정

### login.js

- [x] 안쓰이는 변수, console.log 삭제
- [x] if (idValue.length > 0 && idValue.includes('@') && passwordLength > 0) 11번쨰 라인 `passwordLength` 부분 Boolean 으로 인식되게 수정

### main.js

- [x] 삼항연산자로 변경 : line 13
- [x] removeComment 함수 수정 : line 21
- [x] 의미없는 변수명 수정 : line 27
- [x] remove, like의 태그 span -> button으로 수정 : line 30, 31
- [x] comment, input value 변수 위치 수정 : line 52, 53
- [x] comment.length !== 0 부분 boolean 처리로 변경 : line 59
- [x] displayStory 매개변수명 변경 : line 64
- [x] index값을 `personal_db`에서 받지 말고 반복문 index로부터 받기 : line 95
- [x] displayRemommendUser 의미없는 매개변수명 변경 : line 96
- [x] 필요없는 return문 변경 : line 118

### personal_db.js

- [x] index값 삭제
