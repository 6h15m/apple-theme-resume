import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import ProjectInfo from '../project/ProjectInfo';
import { Link } from 'react-router-dom';

const DetailItemBlock = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1112px;
  flex-direction: column;
  h4 {
    font-size: 1.6rem;
    font-weight: 700;
    margin-right: 1.2rem;
  }
  .main-image-container {
    display: flex;
    background: linear-gradient(
      to right top,
      ${palette.theme[0]},
      ${palette.theme[1]}
    );
    margin-bottom: 3rem;
  }
  .main-image {
    width: 1112px;
    height: 375px;
  }
  .info-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-bottom: 5rem;
  }
  .bottom-info-container {
    display: flex;
    flex-direction: row;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .title {
    font-size: 5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .description {
    font-size: 1.4rem;
    color: ${palette.gray[4]};
    margin-bottom: 4.8rem;
  }
  .sub-info-container {
    display: flex;
    flex-direction: row;
  }
  .sub-info {
    font-size: 1.6rem;
    color: ${palette.gray[4]};
    margin-bottom: 2rem;
  }
  .icons {
    width: 2.6rem;
    height: 2.6rem;
    margin-left: 1rem;
  }
  .sub-info-box {
    width: 24rem;
    font-size: 1.6rem;
    color: ${palette.gray[4]};
    margin-top: 1.4rem;
    line-height: 2rem;
  }
  .bottom-info-container {
    justify-content: space-between;
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
    features,
    github,
    imgUrl,
    web,
  } = ProjectInfo[num - 1];

  return (
    <DetailItemBlock>
      <div className="main-image-container">
        {imgUrl ? <img className="main-image" src={imgUrl} alt="main" /> : ''}
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
              <h4>사용 기술</h4>
              <div className="sub-info">{technology}</div>
            </div>
          </div>
        </div>
        <div className="right-container">
          {github ? (
            <a href={github} target="_blank" rel="noreferrer">
              <img
                className="icons"
                src="../img/logo/github.png"
                alt="github"
              />
            </a>
          ) : (
            ''
          )}
          {web ? (
            <a href={web} target="_blank" rel="noreferrer">
              <img className="icons" src="../img/logo/web.png" alt="website" />
            </a>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="bottom-info-container">
        <div className="bottom-info">
          <h4>담당 업무</h4>
          <div className="sub-info-box">{mywork}</div>
        </div>
        <div className="bottom-info">
          <h4>주요 기능</h4>
          <div className="sub-info-box">
            {features.map((f) => (
              <div>
                - {f}
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </DetailItemBlock>
  );
};

export default DetailItem;
