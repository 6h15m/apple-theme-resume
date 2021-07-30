import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const ProfileBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  align-items: center;
  .profile-container {
    min-width: 924px;
  }
  .title {
    font-size: 54px;
    font-weight: 700;
    line-height: 70px;
  }
  .profile-contents {
    display: flex;
    margin-top: 6.5rem;
    justify-content: space-between;
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .description {
    color: ${palette.gray[5]};
    font-size: 30px;
    font-weight: 700;
    line-height: 40px;
  }
  b {
    color: ${palette.gray[0]};
  }
`;

const Profile = () => {
  return (
    <ProfileBlock>
      <div className="profile-container">
        <div className="title">
          주니어의 패기,
          <br /> 시니어의 장인정신.
        </div>
        <div className="profile-contents">
          <img src="img/profile_1.png" alt="Profile" />
          <div className="right">
            <img src="img/chat.png" alt="Chat" />
            <div className="description">
              <b>분야를 가리지 않는 열정</b>으로 <br />
              소프트웨어 이론, 웹 프로그래밍, UI/UX
              <br />
              디자인 등의 기술을 다양하게 학습하고 <br />
              경험하였습니다. 여기서 그치지 않고, <br />
              언제나 <b>효율과 완벽함을 추구</b>하며 <br />
              성장합니다.
            </div>
          </div>
        </div>
      </div>
    </ProfileBlock>
  );
};

export default Profile;
