# rootcamp

rootcamp는 정보보호 분야에 관심이 있는 사용자들에게 체계적이고 유용한 정보를 제공하는 웹 애플리케이션입니다.
구름톤 딥다이브 정보보호과정 16차 2조, rootcamp 팀의 Heehyeon Yoo가 작업했습니다.

## 주요 기능

- 📰 **뉴스**: ASEC 블로그 RSS 피드를 통한 최신 정보보호 뉴스 제공
  - 실시간 뉴스 피드 업데이트
  - 카테고리별 필터링 (악성코드, 보안 이슈, 취약점 등)
  
- 🎯 **진로 탐색**: 정보보호 분야 14개 직무별 상세 정보
  - 공통 스킬 (6개 카테고리, 툴팁으로 상세 설명)
  - 직무별 특화 스킬 및 도구
  - 주요 업무 및 학습 경로
  - 관련 자격증 정보
  - **[New] 관심 분야 등록**: 팀원들이 각 직무에 대한 관심사를 직접 등록하고 수정/삭제 가능
  
- 🔗 **유용한 사이트**: 정보보호 학습 및 실무 사이트 모음
  - 정부기관/공공기관, 학습 플랫폼, 유용한 도구 및 리소스, 웹진/블로그
  
- 👥 **팀 소개**: rootcamp 팀원 소개
  - **[New] 프로필 수정**: 로그인 후 자신의 정보(Role, Bio, Skills, Links)를 직접 수정 가능

## 버전 기록 (Changelog)

### v1.0 (2025-12-15) - Dynamic App & Cloud DB Migration
- **아키텍처 전환 (Static -> Dynamic)**
    - 정적 웹사이트(`output: 'export'`)에서 Node.js 기반 동적 애플리케이션으로 전환
    - Next.js API Routes 도입 (`/api/auth`, `/api/member`, `/api/career`)
- **데이터베이스 도입 (JSON -> Supabase)**
    - Vercel 배포 환경에서의 데이터 영속성 보장을 위해 로컬 파일 시스템에서 **Supabase (PostgreSQL)**로 마이그레이션
    - **Service Role Key**를 활용한 보안 모델 적용 (서버 측 관리 권한 제어)
- **인증 및 관리 기능**
    - 환경변수 기반의 ID/접근 코드 인증 시스템 구현
    - 팀원 프로필 수정 및 커리어 관심사(Reason, Effort) 동적 관리 기능 추가
- **UI/UX 개선**
    - 실시간 데이터 반영을 위한 모달 및 자동 새로고침 UX 최적화
    - 모바일 반응형 2x2 그리드 레이아웃 적용

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS (CSS Variables), Responsive Grid
- **Backend**: Node.js API Routes
- **Database**: **Supabase** (PostgreSQL)

## 환경 변수 설정 (.env.local)

프로젝트 실행을 위해 다음 환경 변수가 필요합니다.

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-url.supabase.co
SUPABASE_SERVICE_ROLE_KEY=sb_secret_Reference_your_settings...
ACCESS_CODE_MEMBER1=1234  # 이수민
ACCESS_CODE_MEMBER2=1234  # 유희현
ACCESS_CODE_MEMBER3=1234  # 권준현
ACCESS_CODE_MEMBER4=1234  # 김주하
```

## 프로젝트 구조

```
rootcamp/
├── app/                      # Next.js App Router
│   ├── page.tsx             # 메인 페이지 (서버 컴포넌트)
│   ├── careers/             # 진로 탐색 페이지
│   ├── news/                # 뉴스 페이지
│   ├── websites/            # 유용한 사이트 페이지
│   ├── api/                 # API Routes (Auth, Member, Career)
│   ├── layout.tsx           # 루트 레이아웃
│   ├── globals.css          # 전역 스타일
│   └── hero.css             # 히어로 섹션 스타일
├── components/               # React 컴포넌트
│   ├── Navigation.tsx       # 네비게이션 바 (로그인 포함)
│   ├── HomeClient.tsx       # 홈 클라이언트 로직
│   ├── CareersClient.tsx    # 커리어 클라이언트 로직
│   ├── MemberCard.tsx       # 팀원 카드 (수정 기능 포함)
│   ├── CareerCard.tsx       # 진로 카드 (관심사 등록 포함)
│   └── ...
├── data/                     # 데이터 파일
│   ├── careers.json         # 진로 데이터 (동적)
│   ├── team.json            # 팀 정보 데이터 (동적)
│   ├── types.ts             # 공용 타입 정의
│   └── ...
├── lib/
│   └── db.ts                # JSON 파일 I/O 유틸리티
├── public/                   # 정적 파일
├── next.config.js            # Next.js 설정
└── README.md                 # 프로젝트 문서
```

## 라이선스

이 프로젝트는 개인 프로젝트입니다.
