import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const FooterBlock = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  color: ${palette.gray[7]};
  margin-bottom: 14px;
  p {
    margin-bottom: 8px;
  }
`;

const Footer = () => {
  return (
    <FooterBlock>
      <p>
        본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.
      </p>
      <p>Copyright 2021. Web Portfolio by Yeseo Lee</p>
    </FooterBlock>
  );
};

export default Footer;
