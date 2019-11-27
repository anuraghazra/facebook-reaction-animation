import React from 'react';
import styled from 'styled-components';

const ReactionWrapper = styled.div`
  position: relative;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: white;
  transition: 0.2s;
  transform-origin: center bottom;
  cursor: pointer;

  &:hover {
    transform: scale(1.4);
    transition: 0.2s;
  }

  &:after {
    content: attr(data-reaction-name);
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    
    padding: 5px;
    font-size: 12px;
    background-color: white;
    color: #606770;
    border-radius: 5px;
    text-transform: capitalize;
    font-weight: 400;
  }
`
const ReactionImage = styled.img`
  width: 100%;
  height: 100%;
`

const Reaction = ({ icon, name }) => {
  return (
    <ReactionWrapper data-reaction-name={name}>
      <ReactionImage src={icon} />
    </ReactionWrapper>
  )
}

export default Reaction;