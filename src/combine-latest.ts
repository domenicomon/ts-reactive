import { Handler, Observable, Subscription } from "./observable";

export function combineLatest<A, B>(streams: [Observable<A>, Observable<B>]): Observable<[A , B]>
export function combineLatest<A, B, C>(streams: [Observable<A>, Observable<B>, Observable<C>]): Observable<[A , B , C]>
export function combineLatest<A, B, C, D>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>]): Observable<[A , B , C , D]>
export function combineLatest<A, B, C, D, E>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>, Observable<E>]): Observable<[A , B , C , D , E]>
export function combineLatest<A, B, C, D, E, F>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>, Observable<E>, Observable<F>]): Observable<[A , B , C , D , E , F]>
export function combineLatest<A, B, C, D, E, F, G>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>, Observable<E>, Observable<F>, Observable<G>]): Observable<[A , B , C , D , E , F , G]>
export function combineLatest<A, B, C, D, E, F, G, H>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>, Observable<E>, Observable<F>, Observable<G>, Observable<H>]): Observable<[A , B , C , D , E , F , G , H]>
export function combineLatest<A, B, C, D, E, F, G, H, I>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>, Observable<E>, Observable<F>, Observable<G>, Observable<H>, Observable<I>]): Observable<[A , B , C , D , E , F , G , H , I]>
export function combineLatest<A, B, C, D, E, F, G, H, I, J>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>, Observable<E>, Observable<F>, Observable<G>, Observable<H>, Observable<I>, Observable<J>]): Observable<[A , B , C , D , E , F , G , H , I , J]>
export function combineLatest<A, B, C, D, E, F, G, H, I, J, K>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>, Observable<E>, Observable<F>, Observable<G>, Observable<H>, Observable<I>, Observable<J>, Observable<K>]): Observable<[A , B , C , D , E , F , G , H , I , J , K]>
export function combineLatest<A, B, C, D, E, F, G, H, I, J, K, L>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>, Observable<E>, Observable<F>, Observable<G>, Observable<H>, Observable<I>, Observable<J>, Observable<K>, Observable<L>]): Observable<[A , B , C , D , E , F , G , H , I , J , K , L]>
export function combineLatest<A, B, C, D, E, F, G, H, I, J, K, L, M>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>, Observable<E>, Observable<F>, Observable<G>, Observable<H>, Observable<I>, Observable<J>, Observable<K>, Observable<L>, Observable<M>]): Observable<[A , B , C , D , E , F , G , H , I , J , K , L , M]>
export function combineLatest<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>, Observable<E>, Observable<F>, Observable<G>, Observable<H>, Observable<I>, Observable<J>, Observable<K>, Observable<L>, Observable<M>, Observable<N>]): Observable<[A , B , C , D , E , F , G , H , I , J , K , L , M , N]>
export function combineLatest<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>, Observable<E>, Observable<F>, Observable<G>, Observable<H>, Observable<I>, Observable<J>, Observable<K>, Observable<L>, Observable<M>, Observable<N>, Observable<O>]): Observable<[A , B , C , D , E , F , G , H , I , J , K , L , M , N , O]>
export function combineLatest<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>, Observable<E>, Observable<F>, Observable<G>, Observable<H>, Observable<I>, Observable<J>, Observable<K>, Observable<L>, Observable<M>, Observable<N>, Observable<O>, Observable<P>]): Observable<[A , B , C , D , E , F , G , H , I , J , K , L , M , N , O , P]>
export function combineLatest<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>, Observable<E>, Observable<F>, Observable<G>, Observable<H>, Observable<I>, Observable<J>, Observable<K>, Observable<L>, Observable<M>, Observable<N>, Observable<O>, Observable<P>, Observable<Q>]): Observable<[A , B , C , D , E , F , G , H , I , J , K , L , M , N , O , P , Q]>
export function combineLatest<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>, Observable<E>, Observable<F>, Observable<G>, Observable<H>, Observable<I>, Observable<J>, Observable<K>, Observable<L>, Observable<M>, Observable<N>, Observable<O>, Observable<P>, Observable<Q>, Observable<R>]): Observable<[A , B , C , D , E , F , G , H , I , J , K , L , M , N , O , P , Q , R]>
export function combineLatest<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S,>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>, Observable<E>, Observable<F>, Observable<G>, Observable<H>, Observable<I>, Observable<J>, Observable<K>, Observable<L>, Observable<M>, Observable<N>, Observable<O>, Observable<P>, Observable<Q>, Observable<R>, Observable<S>]): Observable<[A , B , C , D , E , F , G , H , I , J , K , L , M , N , O , P , Q , R , S]>
export function combineLatest<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>, Observable<E>, Observable<F>, Observable<G>, Observable<H>, Observable<I>, Observable<J>, Observable<K>, Observable<L>, Observable<M>, Observable<N>, Observable<O>, Observable<P>, Observable<Q>, Observable<R>, Observable<S>, Observable<T>]): Observable<[A , B , C , D , E , F , G , H , I , J , K , L , M , N , O , P , Q , R , S , T]>
export function combineLatest<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>, Observable<E>, Observable<F>, Observable<G>, Observable<H>, Observable<I>, Observable<J>, Observable<K>, Observable<L>, Observable<M>, Observable<N>, Observable<O>, Observable<P>, Observable<Q>, Observable<R>, Observable<S>, Observable<T>, Observable<U>]): Observable<[A , B , C , D , E , F , G , H , I , J , K , L , M , N , O , P , Q , R , S , T , U]>
export function combineLatest<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, W>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>, Observable<E>, Observable<F>, Observable<G>, Observable<H>, Observable<I>, Observable<J>, Observable<K>, Observable<L>, Observable<M>, Observable<N>, Observable<O>, Observable<P>, Observable<Q>, Observable<R>, Observable<S>, Observable<T>, Observable<U>, Observable<W>]): Observable<[A , B , C , D , E , F , G , H , I , J , K , L , M , N , O , P , Q , R , S , T , U , W]>
export function combineLatest<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, W, X>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>, Observable<E>, Observable<F>, Observable<G>, Observable<H>, Observable<I>, Observable<J>, Observable<K>, Observable<L>, Observable<M>, Observable<N>, Observable<O>, Observable<P>, Observable<Q>, Observable<R>, Observable<S>, Observable<T>, Observable<U>, Observable<W>, Observable<X>]): Observable<[A , B , C , D , E , F , G , H , I , J , K , L , M , N , O , P , Q , R , S , T , U , W , X]>
export function combineLatest<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, W, X, Y>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>, Observable<E>, Observable<F>, Observable<G>, Observable<H>, Observable<I>, Observable<J>, Observable<K>, Observable<L>, Observable<M>, Observable<N>, Observable<O>, Observable<P>, Observable<Q>, Observable<R>, Observable<S>, Observable<T>, Observable<U>, Observable<W>, Observable<X>, Observable<Y>]): Observable<[A , B , C , D , E , F , G , H , I , J , K , L , M , N , O , P , Q , R , S , T , U , W , X , Y]>
export function combineLatest<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, W, X, Y, Z>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>, Observable<E>, Observable<F>, Observable<G>, Observable<H>, Observable<I>, Observable<J>, Observable<K>, Observable<L>, Observable<M>, Observable<N>, Observable<O>, Observable<P>, Observable<Q>, Observable<R>, Observable<S>, Observable<T>, Observable<U>, Observable<W>, Observable<X>, Observable<Y>, Observable<Z>]): Observable<[A , B , C , D , E , F , G , H , I , J , K , L , M , N , O , P , Q , R , S , T , U , W , X , Y , Z]>

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