// 멘토 데이터를 localStorage에서 불러오거나 기본값 사용
function getMentors() {
  const savedMentors = localStorage.getItem("mentors")
  if (savedMentors) {
    return JSON.parse(savedMentors)
  }
  return [
    {
      id: 1,
      name: "김현우",
      position: "Senior Frontend Developer",
      company: "우아한형제들",
      location: "서울",
      rating: 4.9,
      reviews: 127,
      specialties: ["React", "TypeScript", "Next.js", "포트폴리오 리뷰"],
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      isOnline: true,
      responseTime: "평균 5분",
    },
    {
      id: 2,
      name: "박지영",
      position: "Lead Backend Developer",
      company: "카카오",
      location: "판교",
      rating: 4.8,
      reviews: 89,
      specialties: ["Spring Boot", "AWS", "MSA", "면접 준비"],
      avatar: "https://www.gravatar.com/avatar/?d=mp",
      isOnline: true,
      responseTime: "평균 10분",
    },
    {
      id: 3,
      name: "이수진",
      position: "Full Stack Developer",
      company: "네이버",
      location: "분당",
      rating: 4.9,
      reviews: 156,
      specialties: ["Vue.js", "Node.js", "DevOps", "커리어 상담"],
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      isOnline: false,
      responseTime: "평균 30분",
    },
    {
      id: 4,
      name: "최민호",
      position: "Mobile Developer",
      company: "라인",
      location: "신분당",
      rating: 4.7,
      reviews: 94,
      specialties: ["React Native", "Flutter", "iOS", "앱 출시"],
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      isOnline: true,
      responseTime: "평균 15분",
    },
  ]
}

// 멘토 데이터를 localStorage에 저장
function saveMentors(mentors) {
  localStorage.setItem("mentors", JSON.stringify(mentors))
}

// 멘토 평점 업데이트 함수
function updateMentorRating(mentorId, newRating) {
  const mentors = getMentors()
  const mentorIndex = mentors.findIndex((m) => m.id === mentorId)

  if (mentorIndex !== -1) {
    const mentor = mentors[mentorIndex]

    // 기존 총점 계산 (평점 * 리뷰 수)
    const currentTotalScore = mentor.rating * mentor.reviews

    // 새로운 리뷰 추가
    const newReviewCount = mentor.reviews + 1
    const newTotalScore = currentTotalScore + newRating
    const newAverageRating = newTotalScore / newReviewCount

    // 멘토 정보 업데이트
    mentors[mentorIndex] = {
      ...mentor,
      rating: Math.round(newAverageRating * 10) / 10, // 소수점 첫째자리까지
      reviews: newReviewCount,
    }

    // localStorage에 저장
    saveMentors(mentors)

    return mentors
  }

  return mentors
}

// 전역 mentors 변수를 함수로 대체
let mentors = getMentors()

// 커뮤니티 데이터
const posts = [
  {
    id: 1,
    title: "React에서 상태 관리 라이브러리 선택 고민",
    content:
      "안녕하세요! 프로젝트에서 상태 관리를 위해 Redux vs Zustand vs Context API 중에 고민하고 있습니다. 각각의 장단점과 어떤 상황에서 사용하는 것이 좋을지 조언 부탁드립니다.",
    author: "주니어개발자",
    category: "question",
    tags: ["React", "Redux", "Zustand", "상태관리"],
    likes: 5,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2시간 전
  },
  {
    id: 2,
    title: "신입 개발자 포트폴리오 피드백 요청",
    content:
      "안녕하세요! 신입 프론트엔드 개발자로 취업 준비 중입니다. 포트폴리오를 만들었는데 피드백을 받고 싶습니다.\n\n주요 프로젝트:\n1. Todo App (React + TypeScript)\n2. 날씨 앱 (Vue.js)\n3. 쇼핑몰 클론 (Next.js)\n\n어떤 부분을 더 보완해야 할까요?",
    author: "취준생",
    category: "review",
    tags: ["포트폴리오", "신입", "프론트엔드"],
    likes: 8,
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5시간 전
  },
  {
    id: 3,
    title: "Node.js vs Spring Boot 백엔드 선택 기준",
    content:
      "새로운 프로젝트를 시작하는데 백엔드 기술 스택 선택으로 고민입니다. Node.js와 Spring Boot 중 어떤 것을 선택해야 할지, 그리고 각각의 장단점에 대해 토론해보고 싶습니다.",
    author: "개발팀장",
    category: "discussion",
    tags: ["Node.js", "Spring Boot", "백엔드"],
    likes: 12,
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1일 전
  },
]

// 댓글 데이터
const comments = [
  {
    id: 1,
    postId: 1,
    author: "시니어개발자",
    content:
      "프로젝트 규모와 팀 구성에 따라 다르지만, 간단한 프로젝트라면 Context API, 복잡한 상태 로직이 많다면 Zustand를 추천합니다. Redux는 DevTools와 미들웨어가 강력하지만 보일러플레이트가 많아요.",
    createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1시간 전
  },
  {
    id: 2,
    postId: 2,
    author: "HR담당자",
    content:
      "포트폴리오가 잘 구성되어 있네요! 추가로 팀 프로젝트 경험이나 오픈소스 기여 경험이 있다면 더 좋을 것 같습니다. 그리고 각 프로젝트에서 어떤 문제를 해결했는지 구체적으로 설명해주세요.",
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3시간 전
  },
]

// 사용자 프로필 데이터 추가
const userProfiles = {
  주니어개발자: {
    name: "주니어개발자",
    title: "Frontend Developer",
    experience: "1년차",
    company: "스타트업",
    specialties: ["React", "JavaScript"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    verified: false,
  },
  시니어개발자: {
    name: "시니어개발자",
    title: "Senior Full Stack Developer",
    experience: "7년차",
    company: "네이버",
    specialties: ["React", "Node.js", "AWS"],
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    verified: true,
  },
  취준생: {
    name: "취준생",
    title: "예비 개발자",
    experience: "신입",
    company: "구직중",
    specialties: ["HTML", "CSS", "JavaScript"],
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    verified: false,
  },
  개발팀장: {
    name: "개발팀장",
    title: "Development Team Lead",
    experience: "10년차",
    company: "카카오",
    specialties: ["Architecture", "Management", "Backend"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    verified: true,
  },
  HR담당자: {
    name: "HR담당자",
    title: "HR Manager",
    experience: "5년차",
    company: "우아한형제들",
    specialties: ["채용", "면접", "HR"],
    avatar: "https://www.gravatar.com/avatar/?d=mp",
    verified: true,
  },
}

// getUserProfile 함수 추가
function getUserProfile(authorName) {
  return (
    userProfiles[authorName] || {
      name: authorName,
      title: "사용자",
      experience: "-",
      company: "-",
      specialties: [],
      avatar: "https://www.gravatar.com/avatar/?d=mp",
      verified: false,
    }
  )
}

// 메시지 데이터 (멘토별로 구분)
const messagesByMentor = {}

// 전역 변수
let currentView = "main"
let selectedMentor = null
let messages = []
let currentPostId = null
const currentCategory = "all"

// 전역 변수에 검색 관련 변수 추가
let currentSearchQuery = ""
let isSearchActive = false

// DOM 요소들
const views = {
  main: document.getElementById("main-view"),
  mentorList: document.getElementById("mentor-list-view"),
  chat: document.getElementById("chat-view"),
  community: document.getElementById("community-view"),
  postCreate: document.getElementById("post-create-view"),
  postDetail: document.getElementById("post-detail-view"),
}

// Lucide 아이콘 초기화 함수
function initializeLucideIcons() {
  if (typeof window.lucide !== "undefined") {
    window.lucide.createIcons()
  }
}

// 초기화
document.addEventListener("DOMContentLoaded", () => {
  // Lucide 아이콘 초기화
  initializeLucideIcons()

  // 이벤트 리스너 등록
  setupEventListeners()

  // 첫 번째 뷰 표시
  showView("main")
})

// 이벤트 리스너 설정
function setupEventListeners() {
  // 메인 네비게이션
  document.getElementById("start-coffee-chat").addEventListener("click", () => showView("mentorList"))
  document.getElementById("join-community").addEventListener("click", () => showView("community"))

  // 뒤로 가기 버튼들
  document.getElementById("back-to-main").addEventListener("click", () => showView("main"))
  document.getElementById("back-to-list").addEventListener("click", () => showView("mentorList"))
  document.getElementById("back-to-main-from-community").addEventListener("click", () => showView("main"))
  document.getElementById("back-to-community").addEventListener("click", () => showView("community"))
  document.getElementById("back-to-community-from-detail").addEventListener("click", () => showView("community"))

  // 커뮤니티 관련
  document.getElementById("go-to-post-create").addEventListener("click", () => showView("postCreate"))
  document.getElementById("cancel-post").addEventListener("click", () => showView("community"))

  // 게시글 작성 폼
  document.getElementById("post-create-form").addEventListener("submit", handlePostCreate)

  // 채팅 관련
  const chatInput = document.getElementById("chat-input")
  const sendButton = document.getElementById("send-message")

  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  })
  sendButton.addEventListener("click", sendMessage)

  // 화상 통화 관련
  document.getElementById("video-call-btn").addEventListener("click", showVideoCallModal)
  document.getElementById("cancel-video-call").addEventListener("click", hideVideoCallModal)
  document.getElementById("start-video-call").addEventListener("click", startVideoCall)
  document.getElementById("mute-btn").addEventListener("click", toggleMute)
  document.getElementById("camera-btn").addEventListener("click", toggleCamera)

  // 커피챗 종료 및 평가 관련 이벤트 리스너 설정
  setupCoffeeChatEvaluation()

  // 검색 관련 이벤트 리스너 추가
  const searchInput = document.getElementById("community-search")
  const clearSearchBtn = document.getElementById("clear-search")

  if (searchInput) {
    searchInput.addEventListener("input", handleSearch)
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault()
        handleSearch()
      }
    })
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", clearSearch)
  }
}

// 커피챗 평가 관련 이벤트 리스너 설정
function setupCoffeeChatEvaluation() {
  // 종료 버튼 클릭 시 종료 확인 모달 표시
  const endCallBtn = document.getElementById("end-call-btn")
  if (endCallBtn) {
    endCallBtn.addEventListener("click", () => {
      document.getElementById("coffeechat-end-confirm-modal").style.display = "flex"
    })
  }

  // 종료 확인 모달: 아니오/예 버튼
  const cancelEndBtn = document.getElementById("cancel-end-coffeechat")
  const confirmEndBtn = document.getElementById("confirm-end-coffeechat")

  cancelEndBtn.onclick = () => {
    document.getElementById("coffeechat-end-confirm-modal").style.display = "none"
  }

  confirmEndBtn.onclick = () => {
    document.getElementById("coffeechat-end-confirm-modal").style.display = "none"
    endVideoCall() // 실제 통화 종료

    // 평가 모달 표시
    document.getElementById("coffeechat-eval-modal").style.display = "flex"

    // 별점 초기화
    setEvalStars(0)
    document.getElementById("eval-comment").value = ""
    document.querySelectorAll('input[name="eval-kind"]').forEach((r) => (r.checked = false))
  }

  // 별점 선택 로직
  document.querySelectorAll("#eval-stars .star").forEach((starEl) => {
    starEl.onclick = function () {
      setEvalStars(Number(this.dataset.value))
    }
  })

  // 평가 제출 - 평점 반영 로직 추가
  const evalForm = document.getElementById("coffeechat-eval-form")
  evalForm.onsubmit = (e) => {
    e.preventDefault()

    const star = Number(document.getElementById("eval-stars").getAttribute("data-selected"))
    const comment = document.getElementById("eval-comment").value.trim()
    const kind = (document.querySelector('input[name="eval-kind"]:checked') || {}).value

    if (!star || !kind) {
      alert("별점과 친절도 선택은 필수입니다.")
      return
    }

    if (!selectedMentor) return

    // 평가 데이터 저장
    saveCoffeechatEval(selectedMentor.id, { star, comment, kind })

    // 멘토 평점 업데이트
    mentors = updateMentorRating(selectedMentor.id, star)

    // 선택된 멘토 정보도 업데이트
    selectedMentor = mentors.find((m) => m.id === selectedMentor.id)

    document.getElementById("coffeechat-eval-modal").style.display = "none"
    alert("평가가 저장되었습니다! 멘토의 평점이 업데이트되었습니다.")
  }

  // 평가 취소
  const cancelEvalBtn = document.getElementById("cancel-eval-btn")
  cancelEvalBtn.onclick = () => {
    document.getElementById("coffeechat-eval-modal").style.display = "none"
  }

  // 평가 결과 모달 닫기
  document.getElementById("close-eval-result-btn").onclick = () => {
    document.getElementById("coffeechat-eval-result-modal").style.display = "none"
  }
}

// 별점 선택 함수
function setEvalStars(star) {
  document.querySelectorAll("#eval-stars .star").forEach((s) => {
    s.classList.toggle("selected", Number(s.dataset.value) <= star)
  })
  document.getElementById("eval-stars").setAttribute("data-selected", star)
}

// 평가 데이터 저장/조회 (localStorage)
function saveCoffeechatEval(mentorId, evalData) {
  const all = JSON.parse(localStorage.getItem("coffeechatEvals") || "{}")
  all[mentorId] = evalData
  localStorage.setItem("coffeechatEvals", JSON.stringify(all))
}

function getCoffeechatEval(mentorId) {
  const all = JSON.parse(localStorage.getItem("coffeechatEvals") || "{}")
  return all[mentorId]
}

// 평가 결과 보기 함수에 업데이트된 평점 정보 표시
window.showEvalResult = (mentorId) => {
  const evalData = getCoffeechatEval(mentorId)
  const mentor = mentors.find((m) => m.id === mentorId)
  const modal = document.getElementById("coffeechat-eval-result-modal")
  const content = document.getElementById("eval-result-content")

  if (!evalData) {
    content.innerHTML = `
        <div class="text-center py-4">
          <p class="text-gray-500 mb-4">아직 평가가 없습니다.</p>
          ${
            mentor
              ? `
            <div class="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 class="font-semibold text-gray-800 mb-2">현재 멘토 정보</h4>
              <div class="flex items-center justify-between text-sm">
                <span class="text-gray-600">평균 별점:</span>
                <span class="font-medium text-orange-600">${mentor.rating}점</span>
              </div>
              <div class="flex items-center justify-between text-sm mt-1">
                <span class="text-gray-600">총 리뷰 수:</span>
                <span class="font-medium text-orange-600">${mentor.reviews}개</span>
              </div>
            </div>
          `
              : ""
          }
        </div>
      `
  } else {
    const starDisplay = "★".repeat(evalData.star) + "☆".repeat(5 - evalData.star)
    content.innerHTML = `
        <div class="space-y-4">
          <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 class="font-semibold text-gray-800 mb-3">내 평가</h4>
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <span class="font-medium text-gray-700">별점:</span>
                <span class="text-yellow-500 text-lg">${starDisplay}</span>
              </div>
              <div class="flex items-start justify-between">
                <span class="font-medium text-gray-700">한줄평:</span>
                <span class="text-gray-600 text-right flex-1 ml-4">${evalData.comment || "-"}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="font-medium text-gray-700">친절도:</span>
                <span class="text-gray-600 font-medium ${evalData.kind === "yes" ? "text-green-600" : "text-red-600"}">${evalData.kind === "yes" ? "친절함" : "불친절함"}</span>
              </div>
            </div>
          </div>
          
          ${
            mentor
              ? `
            <div class="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 class="font-semibold text-gray-800 mb-3">업데이트된 멘토 정보</h4>
              <div class="space-y-2">
                <div class="flex items-center justify-between text-sm">
                  <span class="text-gray-600">현재 평균 별점:</span>
                  <span class="font-medium text-orange-600">${mentor.rating}점</span>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span class="text-gray-600">총 리뷰 수:</span>
                  <span class="font-medium text-orange-600">${mentor.reviews}개</span>
                </div>
              </div>
            </div>
          `
              : ""
          }
        </div>
      `
  }

  modal.style.display = "flex"
  modal.style.zIndex = 9999
}

// 뷰 전환
function showView(viewName) {
  // 모든 뷰 숨기기
  Object.values(views).forEach((view) => view.classList.remove("active"))

  // 선택된 뷰 보이기
  views[viewName].classList.add("active")
  currentView = viewName

  // 뷰별 초기화
  if (viewName === "mentorList") {
    loadMentors()
  } else if (viewName === "chat" && selectedMentor) {
    initializeChat()
  } else if (viewName === "community") {
    loadCommunityPosts()
    setupCommunityCategoryTabs()
  } else if (viewName === "postDetail" && currentPostId) {
    loadPostDetail(currentPostId)
  }

  // 아이콘 다시 초기화
  setTimeout(() => {
    initializeLucideIcons()
  }, 100)
}

// 멘토 목록 로드
function loadMentors() {
  // 최신 멘토 데이터 불러오기
  mentors = getMentors()
  renderMentorList(mentors)
  updateOnlineCount(mentors)
}

// 멘토 리스트 렌더링
function renderMentorList(mentors) {
  const mentorGrid = document.getElementById("mentor-grid")
  mentorGrid.innerHTML = ""

  mentors.forEach((mentor) => {
    const mentorCard = createMentorCard(mentor)
    mentorGrid.appendChild(mentorCard)
  })
}

// 멘토 카드 생성 함수에서 버튼 스타일을 완전히 동일하게 수정
function createMentorCard(mentor) {
  const card = document.createElement("div")
  card.className = "mentor-card"

  card.innerHTML = `
          <div class="flex items-start justify-between mb-4">
              <div class="flex items-center gap-3">
                  <div class="relative">
                      <img 
                          src="${mentor.avatar}" 
                          alt="${mentor.name}"
                          class="w-12 h-12 rounded-full object-cover"
                          style="width: 3rem; height: 3rem; object-fit: cover;"
                      />
                      <div class="online-indicator ${mentor.isOnline ? "" : "offline"}"></div>
                  </div>
                  <div>
                      <h3 class="text-lg font-semibold text-gray-800">${mentor.name}</h3>
                      <p class="text-sm text-gray-600">${mentor.position} at ${mentor.company}</p>
                  </div>
              </div>
              <div class="status-badge ${mentor.isOnline ? "online" : "offline"}">
                  ${mentor.isOnline ? "온라인" : "오프라인"}
              </div>
          </div>
          
          <div class="flex items-center justify-between mb-4 text-sm text-gray-600">
              <div class="flex items-center gap-1">
                  <i data-lucide="star" style="width: 1rem; height: 1rem; fill: #fbbf24; color: #fbbf24;"></i>
                  <span>${mentor.rating}</span>
                  <span>(${mentor.reviews}개 리뷰)</span>
              </div>
              <div class="flex items-center gap-1">
                  <i data-lucide="map-pin" style="width: 1rem; height: 1rem;"></i>
                  <span>${mentor.location}</span>
              </div>
          </div>
          
          <div class="flex items-center gap-2 mb-4 text-sm text-gray-600">
              <i data-lucide="clock" style="width: 1rem; height: 1rem;"></i>
              <span>${mentor.responseTime} 내 응답</span>
          </div>
          
          <div class="mb-6">
              <p class="text-sm font-medium text-gray-700 mb-2">전문 분야</p>
              <div class="flex flex-wrap gap-2">
                  ${mentor.specialties.map((specialty) => `<span class="specialty-tag">${specialty}</span>`).join("")}
              </div>
          </div>
          
          <div class="flex flex-col gap-2 mt-2">
              <button class="eval-result-btn" onclick="showEvalResult(${mentor.id})">
                  <i data-lucide="clipboard-list" class="w-4 h-4"></i>
                  평가 결과 보기
              </button>
              <button class="w-full gradient-button text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 rounded-lg" onclick="startChat(${mentor.id})" style="padding: 0.75rem 1rem; min-height: 48px; box-sizing: border-box; display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; font-size: 0.875rem; font-weight: 500;">
                  <i data-lucide="message-circle" style="width: 1rem; height: 1rem;"></i>
                  커피챗 시작하기
              </button>
          </div>
      `

  return card
}

// 온라인 멘토 수 업데이트
function updateOnlineCount(mentors) {
  const onlineCount = mentors.filter((mentor) => mentor.isOnline).length
  const onlineCountElement = document.getElementById("online-count")
  if (onlineCountElement) {
    onlineCountElement.textContent = `현재 ${onlineCount}명의 멘토가 온라인 상태입니다`
  }
}

// 채팅 시작
function startChat(mentorId) {
  selectedMentor = mentors.find((mentor) => mentor.id === mentorId)
  if (selectedMentor) {
    // 해당 멘토의 메시지 로드 또는 초기화
    if (!messagesByMentor[mentorId]) {
      messagesByMentor[mentorId] = []
    }
    messages = messagesByMentor[mentorId]
    showView("chat")
  }
}

// 채팅 초기화
function initializeChat() {
  if (!selectedMentor) return

  // 멘토 정보 업데이트
  const mentorInfo = document.getElementById("chat-mentor-info")
  mentorInfo.innerHTML = `
          <div class="relative">
              <img 
                  src="${selectedMentor.avatar}" 
                  alt="${selectedMentor.name}"
                  class="w-10 h-10 rounded-full object-cover"
                  style="width: 2.5rem; height: 2.5rem; object-fit: cover;"
              />
              <div class="absolute -bottom-1 -right-1 w-3 h-3 border-2 border-white rounded-full ${
                selectedMentor.isOnline ? "bg-green-500" : "bg-gray-500"
              }"></div>
          </div>
          <div>
              <h3 class="font-semibold text-gray-800">${selectedMentor.name}</h3>
              <p class="text-sm text-gray-600">${selectedMentor.position} at ${selectedMentor.company}</p>
          </div>
      `

  // 채팅 메시지 영역 초기화하고 기존 메시지 표시
  renderChatMessages()

  // 환영 메시지가 없으면 추가
  if (messages.length === 0) {
    setTimeout(() => {
      addMessage("bot", getRandomResponse("greetings"))
    }, 1000)
  }

  // 입력 필드 포커스
  document.getElementById("chat-input").focus()
}

// 채팅 메시지 렌더링
function renderChatMessages() {
  const chatMessages = document.getElementById("chat-messages")
  chatMessages.innerHTML = ""

  messages.forEach((msg) => {
    const messageElement = createMessageElement(msg)
    chatMessages.appendChild(messageElement)
  })

  scrollToBottom()
}

// 메시지 전송
function sendMessage() {
  const input = document.getElementById("chat-input")
  const message = input.value.trim()

  if (!message || !selectedMentor) return

  // 사용자 메시지 추가
  addMessage("user", message)
  input.value = ""

  // 봇 응답 (지연 후)
  setTimeout(
    () => {
      const response = generateBotResponse(message)
      addMessage("bot", response)

      // '전화' 키워드가 포함된 경우 3초 후 전화 도착
      if (message.toLowerCase().includes("전화")) {
        setTimeout(() => {
          showIncomingCallModal()
        }, 3000)
      }
    },
    1000 + Math.random() * 2000,
  ) // 1-3초 지연
}

// 메시지 요소 생성
function createMessageElement(msg) {
  const messageElement = document.createElement("div")
  messageElement.className = `message ${msg.sender}`

  const timeString = formatTime(new Date(msg.createdAt))

  messageElement.innerHTML = `
          <div>${msg.content}</div>
          <div class="message-time">${timeString}</div>
      `

  return messageElement
}

// 메시지 추가 (로컬용)
function addMessage(sender, text) {
  const now = new Date()
  const msg = {
    id: Date.now(),
    content: text,
    sender: sender,
    createdAt: now.toISOString(),
  }

  messages.push(msg)
  messagesByMentor[selectedMentor.id] = messages // 저장

  const chatMessages = document.getElementById("chat-messages")
  const messageElement = createMessageElement(msg)
  chatMessages.appendChild(messageElement)

  scrollToBottom()
}

// 스크롤을 맨 아래로
function scrollToBottom() {
  const chatMessages = document.getElementById("chat-messages")
  chatMessages.scrollTop = chatMessages.scrollHeight
}

// 시간 포맷팅
function formatTime(date) {
  return date.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
  })
}

// 시간 차이 포맷팅
function formatTimeAgo(date) {
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (diffInSeconds < 60) {
    return "방금 전"
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60)
  if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`
  }

  const diffInHours = Math.floor(diffInMinutes / 60)
  if (diffInHours < 24) {
    return `${diffInHours}시간 전`
  }

  const diffInDays = Math.floor(diffInHours / 24)
  if (diffInDays < 7) {
    return `${diffInDays}일 전`
  }

  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

// 봇 응답 생성 - 전화 키워드 감지 추가
function generateBotResponse(userMessage) {
  const lowerMessage = userMessage.toLowerCase()

  // 전화 키워드 감지
  if (lowerMessage.includes("전화")) {
    return "곧 연락 드리겠습니다."
  } else if (lowerMessage.includes("포트폴리오") || lowerMessage.includes("portfolio")) {
    return getRandomResponse("portfolio")
  } else if (lowerMessage.includes("커리어") || lowerMessage.includes("이직") || lowerMessage.includes("career")) {
    return getRandomResponse("career")
  } else if (lowerMessage.includes("기술") || lowerMessage.includes("개발") || lowerMessage.includes("코딩")) {
    return getRandomResponse("technical")
  } else if (lowerMessage.includes("안녕") || lowerMessage.includes("반갑") || lowerMessage.includes("hi")) {
    return getRandomResponse("greetings")
  } else {
    return getRandomResponse("default")
  }
}

// 봇 응답 생성
function getRandomResponse(category) {
  const responses = {
    greetings: [
      "안녕하세요! 커피챗에 참여해주셔서 감사합니다. 어떤 것이 궁금하신가요?",
      "반갑습니다! 오늘은 어떤 이야기를 나누고 싶으신가요?",
      "안녕하세요! 편하게 궁금한 점을 물어보세요.",
    ],
    portfolio: [
      "포트폴리오를 검토해드리겠습니다. 어떤 기술 스택을 사용하셨나요?",
      "포트폴리오 개선 방안을 함께 고민해보겠습니다. 현재 어떤 프로젝트들이 있으신가요?",
      "좋은 포트폴리오를 만들기 위해서는 명확한 문제 해결 과정을 보여주는 것이 중요합니다.",
    ],
    career: [
      "커리어 고민이 있으시군요. 현재 어떤 단계에 계신가요?",
      "개발자 커리어는 지속적인 학습이 중요합니다. 어떤 분야에 관심이 있으신가요?",
      "이직을 고려 중이시라면, 목표 회사의 기술 스택과 문화를 미리 알아보시는 것을 추천드려요.",
    ],
    technical: [
      "기술적인 질문이군요! 구체적으로 어떤 부분이 궁금하신가요?",
      "해당 기술에 대해 설명드리겠습니다. 어떤 상황에서 사용하려고 하시나요?",
      "좋은 질문입니다! 이 기술을 선택하신 이유가 있나요?",
    ],
    default: [
      "흥미로운 질문이네요! 좀 더 구체적으로 설명해주시면 더 도움이 될 것 같아요.",
      "네, 그 부분에 대해 말씀드리겠습니다.",
      "좋은 지적입니다. 다른 관점에서 생각해볼 필요가 있겠네요.",
    ],
  }

  const categoryResponses = responses[category] || responses.default
  return categoryResponses[Math.floor(Math.random() * categoryResponses.length)]
}

// 커뮤니티 게시글 로드
function loadCommunityPosts() {
  // 최신 순으로 정렬
  const sortedPosts = [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  renderCommunityFeed(sortedPosts)
}

// 커뮤니티 피드 렌더링
function renderCommunityFeed(posts) {
  const feed = document.getElementById("community-feed")

  if (posts.length === 0) {
    feed.innerHTML = `
              <div class="text-center py-12">
                  <p class="text-gray-500">아직 게시글이 없습니다.</p>
                  <p class="text-gray-500 mt-2">첫 번째 게시글을 작성해보세요!</p>
              </div>
          `
    return
  }

  feed.innerHTML = posts
    .map((post) => {
      const userProfile = getUserProfile(post.author)

      return `
    <article class="post-card fade-in">
        ${
          post.likes >= 10
            ? `
        <div class="popular-header-aligned">
            <div class="popular-badge">
                <i data-lucide="flame" class="w-3 h-3"></i>
                인기 게시글
            </div>
            <span class="text-sm text-orange-600 font-medium">${post.likes}개의 좋아요</span>
        </div>
        `
            : ""
        }
        
        <div class="flex items-start gap-4">
            <div class="relative">
                <img 
                    src="${userProfile.avatar}" 
                    alt="${userProfile.name}"
                    class="w-12 h-12 rounded-full object-cover border-2 border-orange-100"
                    style="width: 3rem; height: 3rem; object-fit: cover;"
                />
                ${userProfile.verified ? '<div class="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center"><i data-lucide="check" class="w-2 h-2 text-white"></i></div>' : ""}
            </div>
            <div class="flex-1">
                <!-- 첫 번째 라인: 이름 + 인증 + 카테고리 + 작성시간 -->
                <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center gap-2">
                        <span class="font-semibold text-gray-800">${userProfile.name}</span>
                        ${userProfile.verified ? '<i data-lucide="badge-check" class="w-4 h-4 text-blue-500"></i>' : ""}
                        <span class="category-badge ${post.category === "question" ? "category-question" : post.category === "discussion" ? "category-discussion" : post.category === "sharing" ? "category-sharing" : "category-review"}">
                            ${post.category === "question" ? "질문" : post.category === "discussion" ? "토론" : post.category === "sharing" ? "정보공유" : "코드리뷰"}
                        </span>
                    </div>
                    <span class="text-sm text-gray-500">${formatTimeAgo(new Date(post.createdAt))}</span>
                </div>
                
                <!-- 두 번째 라인: 직급 + 경력 + 회사 -->
                <div class="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span>${userProfile.title}</span>
                    <span>•</span>
                    <span>${userProfile.experience}</span>
                    <span>•</span>
                    <span>${userProfile.company}</span>
                </div>
                
                <h2 class="text-xl font-bold text-gray-800 mb-3 hover:text-orange-600 transition-colors cursor-pointer" onclick="openPostDetail(${post.id})">
                    ${post.title}
                </h2>
                
                <p class="text-gray-600 leading-relaxed mb-4" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">
                    ${post.content}
                </p>
                
                ${
                  post.tags.length > 0
                    ? `
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${post.tags.map((tag) => `<span class="specialty-tag">${tag}</span>`).join("")}
                    </div>
                `
                    : ""
                }
                
                <div class="flex items-center gap-6 text-gray-500">
                    <button class="flex items-center gap-2 hover:text-orange-600 transition-colors" onclick="likePost(${post.id})">
                        <i data-lucide="heart" class="w-4 h-4"></i>
                        <span>${post.likes}</span>
                    </button>
                    <button class="flex items-center gap-2 hover:text-orange-600 transition-colors" onclick="openPostDetail(${post.id})">
                        <i data-lucide="message-circle" class="w-4 h-4"></i>
                        <span>댓글</span>
                    </button>
                    <button class="flex items-center gap-2 hover:text-orange-600 transition-colors">
                        <i data-lucide="share" class="w-4 h-4"></i>
                        <span>공유</span>
                    </button>
                </div>
            </div>
        </div>
    </article>
`
    })
    .join("")

  setTimeout(() => {
    initializeLucideIcons()
  }, 0)
}

// 게시글 좋아요 토글
function likePost(postId) {
  const post = posts.find((p) => p.id === postId)
  if (post) {
    post.likes += 1
    loadCommunityPosts() // 커뮤니티 피드 다시 로드
  }
}

// 게시글 상세 보기
function openPostDetail(postId) {
  currentPostId = postId
  showView("postDetail")
}

// 게시글 상세 로드
function loadPostDetail(postId) {
  const post = posts.find((p) => p.id === postId)
  const postComments = comments.filter((c) => c.postId === postId)

  if (post) {
    renderPostDetail(post, postComments)
  }
}

// 게시글 상세 렌더링
function renderPostDetail(post, comments) {
  const content = document.getElementById("post-detail-content")
  content.innerHTML = `
        <!-- 게시글 본문 -->
        <article class="post-card fade-in">
            <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold">
                    <i data-lucide="user" class="w-6 h-6"></i>
                </div>
                <div class="flex-1">
                    <div class="flex items-center gap-3 mb-3">
                        <span class="font-semibold text-gray-800">${post.author}</span>
                        <span class="text-sm text-gray-500">${formatTimeAgo(new Date(post.createdAt))}</span>
                        <span class="category-badge ${post.category === "question" ? "category-question" : post.category === "discussion" ? "category-discussion" : post.category === "sharing" ? "category-sharing" : "category-review"}">
                            ${post.category === "question" ? "질문" : post.category === "discussion" ? "토론" : post.category === "sharing" ? "정보공유" : "코드리뷰"}
                        </span>
                    </div>
                    
                    <h1 class="text-2xl font-bold text-gray-800 mb-4">${post.title}</h1>
                    
                    <p class="text-gray-600 leading-relaxed mb-4 whitespace-pre-wrap">
                        ${post.content}
                    </p>
                    
                    ${
                      post.tags.length > 0
                        ? `
                        <div class="flex flex-wrap gap-2 mb-4">
                            ${post.tags.map((tag) => `<span class="specialty-tag">${tag}</span>`).join("")}
                        </div>
                    `
                        : ""
                    }
                    
                    <div class="flex items-center gap-6 text-gray-500">
                        <button class="flex items-center gap-2 hover:text-orange-600 transition-colors" onclick="likePost(${post.id})">
                            <i data-lucide="heart" class="w-4 h-4"></i>
                            <span>${post.likes}</span>
                        </button>
                        <button class="flex items-center gap-2 hover:text-orange-600 transition-colors">
                            <i data-lucide="share" class="w-4 h-4"></i>
                            <span>공유</span>
                        </button>
                    </div>
                </div>
            </div>
        </article>
        
        <!-- 댓글 섹션 -->
        <div class="bg-white border border-orange-100 rounded-2xl p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-6">
                댓글 ${comments.length}개
            </h3>
            
            <!-- 댓글 목록 -->
            <div class="space-y-4 mb-6">
                ${
                  comments.length === 0
                    ? `
                    <p class="text-gray-500 text-center py-8">
                        아직 댓글이 없습니다. 첫 번째 댓글을 작성해보세요!
                    </p>
                `
                    : comments
                        .map(
                          (comment) => `
                    <div class="flex items-start gap-3">
                        <div class="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                            <i data-lucide="user" class="w-4 h-4"></i>
                        </div>
                        <div class="flex-1">
                            <div class="flex items-center gap-2 mb-1">
                                <span class="font-semibold text-gray-800">${comment.author}</span>
                                <span class="text-xs text-gray-500">
                                    ${formatTimeAgo(new Date(comment.createdAt))}
                                </span>
                            </div>
                            <p class="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">
                                ${comment.content}
                            </p>
                        </div>
                    </div>
                `,
                        )
                        .join("")
                }
            </div>
            
            <!-- 댓글 입력 -->
            <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
                    <i data-lucide="user" class="w-4 h-4"></i>
                </div>
                <div class="flex-1">
                    <textarea
                        id="comment-input"
                        placeholder="댓글을 작성해보세요..."
                        class="w-full resize-none mb-2 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                        rows="3"
                    ></textarea>
                    <div class="flex justify-end">
                        <button
                            onclick="submitComment(${post.id})"
                            class="gradient-button text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 px-4 py-2 rounded-lg"
                        >
                            댓글 작성
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `

  // 아이콘 다시 초기화
  setTimeout(() => {
    initializeLucideIcons()
  }, 100)
}

// 댓글 작성
function submitComment(postId) {
  const input = document.getElementById("comment-input")
  const content = input.value.trim()

  if (!content) return

  const newComment = {
    id: comments.length + 1,
    postId: postId,
    author: "익명",
    content: content,
    createdAt: new Date(),
  }

  comments.push(newComment)
  input.value = ""

  loadPostDetail(postId) // 댓글 목록 새로고침
}

// 게시글 작성 처리
function handlePostCreate(e) {
  e.preventDefault()

  const title = document.getElementById("post-title").value.trim()
  const content = document.getElementById("post-content").value.trim()
  const category = document.getElementById("post-category").value
  const tagsInput = document.getElementById("post-tags").value.trim()

  if (!title || !content) {
    alert("제목과 내용을 입력해주세요.")
    return
  }

  const tags = tagsInput
    ? tagsInput
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)
    : []

  const newPost = {
    id: posts.length + 1,
    title,
    content,
    category,
    tags,
    author: "익명",
    likes: 0,
    createdAt: new Date(),
  }

  posts.push(newPost)

  // 폼 초기화
  document.getElementById("post-create-form").reset()

  // 커뮤니티로 이동
  showView("community")
  alert("게시글이 성공적으로 등록되었습니다!")
}

// 화상 통화 관련 변수
let isInCall = false
let isMuted = false
let isCameraOff = false
let callStartTime = null
let callTimer = null

// 전화 도착 모달 표시 함수 추가
function showIncomingCallModal() {
  if (!selectedMentor) return

  const modal = document.getElementById("video-call-modal")
  const modalContent = modal.querySelector(".video-modal")

  // 모달 내용을 전화 도착 버전으로 변경
  modalContent.innerHTML = `
      <div class="text-center">
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <i data-lucide="phone" class="w-8 h-8 text-green-600"></i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">📞 전화가 도착했습니다</h3>
        <p class="text-gray-600 mb-6">${selectedMentor.name}님이 전화를 걸고 있습니다</p>
        <div class="flex gap-3">
          <button id="decline-call" class="video-modal-btn flex-1 bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg transition-colors">
            <i data-lucide="phone-off" class="w-4 h-4 mr-2"></i>
            거절
          </button>
          <button id="accept-call" class="video-modal-btn flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors">
            <i data-lucide="phone" class="w-4 h-4 mr-2"></i>
            받기
          </button>
        </div>
      </div>
    `

  // 이벤트 리스너 추가
  document.getElementById("decline-call").onclick = () => {
    hideVideoCallModal()
    // 전화 거절 메시지 추가
    setTimeout(() => {
      addMessage("bot", "전화를 받지 않으셨네요. 나중에 다시 연락드리겠습니다.")
    }, 500)
  }

  document.getElementById("accept-call").onclick = () => {
    hideVideoCallModal()
    // 전화 받기 - 바로 화상 통화 시작
    setTimeout(() => {
      startVideoCall()
    }, 500)
  }

  modal.classList.remove("hidden")
  modal.classList.add("flex")

  // 아이콘 재초기화
  setTimeout(() => {
    initializeLucideIcons()
  }, 100)
}

// 화상 통화 모달 표시 (기존 버튼 클릭용)
function showVideoCallModal() {
  if (!selectedMentor) return

  const modal = document.getElementById("video-call-modal")
  const modalContent = modal.querySelector(".video-modal")

  // 모달 내용을 기본 화상 통화 버전으로 설정
  modalContent.innerHTML = `
      <div class="text-center">
        <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <i data-lucide="video" class="w-8 h-8 text-orange-600"></i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">화상 통화</h3>
        <p class="text-gray-600 mb-6" id="video-call-mentor-name">${selectedMentor.name}님과 화상 통화를 시작하시겠습니까?</p>
        <div class="flex gap-3">
          <button id="cancel-video-call" class="video-modal-btn flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-4 rounded-lg transition-colors">
            취소
          </button>
          <button id="start-video-call" class="video-modal-btn flex-1 gradient-button text-white py-3 px-4 rounded-lg">
            <i data-lucide="video" class="w-4 h-4 mr-2"></i>
            통화 시작
          </button>
        </div>
      </div>
    `

  // 기존 이벤트 리스너 재설정
  document.getElementById("cancel-video-call").onclick = hideVideoCallModal
  document.getElementById("start-video-call").onclick = startVideoCall

  modal.classList.remove("hidden")
  modal.classList.add("flex")

  // 아이콘 재초기화
  setTimeout(() => {
    initializeLucideIcons()
  }, 100)
}

// 화상 통화 모달 숨기기
function hideVideoCallModal() {
  const modal = document.getElementById("video-call-modal")
  modal.classList.add("hidden")
  modal.classList.remove("flex")
}

// 화상 통화 시작
function startVideoCall() {
  if (!selectedMentor) return

  hideVideoCallModal()

  const callScreen = document.getElementById("video-call-screen")
  const mentorNameElement = document.getElementById("call-mentor-name")
  mentorNameElement.textContent = selectedMentor.name

  callScreen.classList.remove("hidden")
  callScreen.classList.add("flex")

  isInCall = true
  callStartTime = new Date()
  startCallTimer()

  // 아이콘 재초기화
  setTimeout(() => {
    initializeLucideIcons()
  }, 100)
}

// 화상 통화 종료
function endVideoCall() {
  const callScreen = document.getElementById("video-call-screen")
  callScreen.classList.add("hidden")
  callScreen.classList.remove("flex")

  isInCall = false
  isMuted = false
  isCameraOff = false

  if (callTimer) {
    clearInterval(callTimer)
    callTimer = null
  }

  // 버튼 상태 초기화
  updateCallButtons()
}

// 마이크 토글
function toggleMute() {
  isMuted = !isMuted
  updateCallButtons()
}

// 카메라 토글
function toggleCamera() {
  isCameraOff = !isCameraOff
  updateCallButtons()
}

// 통화 버튼 상태 업데이트
function updateCallButtons() {
  const muteBtn = document.getElementById("mute-btn")
  const cameraBtn = document.getElementById("camera-btn")

  // 마이크 버튼
  if (isMuted) {
    muteBtn.classList.add("bg-red-600")
    muteBtn.classList.remove("bg-gray-700")
    muteBtn.innerHTML = '<i data-lucide="mic-off" class="w-5 h-5"></i>'
  } else {
    muteBtn.classList.remove("bg-red-600")
    muteBtn.classList.add("bg-gray-700")
    muteBtn.innerHTML = '<i data-lucide="mic" class="w-5 h-5"></i>'
  }

  // 카메라 버튼
  if (isCameraOff) {
    cameraBtn.classList.add("bg-red-600")
    cameraBtn.classList.remove("bg-gray-700")
    cameraBtn.innerHTML = '<i data-lucide="video-off" class="w-5 h-5"></i>'
  } else {
    cameraBtn.classList.remove("bg-red-600")
    cameraBtn.classList.add("bg-gray-700")
    cameraBtn.innerHTML = '<i data-lucide="video" class="w-5 h-5"></i>'
  }

  // 아이콘 재초기화
  setTimeout(() => {
    initializeLucideIcons()
  }, 100)
}

// 통화 시간 타이머 시작
function startCallTimer() {
  callTimer = setInterval(() => {
    if (callStartTime && isInCall) {
      const now = new Date()
      const elapsed = Math.floor((now - callStartTime) / 1000)
      const minutes = Math.floor(elapsed / 60)
      const seconds = elapsed % 60

      const durationElement = document.getElementById("call-duration")
      durationElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    }
  }, 1000)
}

// 전역 함수로 노출 (HTML에서 사용)
window.startChat = startChat
window.likePost = likePost
window.openPostDetail = openPostDetail
window.submitComment = submitComment

// 커뮤니티 카테고리 탭 필터링 기능
function setupCommunityCategoryTabs() {
  const tabs = document.querySelectorAll(".category-tab-btn")

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active"))
      this.classList.add("active")

      const category = this.getAttribute("data-category")
      filterCommunityByCategory(category)
    })
  })
}

// 카테고리별 필터링 함수
function filterCommunityByCategory(category) {
  let filtered = posts

  if (category && category !== "all") {
    filtered = posts.filter((post) => post.category === category)
  }

  renderCommunityFeed(filtered)
}

// 검색 관련 함수 추가
function handleSearch() {
  currentSearchQuery = document.getElementById("community-search").value.trim()
  isSearchActive = currentSearchQuery !== ""

  if (isSearchActive) {
    const filteredPosts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(currentSearchQuery.toLowerCase())),
    )
    renderCommunityFeed(filteredPosts)
  } else {
    loadCommunityPosts()
  }
}

function clearSearch() {
  document.getElementById("community-search").value = ""
  currentSearchQuery = ""
  isSearchActive = false
  loadCommunityPosts()
}
