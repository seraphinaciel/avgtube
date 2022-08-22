import express from "express"; // package
// morgan 패키지는 node.js 서버로 구성된 웹 환경에서 HTTP request 로그를 관리하기 위한 미들웨어이다.lRouter";
import morgan from "morgan";
/*
모든 파일은 독립적인 모듈, 다른 파일에서 사용(공유)하려면 export → import!
1. default(ex. /routers/globalRouter.js) : 무조건 "하나"만 임포트 하는거라서 마음대로 함수명을 지정 가능
2. 2개 이상 import, export : 각 함수에 엑스포트 적으면 모두 공유됨. 엑스포트 함수명과 임포트 함수명이 무조건 같게 오브젝트 형식으로 사용
  export const 함수명1 = (req, res) => res.send("함수명...");
  import { 함수명1, 함수명2 } from "../000.js";
  ex. /routers/userRouter.js, /controllers/userController.js

../ 현재 폴더에서 벗어나겠음
./ 현재 폴더
*/
import videoRouter from "./routers/videoRouter"; //export
import userRouter from "./routers/userRouter";

//4000 port(Door)만 listen(대화)하는 중, 4000 포트로 request 보냄
const PORT = 4000;

const app = express();
const logger = morgan("dev");//tiny, common, combined, short
app.use(logger);

app.use("/", globalRouter);
app.use("/videos", videoRouter); // /routers/videoRouter.js
app.use("/users", userRouter); // /routers/userRouter.js

// listen시 바로 시작
const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);


// 서버를 만들면 현재 내용을 지워도 계속 listening한다.
app.listen(PORT, handleListening)
