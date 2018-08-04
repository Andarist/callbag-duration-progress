import concatWith from 'callbag-concat-with'
import map from 'callbag-map'
import msElapsed from 'callbag-ms-elapsed'
import takeWhile from 'callbag-take-while'

export default function durationProgress(ms) {
  return concatWith(1)(
    takeWhile(progress => progress <= 1)(
      map(elapsed => elapsed / ms)(msElapsed),
    ),
  )
}
