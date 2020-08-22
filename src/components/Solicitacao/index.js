import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons'

import { Container, Card, CardHeader, Description, Bold, TitleSolicitacao, Details, Value, Divider, Date, Icon, ValueConcluida  } from './styles';
import avatar from '../../images/avatar.png';

function Solicitacao() {
    return (
        <Container>
            <Card>
                <CardHeader>
                    <Icon>
                        <MaterialCommunityIcons name="bank" size={40} color="gray" />
                    </Icon>
                    <Description>

                      <TitleSolicitacao>
                            <Bold>Você</Bold> solicitou um saque.
                      </TitleSolicitacao>
                      
                      <TitleSolicitacao>
                            Saque concluído.
                      </TitleSolicitacao>
                      
                      <Details>
                            <Value>R$ 90,00</Value>
                            <Divider />

                            <Feather name="lock" color="rgba(255, 255, 255, 0.4)" size={14} />
                            <Date>há 2 dias</Date>
                     </Details>

                    </Description>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <Icon>
                        <FontAwesome5 name="money-bill-wave-alt" size={30} color="gray" />
                    </Icon>
                    <Description>

                      <TitleSolicitacao>
                            <Bold>Você</Bold> realizou uma recarga.
                      </TitleSolicitacao>
                      
                      <TitleSolicitacao>
                            Concluída.
                      </TitleSolicitacao>
                      
                      <Details>
                            <ValueConcluida>R$ 90,00</ValueConcluida>
                            <Divider />

                            <Feather name="lock" color="rgba(255, 255, 255, 0.4)" size={14} />
                            <Date>há 3 dias</Date>
                     </Details>

                    </Description>
                </CardHeader>
            </Card>
        </Container>
    );
}

export default Solicitacao;