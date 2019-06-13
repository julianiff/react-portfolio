import React from 'react'
import styled from "styled-components";
import { useSpring, animated } from 'react-spring'


const Edge = styled(animated.div)`
  border: 3px solid black;
  width: 250px;
  padding: 2.5rem;
  will-change: transform;
  background-color: black;
  margin-bottom: 50px;
`


const Shard = ({content}) => {

  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 500, friction: 115 } }))
  const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

  return (
    <Edge
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      {content}
    </Edge>
  )
}
export default Shard;
