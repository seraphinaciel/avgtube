import Video from "../models/Video";


export const home = async (req, res) => {
  const videos = await Video.find({});
  console.log(videos)
  return res.render("home", {
    pageTitle: "Home",
    videos
  });
};
export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", {
    pageTitle: `Watching`
  });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", {
    pageTitle: `Editing`
  });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", {
    pageTitle: "Upload Video"
  });
};
export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  // 1. 저장방법 : js object 만들고 db에 저장
/** 
 * const video = new Video({
  *   title,
  *   description,
  *   createdAt: Date.now(),
  *   hashtags: hashtags.split(",").map((word) => `#${word}`),
  *   meta: {
  *     views: 0,
  *     rating: 0,
  *   },
  * });
  * await video.save();
 */
  // 2. 생성방법 : 위의 방법과 같지만, 비디오 모델만 있으면 js object를 자동으로 만들어준다.
  await Video.create({
    title,
    description,
    createdAt: Date.now(),
    hashtags: hashtags.split(",").map((word) => `#${word}`),
    meta: {
      views: 0,
      rating: 0,
    },
  });
  return res.redirect("/");
};