import styled from 'styled-components';

const TableContainer = styled.div`
    max-width:100%;
    overflow-x: scroll;
`;
const Table = styled.table`
  border-collapse: collapse;
  table-layout: fixed;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey2};
`;


const ActionGroup = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    gap: 1.2rem
`;


const TableHeading = styled.th`
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey2};
    color: ${({ theme }) => theme.colors.lightGrey};
    padding-top: .5rem;
    padding-bottom: .5rem;
    padding-left:1rem;
    padding-right:1rem;
    text-align:left;
`;


const TableData = styled.td`
    padding-left:1rem;
    padding-right:1rem;
    font-size: 15px;
    line-height: 1.4;

    &:nth-child(2){
        min-width: 220px
    }
    &:nth-child(3){
        min-width: 140px
    }
    &:nth-child(4){
        min-width: 140px
    }
    &:nth-child(5){
        min-width: 150px
    }
    &:nth-child(7){
        min-width: 170px;
        text-align:center;
        background-color:${({ theme }) => theme.colors.bodyBg};
    }
    &:nth-child(8){
        background-color:${({ theme }) => theme.colors.bodyBg};
    }
    &:first-child{
        padding-left: 1.5rem;
        border-left:1px solid ${({ theme }) => theme.colors.white};
    }
    .text-lightGrey{
        color: ${({ theme }) => theme.colors.secondary};
    }
    .text-black{
        color: ${({ theme }) => theme.colors.black};
        font-weight: 900;
    }
    &:last-child{
        padding-right: 1.5rem;
        border-right:1px solid ${({ theme }) => theme.colors.white}
    }
    padding-top: .5rem;
    padding-bottom: .5rem;
    color: ${({ theme }) => theme.colors.black};
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightGrey2};
`;


export { TableContainer, ActionGroup, Table, TableHeading, TableData }