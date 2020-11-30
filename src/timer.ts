import { Observable } from './observable';

export class Timer extends Observable<void> {
    private t: any;
    
    constructor(time: number) {
        super();
        this.t = setTimeout(() => {
            this.update();
        })
    }

    dispose = () => {
        super.dispose();
        !!this.t && window.clearTimeout(this.t);
    }
}