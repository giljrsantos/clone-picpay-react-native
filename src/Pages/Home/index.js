import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Wrapper, Container, Header, BalanceContainer, BalanceTitle, Balance } from './styles';

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';
import Solicitacao from '../../components/Solicitacao';

function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />

          <BalanceContainer>
            <BalanceTitle>Meu Saudo</BalanceTitle>
            <Balance>R$ 1.256,00</Balance>
          </BalanceContainer>

          <MaterialCommunityIcons name="gift" size={30} color="#10c86e" />
        </Header>

        <Suggestions />
        <Activities />
        <Tips />
        <Banner />

        <Solicitacao />
      </Container>
    </Wrapper>
  );
}

export default Home;