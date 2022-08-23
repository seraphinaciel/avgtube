import express from "express";
import { see, edit, upload, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

// :id보다 위에 위치한 이유는 :id 자리에 upload가 있으니 express는 당연하게 변수라고 생각해 버리기 때문이다.
videoRouter.get("/upload", upload);

/*
:파라미터
아규먼트 사용 가능, url안에 변수를 포함시킬 수 있게 해준다. 얘가 없으면 모든 변수마다 라우터를 하나씩 만들어 줘야함.
ex. https://nomadcoders.co/wetube/lectures/2661(<- 파라미터)
*/
videoRouter.get("/:id", see);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", deleteVideo);

export default videoRouter;