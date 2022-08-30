# MONGO DB
## 설치
1. **chocolatey 설치** : powershell(관리자모드) 켜서 명령어 입력(홈페이지 들어가면 방법 나옴, https://chocolatey.org/install) 
2. *mongo db 설치* : 패키지 검색창에서 mongodb 검색 후 파워셀에서 명령어 입력하여 설치(https://community.chocolatey.org/packages?q=mongod), 오류 나면 몽고디비 사이트에서 설치파일 다운받아서 설치해도 되더라, 윈도우는 'choco install mongodb-compass', 'choco install mongodb-shell' 도 같이 깔아야 한다고...
3. *셋팅하기* : 시작 창에서 '시스템 환경 변수 편집' 검색 -> 고급 탭 맨 아래 환경변수 -> 시스템 변수 탭에서 Path 클릭 후 편집 -> 새로 만들기 눌러서 'C:\Program Files\MongoDB\Server\6.0\bin' 입력
4. **재부팅**
5. **설치 확인** : 파워셀이나 cmd(무조건 관리자 모드)에서 mongod -> 오류 없으면 mongo 또는 mongosh -> 오류 안나면 show dbs(DB를 보여줘라) -> 오류 안나면 성공
6. vscode에서 npm i mongoose 다운

## on / once
* db.on("error", handleError); 여러번 계속 이벤트 발생
* db.once("open", handleOpen); 오직 한번만 이벤트 발생

## findOne() / findById()
* findOne() 내가 보내는 모든 condition을 적용시킨다, 예)조회수가 25인 영상을 찾는다
* findById() id로 영상을 찾아낼 수 있다

## 명령어
* use avgtube
* show avgtube
* show collections : 현재 데이터베이스안의 doc의 묶음을 보여줘라
* help : 명령어 보여줌

## CRUD(create, read, update, delete)