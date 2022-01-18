import React from 'react';
import { AiOutlineCodeSandbox } from 'react-icons/all';
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
      <ContentRow smoke icon={<AiOutlineCodeSandbox />} title="CodeSandbox">
        <FeatureBlock>
          <div className="glx-sandbox">
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
          </div>
        </FeatureBlock>
      </ContentRow>
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
