export interface ResumeEntry {
  title: string;
  /** Shown in normal weight after the title, e.g. "(Internship)" */
  note?: string;
  organisation?: string;
  dates?: string;
  /** Paragraphs and bullet lists, rendered in order */
  content?: (string | { intro?: string; list: string[] })[];
}

export const experienceSummary =
  'Over the course of my career, I’ve helped companies achieve their goals by engineering and building software systems that prioritize scalability, maintainability, and reliability. Working as a full-stack software engineer and other IT roles, I’ve acquired invaluable industry knowledge across sectors including finance, government systems, and enterprise software.';

export const experience: ResumeEntry[] = [
  {
    title: 'Software Engineer',
    organisation: 'Devbridge (acquired by Cognizant)',
    dates: 'October 2023 - Present',
    content: ['Java, Spring Boot, Azure Service Bus, Harness, Liquibase, Gradle, React, Redux, Typescript, Docker, Git.'],
  },
  {
    title: 'Senior Software Engineer',
    organisation: 'Insoft',
    dates: 'June 2019 - October 2023 (4 years 5 months)',
    content: [
      'Promoted from Software Engineer (Jan 2022) and Junior Software Engineer (Feb 2020).',
      'Owned and drove development in a greenfield project across its full lifecycle - from inception to release and subsequent updates - with growing responsibility over time.',
      {
        intro: 'In this capacity:',
        list: [
          'Developed backend and frontend features, integrated third-party services, implemented security mechanisms, containerised services.',
          'Designed and implemented system architecture, contributed to analysis, testing, and documentation, managed deployments and releases.',
          'Led project coordination, delegated tasks, and facilitated scrum events.',
          'Mentored and supported software engineers, coached junior engineers.',
          'Collaborated with the client and external system teams to align requirements and integrations.',
        ],
      },
      {
        intro: 'Worked across the full-stack, utilizing these technologies:',
        list: [
          'Backend: Java, Spring Boot, Hibernate, JPA, PostgreSQL, JPQL, SQL, H2, Flyway, Maven.',
          'Frontend: Typescript, Angular 2+, HTML, CSS, Bootstrap, npm.',
          'Git, Linux, Postman, SoapUI, Docker, Nginx, JSON, XML, XSD, WSDL. REST and SOAP protocols.',
        ],
      },
    ],
  },
  {
    title: 'Programmer Trainee',
    note: '(Internship)',
    organisation: 'ATEA',
    dates: '2017',
    content: [
      'Gained hands-on experience in various facets of the software development lifecycle, including manual and automated product testing, quality assurance, and more.',
    ],
  },
];

export const education: ResumeEntry[] = [
  {
    title: 'Bachelor of Science (Honors) in Computer Science',
    organisation: 'University of Dundee',
    content: [
      {
        list: [
          'Graduated with First-class honours.',
          'Successfully balanced full-time work as a software engineer alongside my studies.',
          'Was recognised as the top student in my course for three years, earning a medal and certifications for outstanding academic achievements.',
          'Completed a four-year degree.',
        ],
      },
    ],
  },
  {
    title: 'High School Diploma',
    organisation: 'Vilnius Zirmunai Gymnasium',
    content: [
      {
        list: [
          'Attained a perfect score of 100 in three state exams.',
          'Achieved a perfect grade of 10 in the majority of subjects.',
        ],
      },
    ],
  },
];

export const awards: ResumeEntry[] = [
  {
    title: 'Oracle Certified Professional: Java SE 11 Developer',
    note: '(Certificate)',
    organisation: 'Oracle',
    content: [
      'Pursued certification at the encouragement of my employer, as it was valued for government projects. The process reinforced my Java expertise and software engineering skills.',
    ],
  },
  {
    title: '1st Place in Scotland in the Google Hashcode competition',
    organisation: 'Google',
    content: [
      'As part of a three-member team, developed an optimized C++ solution for library and book management, securing the top position in Scotland and ranking in the top 4% worldwide.',
    ],
  },
  {
    title: 'Hackathon Winning Team',
    content: [
      'Developed a Java application that concealed information within the least significant bits of pixels, leading to victory as part of a four-member team.',
    ],
  },
  {
    title: 'Top 10 Lithuanian Programmer-Students',
    content: [
      'Took part in the ultimate nationwide stage of a programming competition, emphasizing the creation of swift and optimized solutions to challenges in C++. Invitations to this final round were extended to only the top 10 individuals who successfully navigated the preceding three stages. Furthermore, secured the 3rd position in the second, city-wide stage held in Vilnius.',
    ],
  },
];
