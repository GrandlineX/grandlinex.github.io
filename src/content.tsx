import React, { ReactNode } from 'react';

import {
  AiOutlineCode,
  BsCodeSquare,
  BsReverseLayoutTextSidebarReverse,
  FaGithub,
  GiCardboardBox,
  HiOutlineDatabase,
  IoKeyOutline,
  RiFileSettingsLine,
  RiToolsLine,
  SiDatabricks,
  SiReadthedocs,
  SiSonarcloud,
} from 'react-icons/all';
import { GIconType } from './img/GIcon';

export type RepoType = {
  projectName: string;
  projectKey: string;
  description: string;
  icon?: GIconType;
  includes?: ReactNode[];
};

export type SkeletonType = {
  projectName: string;
  projectKey: string;
  description: string;
  command: string;
  icon?: GIconType;
  includes?: ReactNode[];
};

export type FeatureType = {
  description: string;
  name: string;
  icon: ReactNode;
  dots: ReactNode[];
};

const skeletonRepo: SkeletonType[] = [
  {
    projectName: 'Express-Skeleton',
    projectKey: 'skeleton-project',
    description: 'ExpressJS - Skeleton Project',
    command: 'gltool --template=express',
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
          href="https://grandlinex.github.io/docs/utils/#project-tool"
          rel="noreferrer"
        >
          project-tool
        </a>
      </>,
    ],
  },
  {
    projectName: 'Electron-Skeleton',
    projectKey: 'electron-skeleton-project',
    description: 'ElectronJS - Skeleton Project',
    command: 'gltool --template=electron',
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
          href="https://grandlinex.github.io/docs/utils/#project-tool"
          rel="noreferrer"
        >
          project-tool
        </a>
      </>,
    ],
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
    includes: [
      '@grandlinex/core',
      '@grandlinex/bundle-elogger',
      '@grandlinex/bundle-sqlight',
      '@grandlinex/bundle-postgresql',
      '@express.js',
    ],
  },
  {
    projectName: 'Electron-Package',
    projectKey: 'e-kernel',
    description: 'ElectronJS - Kernel module',
    icon: 'E-KERNEL',
    includes: [
      '@grandlinex/core',
      '@grandlinex/bundle-elogger',
      '@grandlinex/bundle-sqlight',
      '@electron.js',
    ],
  },
];

const feature: FeatureType[] = [
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
    cat: 'Express-Bundles',
    repo: [
      {
        projectName: 'Simple-Auth-Bundle',
        projectKey: 'bundle-simple-auth',
        description: 'Authorization & user management bundle',
        icon: 'KERNEL-M',
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
      },
      {
        projectName: 'Docs-to-OpenAPI',
        projectKey: 'docs-to-openapi',
        description: '@openapi annotation support for comment docs',
      },
    ],
  },
];

const menuItems: { name: ReactNode; url: string; mobile?: boolean }[] = [
  { name: 'Docs', url: 'https://grandlinex.github.io/docs/' },
  { name: 'Projects', url: 'https://github.com/GrandlineX/' },
  {
    name: 'Report',
    url: 'https://sonarcloud.io/organizations/grandlinex/projects',
  },
  // Mobile
  {
    name: <SiReadthedocs />,
    url: 'https://grandlinex.github.io/docs/',
    mobile: true,
  },
  { name: <FaGithub />, url: 'https://github.com/GrandlineX/', mobile: true },
  {
    name: <SiSonarcloud />,
    url: 'https://sonarcloud.io/organizations/grandlinex/projects',
    mobile: true,
  },
];

export { feature, mainRepo, skeletonRepo, otherRepo, menuItems };
