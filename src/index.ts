import concatWith from 'callbag-concat-with'
import map from 'callbag-map'
import msElapsed from 'callbag-ms-elapsed'
import takeWhile from 'callbag-take-while'
import pipe from 'pipeline.macro'

export default function durationProgress(ms: number) {
  return pipe(
    msElapsed,
    map(elapsed => elapsed / ms),
    takeWhile(progress => progress <= 1),
    concatWith(1),
  )
}
