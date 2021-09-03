import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import ProjectInfo from '../project/ProjectInfo';

const DetailItemBlock = styled.div`
  display: flex;
  min-width: 1112px;
  .main-image-container {
    display: flex;
    background: linear-gradient(
      to right top,
      ${palette.theme[0]},
      ${palette.theme[1]}
    );
  }
  .main-image {
    width: 1112px;
    height: 375px;
  }
`;

const DetailItem = ({ num }) => {
  const {
    title,
    description,
    period,
    people,
    technology,
    mywork,
    feature,
    github,
    imgUrl,
  } = ProjectInfo[num - 1];

  return (
    <DetailItemBlock>
      <div className="main-image-container">
        <img className="main-image" src={imgUrl} alt="main" />
      </div>
      <div className="info-container">
        <div className="left-container">
          <div className="main-info-container">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
            <div className="sub-info-container">
              <h4>기간</h4>
              <div className="sub-info">{period}</div>
            </div>
            <div className="sub-info-container">
              <h4>참여 인원</h4>
              <div className="sub-info">{people}</div>
            </div>
            <div className="sub-info-container">
              <h4>기간</h4>
              <div className="sub-info">{technology}</div>
            </div>
          </div>
        </div>
        <div className="right-container"></div>
      </div>
    </DetailItemBlock>
  );
};

export default DetailItem;
