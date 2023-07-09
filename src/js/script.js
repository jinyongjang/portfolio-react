// import React from 'react';
import { gsap } from 'gsap';
// import { SplitText } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const script = () => {
  gsap.registerPlugin(ScrollTrigger);

  //section2
  gsap.to('#section2 .left', {
    scrollTrigger: {
      trigger: '#section2 .left',
      start: '-20.2% top',
      end: '+=130%',
      pin: true,
      scrub: true,
      markers: false,
    },
  });

  // const ani = gsap.timeline();
  // ani.fromTo(
  //   '#section2 .left h2 .char',
  //   { autoAlpha: 0, y: 80 },
  //   { x: 0, y: 0, ease: 'slow', stagger: 0.05, duration: 1, autoAlpha: 1 },
  // );

  // ScrollTrigger.create({
  //   animation: ani,
  //   trigger: '.section-title',
  //   start: 'top 40%',
  //   end: 'bottom -70%',
  //   scrub: true,
  //   markers: false,
  // });

  //section3
  gsap.to('.sectiontitle2 p', {
    scrollTrigger: {
      trigger: '.sectiontitle2',
      start: 'top top',
      end: '+=250%',
      pin: true,
      anticipatePin: 1,
      pinSpacing: false,
      scrub: true,
      markers: false,
    },
  });

  //section4
  // const ani1 = gsap.timeline();
  // ani1.fromTo(
  //   '#section4 .left h1 .char',
  //   { autoAlpha: 0, y: 80 },
  //   { x: 0, y: 0, ease: 'slow', stagger: 0.05, duration: 0.5, autoAlpha: 1 },
  // );

  // ScrollTrigger.create({
  //   animation: ani1,
  //   trigger: '.sectiontitle22',
  //   start: 'top 60%',
  //   markers: false,
  //   toggleActions: 'play none reverse none',
  // });

  //section5
  // let sectionTitle3 = document.querySelector('.sectiontitle3 p');
  // let sectionTitle3Height = sectionTitle3.offsetHeight;
  // gsap.to('.sectiontitle3', {
  //   scrollTrigger: {
  //     trigger: '.sectiontitle3',
  //     start: 'top top',
  //     end: () => {
  //       const vwUnit = window.innerWidth / 100;
  //       const endValue = 400 * vwUnit; // 850%를 vw 단위로 변환
  //       return `+=${endValue}`;
  //     },
  //     pin: true,
  //     anticipatePin: 1,
  //     pinSpacing: false,
  //     scrub: false,
  //     markers: false,
  //   },
  // });

  // const horizon = document.querySelector('#section5');
  // const section = gsap.utils.toArray('#section5 .article');

  // gsap.to(section, {
  //   xPercent: -100 * (section.length - 1),
  //   ease: 'none',
  //   scrollTrigger: {
  //     trigger: horizon,
  //     start: 'top 120px',
  //     end: '+=' + (horizon.offsetWidth - window.innerWidth),
  //     pin: true,
  //     markers: true,
  //     anticipatePin: 1,
  //     scrub: 2,
  //     snap: {
  //       snapTo: 1 / (section.length - 1),
  //       inertia: false,
  //       duration: { min: 0.1, max: 0.1 },
  //     },
  //     invalidateOnRefresh: true,
  //   },
  // });

  // console.log(horizon.offsetWidth);

  // section6
  gsap.to('.sectiontitle4', {
    // xPercent: -100 * (section.length - 1),
    scrollTrigger: {
      trigger: '.sectiontitle4',
      start: 'top top',
      end: '+=246%',
      pin: true,
      anticipatePin: 1,
      pinSpacing: false,
      scrub: false,
      markers: false,
    },
  });

  const articles = gsap.utils.toArray('#section6 .article');

  articles.forEach((item, i) => {
    if (i !== articles.length - 1) {
      ScrollTrigger.create({
        trigger: item,
        start: 'top 120px',
        pin: true,
        scrub: 2,
        endTrigger: articles[i + 1],
        end: 'top 22%', // 수정: 스크롤이 끝나는 시점 조정
        // onLeave: () => {
        //   gsap.set(item, { position: 'absolute' });
        // },
        // onEnterBack: () => {
        //   gsap.set(item, { position: 'fixed' });
        // },
      });
    }
  });

  //section7
  // const ani2 = gsap.timeline();
  // ani2.fromTo(
  //   '.section7__inner .left h1 .char',
  //   { autoAlpha: 0, y: 50 },
  //   { x: 0, y: 0, ease: 'slow', stagger: 0.1, duration: 2, autoAlpha: 1 },
  // );

  // ScrollTrigger.create({
  //   animation: ani2,
  //   trigger: '#section7',
  //   start: 'top 20%',
  //   end: '+=80%',
  //   toggleActions: 'play none reverse none',
  //   markers: false,
  // });

  //logo-bg
  document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      '#header',
      { width: 0, borderBottomColor: '#000' }, // 시작 스타일
      {
        duration: 3, // 애니메이션 지속 시간 (초)
        width: '100%', // 너비를 100%로 변경
        ease: 'power2.out', // 애니메이션 이징 함수
      },
    );

    function animate(item) {
      let x = 0;
      let y = 0;
      let delay = item.dataset.delay;

      if (item.classList.contains('.logo-bg')) {
        x = -100;
        y = 0;
      } else if (item.classList.contains('.logo-bg')) {
        x = 0;
        y = 100;
      } else if (item.classList.contains('.logo-bg')) {
        x = 0;
        y = 100;
      } else {
        x = 100;
        y = 0;
      }

      gsap.fromTo(
        item,
        { autoAlpha: 0, x: x, y: y },
        {
          autoAlpha: 1,
          x: 0,
          delay: delay,
          duration: 5,
          overwrite: 'auto',
          ease: 'expo',
        },
      );
    }

    gsap.utils.toArray('.logo-bg').forEach(item => {
      ScrollTrigger.create({
        trigger: item,
        start: 'top 90%',
        markers: false,
        onEnter: () => {
          animate(item);
        },
      });
      item.style.opacity = '0';
    });
  });
};

export default script;
