import styled from 'styled-components';

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  @media screen and (min-width: 1024px){
    flex-direction: row
  }
`;

const InfoGroup = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  flex:1;
  padding: 1rem;

  @media screen and (min-width: 1024px){
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;


const InfoLabel = styled.span`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: 0.875rem;
  font-weight: 600
`;

const InfoValue = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 800;
  font-size: 1.125rem;
`;

const InfoGroupSeperator = styled.hr`
  border-color: #9d9d9d30;
`;

export { InfoWrapper, InfoGroup, InfoLabel, InfoValue, InfoGroupSeperator }