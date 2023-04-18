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

### basic

```pug
doctype html
html(lang="en")
    head
        title Pug
        link(rel = "stylesheet", href="style.css")
        style.
            h1{color:red;}
        script.
            if (useingPug)
                console.log("you are awesome")
            else
                console.log("use pug")
        body

            h1 Pug - node templete engine
            #container.col

            figure
                img(src="https://bit.ly/2bgFrvL", alt="Hello world")
                figcaption Hello World

            picture
                source(srcset="src/01.jpeg" media="(min-width:1200px)" type="image/jpeg")

            //- 아래와 같은 방식은 권장하지 않는다고 함(보간 사용 권장)
            p
                | The word
                ruby 안녕하세요
                    rt 작은 주석, 발음 기호

            //- 보간 사용(권장)
            p.
                마우스 커서를 #[abbr(title="TA DA! 설명 캡션 나오기!") 여기]에 올리면 설명 캡션이 생겨요!
                #[mark 하이라이트] #[time(datetime="2023-04-17") 4. 17.]

            p.
                가운데 취소선 긋기! #[del del : 가운데 취소선] #[ins ins : 수정된 텍스트 강조]


            p
                | 텍스트 끊기 (가로스크롤 x)
                | https://<wbr>www<wbr>.creativebloq<wbr>.com
            //-
                | https://
                wbr
                | www
                wbr
                | .creativebloq
                wbr
                | .com


            p(translate="no") Brand Logo

            //- filter -> :scss
```

### include

> 파일에 다른 파일 매핑 **템플릿 엔진의 핵심**

```pug
include includes/head.pug
style
    include style.css
script
    include script.js
```

### block & extends로 공통 템플릿 짜기

> `block` : 원하는 데이터만 쏙

> `extends` : 템플릿 상속

```pug
//- layout.pug

block content // body.pug > h2
h3 제목이닷
block script // body.pug > script
block script2 // body.pug > script2

//- body.pug 파일의 코드

extends layout

block content
    h2 이게 진짜 제목!
block script
    script(src="main.js")
append script2
    script(src="common.js")
```

```html
<!--html 변환-->

<h2>이게 진짜 제목!</h2>
<h3>제목이닷</h3>
<script src="main.js"></script>
<script src="common.js"></script>
```

### Interpolation 보간

```pug
.txt: a(href="#{email}" target="_blank") #{txt}, {email: 'mail@naver.com', txt: 'string interpolation'}
    - var contxt = "tag interpolation";
    p #[span contxt]
```

```html
<div class="txt">
  <a href="mail@naver.com" target="_blank">
    string interpolation
    <p>
      <span>tag interpolation</span>
    </p>
  </a>
</div>
```

#### code

> `-` or `=` 사용

```pug
- const title = 'TITLE'
p = title //- 태그=변수명 : 태그에 하나의 변수값만 삽입 할 때 사용한다.
p welcome to #{title}
button(class = title) submit
input(placeholder = title + 'search')

p = 'This is code is' + '<escaped>!' //- <p>This is code is &lt;escaped&gt;!</p> 보안상 변환
p != 'This is code is' + '<escaped>!' //- <p>This is code is <escaped>!</p>

//- js + pug
- for(var x=0; x<3; x++) //- javascript
    p item //- pug

- const list = ["one", "two", "three"] //- javascript
    each item in list //- pug each in
        p=item //- pug
```

### Iteration

> each in

```pug
ul.test1
    each val, key in {1: 'one', 2: 'two', 3: 'three'}
    li = key + ':' + val

- var values = [];
ul.test2
each val in values.length ? values : ['There are no values']
    li=val
else
    li Hoo!
```

```html
<ul class="test1">
  <li>1: one</li>
  <li>2: two</li>
  <li>3: three</li>
</ul>

<ul class="test2">
  <li>There are no values</li>
</ul>
```

```pug
//- 랜더링 할 때 보내고 싶은 변수의 이름과 값(message: "Pug is HONEY")을 객체 안에 넣어서 보내면
app.route("/").get((req, res) => {
    res.render("index", { message: "Pug is HONEY" });
});
//- 노드에서의 템플릿 변수(message: "Pug is HONEY")가 여기에 들어감
p.message #{message}

//- if else
if isLoggedIn
    p IN
else
    p OUT

//- case
- const friends = 2
case friends
    when 0
        p you have no friends.
    when 1
        p you have very few friends.
    default
        p you have #{friends} friends.
        - break
```

```html
<p class="message">Pug is HONEY</p>

<p>IN</p>

<p>you have 2 friends.</p>
```

### Attributes

```pug
//- error
p(class='div-class' (click)='play()')

//- ok
p(class='div-class' , (click)='play()')
p(class='div-class' ' (click) ' = 'play()')
```

```html
<div class="div-class" (click)="play()"></div>
```

#### &attributes 구문

> 개체를 요소의 속성으로 분해하는 데 사용

```pug
//- 객체 리터럴 사용
div#foo(data-bar="foo")&attributes({'data-foo': 'bar'})

//- 값이 객체인 변수 사용
- var attributes = {};
- attributes.class = 'baz';
div#foo(data-bar="foo")&attributes(attributes)
```

```html
<div id="foo" data-bar="foo" data-foo="bar"></div>
<div class="baz" id="foo" data-bar="foo"></div>
```

> 암시 적 attributes 인수(믹스 인에 전달 된 속성에서 가져옵니다.) pug는 괄호의 내용을 속성/인수로 감지, 첫번째 괄호가 인수 목록인지 확인하기 때문에 두번째 구문 권장

`+link(class="btn")`

`+link()(class="btn")` ← 권장

```pug

mixin link(href, name)
  //- attributes == {class: "btn"}
  a(class!=attributes.class href=href)= name

+link('/foo', 'foo')(class="btn")
    //- mixin link ( href, name ) ( attributes )

mixin link2(href, name)
  a(href=href)&attributes(attributes)= name

+link2('/foo', 'foo')(class="btn")


```

```html
<a class="btn" href="/foo">foo</a>
```
