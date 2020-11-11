import { Observable } from './observable';

describe("Simple subscribe", () => {
    test('Subscribe to observable', () => {
        let result: number | undefined = undefined;
        const obs = new Observable(1);
        expect(obs.handlers.length).toBe(0);
        const subscription = obs.subscribe((value) => {
            result = value;
        });
        expect(obs.handlers.length).toBe(1);
        expect(typeof subscription.dispose).toBe('function');
        expect(typeof result).toBe('undefined');
        obs.update(2);
        expect(result).toBe(2);
        obs.dispose();
        expect(obs.handlers.length).toBe(0);
    });
});

describe("Simple behaviour subscribe", () => {
    test('Subscribe to observable with replay = true', () => {
        let result: number | undefined = undefined;
        const obs = new Observable(1);
        expect(obs.handlers.length).toBe(0);
        const subscription = obs.subscribe((value) => {
            result = value;
        }, true);
        expect(obs.handlers.length).toBe(1);
        expect(typeof subscription.dispose).toBe('function');
        expect(result).toBe(1);
        obs.update(2);
        expect(result).toBe(2);
        obs.dispose();
        expect(obs.handlers.length).toBe(0);
    });
});

describe("map subscribe", () => {
    test('Map and Subscribe to observable', () => {
        let result: number | undefined = undefined;
        const obs = new Observable(1);
        expect(obs.handlers.length).toBe(0);
        const subscription = obs.map((value: number) => value + 1).subscribe((value) => {
            result = value;
        });
        obs.update(2);
        expect(result).toBe(3);
        obs.dispose();
        expect(obs.handlers.length).toBe(0);
    });
});

describe("take subscribe", () => {
    test('Take(2) observable', () => {
        let result: number = 0;
        const obs1 = new Observable(1);

        const subscription = obs1.take(2).subscribe(value => {
            result = value;
        });
        expect(result).toBe(0);
        obs1.update(1);
        expect(result).toBe(1);
        obs1.update(2);
        expect(result).toBe(2);
        obs1.update(3);
        expect(result).toBe(2);
    });
});

describe("take until subscribe", () => {
    test('Take until observable', () => {
        let result: number = 0;
        const obs1 = new Observable(1);
        const obs2 = new Observable(1);

        const subscription = obs1.takeUntil(obs2).subscribe(value => {
            result = value;
        });
        expect(result).toBe(0);
        obs1.update(1);
        expect(result).toBe(1);
        obs2.update(2);
        obs1.update(2);
        expect(result).toBe(1);
    });
});

describe("Debounce", () => {
    test('Debounce observable', (done) => {
        let result: number = 0;
        const obs1 = new Observable(1);

        obs1.debounce(1000).subscribe(value => {
            result = value;
        });
        expect(result).toBe(0);
        obs1.update(1);
        expect(result).toBe(0);
        setTimeout(() => { obs1.update(2) }, 500)
        setTimeout(() => { expect(result).toBe(2); done() }, 2000)
    });
});

describe("Throttle", () => {
    test('Throttle observable', (done) => {
        let result: number = 0;
        const obs1 = new Observable(0);

        obs1.throttle(500).subscribe(value => {
            result = value;
        });
        expect(result).toBe(0);
        obs1.update(1);
        expect(result).toBe(1);
        obs1.update(2);
        expect(result).toBe(1);
        setTimeout(() => { obs1.update(2) }, 200)
        setTimeout(() => {  expect(result).toBe(1); }, 250)
        setTimeout(() => { obs1.update(3) }, 600)
        setTimeout(() => { expect(result).toBe(3); done() }, 650)
    });
});


describe("Sample", () => {
    test('Sample observable', () => {
        let result: number = 0;
        const obs1 = new Observable(0);

        obs1.sample(500).subscribe(value => {
            result = value;
        });
        expect(result).toBe(0);
        obs1.update(1);
        expect(result).toBe(0);
        setTimeout(() => { obs1.update(2) }, 200)
        setTimeout(() => { expect(result).toBe(0);}, 250)
        setTimeout(() => { obs1.update(3) }, 300)
        setTimeout(() => { expect(result).toBe(0); }, 350)
        setTimeout(() => { obs1.update(4) }, 400)
        setTimeout(() => { expect(result).toBe(0);}, 450)
        setTimeout(() => { obs1.update(5) }, 500)
        setTimeout(() => { expect(result).toBe(5);}, 600)
    }, 1000);
});
