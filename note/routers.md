# Router
## router란?
> controller와 url의 관리를 쉽게 해주는 미니 어플리케이션<br>
> 공통 시작부분(주제, ex. /join, /edit)을 기반으로 url을 그룹화 하는 것<br>
> 글로벌 라우터는 깔끔하게 보이게 하기 위해 사용할 뿐임. 컨트롤러 필요없음(유저, 비디오에 들어가기 때문)

## app.get("라우터", 핸들러)
> * 라우터(url을 통해서 리퀘스트들을 전달하는 문)
> * 핸들러(함수, 받은 리퀘스트를 리스폰즈 해주는건 핸들러의 몫이다.)

```
     **브라우저(클라이언트)**
request 전달 ↓   ↑
            **포트**
get 호출 받음↓    ↑ response 전달
            **서버**
반드시 서로 간에 request & response (둘중 하나라도 빠지면 무한 로딩 시작)
```

HTTP request 는 어떤 route(url) 에 대한 HTTP Method 요청이고 서버는 그 요청에 대한 response 를 해주어야한다. 

## get, post 축약
```
videoRouter.get("/:id(\\d+)/edit", getEdit);
videoRouter.get("/:id(\\d+)/edit", postEdit);
                     ↓
videoRouter
  .route("/:id(\\d+)/edit") "~" url을 라우터로 만듦
  .get(getEdit) "get" request를 위한 핸들러
  .post(postEdit) "post" request를 위한 핸들러
```

## url parameters ":"
> videoRouter.get("**/:id**", see);
> 아규먼트 사용 가능, url안에 변수를 포함시킬 수 있게 해준다. 얘가 없으면 모든 변수마다 라우터를 > 하나씩 만들어 줘야함.
> ex. https://nomadcoders.co/wetube/lectures/**2661**(<- 파라미터)