<p align="middle" >
  <img src="https://user-images.githubusercontent.com/76704035/182891239-5024d4e0-49c5-48a9-9a54-6cf9e869aca9.png" width="300" height="300">
</p>

<h1 align="middle">
Schoolvery
</h1>

<h4 align="middle"> 교내 배달 비용 공유 플랫폼 스쿨버리!</h4>

<br />

- 스쿨버리는 기존의 **비싼 배달비와 최소 주문 금액** 문제를 해결하기 위해 만들어진 서비스입니다.
- 스쿨버리의 핵심 아이디어는 인접한 사람들과 배달 음식 비용을 공유하는 것입니다.

</br>

## Feature

#### a. PoC

- 사용자 A가 모집 게시글을 등록한다.
- 사용자 B가 A가 올린 모집 게시글에 참여한다.
- 사용자 A와 B는 채팅방 안에서 메세지를 보내며 소통한다.

#### b. Additional Features

- 회원가입 및 로그인
- 카테고리, 가게별 필터링
- 유저 개인 페이지를 통한 개인정보 관리

#### c. Demo

- Main Page

- Posting Page

- Chat Page

- User Page

<br/>

## System Architecture

<br/>

## Tech Stack

### Front-end

<div style="display: flex; align-items: flex-start;">
  <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="80" height="80" />
  <img src="https://techstack-generator.vercel.app/ts-icon.svg" alt="icon" width="80" height="80" />
  <img src="https://techstack-generator.vercel.app/prettier-icon.svg" alt="icon" width="80" height="80" />
</div>

<div style="display: flex; align-items: flex-start;">
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="icon" />
    <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white" alt="icon" />
    <img src="https://img.shields.io/badge/ReactRouter-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white" alt="icon" />
    <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=Jest&logoColor=white" alt="icon" />
    <img src="https://img.shields.io/badge/Testing Library-E33332?style=for-the-badge&logo=Testing Library&logoColor=white" alt="icon" />
</div>
<div style="display: flex; align-items: flex-start;">
    <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="icon" />
    <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" alt="icon" />
    <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" alt="icon" />

</div>

**Emotion**
<br />
<img src="https://raw.githubusercontent.com/emotion-js/emotion/main/emotion.png" alt="Emotion logo" height="50" width="50" style="max-width: 100%;"> <br />
**Recoil**
<br />
<img src="https://user-images.githubusercontent.com/54137044/184468356-2f0a1d08-2aa1-4128-984b-a8ce8244bf50.svg" alt="Recoil logo" height="50" width="50" style="max-width: 100%;">
<br />

Vite를 사용하여 빠른 빌드를 목적으로 하고, <br />
React를 사용하여 사용자와의 상호작용을 하는 앱화면을 효율적으로 구성하고, <br />
Recoil을 이용하여 유동적인 값들의 상태를 관리했습니다. <br />
React Query를 사용하여 비동기 관련 로직 및 상태를 관리하고, <br />
Jest, React Testing Library로 테스트 코드를 작성하여 코드의 신뢰성을 높였습니다.

<br />

### Back-end

<div style="display: flex; align-items: flex-start;">
  <img src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="icon" width="100" height="100" />
  <img src="https://techstack-generator.vercel.app/java-icon.svg" alt="icon" width="100" height="100" />
  <img src="https://techstack-generator.vercel.app/restapi-icon.svg" alt="icon" width="100" height="100" />
</div>

<div style="display: flex; align-items: flex-start;">
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="icon" />
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" alt="icon" />
  <img src="https://img.shields.io/badge/Socket.io-010101?&style=for-the-badge&logo=Socket.io&logoColor=white" alt="icon" />
  <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white" alt="icon" />
</div>

<div style="display: flex; align-items: flex-start;">
  <img src="https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot" alt="icon" />
  <img src="https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white" alt="icon" />
  <img src="https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=Spring-Security&logoColor=white" alt="icon" />
</div>

- **Spring Data JPA(Hibernate)**
- **QueryDSL**
- **JUnit 5**, **mockito**
- **SLF4J**
- **JWT**

Springboot로 웹 어플리케이션 서버를 구축하고, <br/>
Spring Data JPA(Hibernate)로 객체지향 데이터 로직을 작성했습니다. <br/>
QueryDSL로 컴파일 시점에 SQL 오류를 감지하고, 동적인 쿼리를 작성했습니다. <br/>
Swagger로 API 문서를 작성하여 클라이언트와 소통하였습니다. <br/>
데이터 베이스는 MySQL과 H2를 사용하였습니다. <br/>

<br />

### Infra Structure

<div style="display: flex; align-items: flex-start;">
  <img src="https://techstack-generator.vercel.app/github-icon.svg" alt="icon" width="100" height="100" />
  <img src="https://techstack-generator.vercel.app/docker-icon.svg" alt="icon" width="100" height="100" />
  <img src="https://techstack-generator.vercel.app/aws-icon.svg" alt="icon" width="100" height="100" />
</div>

<div style="display: flex; align-items: flex-start;">
  <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="icon" />
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="icon" />
</div>

- **Github Actions**
- **AWS EC2**
- **Prometheus, Grafana**
- **AWS Route 53**

Docker로 동일한 백엔드 환경을 구축하고, <br/>
AWS EC2 인스턴스(Ubuntu, t3a.medium)에 서버를 배포하였습니다. <br/>
Github Action을 사용하여 지속적인 배포 파이프라인을 만들고, <br/>
Prometheus와 Grafana를 통해 서버의 상태를 모니터링했습니다. <br/>
Git과 Github을 사용하여 코드를 관리하고, 팀원들과 협업하였습니다.

<br />

### Communication

<div style="display: flex; align-items: flex-start;">
  <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" alt="icon" />
  <img src="https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white" alt="icon" />
</div>

<br/>

## How to run

### Frontend

go ro frontend repo 👉🏻 [click here !](https://github.com/team-e-techeer/schoolvery-fe)

> 프로젝트 실행

```shell
yarn start
```

<br />

### Backend

go to backend repo 👉🏻 [click here !](https://github.com/team-e-techeer/schoolvery-be)

> .env.example 을 참고하여 .env 파일에 있는 환경변수를 작성해준다.

```
DB_USERNAME=
DB_ROOT_PASSWORD=
DB_DATABASE=
DB_HOST=

JWT_HEADER=
JWT_SECRET_KEY=
JWT_EXPIRE_TIME=

PORT=

AdminMailId =
AdminMailPassword =

slack_api =
```

> jar 파일을 생성해준다.

```shell
./gradlew build

# 혹은

./build.sh
```

앞선 방법으로 빌드가 안될 경우

```shell
gradle wrapper

# 혹은

./initialize.sh
```

> 루트 경로에서 docker-compose 명령어를 사용하여 어플리케이션을 실행시켜준다.

```shell
docker-compose up -d --build
```

<br/>

## Domain

<br/>

## Team Members

|                 Backend                 |                    Backend                     |                   Backend                    |             Backend/Frontend              |                Frontend                |
| :-------------------------------------: | :--------------------------------------------: | :------------------------------------------: | :---------------------------------------: | :------------------------------------: |
| [🦈 김의빈](https://github.com/JoeCP17) | [🐠 정수빈](https://github.com/SoobinJung1013) | [🦞 한승욱](https://github.com/SeungWookHan) | [🐋 김서영](https://github.com/ksy990628) | [🦭 장동현](https://github.com/ww8007) |

<br />

#### If you want to know more bout us click here !

<a href="https://medium.com/@judy1013/schoolvery-test-1c1a097ddf12">
  <img src="https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white" />
</a>
<br/>
<a href="https://team-e2.notion.site/Shoolvery-01e48be509de4343b0ed1efecd8e0cb2">
  <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white" alt="icon" />
</a>
<br/>
<a href="https://github.com/team-e-techeer">
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="icon" />
</a>
