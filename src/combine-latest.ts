import { Handler, Observable, Subscription } from "./observable";

export function combineLatest<A, B>(streams: [Observable<A>, Observable<B>]): Observable<[A, B]>
export function combineLatest<A, B, C>(streams: [Observable<A>, Observable<B>, Observable<C>]): Observable<[A, B, C]>
export function combineLatest<A, B, C, D>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>]): Observable<[A, B, C, D]>
export function combineLatest<A, B, C, D, E>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>, Observable<E>]): Observable<[A, B, C, D, E]>
export function combineLatest<A, B, C, D, E, F>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>, Observable<E>, Observable<F>]): Observable<[A, B, C, D, E, F]>

// this is type-unsafe but typesafety is ensured above :)
export function combineLatest(streams: any[]): Observable<any[]> {
    const stream = new Observable(streams.map(v => v.value));
    const updated: boolean[] = streams.map(() => false);

    streams.forEach((s, i) => {
        const subs: Subscription<any>[] = [];
        subs.push(s.subscribe(() => {
            updated[i] = true;
            if (updated.every(item => item)) {
                stream.update(streams.map(v => v.value));
            }
        }));

        stream.disposables = stream.disposables.concat(subs);

        stream.unsubscribe = (handler: Handler<any>) => {
            subs.forEach(item => item.dispose());
            stream.unsubscribe(handler);
        };
    });

    return stream;
}