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

z

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

```javascript
// Login/index.jsx
const handleFocus = (e) => {
  if (isInput) {
    console.log("false");
    setIsInput(false); // 최초에 false였으니까..
  } else {
    console.log("true");
    setIsInput(true);
  }
};
```

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

## 3주차

### 홈 화면 설정

1. 탑 네비게이션

- 전에 마이페이지에서 만들어둔 탑 네비게이션과 형태가 같음
- MyPageNavigation.jsx를 AroowNavigation.jsx로 바꿔준 후 재사용 가능하도록 props를 이용함

2. 체크박스

- 체크박스가 눌렸을 때, 색이 채워지는게 아니라 체크된 이미지가 채워져야함
- `background: url("${checkImg}");`

3. local storage

- 아 좀이따가 이거 채워야지...

### 게시판

1. react-slick

- react-slick의 한 종류가 carousel 인줄 알았는데, 그 반대
- carousel은 회전목마라는 뜻
- 구현할거는 계속 회전하진 않고 끝이 존재하는,,,carousel이라고 생각하면 될 듯

  ```javascript
  const settings = {
    className: "slider-wrapper",
    dots: false, // 광고 배너를 상상했을 때, 아래 넘어가는게 느껴지도록 있는 점들
    infinite: false, // 계~속 돌게 하는거
    slideToShow: 1, // 한번에 보여질 개수
    slideToScroll: 1, // 슬라이드 당 넘어갈 수
    afterChange: (index) => setSliderId(index), // 인덱스 바꾸는 callback
    ref: mySlider, // 다른 슬라이더에 ref 넘겨줌
  };
  ```

- css를 적용해 주지 않아서, 버튼 작동이 안됐다 꼭! css가 필요한 녀석이다
- 동작방식은 2가지: 손으로 슬라이드 했거나, 상단의 네비게이션을 클릭했을 때다.
  ```javascript
  <button onClick={() => moveSlider(0)}>
    <UnderLine text="게시판" isActive={sliderId === 0} />
  </button>
  ```
  그래서 상단 네비게이션을 버튼으로 구성해서, 버튼 클릭시 `moveSlider()` 함수가 호출되어 `setSliderID()`를 활용해 페이지 인덱스를 변경해준다.
  슬라이더가 작동했을 때도 setting의 `afterChange: (index) => setSliderId(index)`를 통해 페이지 인덱스가 변경된다.

2. 즐겨찾는 게시판

- setting에 이용했던 체크박스와 동일한 방식으로 즐겨찾기 할 수 있게 했다
- **local storage**를 이용해서 메인화면에 선택한 것만 보이게 했다.
- 근데 이미지 적용이 안돼서 일단 누르면 색이 칠해지는 체크박스로 만들었다ㅜㅜㅜㅜㅜ

3. 진로, 홍보 슬라이더

- 이 곳의 게시판 모양은, 메인의 핫게시판 + 실시간의 형태
- 둘의 코드를 이용해 `BoardBox.jsx`를 만듦
- props를 이용해 title과 content를 매번 바꿀 수 있게하여 재사용했다.
  ```javascript
  const BoardBox = ({ title, contents, to }) => {
    return (
      <BoardWrapper className="board-wapper">
        <div>// 이 곳에 title과 to props를 이용해 제목과 더보기 버튼</div>
        <div>
          {contents.map((content) => (
            <ContentWrapper>
              // content는 title, date, like, comments, content를 갖고있음 //
              백엔드 연결하면 Link 태그 이용해 게시글 자세히 보는 페이지로 이동
            </ContentWrapper>
          ))}
        </div>
      </BoardWrapper>
    );
  };
  ```

### 게시글 목록, 세부 페이지

- `<Link to={`/board/list/${board.link}`}>`로 연결해주기

1. 댓글 입력 창

- 이미지 넣어야지
- 체크 박스 누르면 익명 글씨도 빨강색
- styled를 이용해서 `&lt;MainWrapper isSecret={isSecret}>` 로 props를 넘겨주고
  `color: ${(props) => props.isSecret ? COLORS.red : COLORS.grey_400};`로 색을 입혀줬다.
- isSecret는 state로 체크박스가 체크될 때 true, 언쳌될때 false로 바꿔줬다.

2. 이미지 삽입

- `&lt;input type="file" accept="image/*" />` 룰 이용해서 이미지를 업로드 하도록 했다
- 선택했을 때 이미지 보여지게 하는건... 백엔드 연결하면서 하기로했다!
- 미래의 나 화이팅! ㅋㅎ
