import express from "express";

//4000 port(Door)만 listen(대화)하는 중, 4000 포트로 request 보냄
const PORT = 4000;

const app = express();
/* 누군가 홈페이지에 오려고 하면 서버는 핸들홈 함수를 실행시킨다.
req : 리퀘스트에 대한 정보 보냄
res : 리퀘스트에 어떻게 응답하느냐, 어떻게에 해당되는 메소드는 굉장히 많다(ex. send)
*/
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();//next() 사용, 미들웨어
};

const handleHome = (req, res) => {
  return res.send("I love middlewares");//send() 사용, 미들웨어 아님(연결이 중단됨)
};

/*
미들웨어=핸들러=컨트롤러
1. Request at response 중간의 소프트웨어 = 컨트롤러
2. request 처리 작업을 완료하고 response 를 전달하기 전에 request 처리를 도와주는 콜백함수이다.
3. request 오브젝트와, response 오브젝트, next 파라미터(다음으로 request 를 처리할 콜백함수를 담고있다)를 가진다.
4. 모든 미들웨어는 핸들러(컨트롤러)
5. 누군가가 응답하기 전까지는 모두 미들웨어다.
6. logger : 미들웨어
7. 응답하는 마지막 콘트롤러에는 next()함수를 사용하지 않는다.
---
const routerLogger = (req, res, next) => {
  Return res.send(“www”)
}
const methodLogger = (req, res, next) => {
  Next()
}
Const home = (req, res) => res.send(“hello”)
App.get(“/“, methodLogger, routerLogger, home);

express : methodLogger, req, res 다 있는데 응답가능? 싫음 next()호출해
methodLogger : 놉(next())
express : routerLogger, req, res 있는데 응답 가능?
routerLogger : 오키도키 -> 메시지 보내고 끝(next()가 없으므로 home까지 안감)

*/
app.get("/", logger, handleHome);

// listen시 바로 시작
const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

/*
미들웨어를 중복해서 사용할 때, 아래와 같이 use() 사용(순서 중요)
app.get(“/“, methodLogger, routerLogger, home);
app.get(“/login“, methodLogger, routerLogger,login);
   ↓
app.use(methodLogger, routerLogger) : url에도 작동하는 글로벌 미들웨어
app.get(“/“, home);
app.get(“/“, login);
*/
app.use(gossipMiddleware);

/*
app.get("라우터", 핸들러))
라우터(url을 통해서 리퀘스트들을 전달하는 문)
핸들러(함수, 받은 리퀘스트를 리스폰즈 해주는건 핸들러의 몫이다.)
```
     브라우저(클라이언트)

request 전달 ↓   ↑

          포트

get 호출 받음↓    ↑ response 전달
      서버 : , 

반드시 서로 간에 request & response (둘중 하나라도 빠지면 무한 로딩 시작)
```
HTTP request 는 어떤 route(url) 에 대한 HTTP Method 요청이고 서버는 그 요청에 대한 response 를 해주어야한다. 
*/
app.get("/", handleHome);
app.get("/login", handleLogin);

// 서버를 만들면 현재 내용을 지워도 계속 listening한다.
app.listen(PORT, handleListening)
