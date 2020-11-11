import { Handler, Observable } from "./observable";

export function fromEvent<T>(element: HTMLElement, eventName: string, listenerOptions: any): Observable<T> {
    const obs = new Observable<T>();
    const eventListener = (event: Event) => {
        obs.update(event as unknown as T);
    }
    element.addEventListener(eventName, eventListener, listenerOptions);
    obs.unsubscribe = (handler: Handler<T>) => {
        obs.unsubscribe(handler);
        element.removeEventListener(eventName, eventListener, listenerOptions);
    };
    obs.dispose = () => {
        obs.dispose();
        element.removeEventListener(eventName, eventListener, listenerOptions);
    };
    return obs;
}