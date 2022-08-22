import express from "express";
import { watch, edit } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/watch", watch); // import한 /controllers/videoController.js의 watch로 간다, 결국 /videos/watch로 링크 걸리는...
videoRouter.get("/edit", edit);

export default videoRouter;