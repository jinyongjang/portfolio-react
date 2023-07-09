import React from 'react';

function Section1() {
  return (
    <>
      <header id="header">
        <h1>++ Portfolio Frontend Developer</h1>
        <span className="logo-bg" aria-hidden="true"></span>
      </header>

      <main id="main">
        <section id="section1">
          <div className="left"></div>
          <div className="right">
            <div className="scrollarrow">
              <svg width="0.6vh" height="50vh" viewBox="0 0 8 315" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.64643 314.354C3.8417 314.549 4.15828 314.549 4.35354 314.354L7.53552 311.172C7.73078 310.976 7.73078 310.66 7.53552 310.464C7.34026 310.269 7.02368 310.269 6.82841 310.464L3.99999 313.293L1.17156 310.464C0.976297 310.269 0.659715 310.269 0.464453 310.464C0.26919 310.66 0.26919 310.976 0.464452 311.172L3.64643 314.354ZM3.5 -2.18557e-08L3.49999 314L4.49999 314L4.5 2.18557e-08L3.5 -2.18557e-08Z"
                  fill="black"
                />
              </svg>
            </div>
            <h3 className="scrollDownText">scroll down</h3>
            <h2>
              Portfolio with <br />
              Creative Uniqueness
            </h2>
            <p className="split">
              사람을 강하게 만드는 것은 사람이 하는 일이 아니라, 하고자 노력하는 것이다.
              <br />
              지난 시간동안 공부를 하며 힘들었던 점도 많았지만,
              <br />
              포기하지 않고 앞으로 달려 나가며 해낼수 있다는 마음으로 달려왔습니다.
              <br />
              노력을 하면 결실을 맺는다는 것을 몸소 느끼며 앞으로 더 정진하는 사람이 되고자 합니다.
              <br />
              아직 부족한 점은 많지만 지난 6개월간의 노력이 헛되지 않게 앞으로 더 배우며 살아가는 신입 개발자 '장진용'이
              되겠습니다.
            </p>
            <span className="logo-bg" aria-hidden="true"></span>
          </div>
        </section>
      </main>
    </>
  );
}

export default Section1;
