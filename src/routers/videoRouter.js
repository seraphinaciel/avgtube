import express from "express";
import { watch, upload, deleteVideo, getEdit, postEdit } from "../controllers/videoController";

const videoRouter = express.Router();
// params "/:id(\\d+)"
videoRouter.get("/:id(\\d+)", watch);
/*
*videoRouter.get("/:id(\\d+)/edit", getEdit);
*videoRouter.get("/:id(\\d+)/edit", postEdit);
*두 줄을 한 줄로 줄일 수 있다. 두 줄 이상일 때 사용하는걸 추천, 하나 일때는 6번처럼 사용
*videoRouter
*  .route("/:id(\\d+)/edit") "~" url을 라우터로 만듦
*  .get(getEdit) "get" request를 위한 핸들러
*  .post(postEdit) "post" request를 위한 핸들러
*edit.pug의 form을 .post(postEdit)를 통해 받는다
 */
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
export default videoRouter;