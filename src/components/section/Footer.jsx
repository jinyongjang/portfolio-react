import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="left">
          <h1>
            <a href="mailto:ebmdols@naver.com">ebmdols@naver.com</a>
          </h1>
          <p>© MADE BY JIN</p>
        </div>
        <div className="right">
          <a href="mailto:ebmdols@naver.com">
            <div className="contactme">CONTACT ME</div>
          </a>
          <div className="sns">
            <p>
              <Link to={'#'} target="_blank">
                Facebook
              </Link>
            </p>
            <p>
              <Link to={'#'} target="_blank">
                Instagram
              </Link>
            </p>
            <p>
              <Link to={'https://ebmdols.tistory.com/'} target="_blank">
                Blog
              </Link>
            </p>
            <p>
              <Link to={'https://github.com/jinyongjang'} target="_blank">
                Git
              </Link>
            </p>
          </div>
          <div className="worklist">
            <h1>WORK LIST</h1>
            <p>
              <Link to={'https://jinyongjang.github.io/web2023/'} target="_blank">
                Webstandard Site
              </Link>
            </p>
            <p>
              <Link to={'https://jinyongjang.github.io/web2023/site/site1/index.html'} target="_blank">
                Webresponsive Site
              </Link>
            </p>
            <p>
              <Link to={'http://ebmdols.dothome.co.kr/php2/main/main.php'} target="_blank">
                PHP project
              </Link>
            </p>
            <p>
              <Link to={'https://jinyongjang.github.io/web2023/javascript/index.html'} target="_blank">
                Javascript study
              </Link>
            </p>
          </div>
          <div className="worklist2">
            <p>
              <Link to={'https://jin-react01.netlify.app/'} target="_blank">
                React Site
              </Link>
            </p>
            <p>
              <Link to={'https://jin2023-vue.netlify.app/'} target="_blank">
                Vue Site
              </Link>
            </p>
            <p>
              <Link
                to={
                  'https://www.figma.com/file/3UYGYdE2zqb2mgX8GmAR7F/2023-%EC%82%AC%EC%9D%B4%ED%8A%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?type=design&node-id=1734%3A2041&mode=design&t=5zaisJm32BXwuALU-1'
                }
                target="_blank"
              >
                Figma
              </Link>
            </p>
          </div>
        </div>
      </footer>
      <div className="sectionTitle8"></div>
    </>
  );
};

export default Footer;
