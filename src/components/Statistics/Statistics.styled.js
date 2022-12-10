import styled from 'styled-components';

export const StatisticsSection = styled.section`
  background-color: ${p => p.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  margin: 15px auto;
  border-radius: 5px;
  box-shadow: 5px 5px 12px 2px #96b8d4;

  overflow: hidden;
`;

export const StatisticsTitle = styled.h2`
  font-size: 28px;
  padding-top: 20px;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: ${p => p.theme.colors.primaryText};
`;

export const StatisticsList = styled.ul`
  width: 100%;
  display: flex;
`;

export const StatisticsItem = styled.li`
  width: 100%;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ eventType, theme }) => {
    switch (eventType) {
      case '.docx':
        return theme.colors.green;
      case '.pdf':
        return theme.colors.yellow;
      case '.mp3':
        return theme.colors.pink;
      case '.psd':
        return theme.colors.orange;
      default:
        return theme.colors.lightGrey;
    }
  }};
`;

export const StatisticsItemLabel = styled.span`
  color: ${p => p.theme.colors.primaryText};
  font-size: 13px;
`;

export const StatisticsItemValue = styled.span`
  color: ${p => p.theme.colors.primaryText};
  font-size: 22px;
`;
