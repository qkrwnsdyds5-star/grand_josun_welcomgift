# JOSUN ÉCLAT (조선 에끌라) 프리미엄 웰컴기프트 모바일 웹페이지

그랜드 조선 호텔(GRAND JOSUN)의 환대 헤리티지와 신세계푸드 베키아에누보(Vecchia & Nuovo)의 유러피언 파티세리가 결합된 신규 웰컴기프트 브랜드 **JOSUN ÉCLAT**의 모바일 디지털 브로슈어 및 인터랙티브 가이드 웹사이트입니다.

객실에 비치된 웰컴기프트 상자 또는 브로슈어의 QR코드를 스캔하여 접속하며, 별도 회원가입 없이 선물의 의미, 지역별 모티브, 키즈 쿠키 꾸미기 가이드(Cookie Atelier)를 경험할 수 있습니다.

---

## 1. 핵심 특징

- **Quiet Luxury, Editorial Elegance**: 5성급 럭셔리 부티크 호텔의 절제된 미학, 넉넉한 여백, 우아한 세리프 타이포그래피.
- **지역 맞춤형 테마 분기**:
  - **부산 (`?location=busan`)**: Deep Navy (`#203B56`) & 해운대 바다/파도 모티브
  - **제주 (`?location=jeju`)**: Deep Forest Green (`#213E33`) & 한라산 숲/능선 모티브
- **객실별 기프트 안내**: 일반(Standard) / 스위트(Suite) / 키즈(Kids) 3단 탭 전환.
- **Cookie Atelier (키즈 가이드)**: 동일한 기본 실루엣의 쿠키 6구와 다채로운 초코펜으로 즐기는 4단계 DIY 가이드 (터치 스와이프 지원) 및 식품 안전 아코디언.
- **Pure Web Standard**: 프레임워크나 빌드 도구 없이 **HTML5, CSS3, Vanilla JavaScript** 단 3가지만으로 가볍고 빠르게 구동.

---

## 2. 파일 구조

```
josun-eclat/
├── index.html              # 시맨틱 단일 HTML5 마크업
├── style.css               # Quiet Luxury 순수 CSS3 스타일시트
├── script.js               # 순수 ES6+ Vanilla JavaScript 로직
├── images/                 # 웹 최적화 영문 케밥케이스 이미지 에셋 (8종)
│   ├── josun-eclat-logo.png
│   ├── busan-brochure.png
│   ├── jeju-brochure.png
│   ├── kids-brochure.png
│   ├── busan-gift-standard.png
│   ├── busan-gift-suite.png
│   ├── jeju-gift.png
│   └── kids-cookie-kit.png
├── assets/                 # 원본 참조용 에셋 보관소
├── PRD_Vanilla.md          # 제품 요구사항 정의서 (기획 문서)
└── README.md               # 프로젝트 안내 및 배포 가이드
```

---

## 3. 로컬 실행 방법

별도의 `npm install`이나 빌드 과정이 전혀 필요 없습니다.

1. **단순 실행**: `index.html` 파일을 더블클릭하여 크롬, 엣지, 사파리 등 모바일/데스크톱 브라우저에서 바로 열 수 있습니다.
2. **로컬 서버 실행 (선택 사항)**:
   ```bash
   # Python 내장 서버
   python -m http.server 8080

   # 또는 Node.js npx
   npx serve .
   ```
   브라우저에서 `http://localhost:8080/?location=busan` 또는 `http://localhost:8080/?location=jeju`로 접속합니다.

---

## 4. GitHub Pages 배포 가이드 (Deploy from a branch)

본 웹사이트는 모든 자원을 상대 경로(`./`)로 참조하므로 GitHub Pages 서브디렉토리에서도 링크 깨짐 없이 완벽하게 동작합니다.

### 4.1 GitHub 저장소 생성 및 푸시
```bash
git init
git add .
git commit -m "feat: complete JOSUN ECLAT pure static webpage"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### 4.2 GitHub Pages 활성화
1. GitHub 저장소의 **Settings** 탭으로 이동합니다.
2. 좌측 메뉴의 **Pages**를 클릭합니다.
3. **Build and deployment** > **Source** 항목에서 **Deploy from a branch**를 선택합니다.
4. **Branch**를 `main`, 폴더를 `/ (root)`로 설정하고 **Save**를 클릭합니다.
5. 1~2분 후 생성되는 배포 URL(`https://<your-username>.github.io/<repo-name>/`)로 접속합니다.

### 4.3 QR코드 링크 설정
- **부산 웰컴기프트 QR**: `https://<your-username>.github.io/<repo-name>/?location=busan`
- **제주 웰컴기프트 QR**: `https://<your-username>.github.io/<repo-name>/?location=jeju`

---

## 5. 면책 조항 (Disclaimer)

본 프로젝트는 그랜드 조선 호텔과 베키아에누보의 신규 웰컴기프트 상품 기획안 제안을 위해 제작된 하이파이(High-Fidelity) 프로토타입입니다. 실제 공식 제휴 및 상용 제품이 아닙니다.

