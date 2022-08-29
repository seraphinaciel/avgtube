# avergers tube
* / → Home
* /join → Join
* /login → Login
* /search → Search

* /users/:id -> See User
* /users/logout -> Log Out
* /users/edit -> Edit MY Profile
* /users/delete -> Delete MY Profile(다른 유저는 삭제 불가)

videoController.js
* /videos/:id -> See Video
* /videos/:id/edit -> Edit Video
* /videos/:id/delete -> Delete Video
* /videos/upload -> Upload Video

***
# 폴더
src
* controllers
   * userController.js
   * videoController.js : home controller 사용, 비디오들로 구성된 배열(videos)을 home.pug로 전송
* models
   * video.js : 
* routers
   * globalRouter.js
   * userRouter.js
   * videoRouter.js
* views
   * mixins
      * video.pug
   * partials
      * footer.pug
   * base.pug
   * home.pug : 모든 비디오를 찾는다. video.pug 사용, videos(비디오 객체)에 있는 각각의 비디오에 비디오 믹신을 사용한다. 비디오 오브젝트 전체를 믹신으로 보냄
   * upload.pug
   * watch.pug
* db.js
* init.js
* server.js

# 목차
***
## Express(Node.js) <a target="_blank" href="/note/async&await.md"> 바로가기 &rarr;</a>
* get request
* const PORT = 4000;
* req, res
* export → import!
* 정규표현식

***
## middlewares <a target="_blank" href="/note/middleware.md"> 바로가기 &rarr;</a>
*  middlewares & controllers
*  use() 
*  미들웨어 구분법?
*  express.urlencoded
*  morgan 패키지

***
## Router <a target="_blank" href="/note/routers.md"> 바로가기 &rarr;</a>
* router란?
* app.get()
* get, post 축약
* url parameters ":"

***
## pug <a target="_blank" href="/note/pug.md"> 바로가기 &rarr;</a>
* 변수명
* mixin
* Iteration(반복)
* form method=""의 get과 post의 차이?

***
## MONGO DB <a target="_blank" href="/note/mongoDB.md"> 바로가기 &rarr;</a>
* 설치
* on / once
* 명령어
* CRUD(create, read, update, delete)

***
## 동기와 비동기란? <a target="_blank" href="/note/async&await.md"> 바로가기 &rarr;</a>
* 동기
* 비동기
* 비동기 처리 패턴, callback과 promise, async, await

***
## schema <a target="_blank" href="/note/schema.md"> 바로가기 &rarr;</a>
* model = schema
* 속성
* form input에서도 길이 지정이 가능한데 굳이 DB에다 지정하는 이유는?

***
## Function <a target="_blank" href="/note/function.md"> 바로가기 &rarr;</a>
* render
* redirect
* split, map

