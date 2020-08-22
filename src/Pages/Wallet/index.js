import React, { useState } from 'react';
import { Switch } from 'react-native'
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign, FontAwesome5 } from '@expo/vector-icons';

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Valeu,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  CardBody,
  AddButton,
  AddLabel,
  UseTicketContainer,
  UseTicketButton,
  UseTicketLabel,
} from './styles';

import creditCard from '../../images/credit-card.png';

function Wallet() {

  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  function handleToggleVisibility(){
    setIsVisible((prevState) => !prevState);
  }

  function handleToggleBalance(){
    setUseBalance((prevState) => !prevState);
  }

  return (
    <Wrapper>
      <Header 
        colors={
          useBalance 
            ? ['#52e78c', '#1ab563']
            : ['#D3D3D3', '#868686']
        }>
        <HeaderContainer>
          <Title>Saldo PicPay</Title>
          <BalanceContainer>
            <Valeu>
            R$ <Bold>{isVisible ? '1.256,00' : '-----'}</Bold>
            </Valeu>
            <EyeButton onPress={handleToggleVisibility}>
              <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="white" />
            </EyeButton>
          </BalanceContainer>
          <Info>Seu saldo esta rendendo 100% do CDI.</Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" size={30} color="#fff" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>
            <Action>
              <FontAwesome name="bank" size={24} color="#fff" />
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>User saldo ao pagar</UseBalanceTitle>
        <Switch 
          value={useBalance}
          onValueChange={handleToggleBalance}
        />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>
          Formas de pagamento
        </PaymentMethodsTitle>

        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>Cadastre seu cartão de crédito</CardTitle>
              <CardInfo>Cadastre um cartão de crédito para poder fazer pagamentos mesmo quanto não tiver saldo no seu PicPay</CardInfo>
            </CardDetails>

            <Img source={creditCard} resizeMode="contain" />
          </CardBody>

          <AddButton>
          <AntDesign name="pluscircleo" size={30} color="#0DB060" />
          <AddLabel>Adicionar cartão de crédito</AddLabel>
          </AddButton>

        </Card>


      <UseTicketContainer>
        <UseTicketButton>
            <FontAwesome5 name="ticket-alt" size={24} color="#0DB060" />
            <UseTicketLabel>Usar código promocional</UseTicketLabel>
        </UseTicketButton>
      </UseTicketContainer>
      </PaymentMethods>
    </Wrapper>
  );
}

export default Wallet;