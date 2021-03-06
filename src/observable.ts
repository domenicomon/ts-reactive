export type Handler<T> = (value: T) => void;

export type Subscription<T> = { dispose: () => void };

export class Observable<T> {
  handlers: Array<Handler<T>> = []
  disposables: Subscription<T>[] = []
  onUnsubscribe?: () => void
  onDispose?: () => void

  constructor(private _value?: T) { }

  get value() {
    return this._value
  }

  subscribe(handler: Handler<T>, replay: Boolean = false): Subscription<T> {
    this.handlers.push(handler)
    if (this._value && replay) {
      handler(this._value)
    }
    return { dispose: () => this.unsubscribe(handler) }
  }

  unsubscribe(handler: Handler<T>) {
    this.handlers = this.handlers.filter(h => h !== handler)
    typeof (this.onUnsubscribe) === 'function' && this.onUnsubscribe()
  }

  dispose() {
    this.handlers.splice(0, this.handlers.length)
    this.disposables.forEach(item => item.dispose())
    this.disposables.splice(0, this.disposables.length)
    typeof (this.onDispose) === 'function' && this.onDispose()
  }

  update(value: T) {
    this._value = value
    this.handlers.forEach(h => h(value))
    return this
  }

  map<U>(transform: (value?: T) => U): Observable<U> {
    const obs = new Observable(transform(this._value))
    this.subscribe(v => obs.update(transform(v)), true)
    return obs
  }

  take = (amount: number): Observable<T> => {
    const stream = new Observable(this._value)
    let count = 0
    stream.disposables.push(
      this.subscribe(v => {
        if (count <= amount) {
          stream.update(v)
          count += 1
        } else {
          stream.dispose()
        }
      }, true)
    )
    return stream
  }

  takeUntil = (obs: Observable<any>): Observable<T> => {
    this.disposables.push(obs.subscribe(() => {
      this.dispose()
    }))
    return this
  }

  distinct = (compareFunction?: (a: T, b: T) => boolean): Observable<T> => {
    const s = new Observable(this._value)
    let oldValue
    const sub = this.subscribe((value: T) => {
      let test = value !== oldValue
      if (typeof compareFunction === 'function') {
        test = compareFunction(oldValue, value)
      }
      if (test) {
        s.update(value)
        oldValue = value
      }
    })

    s.onUnsubscribe = () => {
      sub.dispose()
    }

    s.onDispose = () => {
      sub.dispose()
    }
    return s
  }

  throttle = (wait: number): Observable<T> => {
    const s = new Observable(this._value)
    let isCalled = false
    let t: any
    const sub = this.subscribe((value: T) => {
      if (!isCalled) {
        s.update(value)
        isCalled = true
        t = setTimeout(() => {
          isCalled = false
        }, wait)
      }
    })

    s.onUnsubscribe = () => {
      sub.dispose()
      t !== -1 && clearTimeout(t)
    }

    s.onDispose = () => {
      sub.dispose()
      t !== -1 && clearTimeout(t)
    }
    return s
  }

  debounce = (wait: number): Observable<T> => {
    const s = new Observable(this._value)
    let t: any = -1
    const sub = this.subscribe((value: T) => {
      t !== -1 && clearTimeout(t)
      t = setTimeout(() => {
        s.update(value)
      }, wait)
    })

    s.onUnsubscribe = () => {
      sub.dispose()
      t !== -1 && clearTimeout(t)
    }

    s.onDispose = () => {
      sub.dispose()
      if (typeof t !== 'undefined') {
        clearTimeout(t)
      }
    }
    return s
  }

  sample = (wait: number): Observable<T> => {
    const s = new Observable(this._value)
    let st: any = -1
    let dt: any = -1
    const sub = this.subscribe((value: T) => {
      dt !== -1 && clearTimeout(dt)

      if (st === -1) {
        st = setTimeout(() => {
          st = -1
          s.update(value)
        }, wait)
      }

      dt = setTimeout(() => {
        st !== -1 && clearTimeout(st)
        st = -1
        s.update(value)
      }, wait)
    })

    s.onUnsubscribe = () => {
      sub.dispose()
      dt !== -1 && clearTimeout(dt)
      st !== -1 && clearTimeout(st)
    }

    s.onDispose = () => {
      sub.dispose()
      dt !== -1 && clearTimeout(dt)
      st !== -1 && clearTimeout(st)
    }
    return s
  }
}
