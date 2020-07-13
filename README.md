# westagram-frontend

> 디테일한 가이드는 guide 폴더에 있는 md 파일 내용을 확인해주세요.

## 초기 세팅 및 진행 방법
- 원하는 directory 이동 후 해당 repo를 clone 받아주세요.
- VScode에서 해당 폴더를 열고 터미널을 열어주세요.(cmd + j / ctrl + j)
- master 브랜치를 기준으로 `feature/본인이름` 브랜치를 만들어주세요. (ex. `feature/joonsikyang`)
- 새롭게 생성한 브랜치로 이동후 `students > 기수` 폴더에 본인 이름의 폴더를 만들어주세요. 
(ex. `students` > `4th` > `joonsikyang` 폴더 생성)
- 해당 폴더에 기존에 작업했던 `img`, `js`, `styles` 폴더, 그리고 `html`파일들을 생성해서 코드를 복사 붙여넣기 해주세요.
- 이렇게 폴더 및 파일 구조 세팅이 완료되면 작업을 진행합니다.
- 작업 중간 중간 commit 잘 남기고, 완료 시 origin master로 push 후 PR 까지 완료해주세요.
- [참고) Commit Message Guidelines](https://www.notion.so/wecode/Commit-Message-Guidelines-8ca8fac8178943e78ddcfb48f47ba973)
- PR template 양식에 맞게 잘 작성해주세요. 양식에 맞지 않는 경우 검토를 시작하지 않습니다.
- 리뷰 후에는 기존에 작업하던 branch에서 코드 수정하고 다시 add > commit > push 해주시면 됩니다.
- 해당 branch가 merge되면 미션 완료입니다! :)

## 필수 구현 항목
> 필수 구현 항목은 westagram 프로젝트 진행 시 필수적으로 구현해야 하는 항목들입니다. 미션의 순서에 따라 진행해주세요.

- [[Mission1] 로그인 페이지 레이아웃](https://github.com/wecode-bootcamp-korea/westagram-frontend/issues/26#issue-650745073)
- [Mission2] id, pw 입력 시 로그인 버튼 활성화 기능
- [Mission3] 메인 페이지 레이아웃
- [Mission4] 댓글 내용 입력 후 Enter press, 혹은 게시 버튼 클릭 시 댓글 추가 기능

## 보너스 구현 항목
> 보너스 구현 항목들은 필수 구현 완료 후에 추가로 구현해볼만한 기능들입니다. 마찬가지로 미션의 순서에 따라 진행해주세요.

- [Mission5] id, pw validation (ex. id '@' 포함, pw 5글자 이상)
- [Mission6] 반응형 구현 - 화면 사이즈 어느 지점(break point) 이하로 줄어들 시 우측 아이디 추천 섹션 사라짐
- [Mission7] 댓글 삭제 / 좋아요 기능
- [Mission8] 댓글 섹션 더보기 / 숨기기 기능
- [Mission9] 아이디 검색 기능
