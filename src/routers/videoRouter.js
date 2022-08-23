import express from "express";
import { watch, upload, deleteVideo, getEdit, postEdit } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
/*
videoRouter.get("/:id(\\d+)/edit", getEdit);
videoRouter.get("/:id(\\d+)/edit", postEdit);
두 줄을 한 줄로 줄일 수 있다.
videoRouter
  .route("/:id(\\d+)/edit") "~" url을 라우터로 만듦
  .get(getEdit) "get" request를 위한 핸들러
  .post(postEdit) "post" request를 위한 핸들러

 */
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
export default videoRouter;