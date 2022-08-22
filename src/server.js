import express from "express";
import morgan from "morgan";//미들웨어

//4000 port(Door)만 listen(대화)하는 중, 4000 포트로 request 보냄
const PORT = 4000;

const app = express();
const logger = morgan("dev");//tiny, common, combined, short

const home = (req, res) => {
  return res.send("hello");
};

const login = (req, res) => {
  return res.send("login");
};
  
app.use(logger);
app.get("/", home);
app.get("/login", login);

// listen시 바로 시작
const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);


// 서버를 만들면 현재 내용을 지워도 계속 listening한다.
app.listen(PORT, handleListening)
