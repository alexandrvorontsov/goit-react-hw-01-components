import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: ${p => 3 * p.theme.space[8]}px;
  margin: 0 auto;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.card};

  background-color: ${p => p.theme.colors.background};
  color: ${p => p.theme.colors.text};

  text-align: center;
  text-transform: capitalize;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};

  border-collapse: collapse;

  td {
    height: ${p => p.theme.space[5]}px;
  }
  th {
    background-color: ${p => p.theme.colors.primary};

    height: ${p => p.theme.space[5]}px;
    :first-child {
      border-top-left-radius: ${p => p.theme.radii.normal};
      border-right: ${p => p.theme.borders.normal}
        ${p => p.theme.colors.secondary};
    }

    :last-child {
      border-top-right-radius: ${p => p.theme.radii.normal};
      border-left: ${p => p.theme.borders.normal}
        ${p => p.theme.colors.secondary};
    }
  }
  tbody td {
    :first-child {
      border-right: ${p => p.theme.borders.normal}
        ${p => p.theme.colors.secondary};
    }
    :last-child {
      border-left: ${p => p.theme.borders.normal}
        ${p => p.theme.colors.secondary};
    }
  }
  tbody tr:nth-child(odd) {
    background-color: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.accent};
  }

  tbody tr:nth-child(even) {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
  tbody tr:last-child {
    td:first-child {
      border-bottom-left-radius: ${p => p.theme.radii.normal};
    }
    td:last-child {
      border-bottom-right-radius: ${p => p.theme.radii.normal};
    }
  }
`;
