import { Handler, Observable, Subscription } from "./observable";

export function merge<A, B>(streams: [Observable<A>, Observable<B>]): Observable<A | B>
export function merge<A, B, C>(streams: [Observable<A>, Observable<B>, Observable<C>]): Observable<A | B | C>
export function merge<A, B, C, D>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>]): Observable<A | B | C | D>
export function merge<A, B, C, D, E>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>, Observable<E>]): Observable<A | B | C | D | E>
export function merge<A, B, C, D, E, F>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>, Observable<E>, Observable<F>]): Observable<A | B | C | D | E | F>

// this is type-unsafe but typesafety is ensured above :)
export function merge<T>(streams: any[]): Observable<T> {
    const stream = new Observable<T>();

    streams.forEach((s, i) => {
        const subs: Subscription<any>[] = [];
        subs.push(s.subscribe((value: any) => {
            stream.update(value);
        }));

        stream.disposables = stream.disposables.concat(subs);

        stream.unsubscribe = (handler: Handler<any>) => {
            subs.forEach(item => item.dispose());
            stream.unsubscribe(handler);
        };
    });

    return stream;
}