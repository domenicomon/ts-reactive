import { Observable } from './observable';
export declare class Interval extends Observable<void> {
    private t;
    constructor(time: number);
    dispose: () => void;
}
