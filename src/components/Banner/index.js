import React from 'react';

import { Container, Datails, Img, Title, Description} from './styles';

import img13 from '../../images/13.png';

function Banner() {
  return (
      <Container>
          <Datails>
            <Title>Cobre um amigo</Title>

            <Description>
                Mantenha suas parcerias em dia, use o PicPay para fazer suas cobranças.
            </Description>
          </Datails>
          <Img source={img13} />
      </Container>
  );
}

export default Banner;