import React from 'react';
import { DiGithubBadge } from 'react-icons/di';
import {
  AiOutlineCodeSandbox,
  FiDatabase,
  FiExternalLink,
  FiPackage,
  RiFileHistoryLine,
  SiReadthedocs,
  SiSonarcloud,
  VscTools,
} from 'react-icons/all';
import {
  ContentRow,
  ContentSpace,
  Footer,
  Header,
  LinkBlock,
  LinkBlockItem,
  RepoBlock,
} from './components';
import RepoBlockItem from './components/RepoBlockItem';

const Content: React.FC<any> = (props) => {
  return (
    <>
      <ContentRow>
        <h3>
          GrandLineX is an modular out-of-the-box server framework written in
          typescript.
        </h3>
      </ContentRow>
      <ContentSpace />
      <ContentRow>
        <h2>
          <FiPackage /> Package Releases
        </h2>
        <RepoBlock>
          <RepoBlockItem
            projectName="Core Package"
            projectKey="core"
            description="Dependency free base kernel module"
          />
          <RepoBlockItem
            projectName="Express Package"
            projectKey="kernel"
            description="ExpressJS - Kernel module"
          />
          <RepoBlockItem
            projectName="Electron Package"
            projectKey="e-kernel"
            description="ElectronJS - Kernel module"
          />
        </RepoBlock>
      </ContentRow>
      <ContentSpace />
      <ContentRow>
        <h2>
          <FiExternalLink /> Links
        </h2>
        <LinkBlock>
          <LinkBlockItem
            title="GitHub"
            description="Repository"
            icon={<DiGithubBadge size="55" />}
            url="https://github.com/GrandlineX"
          />
          <LinkBlockItem
            title="Documentation"
            description="GrandLineX Documentation Page"
            icon={<SiReadthedocs size="55" />}
            url="https://grandlinex.github.io/docs"
          />
          <LinkBlockItem
            title="Sonar Cloud"
            description="Code Analysis tool"
            icon={<SiSonarcloud size="55" />}
            url="https://sonarcloud.io/organizations/grandlinex/projects"
          />
        </LinkBlock>
      </ContentRow>
      <ContentSpace />
      <ContentRow>
        <h2>
          <FiDatabase /> Database-Bundles
        </h2>
        <RepoBlock>
          <RepoBlockItem
            projectName="Postgresql Bundle"
            projectKey="bundle-postgresql"
            description="Postgresql support using pg"
          />
          <RepoBlockItem
            projectName="SQLight Bundle"
            projectKey="bundle-sqlight"
            description="SQLight support using better-sqlite3"
          />
          <RepoBlockItem
            projectName="Redis Bundle"
            projectKey="bundle-redis"
            description="Redis cache support using redis"
          />
        </RepoBlock>
      </ContentRow>
      <ContentSpace />
      <ContentRow>
        <h2>
          <RiFileHistoryLine /> Logger-Bundles
        </h2>
        <RepoBlock>
          <RepoBlockItem
            projectName="Electron Log"
            projectKey="bundle-elogger"
            description="Advanced logging support using electron-log"
          />
        </RepoBlock>
      </ContentRow>
      <ContentSpace />
      <ContentRow>
        <h2>
          <VscTools /> Utils
        </h2>
        <RepoBlock>
          <RepoBlockItem
            projectName="GLX Project Tool"
            projectKey="project-tool"
            description="Create and update GLX projects"
          />
          <RepoBlockItem
            projectName="Docs to OpenAPI"
            projectKey="docs-to-openapi"
            description="@openapi annotation support for comment docs"
          />
        </RepoBlock>
      </ContentRow>
      <ContentSpace />
      <ContentRow>
        <h2>
          <AiOutlineCodeSandbox /> Sandbox
        </h2>
        <iframe
          src="https://codesandbox.io/embed/grandlinex-express-kernel-7bib3?fontsize=14&hidenavigation=1&theme=dark"
          style={{
            width: '100%',
            height: '500px',
            border: 0,
            borderRadius: '4px',
            overflow: 'hidden',
          }}
          title="GrandlineX-Express-Kernel"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        />
      </ContentRow>
    </>
  );
};
const App: React.FC<any> = (props) => {
  return (
    <>
      <Header />
      <div className="glx-content--spacer-header" />
      <div className="glx-content">
        <Content />
      </div>
      <div className="glx-content--spacer-header" />
      <Footer />
    </>
  );
};

export default App;
