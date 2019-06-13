import React from 'react'
import styled from "styled-components";
import { useSpring, animated } from 'react-spring'


const Edge = styled(animated.div)`
  border: 3px solid white;
  background-color: black;
  padding: 5.5rem;
  color: white;
  transition: box-shadow 550ms;
  margin-bottom: 50px;
  will-change: transform;
  width: 250px;
  &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
`


const Shard = ({content}) => {

  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 500, friction: 115 } }))
  const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
  const trans = (x, y, s) => `perspective(400px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

  return (
    <>
      <Edge
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        {content}
      </Edge>
    </>
  )
}
export default Shard;
