/**
 * JOSUN ÉCLAT — Pure Vanilla JavaScript
 * Zero dependencies, Native Web APIs only
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     01. Static Data & Content Repository
     ========================================================================== */
  const CONTENT = {
    themes: {
      busan: {
        id: 'busan',
        hotelName: 'GRAND JOSUN BUSAN',
        badgeText: 'GRAND JOSUN BUSAN WELCOME GIFT',
        heroSubtitle: '푸른 해운대의 파도와 빛나는 도시가 머무는 곳, 그랜드 조선 부산에서 준비한 감각적인 환대의 시간을 마주해 보세요.',
        packagingImg: './images/busan-brochure.png',
        captionText: '그랜드 조선 부산 시그니처 웰컴 패키지',
        inspiration: {
          title: '해운대의 깊은 바다와 수평선',
          subtitle: 'The Azure Horizon of Haeundae',
          text: '끝없이 펼쳐진 에메랄드빛 해운대 해변과 잔잔한 파도의 율동감에서 영감을 받았습니다. 딥 네이비의 깊은 울림과 샴페인 골드의 섬세한 반짝임이 부산에서의 특별한 휴식을 영원히 기억하게 합니다.',
          quote: '"파도가 밀려와 백사장에 남기는 고요한 흔적처럼, 여행의 가장 우아한 순간을 웰컴기프트에 담았습니다."',
          svgD: 'M 0,55 Q 40,20 80,55 T 160,55 T 240,55 T 300,55' // 파도 형상 곡선
        }
      },
      jeju: {
        id: 'jeju',
        hotelName: 'GRAND JOSUN JEJU',
        badgeText: 'GRAND JOSUN JEJU WELCOME GIFT',
        heroSubtitle: '태고의 신비를 품은 한라산과 제주의 바람이 전하는 쉼, 오직 당신만을 위해 준비한 달콤한 여정을 시작합니다.',
        packagingImg: './images/jeju-brochure.png',
        captionText: '그랜드 조선 제주 시그니처 웰컴 패키지',
        inspiration: {
          title: '한라산의 완만한 능선과 원시림',
          subtitle: 'The Verdant Peak of Hallasan',
          text: '태고의 신비를 품은 한라산의 유려한 능선과 곶자왈 숲의 깊은 녹음에서 영감을 얻었습니다. 차분한 딥 포레스트 그린과 은은한 골드 포인트가 온전한 쉼과 제주의 숨결을 선물합니다.',
          quote: '"바람이 숲을 스치며 전하는 피톤치드의 평온함처럼, 자연의 품에 안긴 안식의 시간을 선사합니다."',
          svgD: 'M 0,70 Q 75,50 120,35 Q 150,15 180,35 Q 225,50 300,70' // 산 능선 형상 곡선
        }
      }
    },

    gifts: {
      busan: {
        standard: {
          badge: 'SIGNATURE GOURMET',
          roomTag: 'STANDARD ROOM',
          titleKo: '해운대 시그니처 디저트 세트',
          titleEn: 'The Ocean Landmark Selection',
          img: './images/busan-gift-standard.png',
          desc: '부산의 랜드마크인 광안대교의 유려한 실루엣과 바다를 밝히는 등대, 항해하는 배의 상징을 미니멀하게 형상화한 시그니처 디저트 세트입니다.',
          motifs: [
            { name: '광안대교', text: '유려한 현수교의 야경과 낭만' },
            { name: '배', text: '푸른 바다를 향한 새로운 여정' },
            { name: '등대', text: '해운대 앞바다의 따뜻한 길잡이' }
          ],
          pairing: '체크인 직후, 객실 내 은은한 웰컴 티와 곁들이시면 더욱 풍성한 버터의 풍미와 달콤함을 느끼실 수 있습니다.'
        },
        suite: {
          badge: 'SUITE EXCLUSIVE',
          roomTag: 'SUITE ROOM',
          titleKo: '베키아에누보 스페셜티 쇼콜라 & 티 컬렉션',
          titleEn: 'Heritage Specialite Chocolat & Tea Pairing',
          img: './images/busan-gift-suite.png',
          desc: '일반 객실의 상징(광안대교, 배, 등대)에 갈매기, 조개껍질, 파도의 깊이 있는 미학을 더하고, 최고급 하드케이스 패키지로 완성한 스위트 전용 기프트입니다.',
          motifs: [
            { name: '광안대교 · 배 · 등대', text: '부산의 찬란한 해양 랜드마크' },
            { name: '갈매기 · 조개껍질', text: '파도 소리가 머무는 해안의 정취' },
            { name: '물결치는 파도', text: '끝없이 이어지는 자연의 우아한 율동' }
          ],
          pairing: '객실 내 프리미엄 에스프레소 머신 또는 차갑게 칠링된 샴페인과 완벽한 마리아주를 이룹니다.'
        },
        kids: {
          badge: 'FAMILY ATELIER',
          roomTag: 'KIDS ROOM',
          titleKo: 'JOSUN ÉCLAT 쿠키 아틀리에 키트',
          titleEn: 'Cookie Atelier DIY Creative Gift Kit',
          img: './images/kids-cookie-kit.png',
          desc: '동일한 기본 실루엣의 깨끗한 캔버스 쿠키 6개와 다채로운 색상의 세이프티 초코펜, 반짝이는 토핑 세트로 구성되어 있습니다. 아이의 상상력과 가족의 따뜻한 교감을 담아냅니다.',
          motifs: [
            { name: '기본 실루엣 캔버스 쿠키 6ea', text: '틀에 갇히지 않은 자유로운 도화지' },
            { name: '다채로운 세이프티 초코펜', text: '화이트, 골드, 핑크, 스카이블루 등 감각적 색상' },
            { name: '데코 토핑 3종 세트', text: '작품의 완성도를 높이는 섬세한 디테일' }
          ],
          pairing: '신선한 우유 또는 부드러운 코코아와 함께 온 가족이 즐거운 DIY 아트 시간을 함께해 보세요.'
        }
      },
      jeju: {
        standard: {
          badge: 'SIGNATURE GOURMET',
          roomTag: 'STANDARD ROOM',
          titleKo: '한라 오름 시그니처 디저트 세트',
          titleEn: 'The Island Nature Selection',
          img: './images/jeju-gift.png',
          desc: '제주의 따뜻한 햇살을 머금은 감귤과 들판을 달리는 말, 남국의 정취를 품은 야자수를 모티브로 자연의 싱그러움을 담아낸 디저트 세트입니다.',
          motifs: [
            { name: '귤', text: '제주의 따스한 햇살과 상큼한 활력' },
            { name: '말', text: '푸른 초원을 자유롭게 달리는 역동성' },
            { name: '야자수', text: '이국적인 정취와 평화로운 쉼' }
          ],
          pairing: '제주 유기농 녹차 또는 감귤 향이 감도는 블렌디드 티와 함께 즐기시면 조화로운 풍미를 경험하실 수 있습니다.'
        },
        suite: {
          badge: 'SUITE EXCLUSIVE',
          roomTag: 'SUITE ROOM',
          titleKo: '한라 마스터피스 쇼콜라 셀렉션',
          titleEn: 'The Hallasan Masterpiece Collection',
          img: './images/jeju-gift.png',
          desc: '일반 객실 구성(귤, 말, 야자수)에 한라봉, 돌하르방, 제주 섬 형태(한라산)를 더해 제주의 온전한 사계를 담아낸 스위트 고객만을 위한 품격 있는 컬렉션입니다.',
          motifs: [
            { name: '귤 · 말 · 야자수', text: '제주의 평화롭고 싱그러운 자연' },
            { name: '한라봉', text: '풍부한 과즙과 깊고 달콤한 미식의 정수' },
            { name: '돌하르방 · 한라산', text: '억겁의 세월을 품은 굳건한 평온' }
          ],
          pairing: '최고급 싱글 오리진 드립 커피나 깊은 향의 홍차와 함께 깊어가는 여행의 밤을 만끽해 보세요.'
        },
        kids: {
          badge: 'FAMILY ATELIER',
          roomTag: 'KIDS ROOM',
          titleKo: 'JOSUN ÉCLAT 쿠키 아틀리에 키트',
          titleEn: 'Cookie Atelier DIY Creative Gift Kit',
          img: './images/kids-cookie-kit.png',
          desc: '동일한 기본 실루엣의 깨끗한 캔버스 쿠키 6개와 다채로운 색상의 세이프티 초코펜, 반짝이는 토핑 세트로 구성되어 있습니다. 아이의 상상력과 가족의 따뜻한 교감을 담아냅니다.',
          motifs: [
            { name: '기본 실루엣 캔버스 쿠키 6ea', text: '틀에 갇히지 않은 자유로운 도화지' },
            { name: '다채로운 세이프티 초코펜', text: '화이트, 골드, 핑크, 스카이블루 등 감각적 색상' },
            { name: '데코 토핑 3종 세트', text: '작품의 완성도를 높이는 섬세한 디테일' }
          ],
          pairing: '신선한 우유 또는 부드러운 코코아와 함께 온 가족이 즐거운 DIY 아트 시간을 함께해 보세요.'
        }
      }
    },

    cookieSteps: [
      {
        step: 1,
        badge: 'STEP 01 / 04',
        title: '정갈한 쿠키 캔버스와 초코펜 준비',
        desc: '상자 속 6개의 정갈한 기본 쿠키를 트레이 위에 나란히 정돈합니다. 동봉된 초코펜이 부드럽게 나올 수 있도록 미온수에 살짝 담가 준비해 주세요.',
        tip: '초코펜의 앞부분을 가위로 1mm 정도만 얇게 잘라주시면 더욱 섬세하고 정교한 라인 드로잉이 가능합니다.'
      },
      {
        step: 2,
        badge: 'STEP 02 / 04',
        title: '나만의 감각적인 색상 선택',
        desc: '화이트, 골드, 핑크, 스카이블루, 초코 등 준비된 다채로운 컬러 펜 중 오늘 우리 가족의 기분을 표현할 색상을 골라봅니다.',
        tip: '밝은 색으로 전체적인 베이스 라인을 먼저 잡은 뒤, 포인트 컬러로 디테일을 더하면 깊이감이 살아납니다.'
      },
      {
        step: 3,
        badge: 'STEP 03 / 04',
        title: '자유로운 캔버스 드로잉 & 토핑',
        desc: '정해진 정답은 없습니다. 바다의 파도, 별빛, 사랑하는 가족의 얼굴과 이니셜 등 마음에 떠오르는 자유로운 무늬를 쿠키 위에 그려보세요.',
        tip: '초코펜을 쿠키 표면에서 살짝 띄워 일정한 힘으로 누르면서 선을 그리면 매끄럽고 도톰한 입체감이 완성됩니다.'
      },
      {
        step: 4,
        badge: 'STEP 04 / 04',
        title: '작품 완성 및 가족과 함께 나누기',
        desc: '장식이 완성된 쿠키는 초콜릿이 굳을 때까지 잠시 기다립니다. 완성된 멋진 작품을 사진으로 기념하고, 가족과 함께 티타임 디저트로 맛있게 나누어 보세요.',
        tip: '쿠키는 당일 드시는 것을 권장하며, 시원한 우유나 따뜻한 티와 곁들이면 최상의 조화를 이룹니다.'
      }
    ]
  };

  /* ==========================================================================
     02. Application State
     ========================================================================== */
  const state = {
    location: 'busan', // 'busan' | 'jeju'
    room: 'standard',   // 'standard' | 'suite' | 'kids'
    step: 1             // 1 | 2 | 3 | 4
  };

  /* ==========================================================================
     03. DOM Element Cache
     ========================================================================== */
  const el = {
    html: document.documentElement,
    btnBusan: document.getElementById('btnBusan'),
    btnJeju: document.getElementById('btnJeju'),
    headerHotelName: document.getElementById('headerHotelName'),
    heroBadgeText: document.getElementById('heroBadgeText'),
    heroSubtitle: document.getElementById('heroSubtitle'),
    heroPackagingImg: document.getElementById('heroPackagingImg'),
    heroCaptionText: document.getElementById('heroCaptionText'),
    
    // Rooms
    tabBtns: document.querySelectorAll('.tab-btn'),
    giftCard: document.getElementById('giftCard'),
    giftBadge: document.getElementById('giftBadge'),
    giftImg: document.getElementById('giftImg'),
    giftRoomTag: document.getElementById('giftRoomTag'),
    giftTitleKo: document.getElementById('giftTitleKo'),
    giftTitleEn: document.getElementById('giftTitleEn'),
    giftDescription: document.getElementById('giftDescription'),
    giftMotifList: document.getElementById('giftMotifList'),
    giftPairingText: document.getElementById('giftPairingText'),

    // Stepper
    stepNavBtns: document.querySelectorAll('.step-nav-btn'),
    stepCard: document.getElementById('stepCard'),
    stepBadge: document.getElementById('stepBadge'),
    stepTitle: document.getElementById('stepTitle'),
    stepDesc: document.getElementById('stepDesc'),
    stepTip: document.getElementById('stepTip'),
    btnPrevStep: document.getElementById('btnPrevStep'),
    btnNextStep: document.getElementById('btnNextStep'),
    stepDots: document.querySelectorAll('.step-dots .dot'),

    // Accordion
    allergyAccordionBtn: document.getElementById('allergyAccordionBtn'),
    allergyContent: document.getElementById('allergyContent'),

    // Inspiration
    svgPath: document.getElementById('svgPath'),
    inspirationTitle: document.getElementById('inspirationTitle'),
    inspirationSubtitle: document.getElementById('inspirationSubtitle'),
    inspirationText: document.getElementById('inspirationText'),
    inspirationQuote: document.getElementById('inspirationQuote')
  };

  /* ==========================================================================
     04. Theme & Location Logic
     ========================================================================== */

  /**
   * URL 쿼리 파라미터에서 location 파싱 및 기본값 설정
   */
  function initLocationFromURL() {
    const params = new URLSearchParams(window.location.search);
    const locParam = params.get('location');
    if (locParam === 'jeju') {
      setLocation('jeju', false);
    } else {
      setLocation('busan', false);
    }
  }

  /**
   * 지역 변경 및 뷰 갱신
   * @param {string} newLoc 'busan' | 'jeju'
   * @param {boolean} updateHistory 브라우저 히스토리 업데이트 여부
   */
  function setLocation(newLoc, updateHistory = true) {
    if (newLoc !== 'busan' && newLoc !== 'jeju') return;
    state.location = newLoc;

    // HTML 속성 및 CSS 변수 전환
    el.html.setAttribute('data-theme', newLoc);

    // 스위처 버튼 상태 갱신
    if (newLoc === 'busan') {
      el.btnBusan.classList.add('active');
      el.btnBusan.setAttribute('aria-pressed', 'true');
      el.btnJeju.classList.remove('active');
      el.btnJeju.setAttribute('aria-pressed', 'false');
    } else {
      el.btnJeju.classList.add('active');
      el.btnJeju.setAttribute('aria-pressed', 'true');
      el.btnBusan.classList.remove('active');
      el.btnBusan.setAttribute('aria-pressed', 'false');
    }

    // URL 쿼리스트링 동기화
    if (updateHistory) {
      const url = new URL(window.location);
      url.searchParams.set('location', newLoc);
      window.history.replaceState({}, '', url);
    }

    // 화면 콘텐츠 렌더링
    renderThemeContent();
    renderGiftCard();
  }

  /**
   * 히어로 및 지역 영감 섹션 텍스트/이미지 갱신
   */
  function renderThemeContent() {
    const theme = CONTENT.themes[state.location];
    if (!theme) return;

    el.headerHotelName.textContent = theme.hotelName;
    el.heroBadgeText.textContent = theme.badgeText;
    el.heroSubtitle.textContent = theme.heroSubtitle;
    el.heroPackagingImg.src = theme.packagingImg;
    el.heroCaptionText.textContent = theme.captionText;

    // 지역 영감 섹션
    el.inspirationTitle.textContent = theme.inspiration.title;
    el.inspirationSubtitle.textContent = theme.inspiration.subtitle;
    el.inspirationText.textContent = theme.inspiration.text;
    el.inspirationQuote.textContent = theme.inspiration.quote;
    el.svgPath.setAttribute('d', theme.inspiration.svgD);
  }

  /* ==========================================================================
     05. Room Gift Tabs Logic
     ========================================================================== */

  /**
   * 객실 탭 전환
   * @param {string} roomType 'standard' | 'suite' | 'kids'
   */
  function setRoomType(roomType) {
    if (state.room === roomType) return;
    state.room = roomType;

    // 탭 버튼 UI 업데이트
    el.tabBtns.forEach(btn => {
      const isMatch = btn.dataset.room === roomType;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    // 부드러운 페이드 전환 연출
    el.giftCard.classList.add('fade-out');
    setTimeout(() => {
      renderGiftCard();
      el.giftCard.classList.remove('fade-out');
      el.giftCard.classList.add('fade-in');
      setTimeout(() => el.giftCard.classList.remove('fade-in'), 350);
    }, 200);
  }

  /**
   * 선물 카드 렌더링
   */
  function renderGiftCard() {
    const giftData = CONTENT.gifts[state.location][state.room];
    if (!giftData) return;

    el.giftBadge.textContent = giftData.badge;
    el.giftRoomTag.textContent = giftData.roomTag;
    el.giftTitleKo.textContent = giftData.titleKo;
    el.giftTitleEn.textContent = giftData.titleEn;
    el.giftImg.src = giftData.img;
    el.giftImg.alt = `${giftData.titleKo} 이미지`;
    el.giftDescription.textContent = giftData.desc;
    el.giftPairingText.textContent = giftData.pairing;

    // 모티브 리스트 렌더링
    el.giftMotifList.innerHTML = giftData.motifs
      .map(m => `<li><span class="motif-icon">◆</span> <strong>${m.name}</strong> : ${m.text}</li>`)
      .join('');
  }

  /* ==========================================================================
     06. Cookie Atelier Stepper Logic
     ========================================================================== */

  /**
   * 스텝 이동
   * @param {number} stepNumber 1..4
   */
  function setCookieStep(stepNumber) {
    if (stepNumber < 1 || stepNumber > 4) return;
    state.step = stepNumber;

    // 네비게이션 탭 갱신
    el.stepNavBtns.forEach(btn => {
      const s = parseInt(btn.dataset.step, 10);
      const isMatch = s === stepNumber;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    // 도트 인디케이터 갱신
    el.stepDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx + 1 === stepNumber);
    });

    // 이전/다음 버튼 제어
    el.btnPrevStep.disabled = stepNumber === 1;
    el.btnNextStep.disabled = stepNumber === 4;

    // 콘텐츠 갱신 (부드러운 페이드)
    const stepData = CONTENT.cookieSteps[stepNumber - 1];
    if (stepData) {
      el.stepCard.style.opacity = '0';
      setTimeout(() => {
        el.stepBadge.textContent = stepData.badge;
        el.stepTitle.textContent = stepData.title;
        el.stepDesc.textContent = stepData.desc;
        el.stepTip.textContent = stepData.tip;
        el.stepCard.style.opacity = '1';
      }, 150);
    }
  }

  /* ==========================================================================
     07. Accordion Logic
     ========================================================================== */
  function toggleAccordion() {
    const isExpanded = el.allergyAccordionBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      el.allergyAccordionBtn.setAttribute('aria-expanded', 'false');
      el.allergyContent.style.maxHeight = '0px';
    } else {
      el.allergyAccordionBtn.setAttribute('aria-expanded', 'true');
      el.allergyContent.style.maxHeight = el.allergyContent.scrollHeight + 'px';
    }
  }

  /* ==========================================================================
     08. Scroll Animation (IntersectionObserver)
     ========================================================================== */
  function setupScrollAnimation() {
    const fadeElements = document.querySelectorAll('.fade-in-up');
    
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      });

      fadeElements.forEach(item => observer.observe(item));
    } else {
      // IntersectionObserver 미지원 환경 폴백
      fadeElements.forEach(item => item.classList.add('visible'));
    }
  }

  /* ==========================================================================
     09. Touch Swipe Support for Stepper (Mobile Optimization)
     ========================================================================== */
  function setupTouchSwipe() {
    let touchStartX = 0;
    let touchEndX = 0;

    el.stepCard.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    el.stepCard.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const swipeDistance = touchEndX - touchStartX;
      if (swipeDistance > 45) {
        // 오른쪽 스와이프 (이전 스텝)
        if (state.step > 1) setCookieStep(state.step - 1);
      } else if (swipeDistance < -45) {
        // 왼쪽 스와이프 (다음 스텝)
        if (state.step < 4) setCookieStep(state.step + 1);
      }
    }
  }

  /* ==========================================================================
     10. Event Listeners Binding
     ========================================================================== */
  function bindEvents() {
    // 지역 토글러
    el.btnBusan.addEventListener('click', () => setLocation('busan'));
    el.btnJeju.addEventListener('click', () => setLocation('jeju'));

    // 브라우저 뒤로가기/앞으로가기 시 파라미터 동기화
    window.addEventListener('popstate', () => {
      initLocationFromURL();
    });

    // 객실 유형 탭
    el.tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        setRoomType(btn.dataset.room);
      });
    });

    // 쿠키 스텝 네비게이션 버튼
    el.stepNavBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const s = parseInt(btn.dataset.step, 10);
        setCookieStep(s);
      });
    });

    // 쿠키 스텝 화살표 버튼
    el.btnPrevStep.addEventListener('click', () => {
      if (state.step > 1) setCookieStep(state.step - 1);
    });

    el.btnNextStep.addEventListener('click', () => {
      if (state.step < 4) setCookieStep(state.step + 1);
    });

    // 식품 안전 아코디언 버튼
    el.allergyAccordionBtn.addEventListener('click', toggleAccordion);
  }

  /* ==========================================================================
     11. Initialize Application
     ========================================================================== */
  function init() {
    initLocationFromURL();
    setCookieStep(1);
    bindEvents();
    setupTouchSwipe();
    setupScrollAnimation();
  }

  init();
});

