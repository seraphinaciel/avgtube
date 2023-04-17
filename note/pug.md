# PUG

> 기본 작업 디렉토리(package.json, /youtube/views) → src 디렉토리로 변경(/youtube/src/views)

## 변수명
* #{변수명} : 오직 하나의 값만 가지며 텍스트와 함께 쓸 때 사용한다. title #{pageTitle} | avgTube
* 태그=변수명 : 위와 동일하지만 태그에 하나의 변수값만 삽입 할 때 사용한다. h1=pageTitle

## mixins
> 데이터를 받을 수 있는 partial, 다른 데이터를 포함하지만 같은 형태의 html을 보여준다.코드 재사용 component
* 데이터를 받을 수 있는 partial, 
* 다른 데이터를 포함하지만 같은 형태의 html을 보여준다.
* 코드 재사용 component

## Iteration(반복) - each, while 지원
> 배열, 객체의 모든 요소에 대해 특정 행동을 취할 때 사용. 
```pug
   each x in y => each x in [1,2,3,4,5]
               => js에서 배열 y를 가져옴, arraylist y의 item인 x를 반복 나열
               => x는 배열 y의 item인 객체이므로 x.title 가능
         ~
   else        => 반복할 값이 없으면 추가, 자동으로 배열을 검색해서 굳이 if가 필요없다
```
```pug
   each video in videos // iteration 사용방법
        //- /mixins/video.pug에 argument인 video로 정보(배열의 객체 값) 전달 
        +mixVideo(video) // mixin 사용방법
    else 
        div Sorry nothing found.
```

### form method=""의 get과 post의 차이?
* get(기본값) : 검색할 때 사용(구글, 네이버), url에 정보가 보이도록 한다.
* post : 파일 전달, DB를 바꾸는 data를 보낼 때, 로그인 시 사용
      => req.body는 오직 POST request만 받는다.

## 속성
input(placeholder="Search by title", **name="keyword"**, type="text")
검색 인풋에 검색어 등장.<br>
검색어 입력하기 전에 undefined지만, 입력하면 http://localhost:5000/search?**keyword=first** 라고 나온다.


## 문법

```pug
   - const title = 'TITLE'
   //- = 뒤에는 js 문법 사용 가능, #{변수}
   p=title 
   //- 태그=변수명 : 태그에 하나의 변수값만 삽입 할 때 사용한다.
   p welcome to #{title}
   button(class=title)  submit 
   input(placeholder=title + 'search')

   // Node Express.js
   app.route("/").get((req, res) => {
       res.render("index", { message: "Pug is HONEY" });
   });
   p.message #{message} // 노드에서의 템플릿 변수가 여기에 들어감

   if isLoggedIn 
       p IN
   else 
       p OUT 

   - const friends = 2
   case friends 
       when 0
           p you have no friends.
       when 1
           p you have very few friends. 
       default 
           p you have #{friends} friends.
           - break

   //- 파일에 다른 파일 매핑 <= 템플릿 엔진의 핵심
   include includes/head.pug
   style
       include style.css
   script 
       include script.js

   //- ----
   //- block & extends로 공통 템플릿 짜기
       block : 원하는 데이터만 쏙
       extends : 템플릿 상속
       아래의 코드가 layout.pug 파일안에 있다고 생각하자
   block content 
   h3 발
   block script
   block script2
   //- body.pug 파일의 코드
   extends layout 
   block content 
       h2 블라블라
   block script 
       script(src="main.js")
   append script2
       script(src="common.js")
   //- html 변환
   <h2>블라블라</h2>
   <h3>발</h3>
   <script src="main.js"></script>
   <script src="common.js"></script>
   //- ----
```
