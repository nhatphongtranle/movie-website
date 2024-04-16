import React from 'react';
import styled from 'styled-components';
import background from '../assets/Background-image.jpg';

export default function BackgroundImage() {
  return (
    <Container>
      <div className="Background-image">
        <img src={background} alt="background" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 90vh;
  width: 150vw;
  img {
    height: 90vh;
    width: 150vw;
  }
`;
