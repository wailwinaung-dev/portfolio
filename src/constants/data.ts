import * as images from '@/assets/images';
export type ProjectType = {
  id: number;
  title: string;
  type: 'COMPLETED' | 'MAINTAINED' | 'ONGOING' | 'IN_PROGRESS';
  teamSize: number;
  company: string;
  description: string;
  technologies: string[];
  images: string[];
};
export const projects: ProjectType[] = [
  {
    id: 1,
    title: 'Currency Exchange System',
    type: 'IN_PROGRESS',
    company: 'Mahar Bawga Finance',
    description:
      'Developed a full-stack application for currency exchange. Developed and maintained frontend and backend services.',
    technologies: [
      'ReactJS',
      'Zustand',
      'Tanstack Query',
      'Zod',
      'Mantine UI',
      'NestJS',
      'Prisma',
      'PostgreSQL'
    ],
    images: [images.exchangeDenoImage, images.exchangePermissionImage], // placeholder since no images given
    teamSize: 3
  },
  {
    id: 2,
    title: 'Third-Party Integration Server',
    type: 'ONGOING',
    company: 'Mahar Bawga Finance',
    description:
      'Integrated with a third-party bank API for remittance transactions. Developed and maintained backend services ensuring transaction consistency and fault tolerance.',
    technologies: [
      'NestJS',
      'Mongoose',
      'MongoDB',
      'Redis (Caching, Job Queue)'
    ],
    images: [
      images.integrationHeader,
      images.integrationQueryImage,
      images.integrationProcessImage
    ],
    teamSize: 1
  },
  {
    id: 3,
    title: 'E-Wallet System',
    type: 'MAINTAINED',
    company: 'Young Investment Group',
    description:
      'Bug fixing and feature implementation to improve the Unipay E-wallet system, a local digital payment app connected to multiple banking systems.',
    technologies: [
      'SailJs',
      'React Native',
      'Firebase (FCM)',
      'MongoDB',
      'Node-red',
      'Redis (Pub/Sub, Caching, Job Queue)',
      'Keycloak'
    ],
    images: [
      images.subscriberImage,
      images.walletImage,
      images.merchantImage,
      images.corporateImage
    ],
    teamSize: 12
  },
  {
    id: 4,
    title: 'ERP System',
    type: 'MAINTAINED',
    company: 'Brycen Myanmar',
    description:
      'Enhanced ERP system modules and implemented improvements. Bug fixing and feature implementation to improve system functionality.',
    technologies: ['CakePHP 2', 'MySQL', 'Bootstrap', 'jQuery'],
    images: [images.sumishoImage],
    teamSize: 10
  },
  {
    id: 5,
    title: 'MMSpin Promo Web App',
    type: 'COMPLETED',
    company: 'Sabahna',
    description:
      'Developed a responsive web application for a promotional event from start to mid-stage backend development.',
    technologies: ['Laravel 9', 'React', 'Redux Toolkit', 'MySQL'],
    images: [images.mmspinImage],
    teamSize: 2
  },
  {
    id: 6,
    title: 'POS System',
    type: 'COMPLETED',
    company: 'Sabahna',
    description:
      'Built a POS web app for Royal Studio Mandalay karaoke booking, session room management, financial history, and services from start to end.',
    technologies: [
      'CakePHP 4',
      'React',
      'Redux Toolkit',
      'Material UI',
      'MySQL'
    ],
    images: [images.royalImage],
    teamSize: 2
  },
  {
    id: 7,
    title: 'Mickhae Karaoke iOS App',
    type: 'COMPLETED',
    company: 'Sabahna',
    description:
      'Led development of the iOS app for karaoke enthusiasts and Royal Studio Mandalay.',
    technologies: ['Ionic React', 'React Redux', 'MySQL'],
    images: [images.mickhaeImage],
    teamSize: 2
  },
  {
    id: 8,
    title: 'ZDS Delivery Management System',
    type: 'COMPLETED',
    company: 'Sabahna',
    description:
      'Developed a web application to streamline delivery operations for Myanmar Zarla Distribution Company.',
    technologies: ['CakePHP 3', 'MySQL', 'jQuery', 'Bootstrap', 'Limitless'],
    images: [images.zalaImage],
    teamSize: 2
  }
];
