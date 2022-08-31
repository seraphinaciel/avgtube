# Express

## get request

## const PORT = 4000;
> 4000 port(Door)만 listen(대화)하는 중, 4000 포트로 request 보냄

## req, res
> req : 리퀘스트에 대한 정보 보냄<br>
> res : 리퀘스트에 어떻게 응답하느냐, 어떻게에 해당되는 메소드는 굉장히 많다(ex. send)<br>
> req.body - form에서 method=post로 보내면 내용을 받을 수 있다.<a target="_blank" href="/note/pug.md"> get, post 자세히 보기 &rarr;</a>>
> req.query - form에서 method=get로 보낸 정보들을 (확인)볼 수 있다.
> req.params - 라우터가 주는 익스프레스의 기능

## export → import!
> 모든 파일은 독립적인 모듈, 다른 파일에서 사용(공유)하려면 
1. default
   * 무조건 "하나"만 임포트 하는거라서 마음대로 함수명을 지정 가능
2. 2개 이상 import, export 
각 함수에 엑스포트 적으면 모두 공유됨. 엑스포트 함수명과 임포트 함수명이 무조건 같게 오브젝트 형식으로 사용
   * export const 함수명1 = (req, res) => res.send("함수명...");
   * import { 함수명1, 함수명2 } from "../000.js";
   ex. /routers/userRouter.js, /controllers/userController.js

## 정규표현식
* :id(\\w+) 모든 문자 숫자 선택
* :id(\\d+) 모든 숫자 선택
* Routing https://expressjs.com/ko/guide/routing.html

* mongoose id 정의 : 24 바이트 16진수 문자열 → 0~9, a~f가 들어가는 24자 이하의 문자열
* :id([0-9a-f]{24})

## 정규표현식 테스트
  https://www.regexpal.com<br>
  https://regexr.com/

