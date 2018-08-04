# callbag-duration-progress

Callbag listenable source which emits value describing time progress (number between 0 an 1) since the subscription (using requestAnimationFrame) - useful for animations.

## Example

```js
import duration from 'callbag-duration-progress'
import forEach from 'callbag-for-each'
import map from 'callbag-map'
import pipe from 'callbag-pipe'

const distance = d => t => t * d

const easeOut = p => 1 - (1 - p) * (1 - p)

const moveBall = (ball, easing) => {
  pipe(
    duration(1000),
    map(easing),
    map(distance(400)),
    forEach(y => {
      ball.style.transform = `translate3d(0, ${y}px, 0)`
    }),
  )
}

moveBall(document.getElementById('#ball'), easeOut)
```
