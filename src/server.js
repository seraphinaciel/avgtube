import "./db";
import express from "express"; // package
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter"; //export
import userRouter from "./routers/userRouter";

const PORT = 5000;
const app = express();
const logger = morgan("dev");

app.set("view engine", "pug"); // 퍼그를 뷰 엔진으로 세팅
app.set("views", process.cwd() + "/src/views");
app.use(logger);

/* express.urlencoded({ extended: true})
express는 form을 이해하지 못하여 위의 미들웨어를 사용하여 form의 구문울 분석하는 일종의 구문 분석기. 
videoController.js의 postEdit req.body로 받은 폼태그 값을 js object 형식으로 분석하여 사용이 가능하게 해준다.
각 아이디의 수정 페이지에서 폼에 내용을 입력(value)하면 내용이 저장된다.
라우터 이전에 작성한다.
 */
app.use(express.urlencoded({ extended: true}));
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening)