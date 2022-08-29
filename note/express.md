# Express

## get request

## const PORT = 4000;
> 4000 port(Door)만 listen(대화)하는 중, 4000 포트로 request 보냄

## req, res
> req : 리퀘스트에 대한 정보 보냄
> res : 리퀘스트에 어떻게 응답하느냐, 어떻게에 해당되는 메소드는 굉장히 많다(ex. send)

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

## 정규표현식 테스트
  https://www.regexpal.com<br>
  https://regexr.com/
