// Your code here

// Monkey-patching array class
Array.prototype.isEqual = function(array) {
    // Check if lengths are equal
    if (this.length !== array.length) {
        return false;
    }

    for (let i = 0; i < this.length; i++) {
        if (this[i] !== array[i]) {
            return false;
        }
    }
    return true;
}
