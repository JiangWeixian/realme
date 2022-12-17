import { Canvas } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import {
  Text,
  Center,
  OrbitControls,
  Line as _Line,
  Points as _Points,
  PointMaterial,
  PerspectiveCamera,
} from '@react-three/drei'
import { Line2 } from 'three-stdlib'
import { inSphere } from 'maath/random'
import { a, easings, useSpring, useSprings } from '@react-spring/three'
import styled, { createGlobalStyle } from 'styled-components'

import Github from 'assets/github.svg'
import { SEO } from '@/components/seo'

const REPO_URL = 'https://github.com/JiangWeixian/realme'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    background-color: #0f172a;
  }
`

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
`

// as any - <Line /> make type check failed
const Line = a(_Line) as any
const Points = a(_Points)

const halfExtent = { x: 4.7, y: 0.8, z: 0 }

const lines = new Array(5).fill(0).map((_, i) => i)

const Main = () => {
  const linesRef = useRef(new Map<number, Line2>())
  const [rotate, rotateApi] = useSpring(() => ({ y: 0 }))
  const [springs, api] = useSprings(lines.length, () => ({
    dz: 0,
    config: {
      duration: 500,
      easing: easings.easeInOutCubic,
    },
  }))
  const handlePointerEnter = async () => {
    document.body.style.cursor = 'pointer'
    await rotateApi.start({ y: Math.PI / 6 })
    await api.start((index) => ({ dz: index }))
  }
  const handlePointerLeave = async () => {
    document.body.style.cursor = 'auto'
    await api.start(() => ({ dz: 0 }))
    await rotateApi.start({ y: 0 })
  }
  return (
    <a.group rotation={rotate.y.to((v) => [0, -v / 4, 0]) as any}>
      <mesh
        visible={false}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onClick={() => {
          window.open(REPO_URL, '_blank', 'noopener')
        }}
      >
        <meshBasicMaterial color={[1.25, 1.25, 1.25]} />
        <planeGeometry args={[halfExtent.x * 2, halfExtent.y * 2]} />
      </mesh>
      {springs.map((styles, i) => {
        return (
          <Line
            key={i}
            ref={(ref: Line2) => linesRef.current.set(i, ref as any)}
            points={[
              [-halfExtent.x, halfExtent.y, 0],
              [halfExtent.x, halfExtent.y, 0],
              [halfExtent.x, -halfExtent.y, 0],
              [-halfExtent.x, -halfExtent.y, 0],
              [-halfExtent.x, halfExtent.y, 0],
            ]}
            color={[1.25, 1.25, 1.25] as any}
            lineWidth={5}
            position={styles.dz.to((v) => {
              return [0, 0, v]
            })}
            transparent={true}
            opacity={i !== 0 ? 0.5 : 1}
            toneMapped={false}
          />
        )
      })}
      <Center>
        <React.Suspense fallback={null}>
          <Text
            fontSize={1}
            maxWidth={200}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign={'left'}
            // font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            font="https://fonts.gstatic.com/s/josefinsans/v25/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_ObXbMhhKQ.woff"
            anchorX="center"
            anchorY="middle"
          >
            realme
          </Text>
        </React.Suspense>
      </Center>
      <Stars rotation={rotate.y.to((v) => [0, -v, 0]) as any} />
    </a.group>
  )
}

function Stars({ rotation, ...props }: { rotation: any }) {
  const ref = useRef(null)
  const [sphere] = useState(() => inSphere(new Float32Array(3000), { radius: 20 }))
  return (
    <a.group>
      <Points
        rotation={rotation}
        ref={ref}
        positions={sphere as any}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </a.group>
  )
}

const Scene = () => {
  return (
    <Canvas>
      <PerspectiveCamera position-z={25} makeDefault={true} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {process.env.NEXT_PUBLIC_DEBUG && <OrbitControls />}
      <Main />
    </Canvas>
  )
}

const IndexPage = () => (
  <Layout title="realme">
    <SEO />
    {/* @ts-expect-error - FIXME: releted to react version */}
    <GlobalStyle />
    <Scene />
    <div className="absolute right-8 bottom-8 text-white/70 font-thin flex items-center gap-2">
      <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
        <Github className="fill-white/70 w-4 h-4" />
      </a>
    </div>
  </Layout>
)

export default IndexPage
