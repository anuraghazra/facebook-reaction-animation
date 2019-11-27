import React, { useState } from 'react';
import { motion } from 'framer-motion'
import styled from 'styled-components';

// svg emojis
import './App.css';
import like from './assets/like.svg';
import love from './assets/love.svg';
import haha from './assets/haha.svg';
import wow from './assets/wow.svg';
import sad from './assets/sad.svg';
import angry from './assets/angry.svg';

// components
import Container from './components/Container';
import ReactionsWrapper from './components/ReactionsWrapper';
import Reaction from './components/Reaction/Reaction';
import Like from './components/likeButton';
import LikeThumb from './components/LikeThumb';

const FBPost = styled.section`
  margin: auto;
`

const list = {
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
  const [isHover, setIsHover] = useState(false);

  return (
    <Container>

      <FBPost onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        <LikeThumb>
          <Like />&nbsp;Like
          <ReactionsWrapper
            initial="hidden"
            animate={isHover ? "visible" : "hidden"}
            variants={list}
          >
            <motion.div variants={list}>
              <Reaction name="like" icon={like} />
            </motion.div>
            <motion.div variants={list}>
              <Reaction name="love" icon={love} />
            </motion.div>
            <motion.div variants={list}>
              <Reaction name="haha" icon={haha} />
            </motion.div>
            <motion.div variants={list}>
              <Reaction name="wow" icon={wow} />
            </motion.div>
            <motion.div variants={list}>
              <Reaction name="sad" icon={sad} />
            </motion.div>
            <motion.div variants={list}>
              <Reaction name="angry" icon={angry} />
            </motion.div>
          </ReactionsWrapper>
        </LikeThumb>
      </FBPost>
    </Container>
  );
}

export default App;
// <a href="https://iconscout.com/icon/sad-emoji-17" target="_blank">Sad emoji Icon</a> by <a href="https://iconscout.com/contributors/meet-shah" target="_blank">Meet Shah</a>