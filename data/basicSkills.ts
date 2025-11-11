export interface SkillCategory {
  id: string
  title: string
  icon: string
  description: string
  items: SkillItem[]
}

export interface SkillItem {
  title: string
  subItems: SubItemDetail[]
}

export interface SubItemDetail {
  name: string
  description: string
}

export const basicSkills: SkillCategory[] = [
  {
    id: 'cs-foundations',
    title: 'CS 핵심 이론',
    icon: '💻',
    description: '\'왜\' 취약점이 생기는지 근본 원리를 알게 됩니다. 특히 메모리 구조를 이해하면, 버퍼 오버플로우 같은 공격 코드가 어떻게 작동하는지 명확히 파악할 수 있습니다.',
    items: [
      {
        title: '컴퓨터 구조',
        subItems: [
          {
            name: 'CPU',
            description: '악성코드가 실행되는 중앙 처리 장치. CPU의 권한 레벨(Ring 0, Ring 3) 이해는 루트킷, 커널 레벨 공격을 분석하는 데 필수적입니다.',
          },
          {
            name: '메모리',
            description: '데이터와 코드가 저장되는 공간. 스택, 힙 등 메모리 구조 이해는 버퍼 오버플로우, 메모리 해킹, 포렌식 분석의 기본입니다.',
          },
          {
            name: 'I/O 작동 원리',
            description: '네트워크 카드, 디스크 등 하드웨어 장치를 통한 데이터 유출(Exfiltration)이나 사이드 채널 공격을 이해하는 데 필요합니다.',
          },
        ],
      },
      {
        title: '자료구조 & 알고리즘',
        subItems: [
          {
            name: '스택, 힙 등 메모리 구조',
            description: '스택 오버플로우(Stack Overflow), 힙 스프레이(Heap Spray) 등 고전적이지만 강력한 메모리 기반 공격의 작동 원리를 파악하는 데 핵심입니다.',
          },
          {
            name: '효율적인 코드',
            description: '코드의 시간/공간 복잡도. 비효율적인 코드는 리소스를 고갈시켜 서비스 거부(DoS) 공격에 취약한 지점을 만들 수 있습니다.',
          },
        ],
      },
      {
        title: '데이터베이스',
        subItems: [
          {
            name: '관계형 DB (SQL)',
            description: '고객 정보, 기밀 데이터 등 핵심 자산이 저장되는 곳. DB 구조를 알아야 SQL Injection 공격을 이해하고 방어할 수 있습니다.',
          },
          {
            name: 'SQL 기본',
            description: '데이터 조작 언어. SQL Injection 공격 구문을 이해하고, \'Prepared Statement\' 같은 시큐어 코딩 방어 기법을 적용하는 데 필수입니다.',
          },
        ],
      },
    ],
  },
  {
    id: 'it-foundations',
    title: 'IT 기본 기술',
    icon: '⚙️',
    description: 'Linux와 Git은 보안 전문가의 \'손발\'입니다. 모든 분석, 테스트, 협업이 터미널과 Git을 통해 이루어집니다. 손에 익숙해질수록 작업 속도가 압도적으로 빨라집니다.',
    items: [
      {
        title: 'Linux CLI',
        subItems: [
          {
            name: '서버 접속',
            description: 'SSH 등 원격 접속 프로토콜을 통해 침해 사고가 발생한 서버에 접근하고, 안전한 접속 채널을 관리하는 기본 기술입니다.',
          },
          {
            name: '로그 분석',
            description: '공격 흔적이 담긴 시스템/애플리케이션 로그를 grep, awk 등으로 빠르게 필터링하고 분석하여 침해 지표(IoC)를 찾는 데 사용됩니다.',
          },
          {
            name: '기본 명령어',
            description: '실행 중인 프로세스(ps), 네트워크 연결 상태(netstat), 파일 권한(ls -l)을 확인하여 악성코드의 활동이나 시스템 이상 징후를 파악합니다.',
          },
        ],
      },
      {
        title: 'Git / GitHub',
        subItems: [
          {
            name: '버전 관리',
            description: '코드 변경 이력 추적. 취약점이 언제, 어떤 코드 변경으로 유입되었는지 추적하고 롤백하는 데 사용됩니다.',
          },
          {
            name: '협업',
            description: '보안팀과 개발팀이 코드를 공유하고 리뷰(Pull Request)하는 과정. 시큐어 코딩 리뷰를 통합하는 핵심 플랫폼입니다.',
          },
          {
            name: '코드 분석',
            description: '공개된 코드(GitHub)나 내부 코드를 분석하여 하드코딩된 비밀번호, API 키, 잠재적 취약점을 찾는 정적 분석(SAST)의 출발점입니다.',
          },
        ],
      },
    ],
  },
  {
    id: 'core-security',
    title: '핵심 보안 기술',
    icon: '🔒',
    description: '네트워킹과 OS 이해는 모든 보안 기술이 올라서는 \'무대\'입니다. 이 기본 지식이 탄탄해야, 방화벽 로그를 정확히 해석하고 악성코드의 행동을 예측할 수 있습니다.',
    items: [
      {
        title: '네트워킹',
        subItems: [
          {
            name: 'TCP/IP',
            description: '모든 인터넷 통신의 기반. TCP 헤더(Flag), 시퀀스 넘버 등을 분석해 스캔 공격(Nmap), 스푸핑, 세션 하이재킹을 탐지합니다.',
          },
          {
            name: 'OSI 7계층',
            description: '공격과 방어 전략을 계층별로 나누어 이해하는 프레임워크. 각 계층(L3, L4, L7)에 맞는 방화벽, WAF, IPS를 배치하는 근거가 됩니다.',
          },
          {
            name: 'DNS',
            description: '악성코드 C&C 서버 통신, 피싱 사이트 등 악의적인 통신의 첫 단계에서 악용되므로, DNS 로그 분석은 매우 중요합니다.',
          },
          {
            name: '방화벽',
            description: '네트워크 접근 제어의 기본. IP, 포트(L3/L4) 기반으로 인바운드/아웃바운드 트래픽을 통제하여 1차 방어선 역할을 합니다.',
          },
        ],
      },
      {
        title: '시스템 (OS/서버)',
        subItems: [
          {
            name: 'Linux/Windows',
            description: '대부분의 서버 및 기업 내부망 환경. OS별 권한 구조, 이벤트 로그, 레지스트리 등을 분석해 시스템을 경화(Hardening)하고 침투를 탐지합니다.',
          },
          {
            name: '권한 구조',
            description: '사용자, 그룹, 서비스에 할당된 권한. 최소 권한 원칙(PoLP)을 적용하고, 권한 상승(Privilege Escalation) 공격을 방어하는 핵심 개념입니다.',
          },
        ],
      },
      {
        title: '웹 애플리케이션 보안',
        subItems: [
          {
            name: 'OWASP Top 10',
            description: '가장 치명적이고 빈번한 10대 웹 취약점 목록. (SQL Injection, XSS 등) 모의 해킹, 시큐어 코딩의 기준이 됩니다.',
          },
          {
            name: 'HTTP/HTTPS',
            description: '웹 통신 프로토콜. 요청/응답 헤더, 쿠키, 세션 등을 분석해 웹 공격을 탐지하고, HTTPS(TLS/SSL)로 통신을 암호화하여 스니핑을 방지합니다.',
          },
        ],
      },
      {
        title: '암호화',
        subItems: [
          {
            name: '대칭키/비대칭키',
            description: '데이터 기밀성(빠른 대칭키), 키 교환 및 인증(안전한 비대칭키)을 보장하는 암호학의 두 기둥입니다.',
          },
          {
            name: '해시',
            description: '데이터의 무결성 검증. 패스워드 저장, 악성코드 시그니처 생성, 데이터 위변조 방지에 사용됩니다.',
          },
          {
            name: 'PKI',
            description: '공개키의 신뢰성을 보장하는 시스템(인증서, CA). HTTPS, VPN 등에서 \'이 서버/사용자를 믿을 수 있는가\'를 증명합니다.',
          },
        ],
      },
      {
        title: '클라우드 보안',
        subItems: [
          {
            name: 'AWS, Azure, GCP',
            description: '기존 On-premise와 다른 보안 모델(공동 책임 모델)을 가지며, 각 서비스(S3, EC2, IAM)별 보안 설정이 중요합니다.',
          },
          {
            name: '기본 보안 모델',
            description: '\'IAM\'(권한 관리), \'VPC\'(네트워크 격리)는 클라우드 보안의 시작이며, 잘못된 설정은 거대한 보안 사고로 이어집니다.',
          },
        ],
      },
    ],
  },
  {
    id: 'programming',
    title: '프로그래밍',
    icon: '👨‍💻',
    description: 'Python은 복잡한 자동화, 스크립팅, 보안 도구 개발에 가장 유연하게 사용됩니다. Bash/PowerShell은 시스템에 \'딱 붙어서\' 로그를 빠르게 처리하고 설정을 자동화하는 데 최고의 효율을 보여줍니다.',
    items: [
      {
        title: 'Python',
        subItems: [
          {
            name: '자동화',
            description: '반복적인 보안 업무(로그 수집, 리포트 생성)를 자동화하여 분석에 더 많은 시간을 쓸 수 있게 합니다.',
          },
          {
            name: '스크립팅',
            description: '간단한 스크립트로 취약점 스캔, 데이터 파싱, 포렌식 분석 등을 빠르고 유연하게 처리합니다.',
          },
          {
            name: '보안 도구 개발',
            description: '조직에 특화된 보안 솔루션이나 \'PoC(Proof of Concept)\' 공격 코드를 개발하는 데 사용됩니다.',
          },
        ],
      },
      {
        title: 'Bash / PowerShell',
        subItems: [
          {
            name: '시스템 관리',
            description: '운영체제에 내장된 스크립트 언어. Linux(Bash), Windows(PowerShell) 시스템의 보안 설정을 일괄 적용하고 관리합니다.',
          },
          {
            name: '로그 분석 스크립팅',
            description: '대용량 텍스트 로그를 실시간으로 처리하거나, 여러 서버의 로그를 취합하여 정제하는 스크립트를 작성하는 데 사용됩니다.',
          },
        ],
      },
    ],
  },
  {
    id: 'security-mgmt',
    title: '보안 관리 및 전략',
    icon: '📋',
    description: '기술을 \'왜\' 도입해야 하는지(위험 관리) 경영진을 설득하고, \'무엇을\' 지켜야 하는지(컴플라이언스) 정의하는, 기술의 가치를 높이는 영역입니다.',
    items: [
      {
        title: '위험 관리 (Risk Management)',
        subItems: [
          {
            name: '자산/위협/취약점 평가',
            description: '보호할 자산(Asset)을 식별하고, 잠재적 위협(Threat)과 취약점(Vulnerability)을 평가하여 \'제한된 자원으로 무엇을 먼저 보호할지\' 결정하는 과정입니다.',
          },
        ],
      },
      {
        title: '보안 프레임워크',
        subItems: [
          {
            name: 'NIST CSF, ISO 27001',
            description: '보안 활동의 \'나침반\'. 조직이 \'무엇을, 어떻게\' 방어해야 하는지 체계적으로 정리한 모범 사례로, 보안 성숙도를 측정하는 기준이 됩니다.',
          },
        ],
      },
      {
        title: '위협 인텔리전스 (CTI)',
        subItems: [
          {
            name: '공격 그룹 (TTPs)',
            description: '공격자들이 사용하는 전술, 기술, 절차(TTPs)를 분석하여 \'어떻게\' 공격하는지 파악하고, 이에 맞는 탐지 룰을 만듭니다. (예: MITRE ATT&CK)',
          },
        ],
      },
      {
        title: '컴플라이언스',
        subItems: [
          {
            name: 'ISMS, GDPR',
            description: '조직이 반드시 준수해야 하는 법적, 규제적 요구사항. 이를 충족하지 못하면 법적 처벌이나 벌금이 부과될 수 있으므로 보안의 \'최소한의 기준\'이 됩니다.',
          },
        ],
      },
    ],
  },
  {
    id: 'soft-skills',
    title: '소프트스킬',
    icon: '🤝',
    description: '기술 변화에 빠르게 적응(지속적 학습)하고, 증거를 찾아(문제 해결) \'이게 왜 위험한지\'를 개발자나 경영진에게 명확히 설명(커뮤니케이션)하는 능력은 기술력만큼 중요합니다.',
    items: [
      {
        title: '문제 해결',
        subItems: [
          {
            name: '침해사고 대응',
            description: '공격이 발생했을 때, 최소한의 피해로 빠르게 탐지, 분석, 대응, 복구하는 일련의 과정을 논리적으로 수행하는 능력입니다.',
          },
          {
            name: '취약점 패치',
            description: '발견된 취약점을 분석하고, 비즈니스 영향도를 고려하여 가장 효과적이고 안전한 해결책(패치, 설정 변경)을 찾아 적용합니다.',
          },
        ],
      },
      {
        title: '분석적/비판적 사고',
        subItems: [
          {
            name: '로그 분석',
            description: '수억 개의 정상 로그 속에서 단 하나의 비정상적인 \'공격의 증거\'를 찾아내는 능력. 오탐(False Positive)을 걸러내는 비판적 시각이 중요합니다.',
          },
          {
            name: '위협 연관 관계 파악',
            description: '흩어진 단서(이벤트)를 연결하여 공격자의 전체 시나리오를 재구성하는 능력입니다.',
          },
        ],
      },
      {
        title: '커뮤니케이션',
        subItems: [
          {
            name: '보고서 작성',
            description: '모의 해킹 결과나 사고 분석 내용을 기술적으로 정확하고, 논리적으로 이해하기 쉽게 문서화하여 증거를 남기고 공유합니다.',
          },
          {
            name: '비기술직 대상 설명',
            description: '복잡한 기술적 위험을 개발자, 경영진이 이해할 수 있는 언어(비즈니스 영향도, 비용)로 바꾸어 설득하고 보안 투자를 이끌어냅니다.',
          },
        ],
      },
      {
        title: '지속적 학습',
        subItems: [
          {
            name: '새로운 공격 기법/방어 기술',
            description: '공격자는 매일 새로운 취약점과 우회 기법을 만들어냅니다. 이에 맞춰 EDR, SOAR 등 최신 방어 기술을 익혀 방어력을 현대화해야 합니다.',
          },
        ],
      },
    ],
  },
]
