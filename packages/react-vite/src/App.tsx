import { styled } from '@mui/material';
import { useRoutes } from 'react-router-dom';

import routes from '@/Routes';
import Header from '@/header';

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
  const routing = useRoutes(routes);
  return (
    <Root>
      <Header />
      {routing}
    </Root>
  );
};

export default App;
