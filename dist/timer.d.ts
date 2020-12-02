import { Handler, Observable, Subscription } from './observable';
export declare class Timer extends Observable<void> {
    private time;
    private t;
    constructor(time: number);
    subscribe(handler: Handler<void>): Subscription<void>;
    dispose: () => void;
}
