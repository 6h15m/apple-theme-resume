import React from 'react';
import styled from 'styled-components';

const ProjectItemBlock = styled.div`
  display: flex;
`;

const ProjectItem = ({ detail }) => {
  const {
    title,
    description,
    githubUrl,
    serviceUrl,
    mainImage,
    period,
    personnel,
    technology,
    feature,
    myWork,
  } = detail;
  return (
    <ProjectItemBlock>
      {mainImage && (
        <div className="main-image">
          <img src={mainImage} alt="main" />
        </div>
      )}
    </ProjectItemBlock>
  );
};
