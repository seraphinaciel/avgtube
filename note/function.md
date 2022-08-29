# Function
## render
> 000.pug 찾아서 html로 변환해 유저에게 보여줘라.
> res.render는 한 번만 한다(일회성)

## redirect
  > 브라우저가 자동으로 이동(redirect로 return 시키는 법)

### render와 redirect 중 하나만 불러올 수 있다.
### return보다 render가 중요하다.
> 여기에서 return은 본질적인 return의 역할보다는 function을 마무리짓는 역할.<br>
> return이 없어도 정상적으로 동작하지만 실수 예방 목적으로 사용.
```js
export const home = (req, res) => {
   Video.find({}, (error, videos) => {
   *return* res.**render**("home", { pageTitle: "Home", videos });
   });
};
```

## split, map
```js
hashtags.split(",").map((word) => `#${word}`),
```
* split : string을 "," 기준으로 분리한다
* map : 분리된 단어 앞에 #를 붙여 **새로운 배열**을 만들어준다.
