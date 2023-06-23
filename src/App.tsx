import React, { useEffect, useMemo, useRef, useState } from 'react';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Footer, Header } from './components';
import GIcon, { GIconType } from './img/GIcon';

import ContentRow from './components/ContentRowV2';
import FeatureBlockItem from './components/FeatureBlockItem';
import { feature } from './content';
import FadeElement from './components/FadeElement';
import { RoutingFunction } from './routing';

function App({ setPage }: { setPage: RoutingFunction }) {
  const parallax = useRef<IParallax>(null!);
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
  const bounds = useMemo(() => {
    const minSize = 1;
    const fSize = feature.length;
    const featureBound = {
      start: 1.1,
      total: fSize,
    };
    const blocks = 0.3;
    const blockOf = featureBound.start + featureBound.total + 0.1;
    const total = minSize + fSize + blocks;

    return {
      minSize,
      fSize,
      total,
      blockOf,
      feature: featureBound,
    };
  }, [feature.length]);
  useEffect(() => console.log(bounds), [bounds]);
  useEffect(() => console.log(parallax.current), [parallax.current]);
  return (
    <>
      <Header setPage={setPage} />
      <div className="app">
        {
          // BACKGROUND ANIMATION
        }
        <ul className="circles">
          <GIcon dark type="LOGO-TRANS" />
          <GIcon dark type="LOGO-TRANS" />
          <GIcon dark type="LOGO-TRANS" />
          <GIcon dark type="LOGO-TRANS" />
          <GIcon dark type="LOGO-TRANS" />
          <GIcon dark type="LOGO-TRANS" />
          <GIcon dark type="LOGO-TRANS" />
          <GIcon dark type="LOGO-TRANS" />
          <GIcon dark type="LOGO-TRANS" />
          <GIcon dark type="LOGO-TRANS" />
        </ul>
        <Parallax ref={parallax} pages={bounds.total}>
          {
            // FEATURE BLOCK
          }
          <ParallaxLayer sticky={{ start: 0, end: 0.1 }}>
            <div className="glx-preview">
              <div>
                <GIcon type={iList[ico]} height="240px" />
              </div>
              <div className="glx-mono">
                GrandLineX is an modular out-of-the-box framework written in
                typescript.
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer className="headline" sticky={{ start: 1.1, end: 2.2 }}>
            <ContentRow
              icon={<GIcon type="LOGO-TRANS" dark height="30px" />}
              title="Getting Started"
            />
          </ParallaxLayer>
          {
            // FEATURES
          }
          <ParallaxLayer
            className="headline"
            sticky={{ start: 2.3, end: bounds.minSize + bounds.fSize }}
          >
            <ContentRow
              icon={<GIcon type="LOGO-TRANS" dark height="30px" />}
              title="Features"
            />
          </ParallaxLayer>

          {feature.map((item, index) => (
            <ParallaxLayer
              sticky={{
                start: bounds.feature.start + index,
                end: bounds.feature.start + index + 0.5,
              }}
            >
              <FadeElement className="content-center">
                <FeatureBlockItem
                  item={feature[index]}
                  right={index % 2 === 1}
                />
                {index + 1 === feature.length && <Footer rel />}
              </FadeElement>
            </ParallaxLayer>
          ))}
        </Parallax>
      </div>
    </>
  );
}

export default App;
