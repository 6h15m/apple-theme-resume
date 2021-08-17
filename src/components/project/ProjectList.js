import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const ProjectListBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
  hr {
    width: 320px;
    margin: 0;
  }
  .title {
    font-size: 50px;
    font-weight: 600;
  }
  .tag-list {
    display: flex;
    flex-direction: row;
    min-width: 736px;
    justify-content: space-between;
    margin-top: 4rem;
  }
  .tag {
    font-size: 20px;
    font-weight: 600;
    color: ${palette.gray[6]};
    cursor: pointer;
  }
  .tag:hover {
    font-weight: 700;
    background: linear-gradient(
      to right top,
      ${palette.theme[0]},
      ${palette.theme[1]}
    );
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
  .project-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 1112px;
    margin-top: 30px;
  }
  .project {
    width: 360px;
    height: 244px;
    padding: 20px;
    margin-bottom: 16px;
    background: ${palette.gray[8]};
    cursor: pointer;
  }
  .project:hover {
    background: linear-gradient(
      to right top,
      ${palette.theme[0]},
      ${palette.theme[1]}
    );
  }
  .project-number {
    margin-top: 10px;
    font-size: 24px;
    font-weight: 300;
  }
  .project-name {
    margin-top: 32px;
    font-size: 30px;
    font-weight: 700;
  }
  .project-description {
    width: 262px;
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
  .bottom {
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .project-term {
    font-size: 20px;
    font-weight: 400;
  }
`;

const ProjectList = () => {
  return (
    <ProjectListBlock>
      <div className="title">프로젝트</div>
      <div className="tag-list">
        <div className="tag">#ALL</div>
        <div className="tag">#React</div>
        <div className="tag">#Vue.js</div>
        <div className="tag">#JavaScript</div>
        <div className="tag">#Java</div>
        <div className="tag">#Python</div>
        <div className="tag">#Node.js</div>
        <div className="tag">#Design</div>
      </div>
      <div className="project-container">
        <div className="project">
          <hr />
          <div className="project-number">No.01</div>
          <div className="project-name">미림 인 포토</div>
          <div className="project-description">
            교내 사진부의 '미림 인 포토' 프로젝트 예약 및 포트폴리오 사이트
          </div>
          <div className="bottom">
            <div className="project-term">2021.03-2021.06</div>
            <img src="img/svg/right_arrow_big.svg" alt="right arrow" />
          </div>
        </div>
        <div className="project">
          <hr />
          <div className="project-number">No.02</div>
          <div className="project-name">미림 인 포토</div>
          <div className="project-description">
            교내 사진부의 '미림 인 포토' 프로젝트 예약 및 포트폴리오 사이트
          </div>
          <div className="bottom">
            <div className="project-term">2021.03-2021.06</div>
            <img src="img/svg/right_arrow_big.svg" alt="right arrow" />
          </div>
        </div>
        <div className="project">
          <hr />
          <div className="project-number">No.03</div>
          <div className="project-name">미림 인 포토</div>
          <div className="project-description">
            교내 사진부의 '미림 인 포토' 프로젝트 예약 및 포트폴리오 사이트
          </div>
          <div className="bottom">
            <div className="project-term">2021.03-2021.06</div>
            <img src="img/svg/right_arrow_big.svg" alt="right arrow" />
          </div>
        </div>
        <div className="project">
          <hr />
          <div className="project-number">No.04</div>
          <div className="project-name">미림 인 포토</div>
          <div className="project-description">
            교내 사진부의 '미림 인 포토' 프로젝트 예약 및 포트폴리오 사이트
          </div>
          <div className="bottom">
            <div className="project-term">2021.03-2021.06</div>
            <img src="img/svg/right_arrow_big.svg" alt="right arrow" />
          </div>
        </div>
        <div className="project">
          <hr />
          <div className="project-number">No.05</div>
          <div className="project-name">미림 인 포토</div>
          <div className="project-description">
            교내 사진부의 '미림 인 포토' 프로젝트 예약 및 포트폴리오 사이트
          </div>
          <div className="bottom">
            <div className="project-term">2021.03-2021.06</div>
            <img src="img/svg/right_arrow_big.svg" alt="right arrow" />
          </div>
        </div>
        <div className="project">
          <hr />
          <div className="project-number">No.06</div>
          <div className="project-name">미림 인 포토</div>
          <div className="project-description">
            교내 사진부의 '미림 인 포토' 프로젝트 예약 및 포트폴리오 사이트
          </div>
          <div className="bottom">
            <div className="project-term">2021.03-2021.06</div>
            <img src="img/svg/right_arrow_big.svg" alt="right arrow" />
          </div>
        </div>
      </div>
    </ProjectListBlock>
  );
};

export default ProjectList;
