let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 1,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 3,
  },
];
export const trending = (req, res) => res.render("home", { pageTitle: "Home", videos });
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching: ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video});
};
// 변경사항 저장해 주는 변수. 가짜(?) 데이터베이스이기 때문에 열공할 필요 없음
export const postEdit = (req, res) => {
  const { id } = req.params;
  // edit.put form의 내용(value)을 req.body로 받는다.
  const { title } = req.body;
  videos[id - 1].title = title;
  // res.redirect() : 브라우저가 자동으로 (...)으로 이동하도록 하는 것(redirect로 return 시키는 법)
  return res.redirect(`/videos/${id}`);
};