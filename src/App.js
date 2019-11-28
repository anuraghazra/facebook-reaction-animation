import React, { useState } from 'react';
import styled from 'styled-components';

// svg emojis
import like from './assets/like.svg';
import love from './assets/love.svg';
import haha from './assets/haha.svg';
import wow from './assets/wow.svg';
import sad from './assets/sad.svg';
import angry from './assets/angry.svg';

// components
import Container from './components/Container';
import ReactionsWrapper from './components/ReactionsWrapper';
import Reaction from './components/Reaction';
import Like from './components/likeButton';
import LikeThumb from './components/LikeThumb';

const FBPost = styled.section`
  margin: auto;
`
const FooterText = styled.span`
  font-size: 12px;
  color: #606770;

  a {
    color: #0084ff;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`

// animation config
export const list = {
  visible: {
    opacity: 1,
    y: 0,
    transformOrigin: '50%',
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.04,
    },
  },
  hidden: {
    opacity: 0,
    y: 50,
    transformOrigin: '50%',
    scale: 0,
  },
}


function App() {
  const [isHover, setIsHover] = useState(true);

  return (
    <main>
      <Container>
        <FBPost
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <LikeThumb>
            <Like />&nbsp;Like
          <ReactionsWrapper
              initial="hidden"
              animate={isHover ? "visible" : "hidden"}
              variants={list}
            >
              <Reaction name="like" icon={like} />
              <Reaction name="love" icon={love} />
              <Reaction name="haha" icon={haha} />
              <Reaction name="wow" icon={wow} />
              <Reaction name="sad" icon={sad} />
              <Reaction name="angry" icon={angry} />
            </ReactionsWrapper>
          </LikeThumb>
        </FBPost>
      </Container>

      <FooterText>
        <a href="https://github.com/anuraghazra/facebook-reaction-animation/" rel="noopener noreferrer" target="_blank">facebook-reaction-animation</a> made with React + Framer
        by <a href="https://anuraghazra.github.io" rel="noopener noreferrer" target="_blank">@anuraghazra</a>
        &nbsp;• Wonderful icons by <a href="https://iconscout.com/contributors/meet-shah" rel="noopener noreferrer" target="_blank">Meet Shah</a>
      </FooterText>
    </main>
  );
}

export default App;