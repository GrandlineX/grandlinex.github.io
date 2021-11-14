import React from 'react';
import { DiGithubBadge } from 'react-icons/di';
import { SiReadthedocs, SiSonarcloud } from 'react-icons/all';
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
        <h2>Package Releases</h2>
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
        <h2>Links</h2>
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
        <h2>Bundle overview</h2>
      </ContentRow>
      <ContentSpace />
      <ContentRow>
        <h2>Database-Bundles</h2>
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
        <h2>Logger-Bundles</h2>
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
        <h2>Utils</h2>
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
