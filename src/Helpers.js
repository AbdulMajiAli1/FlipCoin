function choice(arr) {
    let rndmIndx = Math.floor(Math.random() * arr.length);
    return arr[rndmIndx];
}

export { choice };