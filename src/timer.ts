import { Handler, Observable, Subscription } from './observable';

export class Timer extends Observable<void> {
    private t: any;

    constructor(private time: number) {
        super();

    }

    subscribe(handler: Handler<void>): Subscription<void> {
        this.t = setTimeout(() => {
            this.update();
        }, this.time);
        return super.subscribe(handler, false);
    }

    dispose = () => {
        super.dispose();
        !!this.t && window.clearTimeout(this.t);
    }
}