import duration from 'callbag-duration-progress'
import forEach from 'callbag-for-each'
import map from 'callbag-map'
import pipe from 'callbag-pipe'

const distance = d => t => t * d

const easeOut = p => 1 - (1 - p) * (1 - p)
const linear = p => p

const moveBall = (ball, easing) => {
  pipe(
    duration(1000),
    map(easing),
    map(distance(document.body.clientWidth - 50)),
    forEach(x => {
      ball.style.transform = `translateX(${x}px)`;
    }),
  )
}

moveBall(document.getElementById('ball1'), linear)
moveBall(document.getElementById('ball2'), easeOut)
