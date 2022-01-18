import React from 'react';
import {
  ContentSpace,
  Footer,
  Header,
  RepoBlock,
  RepoBlockItem,
} from './components';
import logo from './img/ico--alt-bg-transparent.svg';
import logog from './img/ico--alt-bg-grey-transparent.svg';
import struct from './img/structure.svg';
import ContentRow from './components/ContentRow';
import FeatureBlock from './components/FeatureBlock';
import FeatureBlockItem from './components/FeatureBlockItem';
import { feature, mainRepo, otherRepo, skeletonRepo } from './content';
import SkeletonBlockItem from './components/SkeletonBlockItem';

const Content: React.FC<any> = (props) => {
  return (
    <>
      <ContentSpace />
      <ContentRow
        icon={<img height="30px" src={logog} alt="logo" />}
        title="Packages"
      >
        <RepoBlock>
          {mainRepo.map((repo) => (
            <RepoBlockItem item={repo} />
          ))}
        </RepoBlock>
      </ContentRow>
      <ContentSpace />
      <ContentRow
        icon={<img height="30px" src={logog} alt="logo" />}
        title="Features"
      >
        <FeatureBlock>
          {feature.map((fea) => (
            <FeatureBlockItem item={fea} />
          ))}
        </FeatureBlock>
      </ContentRow>
      <ContentSpace />
      <ContentRow
        icon={<img height="30px" src={logog} alt="logo" />}
        title="Basic structure"
      >
        <FeatureBlock>
          <div>
            <img width="100%" alt="sruct" src={struct} />
          </div>
        </FeatureBlock>
      </ContentRow>
      <ContentSpace />

      <ContentSpace />
      <ContentRow
        icon={<img height="30px" src={logog} alt="logo" />}
        title="Skeleton Projects"
      >
        <RepoBlock>
          {skeletonRepo.map((repo) => (
            <SkeletonBlockItem item={repo} />
          ))}
        </RepoBlock>
      </ContentRow>
      {otherRepo.map((ob) => (
        <>
          <ContentSpace />
          <ContentRow
            icon={<img height="30px" src={logog} alt="logo" />}
            title={ob.cat}
          >
            <RepoBlock>
              {ob.repo.map((repo) => (
                <RepoBlockItem item={repo} />
              ))}
            </RepoBlock>
          </ContentRow>
        </>
      ))}
    </>
  );
};
const App: React.FC<any> = (props) => {
  return (
    <>
      <Header />
      <div className="glx-content--spacer-header" />
      <div className="glx-preview">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="glx-mono">
          GrandLineX is an modular out-of-the-box framework written in
          typescript.
        </div>
      </div>
      <div className="glx-content">
        <Content />
      </div>
      <div className="glx-content--spacer-header" />
      <Footer />
    </>
  );
};

export default App;
