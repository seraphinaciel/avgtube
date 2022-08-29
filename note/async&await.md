# 동기와 비동기란?

## 동기 : 요청과 결과가 동시에 일어난다. 추구하는 같은 행위(목적)이 동시에 이루어진다.
* 간단하고 직관적인 설계
* 결과가 나올 때까지 무한 대기
* 계좌이체

## 비동기 : 요청과 결과가 동시에 일어나지 않는다. 추구하는 행위(목적)이 다를 수도 있고, 동시에 이루어지지 않는다.
* 복잡한 설계
* 결과가 나오기 전까지 다른 작업을 할 수 있어서 효율적임

시험볼 때, 
1. 학생이 시험문제를 푼 후 선생님께 건넨다. 
2. 선생님은 채점 완료 후 학생에게 성적을 전달
3. 학생은 성적표를 확인한다.

> 1을 끝낸 학생이 채점이 끝나기만 기다리면 학생은 블록상태, 그러나 채점이 끝날 때까지 다른 과목을 공부하면 학생은 논블록 상태가 된다.

### 비동기 처리 패턴, callback과 promise, async, await

1. call back
> js에서 기다림을 표현하는 방법(js는 기다릴줄 모르니까 순서대로 코드를 읽기만 한다.)
> 어디에서 무엇이 오는지 명확
> 몽구스는 **Video.find({}**을 디비에서 불러온다. 아무것도 리턴되면 안된다.
```js
//callback
console.log("start");
export const home = (req, res) => {
   Video.find({}, (error, videos) => {
      if(error){
         return res.render("server-error");
    }
  }
  return res.render("home", { pageTitle: "Home", videos });
});
console.log("finished");

출력결과
start
finished
찾은 비디오 출력
```

2. primise
> 내용은 실행 되었지만 결과를 아직 반환하지 않은 객체라고 이해해도 좋다.
   * Pending (대기) : 비동기 처리가 완료 되지 않았다
   * Fulfilled (이행) : 비동기 처리가 완료
   * Rejected (실패) : 실패하거나 오류가 발생
> then() 과 catch() 문의 체이닝을 통해 비동기 로직의 성공 여부에 따른 분기 처리가 가능하다.

3. async, await의 차이점?

> 비동기 동작 코드, 비동기 처리 패턴으로 기존의 비동기 처리 방식인 콜백 함수와 프로미스의 단점(콜백 지옥, then() 지옥)을 보완하고 개발자가 읽기 좋은 코드를 작성할 수 있게 도와준다.
https://joshua1988.github.io/web-development/javascript/js-async-await/

* await를 통해 promise 반환 값을 받아 올 수 있다.
* await는 async 함수 안에서만 동작한다.
* async/await는 직관적이다. 비동기 코드가 동기 코드처럼 읽히게 해주어 코드 흐름을 이해 하기 쉽다.
* await는 디비를 기다려준다(js와 차이)
* 콜백보다 명확하지 않아서 try ~ catch 사용하며 에러 발생시 catch 실행

**async**
"애들아 이 함수에는 약간 구린 코드가 있어. 그러니까 일단 내 볼일 볼때까지 알아서들 하고 있엉~~"

**await**
"내가 바로 그 구린녀석이다. 나도 내할일 하고 나서 결과 줄테니까 다들 각자 할일 하고 있고
단 내뒤에 있는 넘들은(비동기 함수내에 있는 내뒤에 코드들임, 다른 함수들은 뒤에 있어도 비동기기 때문에 이미 실행됨) 일단 대기타라."

A 유저가 100,000GB짜리 데이터를 불러 온다면, A 유저의 데이터 처리는 뒤에서 따로 하고 나머지는 비동기로 처리한다. 
즉 싱글 쓰레드지만, 순식간에 번갈아 가면서 처리하고 있어서 쓰레드 자체를 혼자 완전히 독차지할 때보다는 불러오는 속도는 느림.

> await를 find 앞에 넣으면 find는 콜백이 필요없다는 걸 알고 찾은 비디오를 바로 출력한다.
```js
export const home = async (req, res) => {
  try{
    console.log("start");
    const videos = await Video.find({});
    console.log(video);
    console.log("finished");
    return res.render("home", { pageTitle: "Home", videos });
  } catch{
    return res.render("server-error");
  }
};
출력결과
start
찾은 비디오 출력
finished
```


1. 저장방법 : js object 만들고 db에 저장
```js
const video = new Video({
  title,
  description,
  createdAt: Date.now(),
  hashtags: hashtags.split(",").map((word) => `#${word}`),
  meta: {
    views: 0,
    rating: 0,
  },
});
await video.save();
```

2. 생성방법 : 위의 방법과 같지만, 비디오 모델만 있으면 js object를 자동으로 만들어준다. 현재 코드는 오류처리가 없으니 try ~ catch문을 넣어줘야 함.
```js
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
```