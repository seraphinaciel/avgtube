import express from "express";
import { see, edit, upload, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

// :id보다 위에 위치한 이유는 :id 자리에 upload가 있으니 express는 당연하게 변수라고 생각해 버리기 때문이다.
videoRouter.get("/upload", upload);

/*
정규표현식
:id(\\w+) 모든 문자 숫자 선택
:id(\\d+) 모든 숫자 선택
Routing https://expressjs.com/ko/guide/routing.html
정규표현식 테스트
  https://www.regexpal.com
  https://regexr.com/
*/
videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;