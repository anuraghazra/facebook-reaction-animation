import styled from 'styled-components';
import ReactionsWrapper from './ReactionsWrapper'

const LikeThumb = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  width: 100px;
  font-weight: 600;
  color: #606770;
  fill: #606770;

  padding: 15px 20px;
  border-radius: 100px;
  box-shadow: 0 0px 20px -2px rgba(0,0,0,0.2);

  cursor: pointer;

  /* &:hover ${ReactionsWrapper} {
    opacity: 1;
  } */

  &:after {
    position: absolute;
    content: '';
    padding: 50px;
  }
`

export default LikeThumb;