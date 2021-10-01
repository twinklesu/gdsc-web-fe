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
- 이메일 input은 **\@**와 **\.**을 무조건 포함하도록

### 210924

- `<input>`의 `onBlur`과 `onFocus`를 사용해 봄
  ` const [isInput, setIsInput] = useState(false);` state 값을 이렇게 최초에 false로 주고,

  ![](https://images.velog.io/images/twinklesu914/post/4a606e3f-28bc-490d-ac88-6252a3664c6d/image.png)

  `onBlur`와 `onFocus` 모두 `handleFocus`가 핸들링 하도록 했다. 최초 값 (focus 없음)이 false이기 때문에 input 창을 누르면, else를 통해 true가 되고, 다시 focus를 잃으면 onBlur가 해당 함수를 호출하면서 false로 만든다.  
   감이 잘 오지 않아서 `console.log()`를 통해 값을 찍어 봤다.

  ![](https://images.velog.io/images/twinklesu914/post/6731ada8-4a0f-4ef4-99c4-c3d06305fea5/image.png)

  클릭을 해보면서 state가 어떻게 변하는지 관찰해 볼 수 있었다.

- `styled.div`는 `div`뿐 만 아니라 `a`나 `span`등 여러가지가 가능

### 210930

- 처음으로 layout을 좀 layout답게 썼다고 말할 수 있을 것 같다. 마이페이지의 TopNavigation이 다 좌측엔 페이지 이름, 우측엔 x 버튼 형태
- 페이지 이름을 props로 넘겨 사용했다

```javascript
// Auth/index.jsx
<MainWrapper>
  <TopNavigation activePage="auth" />
</MainWrapper>
```

이렇게 현재 페이지 이름을 넘겨주면, TopNavigation에서는 페이지별로 매핑을 해주고 (매핑이 좀 비효율적 방법으로 된 것 같긴한데,, 전에 짜둔부분이라 그냥 맞춰서 했다...ㅎ..)

```javascript
// TopNavigation.jsx
const mapPageToNavi = {
  messageBox: <MessageBoxNavigation />,
  main: <MainNavigation />,
  myPage: <MyPageNavigation />,
  join: <XvectorNavigation pageName="회원가입" />,
  auth: <XvectorNavigation pageName="학교 인증" back="/mypage" />,
  updateNick: <XvectorNavigation pageName="닉네임 변경" back="/mypage" />,
  authDetail: <XvectorNavigation pageName="이메일 인증" back="/mypage" />,
};

const TopNavigation = ({ activePage }) => {
  return <NavigationWrapper>{mapPageToNavi[activePage]}</NavigationWrapper>;
};
```

```javascript
// XvectorNavigation.jsx
const XvectorNavigation = ({ pageName, back }) => {
  return (
    <MainWrapper>
      <h1>{pageName}</h1>
      <Link to={back}>
        <img src={xVector} alt="닫기" />
      </Link>
    </MainWrapper>
  );
};
```

페이지 이름과 x를 누를시 어느 페이지로 이동할지 알려줬다.

- 그리고 mypage 하위의 라우팅을

```javascript
  <Route exact path="/mypage" component={MyPage} />
  <Route exact path="/mypage/updateNickname" component={UpdateNickname} />
  <Route exact path="/mypage/auth" component={Auth} />
  <Route exact path="/mypage/auth/detail" component={AuthDetail} />
```

이런식으로 해서.... 너무 비효율적으로 mypage를 반복적으로 적어줬는데.. 더 좋은 방법이 있을 것 같다. 내일 찾아봐야지!

### 211001

- 학교 이메일 인증을 위해서 input 값을 받을 때, 도메인이 맞는지 확인했다.

```javascript
    const seoultech = "@seoultech.ac.kr"; // 학교 이메일 주소
    const patternEngNum = /[a-zA-Z0-9]/;

    if (!value.includes(seoultech) || !patternEngNum.test(value)) {
      setIsError(true);
    } else {
      setIsError(false);
    }
    setEmail(value);
  };
```
