export const trending = (req, res) => {
  // iteration 사용하려면 배열, 객체로 만들어야 한다.
  const videos = [
    {
      title: "First Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Second Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Third Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
  ];
  /*
  render : 000.pug 찾아서 html로 변환해 유저에게 보여줘라.
  home.pug는 base.pug를 extends. base.pug는 pageTitle를 가지고 있는데 확장한 home.pug에서 변수를 전달해 줘야 함
  */
  return res.render("home", { pageTitle: "Home", videos });
};
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};