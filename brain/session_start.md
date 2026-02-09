# 세션 시작 상태

## 🚀 현재 완료된 작업 (상세)

### 1. 카드 링크 활성화 및 모달 연동
- **온라인 헌금**: `OfferingModal` 구현. 우체국 계좌(100834-01-004906) 정보 표시 및 복사 기능 추가.
- **교회 주보**: `WeeklyPreviewModal` 구현. 메인에서 클릭 시 미리보기 모달 노출 후 상세 페이지로 이동하도록 로직 고도화.
- **메인 페이지 수정**: `src/app/page.tsx`에서 `quickLinks` 매핑 시 대상에 따라 `Link` 혹은 `button`(모달 트리거)으로 분기 처리.

### 2. 신규 페이지 및 컴포넌트
- **주보 상세 페이지**: `src/app/news/weekly/page.tsx` 생성.
- **컴포넌트 추가**: 
  - `src/components/offering-modal.tsx`
  - `src/components/weekly-preview-modal.tsx`

### 3. 마스터 데이터 및 정보 업데이트 (`contentData.ts`)
- **담임목사 성함**: 김동두천 -> **김석주** 담임목사님으로 전체 반영 (인사말, 설교 목록 등).
- **교회 주소**: 경기도 동두천시 동두천로 340-9로 최신화.
- **헌금/주보 데이터**: 모달 및 페이지 연동을 위한 데이터 구조(`offering`, `weeklyBulletin`) 추가.

### 4. 형상 관리
- **Git**: 커밋 및 리모트 푸시(`origin main`) 완료.

## 🛠️ 현재 시스템 상태
- **프레임워크**: Next.js (App Router)
- **스타일링**: Tailwind CSS + Framer Motion (애니메이션)
- **데이터 소스**: `src/lib/data/contentData.ts` (Single Source of Truth)
