import { Observable } from './observable';

export class Interval extends Observable<void> {
    private t: any;
    
    constructor(time: number) {
        super();
        this.t = setInterval(() => {
            this.update();
        })
    }

    dispose = () => {
        super.dispose();
        !!this.t && window.clearInterval(this.t);
    }
}