import express from "express";
import { join } from "../controllers/userController";
import { trending } from "../controllers/videoController";

// 글로벌 라우터는 깔끔하게 보이게 하기 위해 사용할 뿐임. 컨트롤러 필요없음(유저, 비디오에 들어가기 때문)
const globalRouter = express.Router();

/* 
router는 controller와 url의 관리를 쉽게 해주는 미니 어플리케이션
공통 시작부분(주제, ex. /join, /edit)을 기반으로 url을 그룹화 하는 것
*/
globalRouter.get("/", trending);
globalRouter.get("/join", join);

export default globalRouter;
