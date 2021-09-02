import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import { Link } from 'react-router-dom';

const ProjectPrevBlock = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    text-align: center;
    font-size: 54px;
    font-weight: 700;
  }
  .project-container {
    margin-top: 7rem;
    display: flex;
    flex-flow: row wrap;
    max-width: 924px;
    justify-content: space-between;
  }
  .project {
    width: 270px;
    margin-bottom: 6rem;
  }
  .project-name {
    font-size: 40px;
    font-weight: 700;
    background: linear-gradient(
      to left,
      ${palette.theme[0]} 50%,
      ${palette.theme[1]} 100%
    );
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
  .project-explain {
    margin-top: 1.8rem;
    font-size: 18px;
    font-weight: 600;
  }
  .project-description {
    margin-top: 1.25rem;
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
    color: ${palette.gray[4]};
  }
  .more-projects {
    color: ${palette.theme[2]};
  }
  .right-arrow {
    margin-left: 0.5rem;
  }
`;

const Profile = () => {
  return (
    <ProjectPrevBlock>
      <div className="title">역시, 인생은 실전.</div>
      <div className="project-container">
        <div className="project">
          <div className="project-name">여향</div>
          <div className="project-explain">향수 추천/필터링 웹 서비스</div>
          <div className="project-description">
            Express, MySQL, Amazon
            <br />
            AWS을 활용해 제작하였습니다.
            <br />
            기획/디자인부터 풀스택 개발까지
            <br /> 넓은 범위의 역할을 수행하였습니다.
          </div>
        </div>
        <div className="project">
          <div className="project-name">미림 인 포토</div>
          <div className="project-explain">
            교내 사진 프로젝트 예약 웹 서비스
          </div>
          <div className="project-description">
            JavaScript, Django를 활용해
            <br />
            제작하였습니다. 구글 폼으로 진행
            <br />
            되었던 예약과 포트폴리오를
            <br /> 자체 사이트로 통합하였습니다.
          </div>
        </div>
        <div className="project">
          <div className="project-name">the code.</div>
          <div className="project-explain">암호 해독 웹 게임</div>
          <div className="project-description">
            JavaScript를 활용해 제작
            <br />
            하였습니다. 쌍자치환 암호 퀴즈를
            <br />
            기반으로 해, 힌트 기능으로 쌍자치환
            <br />
            암호기와 복호기를 지원합니다.
          </div>
        </div>
        <div className="project">
          <div className="project-name">띠</div>
          <div className="project-explain">커뮤니티 웹 서비스</div>
          <div className="project-description">
            JSP, JavaScript, Bootstrap,
            <br />
            MySQL을 활용해 반응형으로 제작
            <br />
            하였습니다. 이메일 인증 회원가입
            <br /> 및 비밀번호 암호화를 지원합니다.
          </div>
        </div>
        <div className="project">
          <div className="project-name">정훈쌤은 애처가!</div>
          <div className="project-explain">픽셀 러닝 액션 게임</div>
          <div className="project-description">
            Python의 Pygame 라이브러리와
            <br />
            SQLite를 활용해 제작하였습니다.
            <br />
            총 6단계로 이루어져 있으며,
            <br />
            진행 상황을 저장할 수 있습니다.
          </div>
        </div>
        <div className="project">
          <div className="project-name">신사 키우기</div>
          <div className="project-explain">방치형 클리커 게임</div>
          <div className="project-description">
            Unity, C#을 활용해 제작
            <br />
            하였습니다. '거지 키우기'를 오마주
            <br />
            하여, 분 당 코인 및 터치 당 코인,
            <br />
            레벨을 제공합니다.
          </div>
        </div>
      </div>
      <Link to={'/project'}>
        <div className="more-projects">
          더 많은 프로젝트 구경하기
          <img
            className="right-arrow"
            src="img/svg/right_arrow.svg"
            alt="right arrow"
          />
        </div>
      </Link>
    </ProjectPrevBlock>
  );
};

export default Profile;
