# Bootcamp 2025 - Todo App

Next.js 기반 투두리스트 애플리케이션 프로젝트입니다.

## 기술 스택

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Backend**: Supabase (PostgreSQL)
- **State Management**: React Server Components + Client Components

## 프로젝트 구조

```
bootcamp2025/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 홈 페이지
│   └── globals.css        # 전역 스타일
├── components/             # React 컴포넌트
│   └── ui/                # shadcn/ui 컴포넌트
├── lib/                    # 유틸리티 함수
├── docs/                   # 문서
│   └── todo-app-prd.md    # PRD 문서
└── sub-agents/            # 서브 에이전트 정의
```

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. Supabase 설정

1. [Supabase](https://supabase.com)에서 프로젝트를 생성합니다.
2. 프로젝트 루트에 `.env.local` 파일을 생성합니다:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

3. Supabase SQL Editor에서 `supabase/migrations/001_create_todos_table.sql` 파일의 내용을 실행하여 테이블을 생성합니다.

자세한 설정 방법은 [Supabase 설정 가이드](./docs/supabase-setup.md)를 참고하세요.

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 참고 문서

- [PRD 문서](./docs/todo-app-prd.md)
- [Supabase 설정 가이드](./docs/supabase-setup.md)
- [Next.js 문서](https://nextjs.org/docs)
- [shadcn/ui 문서](https://ui.shadcn.com)
- [Supabase 문서](https://supabase.com/docs)