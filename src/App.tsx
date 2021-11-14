import React from 'react';
import {
  ContentRow,
  ContentSpace,
  Footer,
  Header,
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
