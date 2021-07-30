import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const SkillsBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16rem;
  align-items: center;
  .skills-container {
    min-width: 924px;
    display: flex;
    flex-direction: column;
  }
  .title {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    font-size: 64px;
    font-weight: 700;
    line-height: 75px;
    color: ${palette.gray[5]};
  }
  b {
    color: ${palette.gray[0]};
    font-weight: 700;
  }
`;

const SkillsList = styled.div`
  margin-top: 4.25rem;
  .skill {
    display: flex;
    flex-direction: logo-row;
    min-width: 924px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3.75rem;
  }
  .logo-container {
    width: 360px;
    height: 360px;
    border-radius: 10px;
    border: solid 2px transparent;
    background-image: linear-gradient(#000000, #000000),
      linear-gradient(to right top, ${palette.theme[1]}, ${palette.theme[0]});
    background-origin: border-box;
    background-clip: content-box, border-box;
  }
  .skill-description {
    width: 360px;
    font-size: 24px;
    font-weight: 600;
    line-height: 34px;
    color: ${palette.gray[5]};
  }
  .sk--1 {
    width: 924px;
  }
  .sk--2 {
    padding-left: 110px;
    width: 816px;
  }
  .logo-img-container {
    height: 22rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .logo-row {
    display: flex;
    max-width: 20rem;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    max-width: 72px;
    max-height: 72px;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .long {
    max-width: 120px;
  }
`;

const Skills = () => {
  return (
    <SkillsBlock>
      <div className="skills-container">
        <div className="title">
          기술 스택
          <br />
          <b>
            무서운 속도로
            <br />
            성장 중.
          </b>
        </div>
        <SkillsList>
          <div className="skill sk--1">
            <div className="logo-container">
              <div className="logo-img-container">
                <div className="logo-row">
                  <img className="logo" src="img/logo/html.png" alt="HTML5" />
                  <img className="logo" src="img/logo/css.png" alt="CSS3" />
                  <img
                    className="logo"
                    src="img/logo/javascript.png"
                    alt="JavaScript"
                  />
                </div>
                <div className="logo-row">
                  <img className="logo" src="img/logo/vuejs.png" alt="Vue.js" />
                  <img className="logo" src="img/logo/react.png" alt="React" />
                  <img
                    className="logo"
                    src="img/logo/bootstrap.png"
                    alt="Bootstrap"
                  />
                </div>
                <div className="logo-row">
                  <img
                    className="logo long"
                    src="img/logo/jquery.png"
                    alt="jQuery"
                  />
                  <img
                    className="logo long"
                    src="img/logo/ajax.png"
                    alt="AJAX"
                  />
                </div>
              </div>
            </div>
            <div className="skill-description">
              <b>Front-end.</b> React, Vue 등의 <br />
              프레임워크를 사용해본 경험이 <br />
              있으며 ES6+ 문법을 준수하여 반응형
              <br />웹 서비스를 구현할 수 있습니다.
            </div>
          </div>
          <div className="skill sk--2">
            <div className="logo-container">
              <div className="logo-img-container">
                <div className="logo-row">
                  <img
                    className="logo"
                    src="img/logo/python.png"
                    alt="Python"
                  />
                  <img className="logo" src="img/logo/c.png" alt="C" />
                </div>
                <div className="logo-row">
                  <img className="logo" src="img/logo/java.png" alt="Java" />
                  <img
                    className="logo"
                    src="img/logo/spring.png"
                    alt="Spring"
                  />
                  <img
                    className="logo long"
                    src="img/logo/nodejs.png"
                    alt="Node.js"
                  />
                </div>
                <div className="logo-row">
                  <img
                    className="logo long"
                    src="img/logo/oracle.png"
                    alt="Oracle"
                  />
                  <img
                    className="logo long"
                    src="img/logo/mysql.png"
                    alt="MySQL"
                  />
                </div>
                <div className="logo-row">
                  <img
                    className="logo long"
                    src="img/logo/sqlite.png"
                    alt="SQLite"
                  />
                  <img
                    className="logo"
                    src="img/logo/mariadb.png"
                    alt="MariaDB"
                  />
                </div>
              </div>
            </div>
            <div className="skill-description">
              <b>Back-end.</b> Java, Python, <br />
              Spring, Node.js 등의 다양한 <br />
              기술을 활용한 프로젝트 경험이
              <br />
              있습니다. 또한 여러 데이터베이스를
              <br />
              사용할 수 있습니다.
            </div>
          </div>
          <div className="skill sk--1">
            <div className="logo-container">
              <div className="logo-img-container">
                <div className="logo-row">
                  <img
                    className="logo"
                    src="img/logo/vscode.png"
                    alt="Visual Studio Code"
                  />
                  <img
                    className="logo"
                    src="img/logo/vs.png"
                    alt="Visual Studio"
                  />
                </div>
                <div className="logo-row">
                  <img
                    className="logo"
                    src="img/logo/eclipse.png"
                    alt="Eclipse"
                  />
                  <img className="logo" src="img/logo/atom.png" alt="Atom" />
                  <img
                    className="logo"
                    src="img/logo/github.png"
                    alt="Github"
                  />
                </div>
                <div className="logo-row">
                  <img
                    className="logo"
                    src="img/logo/pycharm.png"
                    alt="PyCharm"
                  />
                  <img
                    className="logo"
                    src="img/logo/webstorm.png"
                    alt="WebStorm"
                  />
                </div>
              </div>
            </div>
            <div className="skill-description">
              <b>Development Tools.</b> 여러 종류의 <br />
              개발 툴을 경험해보았으며, <br />
              유연하게 적응합니다. 또한 Git,
              <br />
              GitHub를 능숙하게 사용합니다.
            </div>
          </div>
          <div className="skill sk--2">
            <div className="logo-container">
              <div className="logo-img-container">
                <div className="logo-row">
                  <img
                    className="logo"
                    src="img/logo/photoshop.png"
                    alt="photoshop"
                  />
                  <img className="logo" src="img/logo/xd.png" alt="xd" />
                </div>
                <img className="logo" src="img/logo/figma.png" alt="figma" />
                <div className="logo-row">
                  <img
                    className="logo"
                    src="img/logo/premiere.png"
                    alt="premiere"
                  />
                  <img
                    className="logo"
                    src="img/logo/lightroom.png"
                    alt="lightroom"
                  />
                </div>
              </div>
            </div>
            <div className="skill-description">
              <b>Design Tools.</b> 대부분의 Adobe
              <br />
              툴을 능숙하게 다루며, <br />
              Adobe XD, Figma를 이용한
              <br />
              프로토타이핑 경험이 있습니다.
            </div>
          </div>
        </SkillsList>
      </div>
    </SkillsBlock>
  );
};

export default Skills;
