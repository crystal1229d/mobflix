<div align='center'>

  <img src='public/README/logo.png' alt='logo' height='50' />
  <br />
 
  <h2> 🎥 MOBFLIX 🎞️🎬 </h2>
  <br /><br />

  <div align="left">
    <p><b>Dejay React 세미나 3회차 과제</b></p>
    <p>기간 : 2024.07.02 - 2024.07.08</p>
    <p>강사 : 윤은미 책임님</p>
    <p>목적: MobX를 활용한 상태를 관리 실습 및 Redux 와 비교 -> 프로젝트별로 어떤 상태관리를 사용하는게 좋을지를 결정할 수 있는 실력 기르기</p>
    <p>과제 내용:</p>
    <ul>
    <li> Mobx를 이용하여 영화 검색 영화등록 app을 만들어보기</li>
    <li>영화 등록, 삭제, 수정</li>
    <li>동호회 사람 등록, 삭제</li>
    <li>동호회 인원이 영화 등록화면에서 함께 보이도록 화면 구현</li>
    </ul>
  </div>
</div>

<br />

## Preview / Features

### >> [mobflix.com](https://mobflix-wheat.vercel.app/)

<br />

<div align='center'>

<img src='/public/README/1.png' alt='preview' width='450' />
<p>메인 페이지</p>

<br />

<img src='/public/README/2.png' alt='preview' width='450' />
<img src='/public/README/2-1.png' alt='preview' width='170' />
<p>영화 페이지 - 영화 등록/삭제/수정</p>

<br />

<img src='/public/README/3.png' alt='preview' width='450' />
<p>동호회 페이지 - 멤버 등록/삭제</p>

<br />

<img src='/public/README/4.png' alt='preview' width='450' />
<p>검색결과 페이지 - 상단메뉴에서 필터와 검색어를 넣고 검색</p>

<br />

<img src='/public/README/5.png' alt='preview' width='200' />
<p>설정 페이지 - 사이트의 다양한 기능 설정 (다크/라이트모드, 언어, 별점 스타일)</p>

<img src='/public/README/6.png' alt='preview' width='450' />
<p>별점 스타일 - 숫자</p>

<img src='/public/README/7.png' alt='preview' width='450' />
<p>별점 스타일 - 별</p>

</div>

## Features

- 라우팅
- 영화 등록, 삭제, 수정 (동호회 인원이 영화 등록화면에서 함께 보인다)
- 동호회 사람 등록, 삭제
- 사이트 설정 (별점 스타일)

<br />

## TODO

- [fix] 검색결과(SearchResults) 페이지 진입 시 Search Input 비우기
- [fix] 검색결과(SearchResults) 페이지 진입 시 NavigationBar 에서 어떤 메뉴를 선택할지
- [fix] 검색 후 NavigationBar 를 통해 다른 페이지로 진입 시, Search Input 을 어떻게 할지
- [fix] 설정(Setting) 페이지 진입 시 NavigationBar 에서 어떤 메뉴를 선택할지

<br />

- [feat] 설정 기능 : Dark/Light Mode, Language 완성

<br />

## Built With

- [`React`](https://reactjs.org/)

- [`TypeScript`](https://www.typescriptlang.org/)

- [`MobX`](https://mobx.js.org/README.html)

- [`Emotion`](https://emotion.sh/docs/introduction)

<br />

## How to Start

Use `yarn`

```
yarn

yarn start
```

Use `npm`

```
npm install

npm start
```
