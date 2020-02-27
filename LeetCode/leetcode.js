//1.两数之和
//给定nums=[2,7] target=9,返回[0,1]
var twoSum = function(nums, target) {
    var result = [];
    var len = nums.length;
    for(var i = 0;i < len; i++){
        // j从 i+1 开始 确保不重复利用同一个元素
        for(var j = i+1; j < len; j++){
            if(nums[i] + nums[j] == target){
                result.push(i);
                result.push(j);
                return result;
            }
        }
    }
};
//2.整数反转
var reverse = function(x) {
    if(x==0) return 0;
    if(x<(Math.pow(-2, 31)) || x>(Math.pow(2, 31)-1)) return 0;
    let flag = true
    if(x<0) {
        x * -1
        flag = false
    }
    let result = parseInt(x.toString().split("").reverse().join(""))
    if(result<(Math.pow(-2, 31)) || result>(Math.pow(2, 31)-1)) return 0;
    if(flag === false) return result*-1
    return result
};
//3.
