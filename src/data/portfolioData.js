export const personalInfo = {
  name: "Ronit Roy",
  role: "Full Stack Java Developer",
  subtitles: [
    "Spring Boot & Microservices Specialist",
    "React.js & Modern Web Engineer",
    "Secure REST APIs & Concurrency Architect",
    "JUnit 5 & Test-Driven Development Advocate"
  ],
  tagline: "Spring Boot · React.js · REST APIs · MySQL · JUnit",
  email: "royr2866@gmail.com",
  phone: "+91 7908356364",
  location: "Siliguri, India",
  github: "https://github.com/RonitRoy2244",
  githubUsername: "RonitRoy2244",
  linkedin: "https://linkedin.com/in/ronit-roy-a60268225",
  linkedinUsername: "ronit-roy-a60268225",
  status: "Available for Full-Time Roles",
  summary: "Full Stack Java Developer who builds secure REST APIs and responsive web applications with Java, Spring Boot, React.js, and MySQL. Currently works as a Web Developer at Groveus Informatics, delivering client websites with 100% client satisfaction. Applies JWT authentication, role-based access control, and JUnit testing to write clean, reliable, and maintainable code.",
  stats: [
    { label: "Client Satisfaction", value: "100%", detail: "Delivered at Groveus Informatics" },
    { label: "Automated Tests", value: "25+", detail: "JUnit 5 & MockMvc test coverage" },
    { label: "REST Endpoints", value: "21+", detail: "Secured with JWT, BCrypt & RBAC" },
    { label: "Sandbox Security", value: "64 KB", detail: "Subprocess output cap & process-tree kill" },
  ]
};

export const skillsData = {
  categories: [
    { id: "all", label: "All Skills" },
    { id: "backend", label: "Backend & Security" },
    { id: "languages", label: "Languages" },
    { id: "frontend", label: "Frontend & Web" },
    { id: "testing", label: "Testing & QA" },
    { id: "databases", label: "Databases" },
    { id: "core", label: "Core Concepts" },
    { id: "ai", label: "AI-Assisted Dev" },
  ],
  items: [
    // Languages
    { name: "Java (Core & Advanced)", category: "languages", level: "Expert", highlight: "OOP, Generics, Concurrency, Stream API, JVM internals" },
    { name: "JavaScript (ES6+)", category: "languages", level: "Advanced", highlight: "Async/Await, Promises, Closures, DOM manipulation" },
    { name: "SQL", category: "languages", level: "Advanced", highlight: "Complex Joins, Indexing, Transactions, Query Optimization" },
    { name: "HTML5", category: "languages", level: "Expert", highlight: "Semantic markup, Native Dialogs, Accessibility" },
    { name: "CSS3", category: "languages", level: "Expert", highlight: "Flexbox, Grid, Custom Properties, Glassmorphism" },

    // Backend
    { name: "Spring Boot", category: "backend", level: "Expert", highlight: "Auto-configuration, Spring Data JPA, REST Controllers" },
    { name: "Spring MVC", category: "backend", level: "Advanced", highlight: "DispatcherServlet, RequestMapping, Model validation" },
    { name: "Spring Security", category: "backend", level: "Advanced", highlight: "SecurityFilterChain, JWT Authentication, BCrypt" },
    { name: "Hibernate (JPA)", category: "backend", level: "Advanced", highlight: "Entity Lifecycle, Lazy Loading, Criteria API, Relationships" },
    { name: "JDBC", category: "backend", level: "Advanced", highlight: "PreparedStatement, Transaction Management, Connection Pooling" },
    { name: "REST APIs", category: "backend", level: "Expert", highlight: "RESTful architecture, DTO pattern, HTTP status codes, Swagger" },
    { name: "JWT Authentication", category: "backend", level: "Expert", highlight: "Stateless Auth, Bearer Tokens, Claims Validation" },
    { name: "RBAC (Role-Based Access Control)", category: "backend", level: "Advanced", highlight: "Method-level security, PreAuthorize, Admin vs User roles" },

    // Testing
    { name: "JUnit 5", category: "testing", level: "Advanced", highlight: "Unit testing, Assertions, Parameterized tests, Test Lifecycle" },
    { name: "Spring MockMvc", category: "testing", level: "Advanced", highlight: "Controller testing, Request simulation, Response assertions" },
    { name: "Integration Testing", category: "testing", level: "Advanced", highlight: "End-to-end API verification, Test DB fixtures" },
    { name: "Unit Testing", category: "testing", level: "Expert", highlight: "Isolated service layer validation, Mocking dependencies" },

    // Frontend
    { name: "React.js", category: "frontend", level: "Advanced", highlight: "Hooks, Component architecture, State management, Virtual DOM" },
    { name: "Vite", category: "frontend", level: "Advanced", highlight: "Lightning-fast HMR, Rollup bundling, ESM optimization" },
    { name: "Bootstrap", category: "frontend", level: "Advanced", highlight: "Grid systems, responsive utility classes, UI components" },
    { name: "Responsive Web Design", category: "frontend", level: "Expert", highlight: "Mobile-first layouts, Fluid typography, Media queries" },

    // Databases
    { name: "MySQL", category: "databases", level: "Advanced", highlight: "Schema design, Foreign keys, InnoDB transactions, Normalization" },
    { name: "Oracle", category: "databases", level: "Intermediate", highlight: "PL/SQL, Table partitioning, Enterprise data schemas" },
    { name: "MongoDB", category: "databases", level: "Intermediate", highlight: "Document modeling, Aggregation pipelines, BSON" },

    // Core Concepts
    { name: "Object-Oriented Programming (OOP)", category: "core", level: "Expert", highlight: "Encapsulation, Polymorphism, Inheritance, Abstraction, SOLID" },
    { name: "Data Structures", category: "core", level: "Advanced", highlight: "Arrays, LinkedLists, Trees, HashMaps, Stacks, Queues" },
    { name: "MVC Architecture", category: "core", level: "Expert", highlight: "Clean separation of Model, View, and Controller layers" },
    { name: "Concurrency Control", category: "core", level: "Advanced", highlight: "Semaphores, Thread synchronization, OS Subprocesses, Rate limiting" },

    // AI-Assisted Development
    { name: "Claude", category: "ai", level: "Advanced", highlight: "Code generation, Architecture review, Prompt engineering" },
    { name: "Antigravity", category: "ai", level: "Advanced", highlight: "Autonomous agent workflows, Full-stack system development" },
  ]
};

export const experienceData = [
  {
    role: "Web Developer",
    company: "Groveus Informatics and Private Limited",
    location: "Siliguri, India",
    period: "August 2026 – Present",
    status: "Current Role",
    description: "Driving frontend engineering and client solution delivery across enterprise and customer-facing web products.",
    bullets: [
      "Delivered client-ready websites with 100% client satisfaction, converting client design requirements into responsive HTML5, CSS3, JavaScript (ES6+), and Bootstrap pages.",
      "Debugged front-end issues and optimized page performance in collaboration with the development team, following coding best practices.",
      "Developed interactive JavaScript UI elements that improved user experience across client-facing pages."
    ],
    skillsUsed: ["HTML5", "CSS3", "JavaScript (ES6+)", "Bootstrap", "Performance Optimization", "Client Management", "Responsive Design"]
  }
];

export const projectsData = [
  {
    id: "codearena",
    title: "CodeArena",
    subtitle: "Online Code Judge & Competitive Programming Platform",
    category: "Full Stack / Distributed Systems",
    techStack: [
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Hibernate (JPA)",
      "MySQL",
      "JUnit 5",
      "MockMvc",
      "React.js",
      "Vite"
    ],
    github: "https://github.com/RonitRoy2244",
    highlights: [
      "Built a LeetCode-style online judge with Spring Boot and React that runs submitted Java and JavaScript code in isolated OS subprocesses, with time limits, process-tree termination, and a 64 KB output cap.",
      "Designed 11 REST API endpoints on MySQL across 4 entities, secured with stateless JWT authentication, BCrypt, and role-based access control for admin endpoints.",
      "Added per-user rate limiting (1 submission per 5 seconds) and a semaphore capping concurrent runs at 3; hidden test cases never leave the server.",
      "Wrote 25 automated tests with JUnit 5 and Spring MockMvc covering authentication, problems, submissions, and the code runner."
    ],
    architecture: {
      entities: [
        { name: "User", fields: "id, username, email, passwordHash (BCrypt), role (USER/ADMIN), createdAt" },
        { name: "Problem", fields: "id, title, difficulty, description, timeLimitMs, memoryLimitMb, createdAt" },
        { name: "Submission", fields: "id, userId, problemId, language (JAVA/JS), sourceCode, status, runtimeMs, output" },
        { name: "TestCase", fields: "id, problemId, inputData, expectedOutput, isHidden (never exposed to client)" }
      ],
      securityPillars: [
        "OS Subprocess Isolation with strict time guards (1.5s - 3s max timeout)",
        "Process-tree kill on timeout to eliminate orphaned zombie processes",
        "64 KB output buffer cap to prevent memory exhaustion and denial-of-service",
        "Semaphore(3) concurrency throttling for hardware CPU protection",
        "Per-user rate limit (1 submission / 5s) preventing script spamming"
      ],
      apiEndpointsCount: 11,
      automatedTestsCount: 25
    }
  },
  {
    id: "meridian",
    title: "Meridian",
    subtitle: "Full-Stack E-Commerce Platform",
    category: "Full Stack / Cloud Deployment",
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Hibernate (JPA)",
      "MySQL",
      "React.js",
      "Bootstrap",
      "AWS (EC2, RDS)",
      "Nginx"
    ],
    github: "https://github.com/RonitRoy2244",
    highlights: [
      "Designed, built, and deployed a full-stack e-commerce platform covering 4 core flows: user registration, product browsing, cart management, and order checkout.",
      "Built 10+ RESTful API endpoints with Spring Boot and Hibernate (JPA) on MySQL, secured with stateless JWT authentication and BCrypt password hashing.",
      "Developed a responsive React.js frontend with Bootstrap, and deployed the application on AWS (EC2, RDS) with Nginx and security groups."
    ],
    architecture: {
      coreFlows: [
        { name: "User Registration & Auth", desc: "Stateless JWT issuance, BCrypt password hashing, and user profile management." },
        { name: "Product Browsing & Search", desc: "Paginated catalog queries via Hibernate JPA, category filtering, and inventory status." },
        { name: "Cart State Management", desc: "Real-time cart updates, item quantity sync, and persistent user basket storage." },
        { name: "Order Checkout & Fulfillment", desc: "Transactional order placement with DB rollback safety, order confirmation tokens." }
      ],
      deploymentTopology: [
        "Clients connect via HTTPS to Nginx Reverse Proxy running on AWS EC2",
        "Nginx forwards API traffic to Spring Boot application running on port 8080",
        "Spring Boot communicates privately with AWS RDS (Managed MySQL 8.0)",
        "AWS Security Groups restrict RDS access exclusively to the EC2 security group"
      ],
      apiEndpointsCount: "10+",
      infrastructure: "AWS EC2 + AWS RDS + Nginx + Spring Boot"
    }
  }
];

export const educationData = [
  {
    degree: "Bachelor of Technology, Computer Science and Engineering",
    institution: "Techno India University",
    location: "Kolkata / West Bengal, India",
    period: "2020 – 2024",
    score: "GPA: 7.8 / 10.0",
    badge: "Degree Awarded",
    highlights: [
      "Comprehensive coursework in Data Structures, Object-Oriented Software Engineering, Operating Systems, Database Management Systems, and Computer Networks.",
      "Completed capstone engineering projects focusing on scalable Java enterprise systems and secure web applications."
    ]
  },
  {
    degree: "Class XII (CBSE Science)",
    institution: "Delhi Public School, Siliguri",
    location: "Siliguri, India",
    period: "2020",
    score: "75%",
    badge: "Higher Secondary",
    highlights: ["Concentration in Physics, Chemistry, Mathematics, and Computer Science."]
  },
  {
    degree: "Class X (ICSE)",
    institution: "Don Bosco School, Siliguri",
    location: "Siliguri, India",
    period: "2018",
    score: "83%",
    badge: "Secondary School",
    highlights: ["Strong foundation in Mathematics, Science, and Computer Applications."]
  }
];

export const certificationsData = [
  {
    name: "Full Stack Java Developer",
    issuer: "NareshIT Hyderabad",
    focus: "Enterprise Java, Spring Boot, Hibernate, RESTful Web Services, Microservices, and Database Architecture",
    badge: "Professional Certification"
  },
  {
    name: "Introduction to Web Development with HTML, CSS, JavaScript",
    issuer: "IBM",
    focus: "Modern Web Standards, Responsive Web Design, Client-Side Scripting, and DOM Manipulation",
    badge: "IBM Verified Credential"
  }
];

export const mockApiEndpoints = [
  {
    id: "auth-login",
    method: "POST",
    path: "/api/v1/auth/login",
    project: "CodeArena / Meridian",
    description: "Authenticate user credentials with BCrypt and return stateless JWT Bearer token",
    requestPayload: {
      username: "ronit_dev",
      password: "●●●●●●●●"
    },
    responseStatus: 200,
    responseBody: {
      status: "SUCCESS",
      tokenType: "Bearer",
      accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyb25pdF9kZXYiLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNzYzNDQzMjAwLCJleHAiOjE3NjM1Mjk2MDB9.s81Y_fK9...",
      expiresIn: 86400,
      user: {
        id: 101,
        username: "ronit_dev",
        email: "royr2866@gmail.com",
        role: "ROLE_DEVELOPER"
      }
    }
  },
  {
    id: "code-submit",
    method: "POST",
    path: "/api/v1/submissions/run",
    project: "CodeArena",
    description: "Submit Java code to isolated OS subprocess sandbox with semaphore limit and 64KB cap",
    requestPayload: {
      problemId: 4,
      language: "JAVA_17",
      sourceCode: "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> map = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int complement = target - nums[i];\n            if (map.containsKey(complement)) return new int[]{map.get(complement), i};\n            map.put(nums[i], i);\n        }\n        return new int[]{};\n    }\n}"
    },
    responseStatus: 200,
    responseBody: {
      submissionId: "sub_9281a",
      verdict: "ACCEPTED",
      runtimeMs: 114,
      memoryUsedKb: 24320,
      outputSizeKb: 1.2,
      testsPassed: "15 / 15",
      sandboxSecurity: {
        subprocessTerminatedCleanly: true,
        outputCapPreserved: true,
        maxMemoryLimit: "64MB",
        semaphoreWaitTimeMs: 4
      }
    }
  },
  {
    id: "meridian-checkout",
    method: "POST",
    path: "/api/v1/orders/checkout",
    project: "Meridian",
    description: "Execute 4-flow e-commerce checkout with transactional consistency and order creation",
    requestPayload: {
      userId: 101,
      cartItems: [
        { productId: 802, name: "Mechanical Dev Keyboard", quantity: 1, unitPrice: 89.99 }
      ],
      shippingAddress: "Siliguri, West Bengal, India",
      paymentMethod: "STRIPE_TEST_SIMULATION"
    },
    responseStatus: 201,
    responseBody: {
      orderId: "ORD-2026-9812",
      status: "ORDER_PLACED",
      totalAmount: 89.99,
      currency: "USD",
      transactionId: "txn_aws_rds_8829",
      fulfillmentStatus: "PROCESSING",
      timestamp: "2026-11-17T15:00:00Z"
    }
  },
  {
    id: "problems-list",
    method: "GET",
    path: "/api/v1/problems",
    project: "CodeArena",
    description: "Retrieve paginated list of competitive programming problems with difficulty filters",
    requestPayload: null,
    responseStatus: 200,
    responseBody: {
      page: 0,
      size: 10,
      totalElements: 42,
      content: [
        { id: 1, title: "Two Sum", difficulty: "EASY", submissionsCount: 1420, acceptanceRate: "48.2%" },
        { id: 2, title: "Valid Palindrome Substring", difficulty: "MEDIUM", submissionsCount: 890, acceptanceRate: "39.1%" },
        { id: 3, title: "LRU Cache Implementation", difficulty: "HARD", submissionsCount: 310, acceptanceRate: "28.4%" }
      ]
    }
  }
];
