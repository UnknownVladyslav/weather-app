import styled from 'styled-components';

import { Flex } from 'components/App/GlobalStyled';

const Wrap = styled.div`
  ${Flex({ justify: 'center', align: 'center' })};
  height: 100%;
  width: 100%;
`;

const DailyInfoBlock = styled.div`
  ${Flex({ direction: 'column', align: 'space-between' })}
  row-gap: 20px;
  height: 620px;
  width: 460px;
  border-radius: 0 30px 30px 0;
  padding: 57px;
  background-color: ${({ theme }) => theme.dynamicBlack};
`;

const SideBlock = styled.div`
  ${Flex({
    align: 'flex-start',
    direction: 'column',
    justify: 'space-between',
  })};
  height: 680px;
  width: 490px;
  border-radius: 30px;
  padding: 30px 30px 90px 30px;
  background: ${({ theme }) => theme.lucea};
`;

const Date = styled.div`
  ${Flex({ direction: 'column', gap: '20px', align: 'flex-start' })};
  padding-block: 30px;
`;

const Location = styled.div`
  ${Flex({ gap: '10px' })};
  margin-top: 10px;
`;

const Weather = styled.div`
  ${Flex({ direction: 'column', gap: '30px', align: 'flex-start' })};
`;

const Degrees = styled.p`
  font-size: 50px;
  font-weight: 600;
`;

const Units = styled.p`
  font-size: 28px;
  font-weight: 500;
`;

const Row = styled.div`
  ${Flex({ justify: 'space-between' })}
`;

const WindDirection = styled.div<{
  direction: number;
}>`
  transform: ${({ direction }) => `rotate(${direction}deg)`};
`;

export {
  Wrap,
  SideBlock,
  DailyInfoBlock,
  Date,
  Location,
  Weather,
  Degrees,
  Units,
  Row,
  WindDirection,
};
