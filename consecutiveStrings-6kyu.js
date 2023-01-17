// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.


const longestConsec = (strarr, k) => {
    let longestConcat = ''

    if (strarr.length === 0 || k > strarr.length || k <= 0) {
        return ''
    }

    for (let i = 0; i < strarr.length; i++) {
       let concat = strarr.slice(i, i + k).join('')
       if (concat.length > longestConcat.length) {
        longestConcat = concat
       }
    }

    return longestConcat
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)) //"abigailtheta"
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)) //"oocccffuucccjjjkkkjyyyeehh"