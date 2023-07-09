import React from 'react';
import { Link } from 'react-router-dom';

const Section2 = () => {
  return (
    <>
      <div className="section-title">
        <p>
          Creating <em>unique</em> Portfolio SKILLS Creating <em>unique</em> Portfolio SKILLS Creating <em>unique</em>{' '}
          Portfolio SKILLS
        </p>
      </div>
      <div id="section2">
        <div className="left">
          <h3 className="scrollDownText2">scroll down</h3>
          <div className="scrollarrow2">
            <svg width="0.6vh" height="42vh" viewBox="0 0 8 315" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.64643 314.354C3.8417 314.549 4.15828 314.549 4.35354 314.354L7.53552 311.172C7.73078 310.976 7.73078 310.66 7.53552 310.464C7.34026 310.269 7.02368 310.269 6.82841 310.464L3.99999 313.293L1.17156 310.464C0.976297 310.269 0.659715 310.269 0.464453 310.464C0.26919 310.66 0.26919 310.976 0.464452 311.172L3.64643 314.354ZM3.5 -2.18557e-08L3.49999 314L4.49999 314L4.5 2.18557e-08L3.5 -2.18557e-08Z"
                fill="black"
              />
            </svg>
          </div>
          <h2 className="split">
            Skill
            <br />
            Portfolio
          </h2>
          <p className="split">
            그동안 배우며 공부하며 작업했던 내용물들이며 계속해서 부족한 부분들을
            <br />
            채우고 있습니다. 또한 언제나 새로운 내용들을 배울 준비가 되어있습니다.
            <span className="logo-bg" aria-hidden="true"></span>
          </p>
        </div>
        <div className="right">
          <div className="right__wrap">
            <div className="right-logo">
              <Link to={'https://jinyongjang.github.io/web2023/'} target="_blank">
                <svg width="10vh" height="10vh" viewBox="0 0 133 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="132" height="130" stroke="black" />
                  <path
                    d="M83.6667 32H50.3333L47 38.6M83.6667 32L87 38.6L73.6667 65M83.6667 32L70.3333 58.4M47 38.6H73.6667L67 51.8L63.6667 45.2M47 38.6L63.6667 71.6L50.3333 98M47 38.6L70.3333 84.8H63.6667H77L57 45.2M63.6667 45.2L77 71.6M63.6667 45.2L87 91.4M70.3333 45.2H57M57 45.2L70.3333 71.6M87 91.4L83.6667 98H50.3333M87 91.4H60.3333L67 78.2M50.3333 98L47 91.4L60.3333 65"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="right-text">
              <h2>webstandard</h2>
              <p>
                웹표준 사이트입니다. 이 사이트는 HTML, CSS, JavaScript 등의 주요 웹 기술을 사용하고 디자인 하였습니다.
                <br />
                Alt 속성과 IR 효과 등을 활용 하였고, 지금까지 제작한 모든 사이트들이 링크되어 있습니다. 또한 사용자
                경험을
                <br />
                개선하기 위해 반응형 웹 디자인을 적용했습니다.
              </p>
            </div>
          </div>
          <div className="right__wrap">
            <div className="right-logo">
              <Link to={'http://ebmdols.dothome.co.kr/php/main/main.php'} target="_blank">
                <svg width="10vh" height="10vh" viewBox="0 0 133 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="132" height="130" stroke="black" />
                  <path
                    d="M54 45V75M54 45H69C71.6522 45 74.1957 46.0536 76.0711 47.9289C77.9464 49.8043 79 52.3478 79 55C79 57.6522 77.9464 60.1957 76.0711 62.0711C74.1957 63.9464 71.6522 65 69 65H54V45ZM54 75C51.3478 75 48.8043 76.0536 46.9289 77.9289C45.0536 79.8043 44 82.3478 44 85M54 75H74C77.9782 75 81.7936 72.8929 84.6066 69.1421C87.4196 65.3914 89 60.3043 89 55C89 49.6957 87.4196 44.6086 84.6066 40.8579C81.7936 37.1071 77.9782 35 74 35H44V85M44 85C44 87.6522 45.0536 90.1957 46.9289 92.0711C48.8043 93.9464 51.3478 95 54 95V80"
                    stroke="black"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="right-text">
              <h2>PHP</h2>
              <p>
                PHP를 사용해 제작한 사이트입니다. 개인 블로그를 제작 하였고, MySQL을 이용해서 DB관리를 하였으며 SQL
                <br />
                언어를 활용 로그인, 회원가입, 댓글, 게시판 등 다양한 기능을 구현 하였습니다. 첫 팀 프로젝트를 PHP를
                사용하여
                <br />
                마크업한 사이트에 기능을 구현하고 데이터베이스를 관리 하였습니다.
              </p>
            </div>
          </div>
          <div className="right__wrap">
            <div className="right-logo">
              <Link to={'https://jinyongjang.github.io/web2023/javascript/index.html'} target="_blank">
                <svg width="10vh" height="10vh" viewBox="0 0 133 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="132" height="130" stroke="black" />
                  <path
                    d="M55.75 50C43.25 60 42 73.75 52 91.25M78.25 80C90.75 70 92 56.5192 82 39.0192M67 35C59.0435 35 51.4129 38.1607 45.7868 43.7868C40.1607 49.4129 37 57.0435 37 65C37 72.9565 40.1607 80.5871 45.7868 86.2132C51.4129 91.8393 59.0435 95 67 95C74.9565 95 82.5871 91.8393 88.2132 86.2132C93.8393 80.5871 97 72.9565 97 65C97 57.0435 93.8393 49.4129 88.2132 43.7868C82.5871 38.1607 74.9565 35 67 35ZM67 46.25C62.0272 46.25 57.2581 48.2254 53.7417 51.7417C50.2254 55.2581 48.25 60.0272 48.25 65C48.25 69.9728 50.2254 74.7419 53.7417 78.2583C57.2581 81.7746 62.0272 83.75 67 83.75C71.9728 83.75 76.7419 81.7746 80.2583 78.2583C83.7746 74.7419 85.75 69.9728 85.75 65C85.75 60.0272 83.7746 55.2581 80.2583 51.7417C76.7419 48.2254 71.9728 46.25 67 46.25Z"
                    stroke="black"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="right-text">
              <h2>JAVASCRIPT</h2>
              <p>
                웹 페이지에 동적인 기능을 추가하거나 사용자와 상호작용하는데 사용되는 자바스크립트를
                <br />
                이용해 서치 이펙트, 퀴즈 이펙트, 슬라이드 이펙트, 마우스 이펙트, 패럴랙스 이펙트
                <br />
                등을 작업하며 여러 기능을 구현 하였습니다.
              </p>
            </div>
          </div>
          <div className="right__wrap">
            <div className="right-logo">
              <Link to={'https://jin-react01.netlify.app/'} target="_blank">
                <svg width="10vh" height="10vh" viewBox="0 0 133 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="132" height="130" stroke="black" />
                  <path
                    d="M46.2308 65.1818C60.0769 46.6364 73.9231 46.6364 87.7692 65.1818M46.2308 65.1818C60.0769 83.7273 73.9231 83.7273 87.7692 65.1818M46.2308 65.1818L41.6154 60.5455C58.5385 42 74.6923 42 90.0769 60.5455L97 69.8182M87.7692 65.1818L92.3846 69.8182C75.4615 88.3636 59.3077 88.3636 43.9231 69.8182L37 60.5455M37 60.5455V69.8182C57 94.5455 77 94.5455 97 69.8182M37 60.5455C57 35.8182 77 35.8182 97 60.5455V69.8182"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="right-text">
              <h2>REACT</h2>
              <p>
                사용자와 상호작용 할 수 있는동적인 UI를 만들기 위해 React를사용하여 사이트를 만들었습니다. youtube api
                <br />
                ,unsplash api, tmdb api를 이용해 영상재생,이미지 검색, 영화 정보 검색 등 다양한 기능도 구현했습니다.
                <br />
                또한 React를 한층 더 빠르게 사용할 수 있는 vite를 이용하여 사이트를 제작하였습니다.
              </p>
            </div>
          </div>
          <div className="right__wrap">
            <div className="right-logo">
              <svg width="10vh" height="10vh" viewBox="0 0 133 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="132" height="130" stroke="black" />
                <path
                  d="M54 93H34V33H44M54 93H44V48L74 93H84M54 93V63M44 33L84 93M44 33H54L89 83V33M84 93H99V33H89M89 33H79V68.6667"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="right-text">
              <h2>NEXT</h2>
              <p>
                SSR과 SSG의 이점을 활용하여 초기 로딩 속도를 개선하고 사용자 경험을 향상시키며 검색 엔진 최적화를
                강화하였고,
                <br />웹 애플리케이션을 구축하는 과정을 단순화 하였습니다.
              </p>
            </div>
          </div>
          <div className="right__wrap">
            <div className="right-logo">
              <svg width="10vh" height="10vh" viewBox="0 0 133 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="132" height="130" stroke="black" />
                <path
                  d="M107 81.6667L107 48.3333L100.333 45M107 81.6667L100.333 85L73.6667 71.6667M107 81.6667L80.3333 68.3333M100.333 45L100.333 71.6667L87 65L93.6667 61.6667L67 75L40.3333 61.6667L47 65L33.6667 71.6667L33.6667 45M100.333 45L67 61.6667L33.6667 45M93.6667 68.3333L93.6667 55L67 68.3333L40.3333 55L40.3333 68.3333M27 81.6667L27 48.3333L33.6667 45M27 81.6667L33.6667 85L60.3333 71.6667M27 81.6667L53.6667 68.3333"
                  stroke="black"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="right-text">
              <h2>Vue</h2>
              <p>
                VUE를 사용하여 제작한 사이트 입니다. 컴포넌트와 Props를 활용하여 사이트를 완성하였고,
                <br />
                스타일 사용언어는 SCSS를 통해서 제작하였습니다. API를 사용해서 동영상, 이미지, 영화를 검색할수 있으며,
                원하는
                <br /> 태그에 맞춰 정보들이 나올 수 있도록 제작하였습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Section2;
