
function findMinValueToBalance(nums) {
    if (nums.length % 2 !== 0) {
        throw new Error("Array size must be even.");
    }


    const leftSum = nums.slice(0, nums.length / 2).reduce((a, b) => a + b, 0);
    const rightSum = nums.slice(nums.length / 2).reduce((a, b) => a + b, 0);


    const diff = Math.abs(leftSum - rightSum);

    return diff;
}


console.log(findMinValueToBalance([1, 3, 1, 2, 4, 3]));
console.log(findMinValueToBalance([1, 2, 1, 2, 1, 3])); 
