# 로그인 페이지

- 관련파일
  HTML: login.html
  CSS: style/login.css, style/common.css
  JS: js/login.js

* 참고: style/common.css은 모든 페이지에 공통적으로 필요한 style을 넣어주면 됩니다.

## 순서

1. HTML 작성
2. CSS 스타일
3. JavaScript 코딩

## 디자인

구현해야할 로그인 페이지는 실제 instagram 로그인 부분과 유사하게 디자인했습니다.
구현할 westagram 디자인: tobe/login.png

- instagram 사이트 로그인 페이지를 참고하여 개발해주세요.
- 아이콘은 flaticon 사이트를 이용해 다운받아 사용해 주세요.
  (https://www.flaticon.com/free-icon/instagram_1384031?related_item_id=1384031&term=instagram)
- instagram 로고는 아래의 폰트를 이용해 'westagram'으로 작성해주세요.
  (https://fonts.google.com/specimen/Lobster?preview.text=&preview.text_type=custom)

## HTML 작성

다음 요구사항에 맞게 HTML을 작성해주세요.
HTML을 작성할때는, 항상 디자인된 화면을 보면서 해야합니다.

로그인 되지 않은 https://www.instagram.com/ 화면을 참고하거나 tobe 폴더의 login.png이미지를 참고해 만들어주세요.

0. 로그인 전체를 감싸고 border가 적용된 div 태그가 필요합니다.

1. instagram 로고는 폰트를 이용해 'westagram'으로 작성해주세요.

2. input 태그 사용

- tag는 input
- type은 text 또는 password
- placeholder는 속성을 사용하여 "전화번호, 사용자 이름 또는 이메일" 등의 값을 넣어주시면 됩니다.

3. 버튼.

- button 태그를 사용해주세요.

이제 CSS 스타일을 작성해서 로그인 화면을 완료해주세요!

## 구현사항

- id, pw 에 각각 한 글자 이상 써야 버튼이 활성화 되도록 해주세요.
  원래 연한 파란색이었다가 -> 활성화 되면 파란색으로!
