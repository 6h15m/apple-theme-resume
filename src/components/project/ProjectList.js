import React from 'react';
import styled from 'styled-components';
import ProjectInfo from './ProjectInfo';
import ProjectItem from './ProjectItem';
import { Link } from 'react-router-dom';

const ProjectListBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  .project-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 1112px;
  }
`;

const ProjectList = ({ tag }) => {
  return (
    <ProjectListBlock>
      <div className="project-container">
        {ProjectInfo.map((info) =>
          tag === 'all' || info.tag === tag ? (
            <Link to={`detail/${info.no}`}>
              <ProjectItem key={info.no} detail={info} />
            </Link>
          ) : (
            ''
          ),
        )}
      </div>
    </ProjectListBlock>
  );
};

export default ProjectList;
