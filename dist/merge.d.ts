import { Observable } from "./observable";
export declare function merge<A, B>(streams: [Observable<A>, Observable<B>]): Observable<A | B>;
export declare function merge<A, B, C>(streams: [Observable<A>, Observable<B>, Observable<C>]): Observable<A | B | C>;
export declare function merge<A, B, C, D>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>]): Observable<A | B | C | D>;
export declare function merge<A, B, C, D, E>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>, Observable<E>]): Observable<A | B | C | D | E>;
export declare function merge<A, B, C, D, E, F>(streams: [Observable<A>, Observable<B>, Observable<C>, Observable<D>, Observable<E>, Observable<F>]): Observable<A | B | C | D | E | F>;
