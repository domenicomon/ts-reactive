import { Handler, Observable } from "./observable";

export function fromEvent<E>(element: any, eventName: string, listenerOptions?: any): Observable<E> {
    const obs = new Observable<E>();
    const eventListener = (event: E) => {
        obs.update(event);
    }
    let addListener = element.addEventListener;
    let removeListener = element.removeEventListener;
    if(typeof element.addListener === 'function') {
        addListener = element.addListener
        removeListener = element.removeListener
    }
    if(typeof element.on === 'function') {
        addListener = element.on;
        removeListener = element.off
    }
    typeof addListener === 'function' && addListener(eventName, eventListener, listenerOptions);
    obs.unsubscribe = (handler: Handler<E>) => {
        obs.unsubscribe(handler);
        removeListener(eventName, eventListener, listenerOptions);
    };
    obs.dispose = () => {
        obs.dispose();
        removeListener(eventName, eventListener, listenerOptions);
    };
    return obs;
}