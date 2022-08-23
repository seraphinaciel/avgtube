import express from "express"; // package
import morgan from "morgan";
import videoRouter from "./routers/videoRouter"; //export
import userRouter from "./routers/userRouter";

const PORT = 4000;
const app = express();
const logger = morgan("dev");

app.set("view engine", pug); // 퍼그를 뷰 엔진으로 세팅
// 기본 작업 디렉토리(package.json, /youtube/views) → src 디렉토리로 변경(/youtube/src/views)
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening)