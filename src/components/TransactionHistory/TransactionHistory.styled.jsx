import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin: 60px auto;
  width: 800px;
  border-radius: 5px;
  background-color: ${p => p.theme.colors.white};
  overflow: hidden;
  box-shadow: 5px 5px 10px 1px #9b9b9b;
  text-align: center;
  table-layout: fixed;
  border-collapse: collapse;
`;
export const TransactionBody = styled.tbody`
  font-size: 15px;
  font-weight: 300;
  line-height: 30px;
  background-color: #fcf2f3;
`;
export const TransactionHead = styled.thead`
  color: ${p => p.theme.colors.white};
  text-transform: uppercase;
  font-size: 17px;
  font-weight: 800;
  line-height: 45px;
  background-color: #02b9c2;
`;
export const TableType = styled.td`
  text-align: left;
  padding-left: 100px;
  text-transform: capitalize;
  border-bottom: 2px solid #e0e6e7;
`;
export const TableAmount = styled.td`
  border-left: 2px solid #e0e6e7;
  border-bottom: 2px solid #e0e6e7;
  padding: 10px;
`;
export const TableCurrency = styled.td`
  border-left: 2px solid #e0e6e7;
  border-bottom: 2px solid #e0e6e7;
  padding: 10px;
`;
