interface Quux {
    [key: string]: number
}

interface BarInterface {
    baz: Quux
}

export interface FooInterface {
    foo: string
    bar: BarInterface
}
