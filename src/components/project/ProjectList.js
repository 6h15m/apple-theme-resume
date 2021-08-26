import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import { Link } from 'react-router-dom';

const ProjectListBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  hr {
    width: 320px;
    margin: 0;
  }
  .project-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 1112px;
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
      <div className="project-container">
        <Link to="project/1">
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
        </Link>
      </div>
    </ProjectListBlock>
  );
};

export default ProjectList;
