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
//3.反转链表
    var reverseList = function(head) {
        if(!head || !head.next) return head;
        let next = head.next;
        let reverseHead = reverseList(next);
        head.next = null;
        next.next = head;
        return reverseHead;
    }
//4.合并链表
    var mergeTwoLists = function(l1, l2) {
        if(l1 === null){
            return l2;
        }
        if(l2 === null){
            return l1;
        }
        if(l1.val < l2.val){
            l1.next = mergeTwoLists(l1.next, l2);
            return l1;
        }else{
            l2.next = mergeTwoLists(l1, l2.next);
            return l2;
        }
    };
//5.链表去重
    var deleteDuplicates = function(head) {
        var cur = head;
        while(cur && cur.next) {
            if(cur.val == cur.next.val) {
                cur.next = cur.next.next;
            } else {
                cur = cur.next;
            }
        }
        return head;
    };
//6.贪心算法，分饼干
    var findContentChildren = function(g, s) {
        g = g.sort((a,b) => a-b);
        s = s.sort((a,b) => a-b);
        var gLen = g.length;
        var sLen = s.length;
        var i = 0;
        var j = 0;
        var maxNum = 0;
        while(i < gLen && j < sLen){
            if(s[j] >= g[i]){
                i++;
                j++;
                maxNum++;
            }else{
                j++;
            }
        }
        return maxNum;
    };

