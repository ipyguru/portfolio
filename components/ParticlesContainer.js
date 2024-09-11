import { useCallback } from 'react'
import { Particles } from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const ParticlesContainer = () => {
  // Initialize particles
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  // Can remove the empty async function as it's not doing anything
  const particlesLoaded = useCallback(() => { }, [])

  // Configuration constants for particles
  const particleOptions = {
    fullScreen: { enable: false },
    background: { color: { value: '' } },
    fpsLimit: 120,
    detectRetina: true,
    interactivity: {
      events: {
        onClick: { enable: false, mode: 'push' },
        onHover: { enable: true, mode: 'repulse' },
        resize: true,
      },
      modes: {
        push: { quantity: 90 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: '#e68e2e' },
      links: {
        color: '#f5d393',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: { enable: true },
      move: {
        direction: 'none',
        enable: true,
        outModes: { default: 'bounce' },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 80,
      },
      opacity: { value: 0.2 },
      shape: { type: 'circle' },
      size: {
        value: { min: 1, max: 5 },
      },
    },
  }

  return (
    <Particles
      className="absolute w-full h-full translate-z-0"
      id="ts___particles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleOptions}
    />
  )
}

export default ParticlesContainer