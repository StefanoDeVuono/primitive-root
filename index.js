const areCongruent = (a, b, mod) => ((a - b) % mod) === 0

const getCoprimes = n => {
    const arr = [1]
    for (let i = 2; i <= n; i++) {
        if (n % i !== 0) arr.push(i)
    }
    return arr
}

const isPrimitiveRoot = (g, n) => {
    coprimesOfN = getCoprimes(n)
    coprimesOfN.every(coprime => {
        // every number a coprime to n is congruent to a power of g modulo n.
        // areCongruent(coprime, )
        // https://en.wikipedia.org/wiki/Primitive_root_modulo_n#Finding_primitive_roots
    })
}