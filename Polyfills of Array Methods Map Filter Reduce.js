// Polyfills for Array methods Map(), Filter(), Reduce()

//Usual Map working
const valueItems = [1, 2, 3, 4, 5]
// valueItems.map((item,ind, arr) => console.log(item, ind, arr))

Array.prototype.myMap = function (callBackFn) {
    const arr = []
    for (let i = 0; i < this.length; i++) {
        arr.push(callBackFn(this[i], i, this))
    }
    return arr
}

Array.prototype.myFilter = function (callBackFn) {
    const arr = []
    for (let i = 0; i < this.length; i++) {
        if (callBackFn.call(this, this[i], i, this)) {
            arr.push(this[i])
        }
    }
    return arr
}

Array.prototype.myReduce = function (callBackFn, initialValue) {
    let accum = initialValue;
    for (let i = 0; i < this.length; i++) {
        accum = callBackFn(accum, this[i], i, this)
    }
    return accum
}

// Using the MyMap Polyfill
console.log(JSON.stringify(valueItems.myMap((item, ind, arr) => ({ [item]: item % 2 === 0 ? 'even' : 'odd' }))))
// [{"1":"odd"},{"2":"even"},{"3":"odd"},{"4":"even"},{"5":"odd"}]