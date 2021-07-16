# 아날로그 시계 구현 (2021.07.16)

[GitHub Pages 링크](https://yallu201.github.io/clock/)

### 목표

    시침, 분침, 초침이 있는 아날로그 시계
    React를 활용하여 SPA로 구현

### 추가 적용 라이브러리

    redux                               # 상태관리용 라이브러리
    redux-actions                       # 액션함수 및 reducer 생성 라이브러리
    react-redux                         # 리액트에 redux 적용을 위한 라이브러리
    @emotion/react                      # css in js
    @emotion/styled                     # like `styled-components` module

### 폴더 구조

    .
    ├── src                             # 개발 리소스 관리 폴더
    │     ├── components                # 컴포넌트 모음
    │     ├── util                      # 분리된 함수 모음
    │     ├── hooks                     # 커스텀 훅 모음
    │     └── modules                   # 리듀서 모음
    └── README.md                       # 현재 보고있는 문서

### 구동방법

    git clone https://github.com/Yallu201/clock.git
    yarn install
    yarn start

### 구현전략

1. 퍼블리싱
   - `emotion.js` 모듈을 활용하여 `css in js` 방식으로 진행했습니다.
   - html, body 태그의 스타일은 `index.css` 파일에 작성하였습니다.
   - 레이아웃 설계위하여 css의 `flexbox`를 활용하였습니다.
2. 컴포넌트 구현
   - `Conatiner` 컴포넌트로 시계를 중앙에 위치시켰습니다.
   - `Frame` 컴포넌트로 전반적인 시계모양을 구현했습니다.
   - `Niddle` 컴포넌트로 `시침`,`분침`,`초침`을 표현하였습니다.
3. 상태관리
   - `time` 리듀서에서 `최초 시간 상태`로 기록합니다.
   - 이후 app이 구동되고 `useClock` hook을 호출하면 시계가 작동합니다. (`setInterval` api를 통해 1000ms 마다 `time/SET_TIME` action을 수행합니다.)
   - `Niddle` 컴포넌트의 animation은 `최초 시간 상태`를 기반으로 지정된 `angle`에서부터 회전을 시작합니다. css 내 `transform` 옵션을 활용하여 구현하였습니다.
