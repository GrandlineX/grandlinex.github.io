import React, { ReactNode } from 'react';

import { HiOutlineDatabase } from 'react-icons/hi';
import {
  SiDatabricks,
  SiReact,
  SiReadthedocs,
  SiElectron,
} from 'react-icons/si';
import {
  BsCodeSquare,
  BsReverseLayoutTextSidebarReverse,
} from 'react-icons/bs';
import { IoKeyOutline } from 'react-icons/io5';
import { GiCardboardBox } from 'react-icons/gi';
import { AiOutlineCode } from 'react-icons/ai';
import { RiFileSettingsLine, RiToolsLine } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';
import { IOGridOutline } from '@grandlinex/react-components';
import { GIconType } from './img/GIcon';
import { Page } from './routing';

export enum External {
  'github' = 'github',
  'docs' = 'docs',
  'sonar' = 'sonar',
  'npm' = 'npm',
}
export type RepoType = {
  projectName: string;
  projectKey: string;
  projectGroup?: string;
  description: string;
  newRepo?: boolean;
  image?: string;
  icon?: GIconType | ReactNode;
  cmd?: string;
  noCMD?: boolean;
  includes?: ReactNode[];
  disableLink?: External[];
  customLink?: { type: External; url: string }[];
};

export type FeatureType = {
  description: string;
  name: string;
  icon: ReactNode;
  dots: ReactNode[];
};

export const baseUrl = 'https://www.grandlinex.com';

const skeletonRepo: RepoType[] = [
  {
    projectName: 'Express-Skeleton',
    projectKey: 'skeleton-project',
    description: 'ExpressJS - Skeleton Project',
    cmd: 'gltool --template=express',
    icon: 'KERNEL-M',
    includes: [
      'Typescript Project setup with GLX-Kernel',
      'Example Kernel',
      'Example Module',
      'Example Action',
      'Jest Test setup',
      'Typedoc setup',
      'Eslint with Airbnb/Prettier config',
      'AuthProvider with JWT',
      <>
        Clone the repository or use the{' '}
        <a
          target="_blank"
          href={`${baseUrl}/docs/utils/#project-tool`}
          rel="noreferrer"
        >
          project-tool
        </a>
      </>,
    ],
    disableLink: [External.sonar, External.npm, External.docs],
  },
  {
    projectName: 'Electron-Skeleton',
    projectKey: 'electron-skeleton-project',
    description: 'ElectronJS - Skeleton Project',
    cmd: 'gltool --template=electron',
    icon: 'E-KERNEL-M',
    includes: [
      'Typescript Project setup with GLX-E-Kernel',
      'Example Kernel',
      'Example Module',
      'Example Action',
      'Eslint with Airbnb/Prettier config',
      <>
        Clone the repository or use the{' '}
        <a
          target="_blank"
          href={`${baseUrl}/docs/utils/#project-tool`}
          rel="noreferrer"
        >
          project-tool
        </a>
      </>,
    ],
    disableLink: [External.sonar, External.npm, External.docs],
  },
];
const mainRepo: RepoType[] = [
  {
    projectName: 'Core-Package',
    projectKey: 'core',
    description: 'Minimal dependency base kernel module',
    icon: 'CORE',
    includes: ['No other bundles', 'Only one dependecy'],
  },
  {
    projectName: 'Express-Package',
    projectKey: 'kernel',
    description: 'ExpressJS - Kernel module',
    icon: 'KERNEL',
    includes: ['@grandlinex/core', '@express.js'],
  },
  {
    projectName: 'Electron-Package',
    projectKey: 'e-kernel',
    description: 'ElectronJS - Kernel module',
    icon: 'E-KERNEL',
    includes: ['@grandlinex/core', '@electron.js'],
  },
  {
    newRepo: true,
    projectName: 'React-Components',
    projectKey: 'react-components',
    description: 'React-Component library',
    icon: <SiReact size={36} />,
    includes: ['react.js', '@grandlinex/react-icons'],
    disableLink: [External.sonar],
  },
];

const feature: FeatureType[] = [
  {
    name: 'Build your own App',
    icon: <SiElectron />,
    description: `Build build your own Backend or Desktop App.`,
    dots: [
      'Revolutionizing cross-platform development',
      'Use the GLX-Kernel to build your own API with the GLX-Toolbox and ExpressJS',
      'Use the Electron-GLX-Kernel to build your own  Desktop App.',
      'Combines the power of Electron.js and the flexibility of Express.js for your apps',
      'Seamless and efficient development experience',
      'Create robust and scalable applications for multiple platforms',
      'Simplifies and accelerates the development of desktop  and backend applications',
      'Transforming the way we build applications',
    ],
  },
  {
    name: 'Entity Model (ORM)',
    icon: <HiOutlineDatabase />,
    description: `Build in entity relation model.`,
    dots: [
      'Use a couple of DBInterfaces to store persistent data',
      'Create, update, find and delete entities',
      'Database versioning + migration interfaces',
      'See: SQLight- or Postgresql-Bundle',
      'Build in core : InMemDB',
    ],
  },
  {
    name: 'Caching',
    icon: <SiDatabricks />,
    description: `Build in cache system.`,
    dots: [
      'Cache system for exiting entity models',
      'Module scoped KeyValue store',
      'See: Redis-Bundle',
      'Build in core : InMemCache',
    ],
  },
  {
    name: 'Multi Channel Logging',
    icon: <BsReverseLayoutTextSidebarReverse />,
    description: `Build in Logging support.`,
    dots: [
      'Every GLX-Component have his own log channel',
      'See: ElectronLog-Bundle',
      'Build in core : DefaultLogger',
    ],
  },
  {
    name: 'Credential store',
    icon: <IoKeyOutline />,
    description: `Build in Credential/Key store.`,
    dots: [
      'Save encrypted credentials for your program with AES-256',
      'See: Core Package',
      'Build in core : CoreCryptoClient',
    ],
  },
  {
    name: 'Kernel & Modul Structure ',
    icon: <GiCardboardBox />,
    description: `Pre structured project setup.`,
    dots: [
      'Build new ModulesBundles for your needs',
      'Extending the your KernelPackage with your own bundles',
      'Connect bundles with bridges for internal resource sharing',
    ],
  },
  {
    name: 'Project-Tool',
    icon: <AiOutlineCode />,
    description: `CLI for GrandLineX Projects.`,
    dots: [
      'Update GLX-Dependencies',
      'Init new GLX-Projects with customizable options',
      'See: project-tool',
    ],
  },
  {
    name: 'Env Store',
    icon: <RiFileSettingsLine />,
    description: `Global configuration store`,
    dots: ['Load from .env file', 'Override configurations in your code'],
  },
  {
    name: 'Background Service',
    icon: <RiToolsLine />,
    description: `Loop service interface.`,
    dots: ['Create looping background services'],
  },
  {
    name: 'Open Source',
    icon: <BsCodeSquare />,
    description: `Core Packages with BSD-3 licence.`,
    dots: ['Join on GitHub'],
  },
];

const otherRepo: { cat: string; repo: RepoType[] }[] = [
  {
    cat: 'Database & Cache-Bundles',
    repo: [
      {
        projectName: 'Postgresql-Bundle',
        projectKey: 'bundle-postgresql',
        description: 'Postgresql support using pg',
        icon: 'CORE-M',
      },
      {
        projectName: 'SQLight-Bundle',
        projectKey: 'bundle-sqlight',
        description: 'SQLight support using better-sqlite3',
        icon: 'CORE-M',
      },
      {
        projectName: 'Redis-Bundle',
        projectKey: 'bundle-redis',
        description: 'Redis cache support using redis',
        icon: 'CORE-M',
      },
    ],
  },
  {
    cat: 'Core-Bundles',
    repo: [
      {
        projectName: 'MultiLang-Bundle',
        projectKey: 'bundle-multilang',
        description: 'Multilang support for GrandLineX',
        icon: 'CORE-M',
      },
      {
        projectName: 'Electron-Log-Bundle',
        projectKey: 'bundle-elogger',
        description: 'Advanced logging support using electron-log',
        icon: 'CORE-M',
      },
    ],
  },
  {
    cat: 'Utils',
    repo: [
      {
        projectName: 'GLX-Project-Tool',
        projectKey: 'project-tool',
        description: 'Create and update GLX projects',
        disableLink: [External.sonar],
        customLink: [
          {
            type: External.docs,
            url: `${baseUrl}/docs/utils/#project-tool`,
          },
        ],
      },
      {
        projectName: 'Swagger-Mate',
        projectKey: 'swagger-mate',
        description: 'Build OpenAPI v3 from your code',
        disableLink: [],
        customLink: [
          {
            type: External.docs,
            url: `${baseUrl}/docs/utils/#swagger-mate`,
          },
        ],
      },
    ],
  },
  {
    cat: 'Demo',
    repo: [
      {
        projectName: 'XServer',
        projectKey: 'xserver',
        projectGroup: 'elschnagoo',
        description: ' GrandLineX Full Stack Demo Project - Video Server',
        image:
          'https://github.com/Elschnagoo/XServer/blob/master/img/img_1.png?raw=true',
        disableLink: [External.sonar, External.npm],
        noCMD: true,
        customLink: [
          {
            type: External.docs,
            url: `https://hub.docker.com/r/elschnagoo/xserver`,
          },
        ],
      },
    ],
  },
];

const menuItems: {
  name: string;
  url?: string;
  page?: Page;
  mobile?: boolean;
  icon?: ReactNode;
}[] = [
  { name: 'Packages', page: Page.Packages },
  {
    name: 'Packages',
    icon: <IOGridOutline />,
    page: Page.Packages,
    mobile: true,
  },
  { name: 'Docs', url: `${baseUrl}/docs/` },
  { name: 'Projects', url: 'https://github.com/GrandlineX/' },
  {
    name: 'Report',
    url: 'https://sonarcloud.io/organizations/grandlinex/projects',
  },
  // Mobile
  {
    name: 'Docs',
    icon: <SiReadthedocs />,
    url: `${baseUrl}/docs/`,
    mobile: true,
  },
  {
    name: 'Projects',
    icon: <FaGithub />,
    url: 'https://github.com/GrandlineX/',
    mobile: true,
  },
];

export { feature, mainRepo, skeletonRepo, otherRepo, menuItems };
