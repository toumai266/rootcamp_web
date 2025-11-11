# RootCamp

정보보호 분야 종합 정보 포털

## 프로젝트 개요

RootCamp는 정보보호 분야에 관심이 있는 사용자들에게 체계적이고 유용한 정보를 제공하는 정적 웹사이트입니다.

## 주요 기능

- 📰 **뉴스**: ASEC 블로그 RSS 피드를 통한 최신 정보보호 뉴스 제공
  - 실시간 뉴스 피드 업데이트
  - 카테고리별 필터링 (악성코드, 보안 이슈, 취약점 등)
  - 월별 아카이브 기능
  
- 🎯 **진로 탐색**: 정보보호 분야 14개 직무별 상세 정보
  - 공통 스킬 (6개 카테고리, 툴팁으로 상세 설명)
  - 직무별 특화 스킬 및 도구
  - 주요 업무 및 학습 경로
  - 관련 자격증 정보
  
- 🔗 **유용한 사이트**: 정보보호 학습 및 실무 사이트 모음
  - 정부기관/공공기관
  - 학습 플랫폼
  - 유용한 도구 및 리소스
  - 웹진/블로그
  
- 👥 **팀 소개**: RootCamp 팀원 소개

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS (CSS Variables)
- **Build**: 정적 사이트 생성 (Static Export)

## 시작하기

### 필수 요구사항

- Node.js 18.0 이상
- npm 또는 yarn

### 설치

```powershell
npm install
```

### 개발 서버 실행

```powershell
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

정적 사이트로 빌드:

```powershell
npm run build
```

빌드된 파일은 `out` 디렉토리에 생성됩니다.

### 프로덕션 실행

```powershell
npm start
```

## 프로젝트 구조

```
rootcamp/
├── app/                      # Next.js App Router
│   ├── page.tsx             # 메인 페이지 (홈)
│   ├── careers/             # 진로 탐색 페이지
│   │   └── page.tsx
│   ├── news/                # 뉴스 페이지
│   │   └── page.tsx
│   ├── websites/            # 유용한 사이트 페이지
│   │   └── page.tsx
│   ├── api/                 # API Routes
│   │   └── rss/
│   ├── layout.tsx           # 루트 레이아웃
│   ├── globals.css          # 전역 스타일
│   └── hero.css             # 히어로 섹션 스타일
├── components/               # React 컴포넌트
│   ├── Navigation.tsx       # 네비게이션 바
│   ├── Footer.tsx           # 푸터
│   ├── QuickLinks.tsx       # 빠른 링크 섹션
│   ├── NewsSection.tsx      # 뉴스 섹션 (홈)
│   ├── CareerCard.tsx       # 진로 카드 (툴팁 포함)
│   ├── SkillAccordion.tsx   # 공통 스킬 아코디언
│   ├── CategoryFilter.tsx   # 카테고리 필터
│   ├── WebsiteCard.tsx      # 웹사이트 카드
│   ├── MemberCard.tsx       # 팀원 카드
│   └── Modal.tsx            # 모달 컴포넌트
├── data/                     # 데이터 파일
│   ├── careers.ts           # 진로 데이터 (14개 직무)
│   ├── basicSkills.ts       # 공통 스킬 데이터 (6개 카테고리)
│   ├── websites.ts          # 유용한 사이트 데이터
│   └── team.ts              # 팀 정보 데이터
├── docs/                     # 문서 파일
│   ├── PRD.md               # 제품 요구사항 문서
│   ├── career.md            # 진로 데이터 원본
│   └── basicskill.md        # 스킬 데이터 원본
├── public/                   # 정적 파일
├── next.config.js            # Next.js 설정
├── tsconfig.json             # TypeScript 설정
├── package.json              # 의존성 관리
└── README.md                 # 프로젝트 문서
```

## 개발 가이드

### 데이터 추가/수정

- **진로 데이터**: `data/careers.ts` 수정
- **공통 스킬**: `data/basicSkills.ts` 수정
- **유용한 사이트**: `data/websites.ts` 수정
- **팀 정보**: `data/team.ts` 수정

### 컴포넌트 추가

`components/` 디렉토리에 새로운 컴포넌트를 추가하세요.
- 모든 컴포넌트는 TypeScript로 작성
- Client 컴포넌트는 `'use client'` 지시어 사용

### 페이지 추가

`app/` 디렉토리에 새로운 디렉토리를 만들고 `page.tsx` 파일을 추가하세요.

### 스타일링

CSS Variables를 사용하여 일관된 디자인을 유지합니다.
- 전역 변수: `app/globals.css`
- 다크/라이트 모드 자동 지원
- CSS 변수 예시:
  - `--bg-color`: 배경색
  - `--text-color`: 텍스트 색상
  - `--primary-color`: 강조 색상
  - `--border-color`: 테두리 색상

### 주요 기능 구현

**툴팁 시스템**: 
- `position: fixed`를 사용한 동적 배치
- 화면 가장자리 자동 감지 및 위치 조정
- 상/하단 자동 배치

**모달 시스템**:
- Flexbox 기반 레이아웃
- 스크롤 가능한 컨텐츠 영역
- 외부 클릭으로 닫기

**RSS 피드**:
- API Route를 통한 CORS 우회
- 실시간 뉴스 피드 파싱
- 카테고리 및 월별 필터링

## 라이선스

이 프로젝트는 개인 프로젝트입니다.

## 참고 사이트

- [FMHY (freemediaheckyeah)](https://fmhy.net/) - 유사한 구조의 정적 웹사이트

