import styled from 'styled-components';

import { Button } from '@material-ui/core';

import { ReactComponent as MainLogo } from '../../images/logo-react-zzaria.svg';

export const Container = styled.div`
  padding: 20px;
`;

export const Logo = styled(MainLogo)`
  width: 100%;
`;

export const GitHubButton = styled(Button).attrs({
  variant: "contained",
  fullWidth: true
})`
  && {
    font-size: 25px;
    max-width: 480px;
    padding: 15px;
    text-transform: none;
  }
`
