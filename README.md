# GDSC Seoultech 21-22 Web Curriculum Frontend

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">

## 1주차

### 210914

- 세미콜론을 잘 찍자
- `<a>` 대신 `<Link>` 사용
- 주소 설정은 `App.js`에서 `<Route exact path>`로
- html 안에서 js 쓰려면 `{}` (jsx)

### 210916

- return을 빼먹지 말자
- 주소 지정해줄 때 `` {`/{변수}`} ``
- css: 가로로 나열할 때 `flex`, 세로로 나열할 때 `block`

### 210917

- Route의 `:no`를 쓸줄 몰라서 쪽지 디테일 다음에 하기로 함

### 210918

- div 안의 요소 가운데 정렬할 때 `justify-content: center`
- index에서 content 들어갈 부분 위, 아래 margin 주기 (navigation에 먹히지 않도록)
- 양 끝으로 몰고 싶을 때 `justify-content: space-between`

### 210919

- top nav랑 bottom nav에 가려지지 않도록, 내용물의 가장 밖 div에 padding 주기!

## 2주차

### 210922

- prettier 설정 완료

### 210924

- `논리 && 연산자`: JS 에서 `true&&expression`은 항상 true, `false&&expression`은 항상 false
- 이메일 input은 **@**와 **.**을 무조건 포함하도록

### 210924

- `<input>`의 `onBlur`과 `onFocus`를 사용해 봄
  ` const [isInput, setIsInput] = useState(false);` state 값을 이렇게 최초에 false로 주고,

  ![](https://images.velog.io/images/twinklesu914/post/4a606e3f-28bc-490d-ac88-6252a3664c6d/image.png)

  `onBlur`와 `onFocus` 모두 `handleFocus`가 핸들링 하도록 했다. 최초 값 (focus 없음)이 false이기 때문에 input 창을 누르면, else를 통해 true가 되고, 다시 focus를 잃으면 onBlur가 해당 함수를 호출하면서 false로 만든다.  
   감이 잘 오지 않아서 `console.log()`를 통해 값을 찍어 봤다.

  ![](https://images.velog.io/images/twinklesu914/post/6731ada8-4a0f-4ef4-99c4-c3d06305fea5/image.png)

  클릭을 해보면서 state가 어떻게 변하는지 관찰해 볼 수 있었다.

- `styled.div`는 `div`뿐 만 아니라 `a`나 `span`등 여러가지가 가능
