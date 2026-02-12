import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const isMobile = window.innerWidth < 768

const texts = [
  { text: "WSZYSTKIEGO", duration: 1300 },
  { text: "NAJLEPSZEGO", duration: 1200 },
  { text: "Z OKAZJI", duration: 1600 },
  { text: "WALENTYNEK DLA CIEBIE", duration: 2000 },
  { text: "MARTYNKOO <3", duration: 3000 },
]

// SERDUSZKA
const randomHearts = Array.from({ length: 120 }).map(() => ({
  top: Math.random() * 100,
  left: Math.random() * 100,
  duration: 2.5 + Math.random() * 2,
  delay: Math.random() * -5,
  size: 0.6 + Math.random() * 0.5,
}))

const topLeftHearts = Array.from({ length: 60 }).map(() => ({
  top: Math.random() * 25,
  left: Math.random() * 25,
  duration: 2.5 + Math.random() * 2,
  delay: Math.random() * -5,
  size: 0.6 + Math.random() * 0.5,
}))

const topRightHearts = Array.from({ length: 60 }).map(() => ({
  top: Math.random() * 25,
  left: 75 + Math.random() * 25,
  duration: 2.5 + Math.random() * 2,
  delay: Math.random() * -5,
  size: 0.6 + Math.random() * 0.5,
}))

const bottomLeftHearts = Array.from({ length: 60 }).map(() => ({
  top: 75 + Math.random() * 25,
  left: Math.random() * 25,
  duration: 2.5 + Math.random() * 2,
  delay: Math.random() * -5,
  size: 0.6 + Math.random() * 0.5,
}))

const hearts = [
  ...randomHearts,
  ...topLeftHearts,
  ...topRightHearts,
  ...bottomLeftHearts,
]

function App() {
  const [started, setStarted] = useState(false)
  const [index, setIndex] = useState(0)
  const audioRef = useRef(null)

  useEffect(() => {
    if (!started) return

    if (index < texts.length - 1) {
      const timer = setTimeout(() => {
        setIndex(index + 1)
      }, texts[index].duration)

      return () => clearTimeout(timer)
    }
  }, [index, started])

  const startExperience = () => {
    setStarted(true)
    if (audioRef.current) {
      audioRef.current.volume = 0.5
      audioRef.current.play()
    }
  }

  return (
    <div className="screen" onClick={!started ? startExperience : undefined}>
      <audio ref={audioRef} src="/music.mp3" loop />

      {/* EKRAN STARTOWY */}
      {!started && (
        <div className="start-screen">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="start-text"
          >
            Kliknij w ekran 🤍
          </motion.div>
        </div>
      )}

      {/* SERDUSZKA */}
      {started && (
        <div className="hearts">
          {hearts.map((h, i) => (
            <span
              key={i}
              style={{
                top: `${h.top}%`,
                left: `${h.left}%`,
                animationDuration: `${h.duration}s`,
                animationDelay: `${h.delay}s`,
                fontSize: `${h.size}rem`,
              }}
            >
              {"🌹"}
            </span>
          ))}
        </div>
      )}

      {/* TEKSTY */}
      {started && (
        <AnimatePresence mode="wait">
          <motion.h1
            key={texts[index].text}
            className="text"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 3.00 }}
            transition={{ duration: 0.9 }}
          >
            {texts[index].text}
          </motion.h1>
        </AnimatePresence>
      )}
    </div>
  )
}

export default App
