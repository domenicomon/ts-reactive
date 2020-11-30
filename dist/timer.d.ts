import { Observable } from './observable';
export declare class Timer extends Observable<void> {
    private t;
    constructor(time: number);
    dispose: () => void;
}
