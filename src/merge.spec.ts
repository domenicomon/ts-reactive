import { Observable } from '../src/observable';
import { merge } from '../src/merge';

describe("merge tests", () => {
    test('MErge 3 observable', () => {
        let result: string = '';
        const obs1 = new Observable(1);
        const obs2 = new Observable('s');
        const obs3 = new Observable(1);
        const subscription = merge([obs1, obs2, obs3]).subscribe((value) => {
            result = `${value}`;
        });
        obs1.update(2);
        expect(result).toBe('2');
        obs2.update('ss');
        expect(result).toBe('ss');
        obs3.update(4);
        expect(result).toBe('4');
    });
});


