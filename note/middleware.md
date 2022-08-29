# middleware
## middlewares & controllers
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

## use() 
> 사용(순서 중요) : 미들웨어를 중복시 사용 

```js
app.get(“/“, methodLogger, routerLogger, home);
app.get(“/login“, methodLogger, routerLogger,login);
         ↓
app.use(methodLogger, routerLogger) : url에도 작동하는 글로벌 미들웨어
app.get(“/“, home);
app.get(“/“, login);
```

## 미들웨어 구분법?

```js
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();//next() 사용, 미들웨어
};

const handleHome = (req, res) => {
  return res.send("I love middlewares");//send() 사용, 미들웨어 아님(연결이 중단됨)
};
```

## **express.urlencoded({ extended: true})**
   1. express는 form을 이해하지 못하여 위의 미들웨어를 사용하여 form의 구문울 분석하는 일종의 구문 분석기. 
   2. videoController.js의 postEdit req.body로 받은 폼태그 값을 js object 형식으로 분석하여 사용이 가능하게 해준다.
   3. 각 아이디의 수정 페이지에서 폼에 내용을 입력(value)하면 내용이 저장된다.
   4. 라우터 이전에 작성한다.

## morgan 패키지
> node.js 서버로 구성된 웹 환경에서 HTTP request 로그를 관리하기 위한 미들웨어이다.
