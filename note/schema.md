# schema
## model = schema
> 데이터가 어떤 형태(형식)로 구성될지만 설정(), 실존값은 유저가 작성하게 둔다.

> 데이터 형태를 만드는 이유가 뭘까?
> - mongoose에게 데이터 형식을 알려줘서 올바르지 않은 형식의 데이터는 기록이 되지 못하게 한다(데이터 입력 실수 방지)

> title: String == title: { type: String }

1. const Video = mongoose.model("Video", videoSchema); 모델의 이름과 데이터 형태인 스키마로 구성
2. export default Video; 모델을 익스포트 해준다.
3. import "./models/Video"; DB를 임포트로 연결하여 DB를 몽구스와 연결시켜 비디오 모델을 인식시킨다.
4. 각 역할에 맞게 폴더를 정리해준다.
   server.js : 익스프레스 서버의 configuration에 관련된 코드만 처리
   init.js : 초기화, DB, 모델 등 필요한 모든 것을 임포트 시킴(app을 실행시킴)
5. package.json에서 "dev": "nodemon --exec babel-node src/init.js"로 변경

## 속성
* trim : 여백을 지워준다.

### form input에서도 길이 지정이 가능한데 굳이 DB에다 지정하는 이유는?
> 둘다 해야함, 사용자를 위해서(개발자 도구 이용하면 무제한 사용 가능), 데이터 보호를 위해서 

## 함수

