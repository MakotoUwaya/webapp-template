import { styled } from '@mui/material';
import type { JSX } from 'react';
import { useRoutes } from 'react-router-dom';

import Header from '@/header';
import routes from '@/Routes';

const Root = styled('div')`
  padding: 1% 2% 10vh 2%;
  width: 100%;
  min-height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & a {
    text-decoration: none;
    color: ${({ theme: { palette } }) => palette.primary.main};
  }
`;

const App = (): JSX.Element => {
  const routing: JSX.Element | null = useRoutes(routes);
  return (
    <Root>
      <Header />
      {routing}
    </Root>
  );
};

export default App;
