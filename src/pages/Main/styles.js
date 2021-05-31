import styled from 'styled-components';

import { ReactComponent as MainLogo } from '../../images/logo-react-zzaria.svg';

export const LogoContainer = styled.div`
  flex-grow: 1;
`

export const Logo = styled(MainLogo)`
  width: 200px;
  height: 50px;

  & path {
    fill: #fff;
  }

  & line {
    stroke: #fff;
  }

`;

export const MaterialToolbar = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
`

export const Content = styled.main`
  padding: 80px 20px 20px;
`

export const MaterialDivider = styled.div`
  margin: 20px 0;
  width: 100%;
`;

export const PaperPizza = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  min-width: 250px;
`;

export const Pizza = styled.div`
  border-radius: 50%;
  border: 1px solid #ccc;
  height: 200px;
  width: 200px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  &::before,
  &::after {
    content: '';
    background: #ccc;
    position: absolute;
    transform: rotate(45deg);
  }

  &::before {
    height: 1px;
    width: 160px;
  }

  &::after {
    height: 160px;
    width: 1px;
  }
`;

export const PizzaText = styled.div`
  font-size: 1.2rem;
  width: 80px;
  height: 80px;
  background: #fff;
  border-radius: 50%;
  position: relative;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const PizzasGrid = styled.div`
  padding: 10px;
`
