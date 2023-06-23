import React, { useEffect, useState } from 'react';
import { AiOutlineCodeSandbox } from 'react-icons/ai';
import { Breadcrumbs, Grid } from '@grandlinex/react-components';
import {
  ContentSpace,
  Footer,
  Header,
  RepoBlock,
  RepoBlockItem,
} from './components';
import struct from './img/structure.svg';
import ContentRow from './components/ContentRow';
import { mainRepo, otherRepo, skeletonRepo } from './content';
import GIcon, { GIconType } from './img/GIcon';
import '@grandlinex/react-components/style/style.scss';
import FeatureBlock from './components/FeatureBlock';
import { Page, RoutingFunction } from './routing';

function Content() {
  return (
    <>
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
function App({ setPage }: { setPage: RoutingFunction }) {
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
    <div className="module">
      <Header setPage={setPage} />
      <div className="glx-content--spacer-header" />
      <Grid className="glx-p-8">
        <Breadcrumbs
          items={[
            { name: 'Home', action: () => setPage(Page.App) },
            { name: 'Packages' },
          ]}
        />
      </Grid>
      <div className="glx-content">
        <Content />
      </div>
      <div className="glx-content--spacer-header" />
      <Footer rel={false} />
    </div>
  );
}

export default App;
