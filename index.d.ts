declare function fromEntries<Key extends string | number | Symbol, Value>(iterable: Array<[Key, Value]>): {
    [key: Key]: Value;
};

export = fromEntries;
