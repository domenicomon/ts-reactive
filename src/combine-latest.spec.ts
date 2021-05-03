import { combineLatest } from './combine-latest'
import { Observable } from './observable'

describe('combine latest subscribe', () => {
  test('Combine to 3 observable', () => {
    let result: string = ''
    const obs1 = new Observable(1)
    const obs2 = new Observable('s')
    const obs3 = new Observable(1)
    const subscription = combineLatest([obs1, obs2, obs3]).subscribe(([value1, value2, value3]) => {
      result = `${value1} ${value2} ${value3}`
    })
    obs1.update(2)
    expect(result).toBe('')
    obs2.update('ss')
    expect(result).toBe('')
    obs3.update(4)
    expect(result).toBe('2 ss 4')
  })
})
