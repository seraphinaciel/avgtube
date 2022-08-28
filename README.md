# avergers tube
* / → Home
* /join → Join
* /login → Login
* /search → Search

* /users/:id -> See User
* /users/logout -> Log Out
* /users/edit -> Edit MY Profile
* /users/delete -> Delete MY Profile(다른 유저는 삭제 불가)

* /videos/:id -> See Video
* /videos/:id/edit -> Edit Video
* /videos/:id/delete -> Delete Video
* /videos/upload -> Upload Video

***
## Express

### get request
#### const PORT = 4000;
> 4000 port(Door)만 listen(대화)하는 중, 4000 포트로 request 보냄


#### req, res
> req : 리퀘스트에 대한 정보 보냄
> res : 리퀘스트에 어떻게 응답하느냐, 어떻게에 해당되는 메소드는 굉장히 많다(ex. send)

***
### middlewares & controllers
**미들웨어=핸들러=컨트롤러**
1. Request at response 중간의 소프트웨어 = 컨트롤러
2. request 처리 작업을 완료하고 response 를 전달하기 전에 request 처리를 도와주는 콜백함수이다.
3. request 오브젝트와, response 오브젝트, next 파라미터(다음으로 request 를 처리할 콜백함수를 담고있다)를 가진다.
4. 모든 미들웨어는 핸들러(컨트롤러)
5. 누군가가 응답하기 전까지는 모두 미들웨어다.
6. logger : 미들웨어
7. 응답하는 마지막 콘트롤러에는 next()함수를 사용하지 않는다.
<br>
<br>

```js
const routerLogger = (req, res, next) => {
  Return res.send(“www”)
}
const methodLogger = (req, res, next) => {
  Next()
}
Const home = (req, res) => res.send(“hello”)
App.get(“/“, methodLogger, routerLogger, home);
```

* express : methodLogger, req, res 다 있는데 응답가능? 싫음 next()호출해
* methodLogger : 놉(next())
* express : routerLogger, req, res 있는데 응답 가능?
* routerLogger : 오키도키 -> 메시지 보내고 끝(next()가 없으므로 home까지 안감)
<br>
<br>

#### use() 사용(순서 중요) : 미들웨어를 중복시 사용 
```
app.get(“/“, methodLogger, routerLogger, home);
app.get(“/login“, methodLogger, routerLogger,login);
         ↓
app.use(methodLogger, routerLogger) : url에도 작동하는 글로벌 미들웨어
app.get(“/“, home);
app.get(“/“, login);
```

#### 미들웨어 구분법?

```js
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();//next() 사용, 미들웨어
};

const handleHome = (req, res) => {
  return res.send("I love middlewares");//send() 사용, 미들웨어 아님(연결이 중단됨)
};
```
***

### routers
> controller와 url의 관리를 쉽게 해주는 미니 어플리케이션<br>
> 공통 시작부분(주제, ex. /join, /edit)을 기반으로 url을 그룹화 하는 것<br>
> 글로벌 라우터는 깔끔하게 보이게 하기 위해 사용할 뿐임. 컨트롤러 필요없음(유저, 비디오에 들어가기 때문)

**app.get("라우터", 핸들러))**
> * 라우터(url을 통해서 리퀘스트들을 전달하는 문)
> * 핸들러(함수, 받은 리퀘스트를 리스폰즈 해주는건 핸들러의 몫이다.)

```
     **브라우저(클라이언트)**
request 전달 ↓   ↑
            **포트**
get 호출 받음↓    ↑ response 전달
            **서버**
반드시 서로 간에 request & response (둘중 하나라도 빠지면 무한 로딩 시작)
```

HTTP request 는 어떤 route(url) 에 대한 HTTP Method 요청이고 서버는 그 요청에 대한 response 를 해주어야한다. 


#### morgan 패키지
> node.js 서버로 구성된 웹 환경에서 HTTP request 로그를 관리하기 위한 미들웨어이다.

#### export → import!
> 모든 파일은 독립적인 모듈, 다른 파일에서 사용(공유)하려면 
1. default
   * 무조건 "하나"만 임포트 하는거라서 마음대로 함수명을 지정 가능
2. 2개 이상 import, export 
각 함수에 엑스포트 적으면 모두 공유됨. 엑스포트 함수명과 임포트 함수명이 무조건 같게 오브젝트 형식으로 사용
   * export const 함수명1 = (req, res) => res.send("함수명...");
   * import { 함수명1, 함수명2 } from "../000.js";
   ex. /routers/userRouter.js, /controllers/userController.js

***

### url parameters ":"
> videoRouter.get("**/:id**", see);
> 아규먼트 사용 가능, url안에 변수를 포함시킬 수 있게 해준다. 얘가 없으면 모든 변수마다 라우터를 > 하나씩 만들어 줘야함.
> ex. https://nomadcoders.co/wetube/lectures/**2661**(<- 파라미터)

***

### 정규표현식
* :id(\\w+) 모든 문자 숫자 선택
* :id(\\d+) 모든 숫자 선택
* Routing https://expressjs.com/ko/guide/routing.html

정규표현식 테스트
  https://www.regexpal.com
  https://regexr.com/


## pug

> 기본 작업 디렉토리(package.json, /youtube/views) → src 디렉토리로 변경(/youtube/src/views)

> **render** : 000.pug 찾아서 html로 변환해 유저에게 보여줘라.

> **res.redirect()** : 브라우저가 자동으로 이동(redirect로 return 시키는 법)

### 변수명
* #{변수명} : 오직 하나의 값만 가지며 텍스트와 함께 쓸 때 사용한다. title #{pageTitle} | avgTube
* 태그=변수명 : 위와 동일하지만 태그에 하나의 변수값만 삽입 할 때 사용한다. h1=pageTitle


***

### Iteration(반복) - each, while 지원
> 배열, 객체의 모든 요소에 대해 특정 행동을 취할 때 사용. 
```
   each x in y => each x in [1,2,3,4,5]
               => js에서 배열 y를 가져옴, arraylist y의 item인 x를 반복 나열
               => x는 배열 y의 item인 객체이므로 x.title 가능
         ~
   else        => 반복할 값이 없으면 추가, 자동으로 배열을 검색해서 굳이 if가 필요없다
```
```js
   each video in videos // iteration 사용방법
        //- /mixins/video.pug에 argument인 video로 정보(배열의 객체 값) 전달 
        +mixVideo(video) // mixin 사용방법
    else 
        div Sorry nothing found.
```

***

### mixin
* 데이터를 받을 수 있는 partial, 
* 다른 데이터를 포함하지만 같은 형태의 html을 보여준다.
* 코드 재사용 component

***

### **express.urlencoded({ extended: true})**
   1. express는 form을 이해하지 못하여 위의 미들웨어를 사용하여 form의 구문울 분석하는 일종의 구문 분석기. 
   2. videoController.js의 postEdit req.body로 받은 폼태그 값을 js object 형식으로 분석하여 사용이 가능하게 해준다.
   3. 각 아이디의 수정 페이지에서 폼에 내용을 입력(value)하면 내용이 저장된다.
   4. 라우터 이전에 작성한다.

***

### form method=""의 get과 post의 차이?
* get(기본값) : 검색할 때 사용(구글, 네이버)
* post : 파일 전달, DB를 바꾸는 data를 보낼 때, 로그인 시 사용
      => req.body는 오직 POST request만 받는다.

#### **get, post 축약**
```
videoRouter.get("/:id(\\d+)/edit", getEdit);
videoRouter.get("/:id(\\d+)/edit", postEdit);
                     ↓
videoRouter
  .route("/:id(\\d+)/edit") "~" url을 라우터로 만듦
  .get(getEdit) "get" request를 위한 핸들러
  .post(postEdit) "post" request를 위한 핸들러
```

<!-- user가 form을 get하고, 그 form을 post하면 컨트롤러를 작동시켜서 유저들이 redirect되거나 페이지에서 뭔가를 보게 된다.
1. 먼저 get에 대한 컨트롤러를 먼저 만든다(유저가 먼저 봐야 하니까)
   => getUpload, postUpload
2. 컨트롤러를 실행하는 라우터 만들기 (라우터 안에 url 정의)
   => videoRouter.route().get().post()
   => /video/upload로 링크됨
3. 업로드 view를 만들어 준다.
4. controller가 퍼그 템플릿(폼)을 랜더 함 -> 폼의 데이터를 다른 url에 전달, url은 post method와 함께 라우터에 등록된다. 
5. postUpload 컨트롤러를 실행시키고 할거 하고 redirect 시킨다. -->

***

## MONGO DB
1. **chocolatey 설치** : powershell(관리자모드) 켜서 명령어 입력(홈페이지 들어가면 방법 나옴, https://chocolatey.org/install) 
2. *mongo db 설치* : 패키지 검색창에서 mongodb 검색 후 파워셀에서 명령어 입력하여 설치(https://community.chocolatey.org/packages?q=mongod), 오류 나면 몽고디비 사이트에서 설치파일 다운받아서 설치해도 되더라, 윈도우는 'choco install mongodb-compass', 'choco install mongodb-shell' 도 같이 깔아야 한다고...
3. *셋팅하기* : 시작 창에서 '시스템 환경 변수 편집' 검색 -> 고급 탭 맨 아래 환경변수 -> 시스템 변수 탭에서 Path 클릭 후 편집 -> 새로 만들기 눌러서 'C:\Program Files\MongoDB\Server\6.0\bin' 입력
4. **재부팅**
5. **설치 확인** : 파워셀이나 cmd(무조건 관리자 모드)에서 mongod -> 오류 없으면 mongo 또는 mongosh -> 오류 안나면 show dbs -> 오류 안나면 성공
6. vscode에서 npm i mongoose 다운

### on / once
db.on("error", handleError); 여러번 계속 이벤트 발생
db.once("open", handleOpen); 오직 한번만 이벤트 발생

***

### CRUD(create, read, update, delete)
Video.find({}, (error, videos) => {});
1. call back : js에서 기다림을 표현하는 방법
**Video.find({}**, (error, document) => {});
몽구스는 **강조**된 부분을 디비에서 불러온다. 아무것도 리턴되면 안된다.

***

### model = schema
> 데이터가 어떤 형태(형식)로 구성될지만 설정, 실존값은 유저가 작성하게 둔다.
> title: String == title: { type: String }

1. const Video = mongoose.model("Video", videoSchema); 모델의 이름과 데이터 형태인 스키마로 구성
2. export default Video; 모델을 익스포트 해준다.
3. import "./models/Video"; DB를 임포트로 연결하여 DB를 몽구스와 연결시켜 비디오 모델을 인식시킨다.
4. 각 역할에 맞게 폴더를 정리해준다.
   server.js : 익스프레스 서버의 configuration에 관련된 코드만 처리
   init.js : 초기화, DB, 모델 등 필요한 모든 것을 임포트 시킴(app을 실행시킴)
5. package.json에서 "dev": "nodemon --exec babel-node src/init.js"로 변경