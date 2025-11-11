export interface Career {
  id: string
  title: string
  description: string
  responsibilities: { title: string; description?: string }[]
  skills: { title: string; description?: string }[]
  certifications?: { title: string; description?: string }[]
  careerPaths?: { title: string; description: string }[]
}

export const careers: Career[] = [
  {
    id: 'soc-analyst',
    title: '보안 관제 전문가 (Security Analyst / SOC)',
    description:
      '조직의 보안 운영 센터(SOC)에서 SIEM, IDS/IPS, EDR 등 보안 솔루션의 로그와 이벤트를 24시간 365일 실시간으로 모니터링하는 전문가입니다. 한국에서는 "보안 관제" 직무로 가장 잘 알려져 있으며, 전문 관제 벤더(MDR/MSSP) 소속이거나 대기업/금융권의 자체 SOC에서 근무합니다.',
    responsibilities: [
      { title: '보안 이벤트 실시간 모니터링 및 초기 분석', description: 'SIEM을 활용하여 24/7 실시간으로 보안 이벤트를 모니터링하고 초기 분석을 수행합니다.' },
      { title: '위협 이벤트 분류 및 초기 대응', description: '정탐/오탐을 판별하고 위협 이벤트에 대한 초기 대응(차단)을 수행합니다.' },
      { title: '보안 위협 탐지 룰 생성 및 최적화', description: '보안 위협을 탐지하는 Rule을 생성, 테스트하고 지속적으로 최적화합니다.' },
      { title: '24/7 교대근무 대응', description: '3교대 등의 교대근무를 기반으로 한 24시간 보안 대응 체계를 운영합니다.' },
      { title: '보안 관제 보고서 작성', description: '일간/주간/월간 보안 관제 보고서를 작성하고 보안 동향을 분석합니다.' },
    ],
    skills: [
      { title: 'SIEM 솔루션', description: 'Splunk, QRadar, Logpresso 등 SIEM 솔루션 운영 및 쿼리 작성 능력이 필요합니다.' },
      { title: '네트워크 프로토콜', description: 'TCP/IP 등 네트워크 프로토콜에 대한 이해가 필수적입니다.' },
      { title: 'IDS/IPS, 방화벽, WAF', description: '침입 탐지/방지 시스템, 방화벽, 웹 방화벽 장비 정책을 이해해야 합니다.' },
      { title: 'Windows/Linux 로그 분석', description: 'Windows와 Linux 시스템의 이벤트 로그를 분석할 수 있어야 합니다.' },
      { title: '최신 공격 트렌드', description: '랜섬웨어, 피싱, 악성코드 등 최신 공격 트렌드에 대한 지식이 필요합니다.' },
    ],
    certifications: [
      { title: '정보보안기사 / 정보보안산업기사', description: '국내 기본 자격증으로 공공기관/금융권에서 우대됩니다.' },
      { title: 'CompTIA Security+', description: '기본 보안 개념 확립에 유용한 국제 자격증입니다.' },
      { title: 'Splunk / QRadar 벤더 자격증', description: '주요 SIEM 벤더 자격증으로 실무에 유리합니다.' },
    ],
    careerPaths: [
      {
        title: '침해사고 대응(CERT) 전문가',
        description: '시니어급 보안 관제(SOC) 인력이 가장 많이 진입하는 경로입니다.',
      },
      {
        title: '보안 컨설턴트 (기술/관리)',
        description: '보안 관제 경험을 바탕으로 기술 또는 관리 컨설팅으로 전문성을 확장할 수 있습니다.',
      },
      {
        title: '대기업/금융 보안 담당자',
        description: '경력을 바탕으로 "갑"사(대기업/금융)의 보안 담당자로 이직하는 것이 일반적인 목표 중 하나입니다.',
      },
      {
        title: 'SOC 팀장',
        description: '관제 조직 내에서 팀을 관리하고 운영 전략을 수립하는 리더십 역할입니다.',
      },
      {
        title: 'CISO',
        description: '최종적으로 조직의 정보보호 최고 책임자로 성장할 수 있습니다.',
      },
    ],
  },
  {
    id: 'security-engineer',
    title: '보안 엔지니어 (Security Engineer)',
    description:
      '조직의 정보 시스템 보호를 위한 다양한 보안 솔루션(장비)을 설계, 구축, 운영 및 유지보수하는 기술 전문가입니다. 주로 보안 솔루션 벤더나 파트너사, SI 업체 소속으로 고객사에 솔루션을 구축/지원하거나, 일반 기업 내부에서 자사 인프라의 보안 장비를 직접 운영합니다.',
    responsibilities: [
      { title: '보안 솔루션 도입 및 운영', description: '방화벽, IPS/IDS, WAF, EDR, VPN, NAC 등 다양한 보안 솔루션을 도입하고 운영합니다.' },
      { title: '보안 아키텍처 설계 및 구축', description: 'On-premise 및 Cloud 환경의 보안 아키텍처를 설계하고 구축합니다.' },
      { title: '보안 정책 수립 및 관리', description: '시스템 및 네트워크 보안 정책을 수립하고, 적용하며, 감사를 수행합니다.' },
      { title: '보안 솔루션 트러블슈팅', description: '보안 솔루션의 장애를 처리하고 문제를 해결합니다.' },
      { title: '보안 솔루션 갱신 및 패치', description: '신규 보안 위협에 대응하기 위해 솔루션을 갱신하고 패치를 관리합니다.' },
    ],
    skills: [
      { title: '보안 솔루션 운영', description: '다양한 보안 솔루션(벤더)의 운영 및 정책 설정 경험이 필요합니다.' },
      { title: '네트워크 전문 지식', description: 'TCP/IP, 라우팅, 스위칭 등 네트워크에 대한 깊은 이해가 필수적입니다.' },
      { title: '서버 운영체제 관리', description: 'Linux, Windows Server 등 서버 운영체제 관리 능력이 필요합니다.' },
      { title: '클라우드 보안', description: 'AWS, Azure, GCP 등 클라우드 보안 아키텍처에 대한 이해가 중요합니다.' },
    ],
    certifications: [
      { title: '정보보안기사 / 정보보안산업기사', description: '국내 기본 자격증으로 필수적입니다.' },
      { title: 'CISSP', description: '관리/기술 총괄 자격증으로 경력직에서 우대됩니다.' },
      { title: 'CCNA/CCNP', description: '네트워크 관련 자격증으로 네트워크 이해도를 증명합니다.' },
      { title: 'AWS/Azure/GCP 보안 자격증', description: '클라우드 벤더의 보안 또는 아키텍트 자격증입니다.' },
      { title: 'CISA', description: '감사/정책 업무 병행 시 유용한 자격증입니다.' },
    ],
    careerPaths: [
      {
        title: '보안 아키텍처',
        description: '기술지원(TA)이나 보안 아키텍트로 전문성을 높일 수 있습니다.',
      },
      {
        title: '보안 컨설턴트',
        description: '네트워크 및 시스템 전반의 이해를 바탕으로 보안 컨설턴트 직무로 전환할 수 있습니다.',
      },
      {
        title: '고객사 보안 담당자 (인프라)',
        description: '"을"사(벤더/파트너)에서의 경험을 살려 "갑"사(고객사)의 보안 담당자로 이직할 수 있습니다.',
      },
      {
        title: '클라우드 보안 전문가',
        description: '클라우드 보안 전문가로 전문 영역을 확장하는 것이 최근의 주요 경로입니다.',
      },
      {
        title: '보안 관리자',
        description: '경험이 쌓이면 보안 관리자 역할을 수행하게 됩니다.',
      },
      {
        title: 'CISO',
        description: '최종적으로 조직의 정보보호 최고 책임자로 성장할 수 있습니다.',
      },
    ],
  },
  {
    id: 'penetration-tester',
    title: '모의 해커 (Penetration Tester)',
    description:
      '조직의 정보 시스템에 대해 실제 공격자의 관점에서 침투를 시도하여, 시스템에 내재된 보안 취약점을 사전에 발견하고 분석하는 전문가입니다. 주로 보안 컨설팅 전문 업체 소속으로 근무하며, 정보통신망법, 전자금융 감독 규정 등에 따른 법적 의무 진단을 수행합니다.',
    responsibilities: [
      { title: '웹 애플리케이션 취약점 진단', description: 'OWASP Top 10 등 웹 애플리케이션의 보안 취약점을 진단합니다.' },
      { title: '모바일 앱 취약점 진단', description: 'Android/iOS 애플리케이션의 보안 취약점을 분석합니다.' },
      { title: '소스 코드 보안 분석', description: '시큐어 코딩 관점에서 소스 코드의 보안 약점을 분석합니다.' },
      { title: '인프라 취약점 진단', description: '네트워크 및 서버 운영체제의 취약점을 진단합니다.' },
      { title: '보안 진단 보고서 작성', description: '발견된 취약점을 분석하고 보안 대책을 권고하는 보고서를 작성합니다.' },
    ],
    skills: [
      { title: '해킹 도구 숙련', description: 'Burp Suite, Metasploit, Frida, MobSF 등 해킹 도구를 능숙하게 다룰 수 있어야 합니다.' },
      { title: '시스템 지식', description: 'Linux/Windows 등 네트워크 및 시스템에 대한 깊은 이해가 필요합니다.' },
      { title: '리버싱 및 코드 분석', description: 'Python, Java, C# 등의 리버싱 및 소스 코드 분석 능력이 필요합니다.' },
      { title: '국내 가이드라인', description: '주요정보통신기반시설, 전자금융 감독 규정 등 국내 가이드라인을 이해해야 합니다.' },
    ],
    certifications: [
      { title: '정보보안기사 / 정보보안산업기사', description: '공공/금융 프로젝트 입찰 시 필수 자격증입니다.' },
      { title: 'OSCP', description: 'Offensive Security Certified Professional로 기술력 증명에 매우 유용합니다.' },
      { title: 'CPTG', description: 'Certified Penetration Testing Expert 국내 모의해킹 자격증입니다.' },
      { title: 'CEH', description: '인지도는 있으나 OSCP 대비 기술 증명력은 낮은 편입니다.' },
    ],
    careerPaths: [
      { title: '레드팀 전문가', description: '더 심화된 공격 기술을 연구하는 레드팀 전문가로 나아갈 수 있습니다.' },
      { title: '보안 연구원 (리버싱/취약점 분석)', description: '취약점 발굴 및 분석 역량을 바탕으로 보안 연구원이 될 수 있습니다.' },
      { title: '고객사 AppSec 담당자', description: '갑사(IT/금융사)의 AppSec 담당자로 이직할 수 있습니다.' },
      { title: '내부 보안 담당자', description: '기업 내부의 보안 담당자로 전환할 수 있습니다.' },
      { title: '보안 컨설팅 총괄', description: '컨설팅 펌에 남아 보안 컨설팅 총괄이나 임원으로 성장할 수 있습니다.' },
    ],
  },
  {
    id: 'red-team',
    title: '레드팀 전문가 (Red Team Specialist)',
    description:
      '실제 공격을 시뮬레이션하여 조직의 방어 체계(사람, 프로세스, 기술/솔루션)가 얼마나 잘 작동하는지 종합적으로 점검하는 전문가입니다. 네이버, 카카오, 토스, 대형 금융지주 등 일부 대형 기업에서 내부 방어 능력 검증을 위해 자체 레드팀을 운영하거나, 최상위 티어 컨설팅사가 전문 서비스로 제공합니다.',
    responsibilities: [
      { title: 'APT 공격 시나리오 설계', description: '실제 APT 공격 그룹의 TTPs를 모방하여 공격 시나리오를 설계합니다.' },
      { title: '초기 침투', description: '스피어 피싱, OSINT, 알려지지 않은 취약점을 활용한 초기 침투를 수행합니다.' },
      { title: '내부망 이동 및 권한 상승', description: 'Lateral Movement 및 Privilege Escalation을 통해 내부망을 확장합니다.' },
      { title: '방어 시스템 테스트', description: 'SOC, EDR 등 방어 시스템의 탐지 및 대응 능력을 테스트합니다.' },
      { title: '방어 체계 개선 보고', description: '공격 수행 결과 및 방어 체계 개선 방안을 종합적으로 보고합니다.' },
    ],
    skills: [
      { title: '모의 해킹 최상급 스킬', description: '모의 해킹의 모든 스킬을 최상급 수준으로 보유해야 합니다.' },
      { title: '공격 프레임워크', description: 'Cobalt Strike, Metasploit 등 공격 프레임워크를 심화 활용할 수 있어야 합니다.' },
      { title: '방어 체계 우회', description: '백신, EDR, SIEM 룰 등을 우회하는 Evasion 기술이 필요합니다.' },
      { title: '사회 공학', description: 'Social Engineering 및 경우에 따라 물리적 침투 지식이 필요합니다.' },
      { title: 'APT TTPs', description: '최신 APT 공격 그룹의 전술, 기술, 절차에 대한 깊은 이해가 필요합니다.' },
    ],
    certifications: [
      { title: 'OSCP', description: 'Offensive Security Certified Professional, 기본 자격증입니다.' },
      { title: 'OSCE / OSEP', description: 'Offensive Security Certified Expert/Evasion Professional, 고급 기술력을 증명합니다.' },
    ],
    careerPaths: [
      { title: 'CTI (사이버 위협 인텔리전스) 분석가', description: '공격 그룹을 분석하는 CTI 분석가로 전문 분야를 확장할 수 있습니다.' },
      { title: '보안 연구원 (제로데이 헌터)', description: '새로운 취약점을 발굴하는 보안 연구원으로 활동할 수 있습니다.' },
      { title: '레드팀 리더', description: '레드팀을 이끄는 리더로 성장할 수 있습니다.' },
      { title: '보안 연구소장', description: '보안 연구소를 총괄하는 연구소장이 될 수 있습니다.' },
      { title: 'CISO', description: '최종적으로 조직의 정보보호 최고 책임자로 성장할 수 있습니다.' },
    ],
  },
  {
    id: 'incident-responder',
    title: '침해사고 대응 전문가 (CERT / DFIR)',
    description:
      '보안 사고 발생 시, 신속하게 대응하여 피해를 최소화하고, 원인을 분석하며(디지털 포렌식), 재발 방지 대책을 수립하는 전문가입니다. KISA, 금융보안원, 경찰/검찰 등 공공 영역과, 안랩(ASEC) 등 전문 벤더, 그리고 대형 기업의 내부 CERT에 소속되어 근무합니다.',
    responsibilities: [
      { title: '보안 사고 대응 지휘', description: '보안 사고를 접수하고 초기 대응, 상황 전파 및 지휘를 수행합니다.' },
      { title: '침해 시스템 분석', description: '메모리, 디스크, 네트워크 트래픽 등 침해된 시스템을 분석합니다.' },
      { title: '악성코드 분석', description: '악성코드에 대한 정적/동적 분석(리버싱)을 수행합니다.' },
      { title: '디지털 포렌식', description: '공격 경로 및 피해 규모를 파악하는 디지털 포렌식을 수행합니다.' },
      { title: '사고 분석 보고서 작성', description: 'Timeline을 포함한 침해 사고 분석 보고서를 작성하고 재발 방지 대책을 수립합니다.' },
    ],
    skills: [
      { title: '디지털 포렌식 도구', description: 'EnCase, FTK, Volatility, X-Ways 등 전문 도구를 사용할 수 있어야 합니다.' },
      { title: '악성코드 분석', description: '리버싱 및 디버깅을 통한 악성코드 분석 스킬이 필요합니다.' },
      { title: '파일 시스템 및 OS', description: 'NTFS, ext4 등 파일 시스템 및 운영체제 내부 구조를 이해해야 합니다.' },
      { title: '네트워크 패킷 분석', description: 'Wireshark를 사용한 네트워크 패킷 분석 능력이 필요합니다.' },
      { title: '침착함과 논리적 사고', description: '사고 상황에서 침착하게 논리적으로 문제를 해결하는 능력이 필수적입니다.' },
    ],
    certifications: [
      { title: '정보보안기사', description: '국내 기본 자격증입니다.' },
      { title: '디지털포렌식전문가', description: '수사기관/법무 분야에서 우대되는 국내 자격증입니다.' },
      { title: 'GCFA / GCFE', description: 'GIAC 포렌식 자격증으로 국제적으로 인정됩니다.' },
      { title: 'CISSP / CISA', description: '관리자급으로 성장 시 유용한 자격증입니다.' },
    ],
    careerPaths: [
      { title: 'CTI 분석가', description: '악성코드 분석 및 포렌식 역량을 살려 CTI 분석가로 전향할 수 있습니다.' },
      { title: '보안 연구원', description: '심화된 분석 역량을 바탕으로 보안 연구원이 될 수 있습니다.' },
      { title: '보안 컨설턴트 (관리/기술)', description: '사고 대응 경험을 바탕으로 보안 컨설턴트로 이직할 수 있습니다.' },
      { title: '고객사 보안 담당자', description: '갑사의 보안 담당자로 이직할 수 있습니다.' },
      { title: 'CERT 팀장', description: 'CERT 조직 내에서 팀장으로 성장할 수 있습니다.' },
      { title: 'CISO', description: '최종적으로 조직의 정보보호 최고 책임자로 성장할 수 있습니다.' },
    ],
  },
  {
    id: 'security-consultant',
    title: '정보보호 컨설턴트 (Security Consultant)',
    description:
      '기업의 보안 현황을 종합적으로 진단하고, 법적 규제 준수를 위한 가이드를 제공하며, 조직의 보안 수준을 향상시키기 위한 전략을 수립하는 자문 전문가입니다. ISMS-P 인증 및 개인정보보호법, 주요정보통신기반시설 관련 관리 컨설팅 시장이 매우 큽니다.',
    responsibilities: [
      { title: 'ISMS-P / ISO27001 인증 컨설팅', description: '정보보호 관리체계 인증 컨설팅을 수행합니다.' },
      { title: '개인정보보호법 컴플라이언스', description: '개인정보보호법 관련 컴플라이언스 및 영향평가(PIA)를 수행합니다.' },
      { title: '주통기 취약점 분석', description: '주요 정보통신 기반 시설의 취약점을 분석하고 평가합니다.' },
      { title: '보안 전략 수립', description: '기업 보안 마스터 플랜(ISP) 및 정보보호 전략을 수립합니다.' },
      { title: '위험 평가 및 정책 수립', description: '조직의 위험을 평가하고 보안 정책을 수립합니다.' },
    ],
    skills: [
      { title: 'ISMS-P 표준 및 법규', description: 'ISMS-P 인증 표준 및 개인정보보호법 등 관련 법규 지식이 매우 중요합니다.' },
      { title: '위험 평가 방법론', description: 'Risk Assessment 및 관리 방법론을 이해해야 합니다.' },
      { title: '커뮤니케이션 능력', description: '고객과의 커뮤니케이션 및 프리젠테이션 능력이 핵심 역량입니다.' },
      { title: '문서 작성 능력', description: '보고서 및 산출물 작성 능력이 매우 중요합니다.' },
      { title: '보안 전반 지식', description: '기술, 관리, 물리 보안 전반에 대한 폭넓은 지식이 필요합니다.' },
    ],
    certifications: [
      { title: 'ISMS-P 인증심사원', description: '컨설팅 분야의 핵심 자격으로 연봉 상승에 직결됩니다.' },
      { title: 'CISA', description: 'ISMS와 함께 양대 산맥을 이루는 감사 자격증입니다.' },
      { title: 'CPPG', description: '개인정보보호 컨설팅 시 필수 자격증입니다.' },
      { title: 'CISSP', description: '기본 소양 및 경력을 증명하는 국제 자격증입니다.' },
      { title: '정보보안기사', description: '국내 기본 자격증입니다.' },
    ],
    careerPaths: [
      { title: '고객사 GRC 담당자', description: '가장 선호되는 경로로 갑사의 GRC 담당자로 이직합니다.' },
      { title: '보안 정책 담당자', description: '고객사의 보안 정책 담당자로 전환할 수 있습니다.' },
      { title: '수석 컨설턴트', description: '컨설팅 펌에서 수석 컨설턴트로 성장할 수 있습니다.' },
      { title: '파트너 (임원)', description: '컨설팅 펌에서 파트너나 임원으로 승진할 수 있습니다.' },
      { title: 'CISO', description: '갑사의 CISO로 바로 이직하는 경우도 있습니다.' },
    ],
  },
  {
    id: 'cloud-security',
    title: '클라우드 보안 전문가 (Cloud Security Specialist)',
    description:
      'AWS, Azure, GCP 등 퍼블릭 클라우드 환경의 보안을 전담하는 전문가입니다. 클라우드 전환이 가속화됨에 따라 수요가 폭발적으로 증가하고 있으며, CSPM, CWPP, CIEM 등 클라우드 네이티브 보안 솔루션과 IaC를 통해 보안을 설계하고 자동화합니다.',
    responsibilities: [
      { title: '클라우드 아키텍처 보안 설계', description: '클라우드 환경의 아키텍처 보안성을 검토하고 설계합니다.' },
      { title: '클라우드 네이티브 보안 구축', description: 'CSPM, CWPP, CIEM 등 클라우드 네이티브 보안 솔루션을 기획, 설계, 구축합니다.' },
      { title: '클라우드 보안 이벤트 대응', description: '클라우드 보안 이벤트를 분석하고 위협에 대응합니다.' },
      { title: '클라우드 서비스 보안 관리', description: 'IAM, VPC, S3, Kubernetes 등 클라우드 서비스의 보안을 설정하고 관리합니다.' },
      { title: '클라우드 인증 대응', description: '클라우드 환경의 ISMS-P 등 인증 수검에 대응합니다.' },
    ],
    skills: [
      { title: 'CSP 서비스 및 보안', description: 'AWS, Azure, GCP 서비스 및 보안 기능에 대한 깊은 이해가 필요합니다.' },
      { title: '컨테이너 및 가상화', description: 'Docker, Kubernetes 등 컨테이너 및 가상화 기술을 이해해야 합니다.' },
      { title: 'IAM 정책 설계', description: 'IAM 정책 설계 및 감사 전문성이 필요합니다.' },
      { title: 'IaC 및 스크립팅', description: 'Terraform 등 IaC 및 Python 스크립팅 능력이 필요합니다.' },
      { title: '클라우드 마이그레이션', description: '온프레미스와 클라우드 간 보안 아키텍처 변환 지식이 필요합니다.' },
    ],
    certifications: [
      { title: 'AWS/Azure/GCP 보안 전문 자격증', description: 'AWS Certified Security - Specialty 등 CSP 보안 자격증이 필수입니다.' },
      { title: 'CCSK', description: 'Certificate of Cloud Security Knowledge로 벤더 중립적 표준 지식을 증명합니다.' },
      { title: 'CISSP / CISA', description: '클라우드 환경의 감사 및 관리 역량을 강화합니다.' },
      { title: '정보보안기사', description: '국내 기본 자격증입니다.' },
    ],
    careerPaths: [
      { title: '보안 아키텍트', description: '클라우드 아키텍처에 대한 이해를 바탕으로 보안 아키텍트로 성장합니다.' },
      { title: 'DevSecOps 전문가', description: '자동화 역량을 강화하여 DevSecOps 전문가로 나아갈 수 있습니다.' },
      { title: '클라우드 인프라 총괄', description: '클라우드 인프라를 총괄하는 관리자가 될 수 있습니다.' },
      { title: 'CISO', description: '갑사의 CISO로 성장할 수 있습니다.' },
    ],
  },
  {
    id: 'appsec-devsecops',
    title: '애플리케이션 보안 엔지니어 (AppSec / DevSecOps)',
    description:
      'Shift-Left 개념을 실현하는 보안 전문가로, DevOps 환경에 보안을 통합하여 소프트웨어 개발 수명주기(SDLC)의 초기 단계부터 보안 취약점을 예방, 탐지, 수정합니다. 개발팀이 보안을 스스로 챙길 수 있도록 돕는 문화적 촉진자이자 기술적 조력자입니다.',
    responsibilities: [
      { title: 'CI/CD 파이프라인 보안 테스트', description: 'CI/CD 파이프라인 내에서 SAST, DAST, SCA 등 자동화된 보안 테스트를 구축합니다.' },
      { title: '보안 코딩 가이드라인', description: '보안 코딩 가이드라인을 제공하고 개발자를 교육합니다.' },
      { title: '애플리케이션 취약점 분석', description: '애플리케이션 취약점을 분석하고 우선순위화합니다.' },
      { title: '클라우드 인프라 보안 운영', description: '클라우드 인프라 구성 및 보안 시스템을 운영합니다.' },
      { title: '보안 감사 자동화', description: '보안 감사 및 규정 준수 검사를 자동화합니다.' },
    ],
    skills: [
      { title: '프로그래밍 언어', description: 'Python, Java, Go 등 다양한 프로그래밍 언어를 활용합니다.' },
      { title: 'CI/CD 및 컨테이너', description: 'CI/CD 도구와 Docker, Kubernetes 등 컨테이너 기술에 능숙해야 합니다.' },
      { title: 'SAST/DAST/SCA 솔루션', description: 'Snyk, SonarQube 등 보안 테스팅 솔루션을 활용합니다.' },
      { title: '개발자 커뮤니케이션', description: '개발자와의 커뮤니케이션 및 협업 능력이 중요합니다.' },
      { title: 'Cloud 운영', description: 'AWS, GCP, Azure 등 클라우드 플랫폼 운영 경험이 필요합니다.' },
    ],
    certifications: [
      { title: '정보보안기사', description: '국내 기본 자격증입니다.' },
      { title: 'AWS/GCP/Azure 자격증', description: '클라우드 플랫폼 전문성을 증명합니다.' },
      { title: 'CKA', description: 'Kubernetes 관리자 자격증으로 컨테이너 운영 역량을 인증합니다.' },
    ],
    careerPaths: [
      { title: '보안 아키텍트', description: '보안 아키텍처를 설계하는 아키텍트로 성장합니다.' },
      { title: 'Head of Product Security', description: '제품 보안 총괄 리더로 나아갈 수 있습니다.' },
      { title: 'DevSecOps 리더', description: 'DevSecOps 조직을 이끄는 리더가 될 수 있습니다.' },
      { title: 'CISO', description: '갑사의 CISO로 성장할 수 있습니다.' },
    ],
  },
  {
    id: 'cti-analyst',
    title: '사이버 위협 인텔리전스 분석가 (CTI Analyst)',
    description:
      '사이버 위협의 프로파일러입니다. 공격하려는 적이 누구이며, 왜, 어떻게 공격할 것인가를 분석합니다. S2W, NSHC, 안랩(ASEC) 등 CTI/악성코드 전문 벤더나 KISA, 금융보안원, 그리고 대형 기업의 CERT 조직 내에서 소수의 전문가가 수행하는 고급 직무입니다.',
    responsibilities: [
      { title: '위협 데이터 수집', description: 'OSINT, 다크웹, 내부 로그 등 다양한 소스에서 위협 데이터(IoC)를 수집합니다.' },
      { title: '악성코드 리버스 엔지니어링', description: '악성코드 샘플을 리버스 엔지니어링하여 분석합니다.' },
      { title: 'Threat Hunting', description: 'IoC와 TTPs 기반으로 침해 위협을 추적하고 탐색합니다.' },
      { title: '공격 그룹 프로파일링', description: '공격 그룹을 프로파일링하고 MITRE ATT&CK Framework에 매핑합니다.' },
      { title: 'CTI 보고서 작성', description: '이해관계자를 위한 맞춤형 CTI 보고서를 작성합니다.' },
    ],
    skills: [
      { title: '악성코드 분석', description: '악성코드 정적/동적 분석 및 리버싱 기술이 필요합니다.' },
      { title: 'OSINT 도구', description: 'Maltego, Shodan 등 OSINT 도구를 활용합니다.' },
      { title: '네트워크 및 로그 분석', description: '네트워크 패킷 및 로그 분석 능력이 필요합니다.' },
      { title: 'Python 및 데이터 분석', description: 'Python 스크립팅 및 데이터 분석 역량이 필요합니다.' },
      { title: '논리적 사고', description: '논리적 사고 및 보고서 작성 능력이 중요합니다.' },
    ],
    certifications: [
      { title: '정보보안기사', description: '국내 기본 자격증입니다.' },
      { title: 'GREM', description: 'GIAC Reverse Engineering Malware로 악성코드 분석 전문성을 증명합니다.' },
    ],
    careerPaths: [
      { title: 'CERT 전문가', description: '침해사고 대응 전문가로 성장할 수 있습니다.' },
      { title: '레드팀 전문가', description: '공격 기술을 활용하는 레드팀으로 전환할 수 있습니다.' },
      { title: '위협 인텔리전스 총괄', description: 'Head of TI로 위협 인텔리전스 조직을 이끌 수 있습니다.' },
      { title: '보안 연구소장', description: '보안 연구소를 이끄는 리더가 될 수 있습니다.' },
    ],
  },
  {
    id: 'ot-ics-security',
    title: 'OT/ICS 보안 전문가 (OT/ICS Security Specialist)',
    description:
      '스마트팩토리, 발전소, 반도체 공장, 병원, 교통 등 국가기반시설의 운영 기술(OT) 및 산업 제어 시스템(ICS)을 보호하는 특수 직무입니다. OT 보안의 최우선 순위는 안전(Safety)과 가용성(Availability)입니다.',
    responsibilities: [
      { title: 'OT/ICS 망 보안 설계', description: 'OT/ICS 망 보안 아키텍처(망 분리, 망 연계)를 설계하고 운영합니다.' },
      { title: 'OT 자산 취약점 점검', description: 'OT/ICS 자산(PLC, HMI, SCADA)의 보안 취약점을 점검합니다.' },
      { title: 'OT 보안 솔루션 운영', description: 'ICS용 방화벽, 일방향 망연계, NDR 등 OT 보안 솔루션을 운영합니다.' },
      { title: '산업용 프로토콜 모니터링', description: 'Modbus, DNP3, OPC 등 산업용 특수 프로토콜 트래픽을 모니터링합니다.' },
      { title: '스마트 공장 보안 준수', description: '스마트 공장 관련 보안 가이드라인을 준수합니다.' },
    ],
    skills: [
      { title: '산업 제어 시스템', description: 'PLC, SCADA, HMI 등 산업 공정 및 제어 시스템을 이해해야 합니다.' },
      { title: '산업용 프로토콜', description: 'Modbus, DNP3, OPC 등 산업용 프로토콜 지식이 필요합니다.' },
      { title: '네트워크 보안', description: 'TCP/IP, 망 분리 등 네트워크 보안 지식이 필요합니다.' },
      { title: 'IT-OT 이해', description: 'IT와 OT 환경의 문화적 차이를 이해해야 합니다.' },
      { title: '현장 소통 능력', description: '생산/설비 담당자와의 원활한 소통 능력이 필요합니다.' },
    ],
    certifications: [
      { title: '정보보안기사', description: '국내 기본 자격증입니다.' },
      { title: 'GICSP', description: 'Global Industrial Cyber Security Professional로 OT 보안 전문성을 증명합니다.' },
    ],
    careerPaths: [
      { title: 'OT/ICS 보안 컨설턴트', description: 'OT/ICS 보안 컨설팅 전문가로 성장할 수 있습니다.' },
      { title: '스마트팩토리 보안 아키텍트', description: '스마트팩토리 보안 아키텍처를 설계하는 전문가가 될 수 있습니다.' },
      { title: 'OT 보안 총괄', description: 'OT 보안을 총괄하는 리더로 성장할 수 있습니다.' },
    ],
  },
  {
    id: 'grc-specialist',
    title: '보안 정책 및 GRC 전문가 (GRC Specialist)',
    description:
      '조직의 보안을 정책(Governance), 위험(Risk), 법규(Compliance)의 관점에서 총괄하는 기업 내부 담당자입니다. ISMS-P, PIPA, 전자금융거래법 등 법규 준수 활동을 지속적으로 운영 및 관리하고, 감독기관의 감사에 대응합니다.',
    responsibilities: [
      { title: '정보보호 관리체계 운영', description: 'ISMS-P, ISO27001 등 정보보호 관리체계 인증을 취득하고 유지·운영합니다.' },
      { title: '정보보안 정책 수립', description: '정보보안 정책, 규정, 지침, 절차서를 수립하고 이행을 관리합니다.' },
      { title: '법규 준수 점검', description: '관련 법규 준수(Compliance)를 점검하고 개선합니다.' },
      { title: '보안 위험 평가', description: '전사적 보안 위험 평가를 수행하고 위험을 관리합니다.' },
      { title: '보안 감사 대응', description: '보안 감사(Audit) 수검에 대응하고 외부 공급업체 위험을 관리합니다.' },
    ],
    skills: [
      { title: '인증 표준 및 법규', description: 'ISMS-P 등 인증 표준 및 관련 법규 지식이 필요합니다.' },
      { title: '위험 관리 방법론', description: '위험 평가 및 관리 방법론을 이해해야 합니다.' },
      { title: '논리적 분석력', description: '논리적 분석력 및 문서화 능력이 필요합니다.' },
      { title: '커뮤니케이션 능력', description: '다양한 부서와의 커뮤니케이션 및 협업 능력이 중요합니다.' },
      { title: '기술 전반 이해', description: '보안 기술 전반에 대한 폭넓은 이해가 필요합니다.' },
    ],
    certifications: [
      { title: 'ISMS-P 인증심사원', description: 'GRC 분야의 핵심 자격으로 연봉 상승에 직결됩니다.' },
      { title: 'CISA', description: 'ISMS와 함께 양대 산맥을 이루는 감사 자격증입니다.' },
      { title: 'CPPG', description: '개인정보보호 컨설팅 시 필수 자격증입니다.' },
      { title: 'CISSP', description: '기본 소양 및 경력을 증명하는 국제 자격증입니다.' },
      { title: '정보보안기사', description: '국내 기본 자격증입니다.' },
    ],
    careerPaths: [
      { title: '보안기획 팀장', description: '보안기획 팀을 이끄는 리더가 될 수 있습니다.' },
      { title: 'CISO', description: '정보보호 책임자로 성장할 수 있습니다.' },
      { title: '컴플라이언스 총괄', description: '전사 컴플라이언스를 총괄하는 리더가 될 수 있습니다.' },
    ],
  },
  {
    id: 'cpo-dpo',
    title: '개인정보보호 책임자 (CPO / DPO)',
    description:
      '개인정보보호법 및 GDPR과 같이 데이터 프라이버시 도메인에 고도로 특화된 법률/실무 전문가입니다. 일정 규모 이상 기업은 의무적으로 지정해야 하며, 기술적 보안보다는 데이터 처리 전 과정의 적법성을 다룹니다.',
    responsibilities: [
      { title: '개인정보보호 정책 수립', description: '개인정보보호 정책 및 개인정보처리방침을 수립하고 관리합니다.' },
      { title: '법규 준수 모니터링', description: '개인정보 처리 전 과정의 법규 준수를 모니터링합니다.' },
      { title: '개인정보 영향평가', description: '신규 서비스에 대한 개인정보 영향평가(PIA)를 수행합니다.' },
      { title: '침해 사고 대응', description: '개인정보 유출/침해 사고에 대응하고 감독기관에 보고합니다.' },
      { title: '정보주체 권리 보장', description: '정보주체 권리를 보장하고 관련 민원, 분쟁에 대응합니다.' },
    ],
    skills: [
      { title: '개인정보보호 법규', description: '개인정보보호법, 정보통신망법, 신용정보법, GDPR 등 관련 법규 지식이 필수입니다.' },
      { title: '법률-기술 통합 시각', description: '법률 실무, 정책, 보안 기술을 통합하는 시각이 필요합니다.' },
      { title: '커뮤니케이션 능력', description: '감독 당국 및 정보주체와의 원활한 커뮤니케이션 능력이 필요합니다.' },
    ],
    certifications: [
      { title: 'CPPG', description: 'Certified Privacy Protection General로 개인정보보호 전문성을 증명합니다.' },
      { title: 'ISMS-P 인증심사원', description: '개인정보보호 관리체계 인증심사원 자격증입니다.' },
      { title: 'IAPP CIPP', description: 'International Association of Privacy Professionals 자격증입니다.' },
    ],
    careerPaths: [
      { title: '최고 개인정보보호 책임자', description: 'CPO/DPO로 개인정보보호 조직을 총괄할 수 있습니다.' },
      { title: '법무 총괄', description: '법무 조직을 총괄하는 리더가 될 수 있습니다.' },
      { title: '컴플라이언스 총괄', description: '전사 컴플라이언스를 총괄하는 리더가 될 수 있습니다.' },
    ],
  },
  {
    id: 'security-researcher',
    title: '보안 연구원 (Security Researcher)',
    description:
      '알려지지 않은 새로운 취약점(제로데이)을 발견하거나, 고도화된 악성코드를 심층 분석하여 새로운 지식을 생산하는 R&D 전문가입니다. 안랩(ASEC), 윈스, 이글루, S2W 등 전문 벤더의 연구소나 대기업 R&D 조직, 국가 기관에 소속됩니다.',
    responsibilities: [
      { title: '제로데이 취약점 발굴', description: 'S/W, OS, 브라우저의 제로데이 취약점을 발굴합니다.' },
      { title: '악성코드 리버스 엔지니어링', description: '신종/고도화 악성코드를 리버스 엔지니어링하여 분석합니다.' },
      { title: '공격 기법 연구', description: '새로운 해킹 공격 기법 및 방어 대책을 연구합니다.' },
      { title: '보안 도구 개발', description: '자체 취약점 진단 도구 및 자동화 스크립트를 개발합니다.' },
      { title: '기술 보고서 작성', description: '발견된 취약점의 상세 기술 보고서(PoC)를 작성하고 버그 바운티에 참여합니다.' },
    ],
    skills: [
      { title: '리버싱 및 디버깅', description: 'IDA, x64dbg, GDB, Frida 등 리버싱 및 디버깅 도구를 활용합니다.' },
      { title: '저수준 프로그래밍', description: '어셈블리, C/C++, Python 등 저수준 프로그래밍 언어를 활용합니다.' },
      { title: 'OS 내부 구조', description: 'OS 및 파일 시스템 내부 구조를 깊이 이해해야 합니다.' },
      { title: '취약점 발굴 기법', description: '퍼징 및 취약점 발굴 기법을 활용합니다.' },
    ],
    certifications: [
      { title: '정보보안기사', description: '국내 기본 자격증입니다.' },
      { title: 'OSCP/OSCE/OSEE', description: 'Offensive Security 자격증으로 고급 해킹 기술을 증명합니다.' },
    ],
    careerPaths: [
      { title: 'CERT 전문가', description: '침해사고 대응 전문가로 성장할 수 있습니다.' },
      { title: '레드팀 전문가', description: '공격 기술을 활용하는 레드팀으로 전환할 수 있습니다.' },
      { title: '보안 솔루션 연구소장', description: '보안 솔루션 연구소를 이끄는 리더가 될 수 있습니다.' },
      { title: '국가 기관 R&D', description: '국가 기관의 R&D 프로젝트에 참여할 수 있습니다.' },
    ],
  },
  {
    id: 'ai-security',
    title: 'AI 보안 전문가 (AI Security Specialist)',
    description:
      '인공지능(AI) 및 머신러닝(ML) 시스템 자체의 고유한 보안 문제를 다루는 최신 분야입니다. 네이버, 카카오 등 자체 LLM 모델을 개발/운영하는 빅테크 기업이나 AI를 보안에 접목하는 전문 기업을 중심으로 포지션이 생겨나고 있습니다.',
    responsibilities: [
      { title: 'AI/ML 보안 아키텍처 설계', description: 'AI/ML 시스템 및 MLOps 파이프라인의 보안 아키텍처를 설계합니다.' },
      { title: 'AI 기반 이상 탐지 시스템', description: 'AI 기반 보안 이상 탐지 시스템을 구축하고 운영합니다.' },
      { title: 'AI 레드팀', description: '프롬프트 인젝션, Jailbreaking 등 AI 레드팀 테스트를 수행합니다.' },
      { title: '생성형 AI 취약점 발견', description: '생성형 AI의 프롬프트 기반 취약점을 발견합니다.' },
      { title: 'AI 모델 위험성 평가', description: 'AI 모델의 안전성, 신뢰성, 편향성, 개인정보 침해 위험성을 평가합니다.' },
    ],
    skills: [
      { title: 'AI/ML 모델 이해', description: 'AI/ML 모델, 특히 LLM의 작동 원리를 이해해야 합니다.' },
      { title: 'AI 프레임워크', description: 'Python 및 TensorFlow, PyTorch 등 AI 프레임워크를 활용합니다.' },
      { title: '프롬프트 엔지니어링', description: '프롬프트 엔지니어링 및 공격 기법을 활용합니다.' },
      { title: '데이터 보안', description: '데이터 보안 및 프라이버시 보호 지식이 필요합니다.' },
    ],
    certifications: [
      { title: '정보보안기사', description: '국내 기본 자격증입니다.' },
      { title: 'AI/ML 관련 자격증', description: 'AI/ML 관련 자격증으로 전문성을 증명합니다.' },
    ],
    careerPaths: [
      { title: '보안 연구원', description: 'AI 보안 연구원으로 성장할 수 있습니다.' },
      { title: 'AI 레드팀 전문가', description: 'AI 레드팀 전문가로 특화할 수 있습니다.' },
      { title: 'AI 보안 연구 리더', description: 'AI 보안 연구를 이끄는 리더가 될 수 있습니다.' },
      { title: 'AI 신뢰성/안전성 총괄', description: 'AI 신뢰성과 안전성을 총괄하는 리더가 될 수 있습니다.' },
    ],
  },
]

export interface CommonSkill {
  name: string
  value: number
  category: string
}

export const commonSkills: CommonSkill[] = [
  { name: '네트워킹', value: 90, category: '기술' },
  { name: 'OS 이해', value: 85, category: '기술' },
  { name: '암호화', value: 75, category: '기술' },
  { name: 'Python', value: 80, category: '프로그래밍' },
  { name: 'Bash/PowerShell', value: 70, category: '프로그래밍' },
  { name: '문제 해결', value: 95, category: '소프트스킬' },
  { name: '커뮤니케이션', value: 85, category: '소프트스킬' },
  { name: '지속적 학습', value: 90, category: '소프트스킬' },
  { name: '보안 프레임워크', value: 70, category: '지식' },
  { name: '위협 인텔리전스', value: 75, category: '지식' },
  { name: '컴플라이언스', value: 65, category: '지식' },
  { name: '클라우드 보안', value: 80, category: '기술' },
]
