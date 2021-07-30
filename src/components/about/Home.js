import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const HomeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
  .title {
    text-align: center;
    font-size: 100px;
    font-weight: 600;
  }
  .description {
    text-align: center;
    font-size: 30px;
    font-weight: 800;
    line-height: 2.5rem;
    margin-top: 1.5rem;
    background: linear-gradient(
      to right top,
      ${palette.theme[0]},
      ${palette.theme[1]}
    );
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

const OrbitBlock = styled.div`
  @keyframes rotateClockwise {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes rotateImg {
    100% {
      transform: rotate(-360deg);
    }
  }
  position: absolute;
  top: 34rem;
  height: 548px;
  width: 548px;
  border-radius: 50%;
  animation: rotateClockwise 20s linear infinite;
  .skill {
    position: absolute;
    margin-top: 220px;
    margin-left: 220px;
  }
  .skill-img {
    max-width: 100px;
    max-height: 100px;
    animation: rotateImg 20s linear infinite;
  }
  .sk--one {
    transform: rotate(60deg) translate(274px) rotate(-60deg);
  }
  .sk--two {
    transform: rotate(120deg) translate(274px) rotate(-120deg);
  }
  .sk--three {
    transform: rotate(180deg) translate(274px) rotate(-180deg);
  }
  .sk--four {
    transform: rotate(240deg) translate(274px) rotate(-240deg);
  }
  .sk--five {
    transform: rotate(300deg) translate(274px) rotate(-300deg);
  }
  .sk--six {
    transform: rotate(360deg) translate(274px) rotate(-360deg);
  }
`;

const ProfileBlock = styled.div`
  margin-top: 10rem;
  margin-bottom: 10rem;
  height: 548px;
  width: 548px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VignetteBlock = styled.div`
  position: absolute;
  width: 100%;
  height: 160px;
  top: 62rem;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 0.5) 40%,
    rgba(0, 0, 0, 0.8) 60%,
    rgba(0, 0, 0, 1) 90%
  );
  z-index: 500;
`;

const Home = () => {
  return (
    <HomeBlock>
      <div className="title">Yeseo Lee</div>
      <div className="description">
        우리 집 선정
        <br />
        한계를 뛰어넘는 신입 개발자 1위.
      </div>
      <OrbitBlock>
        <div className="skill sk--one">
          <img
            className="skill-img"
            alt="JavaScript"
            src="/img/logo/javascript.png"
          ></img>
        </div>
        <div className="skill sk--two">
          <img
            className="skill-img"
            alt="React"
            src="/img/logo/react.png"
          ></img>
        </div>
        <div className="skill sk--three">
          <img className="skill-img" alt="C" src="/img/logo/c.png"></img>
        </div>
        <div className="skill sk--four">
          <img className="skill-img" alt="css" src="/img/logo/css.png"></img>
        </div>
        <div className="skill sk--five">
          <img
            className="skill-img"
            alt="Photoshop"
            src="/img/logo/photoshop.png"
          ></img>
        </div>
        <div className="skill sk--six">
          <img
            className="skill-img"
            alt="Python"
            src="/img/logo/python.png"
          ></img>
        </div>
      </OrbitBlock>
      <VignetteBlock></VignetteBlock>
      <ProfileBlock>
        <img alt="Profile" src="/img/profile.png"></img>
      </ProfileBlock>
    </HomeBlock>
  );
};

export default Home;
