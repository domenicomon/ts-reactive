import { Handler, Observable } from "./observable";

export function fromEvent<E>(element: any, eventName: string, listenerOptions?: any): Observable<E> {
    const obs = new Observable<E>();
    const eventListener = (event: E) => {
        obs.update(event);
    }
    let listener = element.addEventListener;
    if(typeof element.addListener === 'function') {
        listener = element.addListener
    }
    typeof listener === 'function' && listener(eventName, eventListener, listenerOptions);
    obs.unsubscribe = (handler: Handler<E>) => {
        obs.unsubscribe(handler);
        element.removeEventListener(eventName, eventListener, listenerOptions);
    };
    obs.dispose = () => {
        obs.dispose();
        element.removeEventListener(eventName, eventListener, listenerOptions);
    };
    return obs;
}