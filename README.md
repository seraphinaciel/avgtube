# avergers tube
***
* / → Home
* /join → Join
* /login → Login
* /search → Search

* /users/:id -> See User
* /users/logout -> Log Out
* /users/edit -> Edit MY Profile
* /users/delete -> Delete MY Profile(다른 유저는 삭제 불가)

* /videos/:id -> See Video
* /videos/:id/edit -> Edit Video
* /videos/:id/delete -> Delete Video
* /videos/upload -> Upload Video


### form method=""의 get과 post의 차이?
get(기본값) : 검색할 때 사용(구글, 네이버)
post : 파일 전달, DB를 바꾸는 data를 보낼 때, 로그인 시 사용
      => req.body는 오직 POST request만 받는다.
<!-- user가 form을 get하고, 그 form을 post하면 컨트롤러를 작동시켜서 유저들이 redirect되거나 페이지에서 뭔가를 보게 된다.
1. 먼저 get에 대한 컨트롤러를 먼저 만든다(유저가 먼저 봐야 하니까)
   => getUpload, postUpload
2. 컨트롤러를 실행하는 라우터 만들기 (라우터 안에 url 정의)
   => videoRouter.route().get().post()
   => /video/upload로 링크됨
3. 업로드 view를 만들어 준다.
4. controller가 퍼그 템플릿(폼)을 랜더 함 -> 폼의 데이터를 다른 url에 전달, url은 post method와 함께 라우터에 등록된다. 
5. postUpload 컨트롤러를 실행시키고 할거 하고 redirect 시킨다. -->


### middlewares?