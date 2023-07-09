import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const MyComponent = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const intervalIdRef = useRef(null);

  useEffect(() => {
    const measurePageLoadTime = () => {
      const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;

      const increment = 100 / loadTime;
      let progress = 0;

      intervalIdRef.current = setInterval(() => {
        progress += increment;
        setLoadingProgress(Math.round(progress));

        if (progress >= 100) {
          clearInterval(intervalIdRef.current);
          progress = 100;
          setLoadingProgress(Math.round(progress));
          startPage();
        }
      });
    };

    measurePageLoadTime();

    // Clean up the interval when the component is unmounted
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, []);

  const startPage = () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set('#header', { width: '0%' });
    gsap.set('#header h1', { autoAlpha: 0 });
    gsap.set('#header .logo-bg', { width: 0 });
    gsap.set('#section1 .left', { autoAlpha: 0, x: -50 });
    gsap.set('#section1 .right', { autoAlpha: 0, x: 50 });

    let tl = gsap.timeline();
    tl.to('#header', { duration: 1, width: '100%' })
      .to('#header .logo-bg', { duration: 1, width: '30vw', ease: 'expo.out' }, '-=0.5')
      .to('#section1 .left', { duration: 1, autoAlpha: 1, x: 0, ease: 'expo.out' })
      .to('#section1 .right', { duration: 1, autoAlpha: 1, x: 0, ease: 'expo.out' }, '-=0.5')
      .to('#header h1', { duration: 1, autoAlpha: 1 });

    gsap.to('.section-title', {
      scrollTrigger: {
        trigger: '.section-title',
        start: 'top top',
        end: '+=125%',
        pin: true,
        pinSpacing: false,
        scrub: true,
        markers: false,
      },
    });
  };

  return (
    <>
      <div
        id="loading"
        style={{
          display: loadingProgress >= 100 ? 'none' : 'center',
        }}
      >
        <div id="loading-text">{loadingProgress}%</div>
        <div className="socket">
          <div className="gel center-gel">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c1 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c2 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c3 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c4 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c5 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c6 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>

          <div className="gel c7 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>

          <div className="gel c8 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c9 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c10 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c11 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c12 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c13 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c14 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c15 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c16 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c17 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c18 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c19 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c20 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c21 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c22 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c23 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c24 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c25 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c26 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c28 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c29 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c30 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c31 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c32 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c33 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c34 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c35 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c36 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c37 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
        </div>
      </div>
      <div style={{ visibility: loadingProgress >= 100 ? 'visible' : 'hidden' }}>{/* 페이지 내용 */}</div>
    </>
  );
};

export default MyComponent;
