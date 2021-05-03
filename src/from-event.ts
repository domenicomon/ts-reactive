import { Handler, Observable } from './observable'

export function fromEvent<E>(element: any, eventName: string, listenerOptions?: any): Observable<E> {
  const obs = new Observable<E>()
  const eventListener = (event: E) => {
    obs.update(event)
  }

  obs.onUnsubscribe = () => {
    element[removeList](eventName, eventListener, listenerOptions)
  }

  obs.onDispose = () => {
    element[removeList](eventName, eventListener, listenerOptions)
  }

  let addList = 'addEventListener'
  let removeList = 'removeEventListener'
  if (typeof element.addListener === 'function') {
    addList = 'addListener'
    removeList = 'removeListener'
  }
  if (typeof element.on === 'function') {
    addList = 'on'
    removeList = 'off'
  }
  if (typeof element[addList] === 'function') {
    element[addList](eventName, eventListener, listenerOptions)
  }
  return obs
}
