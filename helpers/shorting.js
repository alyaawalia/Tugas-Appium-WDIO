export function isDescending (data) {
        for (let i = 1; i < data.length; i++) {
            if (data[i - 1] < data[i]) {
                return false
            }
        }
        return true
    }

export function isAscending (data) {
        for (let i = 1; i < data.length; i++) {
            if (data[i - 1] > data[i]) {
                return false
            }
        }
        return true
    }

export function isLowToHigh (data) {
    let number = data.map(y => Number(y.replace('$', ''))) //ubah data string menjadi angka 
    for (let i = 1; i < number.length; i++) {
        if (number[i - 1] > number[i]) {
            return false
        }
    }
    return true
}

export function isHighToLow (data) {
        let number = data.map(y => Number(y.replace('$', ''))) //ubah data string menjadi angka 
        for (let i = 1; i < number.length; i++) {
            if (number[i - 1] < number[i]) {
                return false
            }
        }
        return true
    }