import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const ProjectItemBlock = styled.div`
  width: 360px;
  height: 244px;
  padding: 20px;
  margin-bottom: 16px;
  background: ${palette.gray[8]};
  cursor: pointer;
  :hover {
    background: linear-gradient(
      to right top,
      ${palette.theme[0]},
      ${palette.theme[1]}
    );
  }
  hr {
    width: 320px;
    margin: 0;
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

const ProjectItem = ({ detail }) => {
  const { no, title, description, period } = detail;
  return (
    <ProjectItemBlock>
      <hr />
      <div className="project-number">No.{no}</div>
      <div className="project-name">{title}</div>
      <div className="project-description">{description}</div>
      <div className="bottom">
        <div className="project-term">{period}</div>
        <img src="img\svg\right_arrow_big.svg" alt="right arrow" />
      </div>
    </ProjectItemBlock>
  );
};

export default ProjectItem;
