import React from 'react';
import {StyledStartButton} from './styles/StyledStartButton'
 const startButton=({callback})=>(
     <StyledStartButton onClick={callback}>
         Start game
     </StyledStartButton>
 )
 export default startButton;