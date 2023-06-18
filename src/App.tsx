import React, { useEffect, useState } from 'react';
import { AiOutlineCodeSandbox } from 'react-icons/ai';
import {
  ContentSpace,
  Footer,
  Header,
  RepoBlock,
  RepoBlockItem,
} from './components';
import struct from './img/structure.svg';
import ContentRow from './components/ContentRow';
import FeatureBlock from './components/FeatureBlock';
import FeatureBlockItem from './components/FeatureBlockItem';
import { feature, mainRepo, otherRepo, skeletonRepo } from './content';
import GIcon, { GIconType } from './img/GIcon';
import '@grandlinex/react-components/style/style.scss';

function Content() {
  return (
    <>
      <ContentSpace />
      <ContentRow
        icon={<GIcon type="LOGO-TRANS" dark height="30px" />}
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
        icon={<GIcon type="LOGO-TRANS" dark height="30px" />}
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
        icon={<GIcon type="LOGO-TRANS" dark height="30px" />}
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
        icon={<GIcon type="LOGO-TRANS" dark height="30px" />}
        title="Skeleton Projects"
      >
        <RepoBlock>
          {skeletonRepo.map((repo) => (
            <RepoBlockItem item={repo} />
          ))}
        </RepoBlock>
      </ContentRow>
      {otherRepo.map((ob) => (
        <>
          <ContentSpace />
          <ContentRow
            icon={<GIcon type="LOGO-TRANS" dark height="30px" />}
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
}
function App() {
  const [ico, setIco] = useState<number>(0);
  const iList: GIconType[] = [
    'LOGO-TRANS',
    'LOGO-ALT-TRANS',
    'CORE',
    'CORE-M',
    'KERNEL',
    'KERNEL-M',
    'E-KERNEL',
    'E-KERNEL-M',
  ];

  useEffect(() => {
    const int = setInterval(() => {
      if (ico + 1 === iList.length) {
        setIco(0);
      } else {
        setIco(ico + 1);
      }
    }, 5000);

    return () => {
      clearInterval(int);
    };
  });
  return (
    <>
      <Header />
      <div className="glx-content--spacer-header" />
      <div className="glx-preview">
        <div>
          <GIcon type={iList[ico]} height="240px" />
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
}

export default App;
