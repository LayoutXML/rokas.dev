export interface ResumeEntry {
  title: string;
  /** Shown in normal weight after the title, e.g. "(Certificate)" */
  note?: string;
  organisation?: string;
  dates?: string;
  /** Paragraphs and bullet lists, rendered in order */
  /** Promotion path within one organisation, rendered as a stepper */
  steps?: { title: string; dates?: string }[];
  content?: (string | { intro?: string; list: string[] })[];
}

export const experience: ResumeEntry[] = [
  {
    title: 'Software Engineer',
    organisation: 'Expedia Group',
    dates: '2025 - Present',
  },
  {
    title: 'Software Engineer',
    organisation: 'Devbridge (acquired by Cognizant)',
    dates: '2023 - 2025',
  },
  {
    title: 'Senior Software Engineer',
    organisation: 'Insoft',
    dates: '2019 - 2023',
    steps: [
      { title: 'Junior', dates: 'from 2019' },
      { title: 'Mid-level', dates: 'from 2020' },
      { title: 'Senior', dates: 'from 2022' },
    ],
  },
];

export const education: ResumeEntry[] = [
  {
    title: 'BSc (Honours) in Computer Science, First-class honours',
    organisation: 'University of Dundee',
  },
];

export const awards: ResumeEntry[] = [
  {
    title: 'Oracle Certified Professional: Java SE 11 Developer',
    organisation: 'Oracle',
  },
  {
    title: '1st Place in Scotland, Google Hash Code',
    organisation: 'Top 4% worldwide',
  },
  {
    title: 'Hackathon Winning Team',
    organisation: 'Java steganography app',
  },
  {
    title: 'Top 10 Lithuanian Programmer-Students',
    organisation: 'National final',
  },
];
