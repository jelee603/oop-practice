# Head First Object-Oriented Analysis & Design

[책](https://www.oreilly.com/library/view/head-first-object-oriented/0596008678)에 나와있는 예시를 리액트+타입스크립트로 실습하기 위한 프로젝트입니다.

### 프로젝트 실행:
```js
yarn start
```

1장. 릭의 기타 가게
 - [x] 기타와 재고 목록을 클래스로 작성한다.
 - [x] 재고 목록에 해당하는 기타의 속성을 [enum](https://www.typescriptlang.org/docs/handbook/enums.html#numeric-enums)으로 교체한다.  
 - [x] 검색할 때, 2개가 있으면 모두 찾을 수 있게 기능을 추가한다. 
 - [x] 기타의 데이터를 분리해 일반적인 기타 속성은 GuitarSpec으로 캡슐화한다. 

 2장. 덕의 강아지 문
 - [x] 강아지문을 나타낼 클래스를 만든다. 
 - [x] 강아지 문을 작동할 수 있게 만들어주는 Remote 클래스를 만든다. 리모콘의 버튼으로 문이 닫혔을 때 누르면 열리고, 열렸을 때 누르면 닫힌다.
 - [x] 콘솔 로그처럼 버튼을 눌렀을때, 행동 로그를 찍는다.
 - [] 강아지 문이 한번 열린 후, 닫지 않으면 자동으로 닫혀야 한다.
 - [x] 문제가 될만한 점을 찾아보고 리스트업을 해본다.
    - [] 강아지가 밖에 있고 들어오지 않았을 경우에 대한 대처는 어떻게 하나요?

