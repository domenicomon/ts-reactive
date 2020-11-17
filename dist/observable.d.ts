export declare type Handler<T> = (value: T) => void;
export declare type Subscription<T> = {
    dispose: () => void;
};
export declare class Observable<T> {
    private value?;
    handlers: Array<Handler<T>>;
    disposables: Subscription<T>[];
    constructor(value?: T);
    subscribe: (handler: Handler<T>, replay?: Boolean) => Subscription<T>;
    unsubscribe: (handler: Handler<T>) => void;
    dispose: () => void;
    update(value: T): this;
    map<U>(transform: (value?: T) => U): Observable<U>;
    take: (amount: number) => Observable<T>;
    takeUntil: (obs: Observable<any>) => Observable<T>;
    distinct: (compareFunction?: (a: T, b: T) => boolean) => Observable<T>;
    throttle: (wait: number) => Observable<T>;
    debounce: (wait: number) => Observable<T>;
    sample: (wait: number) => Observable<T>;
}
