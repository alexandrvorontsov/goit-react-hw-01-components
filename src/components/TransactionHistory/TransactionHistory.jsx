import PropTypes from 'prop-types';

import {
  TransactionTable,
  TransactionHead,
  TableType,
  TableAmount,
  TransactionBody,
  TableCurrency,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable className="transaction-history">
      <TransactionHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransactionHead>
      <TransactionBody>
        {items.map(({ currency, amount, type, id }) => {
          return (
            <tr key={id}>
              <TableType>{type}</TableType>
              <TableAmount>{amount}</TableAmount>
              <TableCurrency>{currency}</TableCurrency>
            </tr>
          );
        })}
      </TransactionBody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired
  ),
};
