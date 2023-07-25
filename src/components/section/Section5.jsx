import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

const Section5 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Section title animation
    let sectionTitle3 = document.querySelector('.sectiontitle3 p');
    let sectionTitle3Height = sectionTitle3.offsetHeight;
    gsap.to('.sectiontitle3', {
      scrollTrigger: {
        trigger: '.sectiontitle3',
        start: 'top top',
        end: () => {
          const vwUnit = window.innerWidth / 100;
          const endValue = 400 * vwUnit; // 850%를 vw 단위로 변환
          return `+=${endValue}`;
        },
        pin: true,
        anticipatePin: 1,
        pinSpacing: false,
        scrub: false,
        markers: false,
      },
    });

    // Horizontal scroll animation
    const horizon = document.querySelector('#section5');
    const sections = gsap.utils.toArray('#section5 .article');

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: horizon,
        start: 'top 120px',
        end: `+=${horizon.offsetWidth - window.innerWidth}`,
        pin: true,
        markers: false,
        anticipatePin: 1,
        scrub: 2,
        snap: {
          snapTo: 1 / (sections.length - 1),
          inertia: false,
          duration: { min: 0.1, max: 0.1 },
        },
        invalidateOnRefresh: true,
      },
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="sectiontitle3">
        <p>
          JAVASCRIPT <em>JAVASCRIPT</em> JAVASCRIPT <em>JAVASCRIPT</em> JAVASCRIPT <em>JAVASCRIPT</em> JAVASCRIPT{' '}
          <em>JAVASCRIPT</em> JAVASCRIPT <em>JAVASCRIPT</em> JAVASCRIPT <em>JAVASCRIPT</em> JAVASCRIPT{' '}
          <em>JAVASCRIPT</em> JAVASCRIPT <em>JAVASCRIPT</em> JAVASCRIPT <em>JAVASCRIPT</em> JAVASCRIPT{' '}
          <em>JAVASCRIPT</em> JAVASCRIPT <em>JAVASCRIPT</em> JAVASCRIPT <em>JAVASCRIPT</em> JAVASCRIPT{' '}
          <em>JAVASCRIPT</em> JAVASCRIPT <em>JAVASCRIPT</em>
        </p>
      </div>
      <section id="section5">
        <article className="article">
          <div className="left">
            <div className="siteCode">
              <Link to={'https://github.com/jinyongjang/slide_Effect'} target="_blank">
                code
              </Link>
            </div>
            <div className="logo">
              <svg width="5vw" height="5vw " viewBox="0 0 133 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="132" height="130" stroke="black" />
                <path
                  d="M55.75 50C43.25 60 42 73.75 52 91.25M78.25 80C90.75 70 92 56.5192 82 39.0192M67 35C59.0435 35 51.4129 38.1607 45.7868 43.7868C40.1607 49.4129 37 57.0435 37 65C37 72.9565 40.1607 80.5871 45.7868 86.2132C51.4129 91.8393 59.0435 95 67 95C74.9565 95 82.5871 91.8393 88.2132 86.2132C93.8393 80.5871 97 72.9565 97 65C97 57.0435 93.8393 49.4129 88.2132 43.7868C82.5871 38.1607 74.9565 35 67 35ZM67 46.25C62.0272 46.25 57.2581 48.2254 53.7417 51.7417C50.2254 55.2581 48.25 60.0272 48.25 65C48.25 69.9728 50.2254 74.7419 53.7417 78.2583C57.2581 81.7746 62.0272 83.75 67 83.75C71.9728 83.75 76.7419 81.7746 80.2583 78.2583C83.7746 74.7419 85.75 69.9728 85.75 65C85.75 60.0272 83.7746 55.2581 80.2583 51.7417C76.7419 48.2254 71.9728 46.25 67 46.25Z"
                  stroke="black"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1>
              Slide Effect
              <div>
                <span className="logo-bg" aria-hidden="true"></span>
              </div>
            </h1>
            <p>
              자바스크립트를 사용하여 제작한 슬라이드 효과입니다. setinterval()을 사용하여 일정 시간이 지나면 다음
              이미지가 나타나는 유형, 하단의 닷 버튼을 클릭해 원하는 이미지로 이동할 수 있는 유형, 이전 및 다음 버튼을
              클릭해 이동하는 유형 등 다양한 유형의 이미지 슬라이드를 제작하였습니다.
            </p>
          </div>
          <div className="right">
            <div className="siteview">
              <Link to={'https://jinyongjang.github.io/web2023/javascript/slider/sliderEffect01.html'} target="_blank">
                site view
              </Link>
            </div>
            <div className="rightImg a1">
              <span></span>
            </div>
          </div>
        </article>
        <article className="article">
          <div className="left">
            <div className="siteCode">
              <Link
                to={'https://github.com/jinyongjang/web2023/blob/main/javascript/search/searchEffect01.html'}
                target="_blank"
              >
                code
              </Link>
            </div>
            <div className="logo">
              <svg width="5vw" height="5vw " viewBox="0 0 133 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="132" height="130" stroke="black" />
                <path
                  d="M55.75 50C43.25 60 42 73.75 52 91.25M78.25 80C90.75 70 92 56.5192 82 39.0192M67 35C59.0435 35 51.4129 38.1607 45.7868 43.7868C40.1607 49.4129 37 57.0435 37 65C37 72.9565 40.1607 80.5871 45.7868 86.2132C51.4129 91.8393 59.0435 95 67 95C74.9565 95 82.5871 91.8393 88.2132 86.2132C93.8393 80.5871 97 72.9565 97 65C97 57.0435 93.8393 49.4129 88.2132 43.7868C82.5871 38.1607 74.9565 35 67 35ZM67 46.25C62.0272 46.25 57.2581 48.2254 53.7417 51.7417C50.2254 55.2581 48.25 60.0272 48.25 65C48.25 69.9728 50.2254 74.7419 53.7417 78.2583C57.2581 81.7746 62.0272 83.75 67 83.75C71.9728 83.75 76.7419 81.7746 80.2583 78.2583C83.7746 74.7419 85.75 69.9728 85.75 65C85.75 60.0272 83.7746 55.2581 80.2583 51.7417C76.7419 48.2254 71.9728 46.25 67 46.25Z"
                  stroke="black"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1>
              Search Effect
              <div>
                <span className="logo-bg" aria-hidden="true"></span>
              </div>
            </h1>
            <p>
              CSS로 적용할 수 있는 속성들을 검색할 수 있는 사이트입니다. CSS 속성들을 정렬시켜주는 효과를
              나타내었습니다. indexOf(), search(), charAt() 등 자바스크립트의 다양한 메서드들을 사용했습니다. 입력창에
              타이핑하면 속성을 검색할 수 있습니다.
            </p>
          </div>
          <div className="right">
            <div className="siteview">
              <Link to={'https://jinyongjang.github.io/web2023/javascript/search/searchEffect01.html'} target="_blank">
                site view
              </Link>
            </div>
            <div className="rightImg a2">
              <span></span>
            </div>
          </div>
        </article>
        <article className="article">
          <div className="left">
            <div className="siteCode">
              <Link to={'https://github.com/jinyongjang/quiz_Effect'} target="_blank">
                code
              </Link>
            </div>
            <div className="logo">
              <svg width="5vw" height="5vw " viewBox="0 0 133 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="132" height="130" stroke="black" />
                <path
                  d="M55.75 50C43.25 60 42 73.75 52 91.25M78.25 80C90.75 70 92 56.5192 82 39.0192M67 35C59.0435 35 51.4129 38.1607 45.7868 43.7868C40.1607 49.4129 37 57.0435 37 65C37 72.9565 40.1607 80.5871 45.7868 86.2132C51.4129 91.8393 59.0435 95 67 95C74.9565 95 82.5871 91.8393 88.2132 86.2132C93.8393 80.5871 97 72.9565 97 65C97 57.0435 93.8393 49.4129 88.2132 43.7868C82.5871 38.1607 74.9565 35 67 35ZM67 46.25C62.0272 46.25 57.2581 48.2254 53.7417 51.7417C50.2254 55.2581 48.25 60.0272 48.25 65C48.25 69.9728 50.2254 74.7419 53.7417 78.2583C57.2581 81.7746 62.0272 83.75 67 83.75C71.9728 83.75 76.7419 81.7746 80.2583 78.2583C83.7746 74.7419 85.75 69.9728 85.75 65C85.75 60.0272 83.7746 55.2581 80.2583 51.7417C76.7419 48.2254 71.9728 46.25 67 46.25Z"
                  stroke="black"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1>
              Quiz Effect
              <div>
                <span className="logo-bg" aria-hidden="true"></span>
              </div>
            </h1>
            <p>
              웹디자인 기능사, 정보처리 기능사 기출문제를 풀어볼 수 있는 퀴즈 사이트를 제작 하였습니다. 버튼을 클릭하면
              정답을 바로 확인할 수 있는 유형, 주관식으로 정답을 직접 입력할 수 있는 유형, 객관식으로 정답을 선택할 수
              있는 유형, 이외에도 정답을 한 문제씩 확인할 수 있는 유형, 한번에 정답을 확인할 수 있는 유형 등 다양한
              유형의 퀴즈 이펙트 효과입니다.
            </p>
          </div>
          <div className="right">
            <div className="siteview">
              <Link to={'https://jinyongjang.github.io/web2023/javascript/quiz/quizEffect01.html'} target="_blank">
                site view
              </Link>
            </div>
            <div className="rightImg a3">
              <span></span>
            </div>
          </div>
        </article>
        <article className="article">
          <div className="left">
            <div className="siteCode">
              <Link to={'https://github.com/jinyongjang/mouse_Effect'} target="_blank">
                code
              </Link>
            </div>
            <div className="logo">
              <svg width="5vw" height="5vw " viewBox="0 0 133 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="132" height="130" stroke="black" />
                <path
                  d="M55.75 50C43.25 60 42 73.75 52 91.25M78.25 80C90.75 70 92 56.5192 82 39.0192M67 35C59.0435 35 51.4129 38.1607 45.7868 43.7868C40.1607 49.4129 37 57.0435 37 65C37 72.9565 40.1607 80.5871 45.7868 86.2132C51.4129 91.8393 59.0435 95 67 95C74.9565 95 82.5871 91.8393 88.2132 86.2132C93.8393 80.5871 97 72.9565 97 65C97 57.0435 93.8393 49.4129 88.2132 43.7868C82.5871 38.1607 74.9565 35 67 35ZM67 46.25C62.0272 46.25 57.2581 48.2254 53.7417 51.7417C50.2254 55.2581 48.25 60.0272 48.25 65C48.25 69.9728 50.2254 74.7419 53.7417 78.2583C57.2581 81.7746 62.0272 83.75 67 83.75C71.9728 83.75 76.7419 81.7746 80.2583 78.2583C83.7746 74.7419 85.75 69.9728 85.75 65C85.75 60.0272 83.7746 55.2581 80.2583 51.7417C76.7419 48.2254 71.9728 46.25 67 46.25Z"
                  stroke="black"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1>
              Mouse Effect
              <div>
                <span className="logo-bg" aria-hidden="true"></span>
              </div>
            </h1>
            <p>
              자바스크립트와 CSS를 활용하여 여러 가지 마우스 이펙트 유형을 작업해 보았습니다. 단순히 커서의 모습을
              바꾸고, 특정 위치에 마우스를 오버하면 커서의 형태가 바뀌는 효과에서 시작하여, GSAP를 이용해 부드러운
              움직임을 구현하기도 했습니다. 이외에도 마우스 움직임에 따라 이미지 혹은 텍스트가 움직이는 애니메이션
              효과를 작업해 보았습니다.
            </p>
          </div>
          <div className="right">
            <div className="siteview">
              <Link to={'https://jinyongjang.github.io/web2023/javascript/mouse/mouseEffect01.html'} target="_blank">
                site view
              </Link>
            </div>
            <div className="rightImg a4">
              <span></span>
            </div>
          </div>
        </article>
        <article className="article">
          <div className="left">
            <div className="siteCode">
              <Link to={'https://github.com/jinyongjang/parallax_Effects'} target="_blank">
                code
              </Link>
            </div>
            <div className="logo">
              <svg width="5vw" height="5vw " viewBox="0 0 133 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="132" height="130" stroke="black" />
                <path
                  d="M55.75 50C43.25 60 42 73.75 52 91.25M78.25 80C90.75 70 92 56.5192 82 39.0192M67 35C59.0435 35 51.4129 38.1607 45.7868 43.7868C40.1607 49.4129 37 57.0435 37 65C37 72.9565 40.1607 80.5871 45.7868 86.2132C51.4129 91.8393 59.0435 95 67 95C74.9565 95 82.5871 91.8393 88.2132 86.2132C93.8393 80.5871 97 72.9565 97 65C97 57.0435 93.8393 49.4129 88.2132 43.7868C82.5871 38.1607 74.9565 35 67 35ZM67 46.25C62.0272 46.25 57.2581 48.2254 53.7417 51.7417C50.2254 55.2581 48.25 60.0272 48.25 65C48.25 69.9728 50.2254 74.7419 53.7417 78.2583C57.2581 81.7746 62.0272 83.75 67 83.75C71.9728 83.75 76.7419 81.7746 80.2583 78.2583C83.7746 74.7419 85.75 69.9728 85.75 65C85.75 60.0272 83.7746 55.2581 80.2583 51.7417C76.7419 48.2254 71.9728 46.25 67 46.25Z"
                  stroke="black"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1>
              Parallax Effect
              <div>
                <span className="logo-bg" aria-hidden="true"></span>
              </div>
            </h1>
            <p>
              scrollTop()을 사용하여 현재 스크롤 위치를 알아내고, 위치에 따라 메뉴가 활성화되거나, 이미지나 텍스트가
              서서히 나타나는 패럴랙스 이펙트를 작업해 보았습니다. 브라우저의 마지막 섹션에 다다르면 가장 위로 올라갈 수
              있는 Top버튼도 제작해 주었고, 부드럽게 움직일 수 있도록 smooth 효과도 넣어주었습니다.
            </p>
          </div>
          <div className="right">
            <div className="siteview">
              <Link
                to={'https://jinyongjang.github.io/web2023/javascript/parallax/parallaxEffect01.html'}
                target="_blank"
              >
                site view
              </Link>
            </div>
            <div className="rightImg a5">
              <span></span>
            </div>
          </div>
        </article>
        <article className="article">
          <div className="left">
            <div className="siteCode">
              <Link
                to={'https://github.com/jinyongjang/web2023/blob/main/javascript/parallax/parallaxEffectAA.html'}
                target="_blank"
              >
                code
              </Link>
            </div>
            <div className="logo">
              <svg width="5vw" height="5vw " viewBox="0 0 133 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="132" height="130" stroke="black" />
                <path
                  d="M55.75 50C43.25 60 42 73.75 52 91.25M78.25 80C90.75 70 92 56.5192 82 39.0192M67 35C59.0435 35 51.4129 38.1607 45.7868 43.7868C40.1607 49.4129 37 57.0435 37 65C37 72.9565 40.1607 80.5871 45.7868 86.2132C51.4129 91.8393 59.0435 95 67 95C74.9565 95 82.5871 91.8393 88.2132 86.2132C93.8393 80.5871 97 72.9565 97 65C97 57.0435 93.8393 49.4129 88.2132 43.7868C82.5871 38.1607 74.9565 35 67 35ZM67 46.25C62.0272 46.25 57.2581 48.2254 53.7417 51.7417C50.2254 55.2581 48.25 60.0272 48.25 65C48.25 69.9728 50.2254 74.7419 53.7417 78.2583C57.2581 81.7746 62.0272 83.75 67 83.75C71.9728 83.75 76.7419 81.7746 80.2583 78.2583C83.7746 74.7419 85.75 69.9728 85.75 65C85.75 60.0272 83.7746 55.2581 80.2583 51.7417C76.7419 48.2254 71.9728 46.25 67 46.25Z"
                  stroke="black"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1>
              Scroll Effect
              <div>
                <span className="logo-bg" aria-hidden="true"></span>
              </div>
            </h1>
            <p>
              HTML과 CSS를 사용하여 다양한 요소들을 움직이고 스타일을 적용하여 화면을 구성하였습니다.
              <br />
              스크롤 값에 따라 여러효과가 적용되어 텍스트, 이미지가 움직이도록 설정하여 사이트를 제작하였습니다.
            </p>
          </div>
          <div className="right">
            <div className="siteview">
              <Link
                to={'https://jinyongjang.github.io/web2023/javascript/parallax/parallaxEffectAA.html'}
                target="_blank"
              >
                site view
              </Link>
            </div>
            <div className="rightImg a6">
              <span></span>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Section5;
