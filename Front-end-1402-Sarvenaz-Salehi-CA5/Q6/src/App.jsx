import { useState } from 'react'

import './App.css'
import Carousel from './components/Carousel.jsx'
import twinPeaks from './assets/twin-peaks.jpeg'
import pulpFiction from './assets/pulp-fiction.jpeg'
import fallenAngels from './assets/fallen-angels.jpeg'


const images = [
  {
    key: 1,
    alt: 'twinpeaks',
    src: twinPeaks,
  },
  {
    key: 2,
    alt: 'pulpfiction',
    src: pulpFiction,
  },
  {
    key: 3,
    alt: 'fallenangels',
    src: fallenAngels,
  }
];


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Carousel images={images}></Carousel>
    </>
  )
}

export default App
