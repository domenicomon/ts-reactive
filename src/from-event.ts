import { Handler, Observable } from "./observable";

export function fromEvent(element: HTMLElement, eventName: string, listenerOptions?: any): Observable<Event> {
    const obs = new Observable<Event>();
    const eventListener = (event: Event) => {
        obs.update(event as unknown as Event);
    }
    element.addEventListener(eventName, eventListener, listenerOptions);
    obs.unsubscribe = (handler: Handler<Event>) => {
        obs.unsubscribe(handler);
        element.removeEventListener(eventName, eventListener, listenerOptions);
    };
    obs.dispose = () => {
        obs.dispose();
        element.removeEventListener(eventName, eventListener, listenerOptions);
    };
    return obs;
}