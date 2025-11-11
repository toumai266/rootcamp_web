export interface Website {
  id: string
  title: string
  description: string
  url: string
  category: string
  tags?: string[]
  country: string // 국가 코드 또는 이모지
}

export const websites: Website[] = [
  // 정부 기관
  {
    id: 'kisa',
    title: '한국인터넷진흥원 (KISA)',
    description: '국가 사이버 보안을 위한 정책 수립 및 침해사고 대응, 보안 취약점 정보 제공',
    url: 'https://www.kisa.or.kr',
    category: '정부 기관',
    tags: ['정책', '침해사고', '보안공지'],
    country: '🇰🇷',
  },
  {
    id: 'boho',
    title: '개인정보보호위원회',
    description: '개인정보 보호 법령, 가이드라인 및 정책 정보 제공',
    url: 'https://www.pipc.go.kr',
    category: '정부 기관',
    tags: ['개인정보', '법령', '가이드라인'],
    country: '🇰🇷',
  },
  {
    id: 'ncsc',
    title: '국가사이버안보센터',
    description: '국가 사이버 안보 정책 및 사이버 위협 정보 제공',
    url: 'https://www.ncsc.go.kr',
    category: '정부 기관',
    tags: ['국가안보', '위협정보'],
    country: '🇰🇷',
  },
  {
    id: 'npa-cyber',
    title: '경찰청 사이버안전국',
    description: '사이버 범죄 신고 및 예방 정보 제공',
    url: 'https://cyberbureau.police.go.kr',
    category: '정부 기관',
    tags: ['사이버범죄', '신고'],
    country: '🇰🇷',
  },

  // 학습
  {
    id: 'hackthebox',
    title: 'Hack The Box',
    description: '실전 해킹 실습을 위한 온라인 플랫폼, CTF 문제 및 실습 환경 제공',
    url: 'https://www.hackthebox.com',
    category: '학습',
    tags: ['실습', 'CTF', '모의해킹'],
    country: '🇬🇧',
  },
  {
    id: 'tryhackme',
    title: 'TryHackMe',
    description: '초보자부터 전문가까지 단계별 사이버 보안 학습 플랫폼',
    url: 'https://tryhackme.com',
    category: '학습',
    tags: ['실습', '초보자', '학습경로'],
    country: '🇬🇧',
  },
  {
    id: 'portswigger',
    title: 'PortSwigger Web Security Academy',
    description: '무료 웹 보안 학습 자료 및 실습 환경, Burp Suite 제공',
    url: 'https://portswigger.net/web-security',
    category: '학습',
    tags: ['웹보안', 'Burp Suite', '실습'],
    country: '🇬🇧',
  },
  {
    id: 'overthewire',
    title: 'OverTheWire',
    description: '리눅스 및 보안 기초 학습을 위한 워게임 플랫폼',
    url: 'https://overthewire.org',
    category: '학습',
    tags: ['워게임', 'Linux', '초보자'],
    country: '🇳🇱',
  },
  {
    id: 'dreamhack',
    title: 'Dreamhack',
    description: '한국어 보안 학습 플랫폼, 시스템/웹 해킹 강의 및 워게임 제공',
    url: 'https://dreamhack.io',
    category: '학습',
    tags: ['한국어', '강의', '워게임'],
    country: '🇰🇷',
  },
  {
    id: 'cybrary',
    title: 'Cybrary',
    description: '무료 사이버 보안 온라인 강의 및 자격증 준비 과정',
    url: 'https://www.cybrary.it',
    category: '학습',
    tags: ['강의', '자격증', '온라인'],
    country: '🇺🇸',
  },

  // 유틸리티
  {
    id: 'virustotal',
    title: 'VirusTotal',
    description: '파일 및 URL의 악성코드 분석 및 검사 서비스',
    url: 'https://www.virustotal.com',
    category: '유틸리티',
    tags: ['악성코드', '분석', '검사'],
    country: '🇺🇸',
  },
  {
    id: 'shodan',
    title: 'Shodan',
    description: 'IoT 및 네트워크 장비 검색 엔진, 보안 취약점 조사',
    url: 'https://www.shodan.io',
    category: '유틸리티',
    tags: ['검색엔진', 'IoT', '취약점'],
    country: '🇺🇸',
  },
  {
    id: 'cvedetails',
    title: 'CVE Details',
    description: '보안 취약점(CVE) 정보 데이터베이스 및 통계',
    url: 'https://www.cvedetails.com',
    category: '유틸리티',
    tags: ['CVE', '취약점', 'DB'],
    country: '🇱🇺',
  },
  {
    id: 'exploit-db',
    title: 'Exploit Database',
    description: '공개된 익스플로잇 코드 및 취약점 정보 아카이브',
    url: 'https://www.exploit-db.com',
    category: '유틸리티',
    tags: ['익스플로잇', 'PoC', '취약점'],
    country: '🇺🇸',
  },
  {
    id: 'crackstation',
    title: 'CrackStation',
    description: '무료 온라인 해시 크래킹 도구',
    url: 'https://crackstation.net',
    category: '유틸리티',
    tags: ['해시', '크래킹', '도구'],
    country: '🇺🇸',
  },
  {
    id: 'cyberchef',
    title: 'CyberChef',
    description: '데이터 인코딩/디코딩, 암호화/복호화를 위한 웹 도구',
    url: 'https://gchq.github.io/CyberChef/',
    category: '유틸리티',
    tags: ['인코딩', '암호화', '도구'],
    country: '🇬🇧',
  },

  // 읽을거리
  {
    id: 'krebs',
    title: 'Krebs on Security',
    description: '브라이언 크렙스의 사이버 보안 뉴스 및 조사 블로그',
    url: 'https://krebsonsecurity.com',
    category: '읽을거리',
    tags: ['뉴스', '블로그', '조사'],
    country: '🇺🇸',
  },
  {
    id: 'schneier',
    title: 'Schneier on Security',
    description: '브루스 슈나이어의 보안 및 프라이버시 관련 블로그',
    url: 'https://www.schneier.com',
    category: '읽을거리',
    tags: ['블로그', '프라이버시', '전문가'],
    country: '🇺🇸',
  },
  {
    id: 'thehackernews',
    title: 'The Hacker News',
    description: '최신 사이버 보안 뉴스 및 취약점 정보',
    url: 'https://thehackernews.com',
    category: '읽을거리',
    tags: ['뉴스', '취약점', '글로벌'],
    country: '🇮🇳',
  },
  {
    id: 'bleepingcomputer',
    title: 'Bleeping Computer',
    description: '사이버 보안 뉴스, 튜토리얼 및 포럼',
    url: 'https://www.bleepingcomputer.com',
    category: '읽을거리',
    tags: ['뉴스', '튜토리얼', '커뮤니티'],
    country: '🇺🇸',
  },
  {
    id: 'boannews',
    title: '보안뉴스',
    description: '국내 보안 산업 동향 및 뉴스',
    url: 'https://www.boannews.com',
    category: '읽을거리',
    tags: ['뉴스', '한국어', '산업동향'],
    country: '🇰🇷',
  },
  {
    id: 'owasp',
    title: 'OWASP',
    description: '오픈 웹 애플리케이션 보안 프로젝트, 보안 가이드 및 도구',
    url: 'https://owasp.org',
    category: '읽을거리',
    tags: ['웹보안', '가이드', '커뮤니티'],
    country: '🇺🇸',
  },
]

export const categories = ['전체', '정부 기관', '학습', '유틸리티', '읽을거리']
