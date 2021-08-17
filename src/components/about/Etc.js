import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const EtcBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16rem;
  align-items: center;
  .title {
    display: flex;
    flex-direction: column;
    font-size: 40px;
    font-weight: 700;
    line-height: 47px;
    color: ${palette.gray[5]};
  }
  b {
    color: ${palette.gray[0]};
    font-weight: 700;
  }
`;

const PrizeBlock = styled.div`
  display: flex;
  flex-direction: row;
  .title {
    text-align: right;
    margin-right: 94px;
  }
  .prize-container {
    display: flex;
    flex-direction: column;
  }
  .prize {
    display: flex;
    flex-direction: row;
    margin-bottom: 40px;
  }
  .prize-year {
    width: 70px;
    font-size: 30px;
    font-weight: 600;
    color: ${palette.gray[0]};
  }
  .prize-list {
    margin-left: 35px;
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    color: ${palette.gray[5]};
  }
`;

const ClubBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  align-items: center;
  .title {
    margin-left: 530px;
  }
  .club-container {
    margin-top: 45px;
  }
  .club {
    display: flex;
    max-width: 1018px;
    flex-direction: row;
    margin-bottom: 44px;
    align-items: center;
  }
  .club-img:nth-child(1) {
    margin-right: 94px;
  }
  .club-img:nth-child(2) {
    margin-left: 94px;
  }
  .club-text {
    display: flex;
    flex-direction: column;
  }
  .club-text:nth-child(1) {
    text-align: right;
  }
  .club-title {
    font-size: 30px;
    font-weight: 600;
    color: ${palette.gray[0]};
  }
  .club-description {
    margin-top: 14px;
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    color: ${palette.gray[5]};
  }
`;

const CertificateBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8rem;
  .title {
    text-align: right;
    margin-right: 94px;
  }
  .certificate-container {
    display: flex;
    flex-direction: column;
  }
  .certificate {
    display: flex;
    flex-direction: row;
    margin-bottom: 40px;
  }
  .certificate-office {
    width: 210px;
    font-size: 30px;
    font-weight: 600;
    color: ${palette.gray[0]};
  }
  .certificate-list {
    margin-left: 35px;
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    color: ${palette.gray[5]};
  }
`;

const Etc = () => {
  return (
    <EtcBlock>
      <PrizeBlock>
        <div className="title">
          수상경력
          <br />
          <b>내신도 놓치지 않는다.</b>
        </div>
        <div className="prize-container">
          <div className="prize">
            <div className="prize-year">2019</div>
            <div className="prize-list">
              과학탐구대회 우수상
              <br />
              비즈쿨 경제글쓰기 대회 동상
              <br />
              1학기 과목별 우수상(한국사, 웹사이트 제작)
              <br />
              2학기 과목별 우수상(수학, 프로그래밍(JAVA))
            </div>
          </div>
          <div className="prize">
            <div className="prize-year">2020</div>
            <div className="prize-list">
              선행상
              <br />
              1학기 과목별 우수상(수학1, 영어1, 프로그래밍(JAVA))
              <br />
              2학기 과목별 우수상(서버구축 및 운영)
            </div>
          </div>
          <div className="prize">
            <div className="prize-year">2021</div>
            <div className="prize-list">과학탐구대회 최우수상</div>
          </div>
        </div>
      </PrizeBlock>
      <ClubBlock>
        <div className="title">
          동아리 활동
          <br />
          <b>활발함은 나의 무기.</b>
        </div>
        <div className="club-container">
          <div className="club">
            <img className="club-img" src="img/club_1.png" alt="선도부" />
            <div className="club-text">
              <div className="club-title">선도부 총무</div>
              <div className="club-description">
                많은 학생들에게 모범이 되며 <br />
                봉사정신과 책임감을 배울 수 있는 선도부로서 <br />
                3년간 꾸준히 활동하는 중입니다.
              </div>
            </div>
          </div>
          <div className="club">
            <div className="club-text">
              <div className="club-title">사진부 SNS 홍보팀</div>
              <div className="club-description">
                Facebook, Instagram에 <br />
                사진부 소식 및 행사 정보를 업로드합니다. <br />
                SNS 홍보를 통해 교내 창업 행사에서
                <br />
                최우수상을 수상한 경험이 있습니다.
              </div>
            </div>
            <img className="club-img" src="img/club_2.png" alt="사진부" />
          </div>
        </div>
      </ClubBlock>
      <CertificateBlock>
        <div className="title">
          자격증
          <br />
          <b>으로 줄넘기도 가능.</b>
        </div>
        <div className="certificate-container">
          <div className="certificate">
            <div className="certificate-office">한국산업인력공단</div>
            <div className="certificate-list">정보처리기능사</div>
          </div>
          <div className="certificate">
            <div className="certificate-office">한국생산성본부</div>
            <div className="certificate-list">
              ITQ 아래한글 A급
              <br />
              ITQ 한글엑셀 A급
              <br />
              ITQ 한글파워포인트 A급
              <br />
              ITQ OA MASTER
              <br />
              GTQ 2급
            </div>
          </div>
          <div className="certificate">
            <div className="certificate-office">한국정보관리협회</div>
            <div className="certificate-list">문서실무사 1급</div>
          </div>
          <div className="certificate">
            <div className="certificate-office">Microsoft/YBM</div>
            <div className="certificate-list">
              MTA Java Track
              <br />
              COS Pro Python 2급
            </div>
          </div>
        </div>
      </CertificateBlock>
    </EtcBlock>
  );
};

export default Etc;
