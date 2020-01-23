function isAdult (age) {
    if (age < 18) {
        return false
    } else {
        return true
    }
}

function canDrink (age) {
    if (age < 21) {
        return false
    } else {
        return true
    }
}

function nope (a, b) {
    return a - b
}

export {
    isAdult,
    canDrink,
    nope as default
}