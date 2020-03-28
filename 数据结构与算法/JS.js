//##数组
    //1.几乎所有的编程语言都原生支持数组类型,数组是最简单的内存数据结构
    //2.创建和初始化数组
    //3.访问元素和迭代元素
    //4.添加元素
        // push:数组末尾添加
        // unshift:数组开头插入
        // js里,数组是一个可以修改的对象,会动态增长,在其他语言中,改变数组要创建一个全新的数组
    //5.删除元素
        //pop:删除数组最靠后的元素
        //shift:删除数组第一个元素
    //6.任意位置添加和删除
        //使用splice指定位置/索引
        //splice第一个参数表示要删除/插入的元素的索引值,第二个参数是删除的个数
        //第三个参数往后是需要添加进去的值
    //7.二维和多维数组
        //1.二维数组
            //数组嵌套数组
        //2.多维数组
            //同理创建更多的维度
    //8.JS数组方法  
        //1.concat:连接2个或者更多数组,并返回结果
            // every:对每一个元素都运行指定函数,如果每一个元素都返回true,则返回true
            // filter:对每一个元素都运行指定函数,返回该函数会返回true的元素组成的数组
            // forEach:对每一个元素都运行指定函数,无返回值
            // join:将所有数组元素连接成一个字符串
            // indexOf:返回第一个与给定参数相等的元素的索引,木有则返回-1
            // lastIndexOf:返回在数组中搜索到的与给定参数相等的元素的最后一个元素的索引
            // map:对数组中的元素运行给定函数,返回每次函数调用的结果组成的数组
            // reverse:倒置
            // slice:传入索引值,将对应索引范围内的元素作为新数组返回
            // some:对每一个元素都运行指定函数,如果有一个元素返回true,则返回true
            // sort:按照字母顺序对数组进行排序,支持传入指定排序方法的函数作为参数
            // toString:作为字符串返回
            // valueOf:与toString类似
            // reduce:累加器
        //2.类型数组
            // JS数组不是强类型,可以存储任何类型的数据
            // 类型数组用于存储单一类型的数组,声明数组类型
    //9.随机字符串
        function shuffle(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }
        shuffle(Array.from('today is Monday')).join()
//##栈(stack) 
    //基于数组实现
    //后进先出
    function Stack(){

        this.items = [];

        Stack.prototype.push = function(element){
            this.items.push(element);
        }

        Stack.prototype.pop = function(){
            return this.items.pop();
        }

        Stack.prototype.peek = function(){
            return this.items[this.items.length - 1];
        }

        Stack.prototype.isEmpty = function(){
            return this.items.length == 0;
        }

        Stack.prototype.size = function(){
            return this.items.length;
        }
        
        Stack.prototype.toString = function(){
            var resultString = '';
            for(var i = 0;i < this.items.length;i++){
                resultString += this.items[i] + '';
            }
            return resultString;
        }
    }
    var stack = new Stack();
//##队列
    //基于数组实现
    //先进先出
    function Queue(){
        this.items = [];
        Queue.prototype.enqueue = function(element){
            this.items.push(element);
        }
        Queue.prototype.dequeue = function(){
            return this.items.shift();
        }
        Queue.prototype.front = function(){
            return this.items[0];
        }
        Queue.prototype.isEmpty = function(){
            return this,items.length == 0;
        }
        Queue.prototype.size = function(){
            return this.items.length;
        }
        Queue.prototype.toString = function(){
            var resultString = '';
            for(var i = 0;i < this.items.length;i++){
                resultString += this.items[i] + '';
            }
            return resultString;
        }
    }
    var queue = new Queue();
    //击鼓传花:
    function passGame(nameList, num){
        var queue = new Queue();
        for(var i = 0;i < nameList.length;i++){
            queue.enqueue(nameList[i]);
        }
        while(queue.size() > 1){
            for(var i = 0;i < num - 1;i++){
                queue.enqueue(queue.dequeue());
            }
            queue.dequeue();
        }
        var endName = queue.front();
        return nameList.indexOf(endName);
    }
    //优先级队列:
        //插入数据前考虑数据的优先级
//##链表   
        //链表
        //内存中不是连续的空间,元素本身节点和指向下一个元素的引用
        //单向链表
            function LinkedList() {
                function Node(data) {
                    this.data = data;
                    this.next = null;
                }
                this.head = null;
                this.length = 0;

                LinkedList.prototype.append = function(data) {
                    if(this.length == 0) {
                        var newNode = new Node(data);
                        this.head = newNode;
                    }else{
                        var newNode = new Node(data);
                        var current = this.head;
                        while(current.next) {
                            current = current.next;
                        }
                        current.next = newNode;
                    }
                    this.length += 1;
                }

                LinkedList.prototype.toString = function() {
                    var current = this.head;
                    var listString = "";
                    while(current) {
                        listString += current.data + "";
                        current = current.next;
                    }
                    return listString;
                }

                LinkedList.prototype.insert = function(position, data) {
                    if(position < 0 || position > this.length) return false;
                        var newNode = new Node(data);
                        if(position == 0) {
                            newNode.next = this.head;
                            this.head = newNode;
                        }else{
                            var index = 0;
                            var current = this.head;
                            var previous = null;
                            while(index++ < position) {
                                previous = current;
                                current = current.next;
                            }
                            newNode.next = current;
                            previous.next = newNode;
                        }
                        this.length += 1;
                        return true;
                }

                LinkedList.prototype.get = function(position) {
                    if(position < 0 || position >= this.length) return null;
                    var current = this.head;
                    var index = 0;
                    while(index++ < position) {
                        current = current.next;
                    }
                    return current.data;
                }

                LinkedList.prototype.indexOf = function(data) {
                    var current = this.head;
                    var index = 0;
                    while(current) {
                        if(current.data == data) {
                            return index;
                        }
                        current = current.next;
                        index += 1;
                    }
                    return -1;
                }

                LinkedList.prototype.update = function(position, newData) {
                    if(position < 0 || position >= this.length) return false;
                    var current = this.head;
                    var index = 0;
                    while(index++ < position) {
                        current = current.next;
                    }
                    current.data = newData;
                    return true;
                }

                LinkedList.prototype.removeAt = function(position) {
                    if(position < 0 || position >= this.length) return false;
                    if(position == 0) {
                        this.head = this.head.next;
                    }else{
                        var index = 0;
                        var current = this.head;
                        var previous = null;
                        while(index++ < position) {
                            previous = current;
                            current = current.next;
                        }
                        previous.next = current.next;
                    }
                    this.length -= 1;
                    return true;
                }

                LinkedList.prototype.remove = function(data) {
                    var position = this.indexOf(data);
                    return this.removeAt(position);
                }
            }      
        //双向链表
            //链接是双向的,一个链向下一个元素,一个链向上一个元素,同时控制next和prev两个指针
            //head/tail
            function DoublyLinkedList(){
                function Node(data){
                    this.data = null;
                    this.prev = null;
                    this.next = null;
                }
                this.head = null;
                this.tail = null;
                this.length = 0;
                DoublyLinkedList.prototype.append = function (data){
                    var newNode = new Node(data);
                    if(this.length == 0){
                        this.head = newNode;
                        this.tail = newNode;
                    }else{
                        newNode.prev = this.tail;
                        this.tail.next = newNode;
                        this.tail = newNode;
                    }
                    this.length += 1;
                }
                DoublyLinkedList.prototype.toString = function(){
                    return this.backwardString();
                }
                DoublyLinkedList.prototype.forwardString = function(){
                    var current = this.tail;
                    var resultString = "";
                    while(current){
                        resultString += current.data + "";
                        current = current.prev;
                    }
                    return resultString;
                }

                DoublyLinkedList.prototype.backwardString = function(){
                    var current = this.head;
                    var resultString = "";
                    while(current){
                        resultString += current.data + "";
                        current = current.next;
                    }
                    return resultString;
                }
                
                DoublyLinkedList.prototype.insert = function(position, data){
                    if(position < 0 || position > this.length) return false;
                    var newNode = new Node(data);
                    if(this.length == 0){
                        this.head = newNode;
                        this.tail = newNode;
                    }else{
                        if(postion == 0){
                            this.head.prev = newNode;
                            newNode.next = this.head;
                            this.head = newNode;
                        }else if(position == this.length){
                            newNode.prev = this.tail;
                            this.tail.next = newNode;
                            this.tail = newNode;
                        }else{
                            var current = this.head;
                            var index = 0;
                            while(index++ < position){
                                current = current.next;
                            }
                            newNode.next = current;
                            newNode.prev = current.prev;
                            current.prev.next = newNode;
                            current.prev = newNode;
                        }
                    }
                    this.length += 1;
                    return true;
                }
                DoublyLinkedList.prototype.get = function(position){
                    if(position < 0 || position >= this.length) return null;
                    var current = this.head;
                    var index = 0;
                    while(index++ < position){
                        current = current.next;
                    }
                    return current.data;
                }
                DoublyLinkedList.prototype.indexOf = function(data){
                    var current = this.head;
                    var index = 0;
                    while(current){
                        if(current.data == data){
                            return index;
                        }
                        current = current.next;
                        index += 1;
                    }
                    return -1;
                }
                DoublyLinkedList.prototype.update = function(position, newData){
                    if(position < 0 || position >= this.length) return false;
                    var current = this.head;
                    var index = 0;
                    while(index++ < position){
                        current = current.next;
                    }
                    current.data = newData;
                    return true;
                }
                DoublyLinkedList.prototype.removeAt = function(position){
                    if(position < 0 || position >= this.length) return null;
                    var current = this.head;
                    if(this.length == 1){
                        this.head = null;
                        this.tail = null;
                    }else{
                        if(position == 0){
                            this.head.next.prev = null;
                            this.head = this.head.next;
                        }else if(position == this.length - 1){
                            var current = this.tail;
                            this.tail.prev.next = null;
                            this.tail = this.tail.prev;
                        }else{
                            var index = 0;
                            while(index++ < position){
                                current = current.next;
                            }
                            current.prev.next = current.next;
                            current.next.prev = current.prev;
                        }
                    }
                    this.length -=1;
                    return current.data;
                }
                DoublyLinkedList.prototype.remove = function(){
                    var index = this.indexOf(data);
                    return this.removeAt(index);
                }
            }
        //4.循环链表
            //最后一个元素指向下一个元素的指针(tail.next)不是引用undefined,而是指向第一个元素(head)
        //5.有序链表
            //保持元素有序的链表,将元素插入到正确位置实现链表的有序性
// ##集合
    function Set() {
        this.items = {};

        Set.prototype.add = function(value) {
            if(this.has(value)) {
                return false;
            }
            this.items[value] = value;
            return true;
        }

        Set.prototype.has = function(value) {
            return this.items.hasOwnProperty(value);
        }

        Set.prototype.remove = function(value) {
            if(!this.has(value)) {
                return false;
            }
            delete this.items[value];
            return true;
        }

        Set.prototype.clear = function() {
            this.item = {};
        }

        Set.prototype.size = function() {
            return Object.keys(this.items).length;
        }

        Set.prototype.values = function() {
            return Object.keys(this.items);
        }
    }
// ##字典
    //一一对应,key不可以重复,value可以重复,key无序
    // 创建字典的构造函数
    function Dictionary() {
        // 字典属性
        this.items = {}

        // 字典操作方法
        // 在字典中添加键值对
        Dictionary.prototype.set = function (key, value) {
            this.items[key] = value
        }

        // 判断字典中是否有某个key
        Dictionary.prototype.has = function (key) {
            return this.items.hasOwnProperty(key)
        }

        // 从字典中移除元素
        Dictionary.prototype.remove = function (key) {
            // 1.判断字典中是否有这个key
            if (!this.has(key)) return false

            // 2.从字典中删除key
            delete this.items[key]
            return true
        }

        // 根据key去获取value
        Dictionary.prototype.get = function (key) {
            return this.has(key) ? this.items[key] : undefined
        }

        // 获取所有的keys
        Dictionary.prototype.keys = function () {
            return Object.keys(this.items)
        }

        // 获取所有的value
        Dictionary.prototype.values = function () {
            return Object.values(this.items)
        }

        // size方法
        Dictionary.prototype.size = function () {
            return this.keys().length
        }

        // clear方法
        Dictionary.prototype.clear = function () {
            this.items = {}
        }
    }

    // 创建字典对象
    var dict = new Dictionay()
// ##哈希表  
    //理论居多,编码较容易
    //1.优势:非常快速的插入-删除-查找操作,比树还快
    //2.缺点:数据没有顺序,不能以固定的方式来遍历
    //3.哈希表究竟是个啥?
    //结构就是数组,神奇于下标值的变换-哈希函数,获取HashCode
    //将字符串转成下标值
    //4.哈希化:将大数字转化为数组范围内下标的过程
    //5.哈希表:将最终数据插入数组,进行封装
    //6.重复问题:转化下标的过程中会出现下标相同的情况
    //7.解决方案一:链地址法-也就是存入数组的是一个数组/链表
    //8.解决方案二:开放地址法-继续向下寻找空白位置来放置重复数据
    //9.哈希表效率更高:哈希化越好,也就是减少重复,进而要求哈希函数设计的巧妙
    //霍纳法则-秦九韶算法:多项式-O(n^2) -> O(n)
    //10.哈希函数
        function hashFunc(str, size) {
            var hashCode = 0;
            for(var i = 0; i < str.length; i++) {
                hashCode = 37 * hashCode + str.charCodeAt(i);
            }
            var index = hashCode % size;
            return index;
        }
    //哈希表
        function HashTable() {
            this.storage = [];
            this.count = 0;
            this.limit = 7;

            HashTable.prototype.hashFunc = function(str, size) {
                var hashCode = 0;
                for(var i = 0; i < str.length; i++) {
                    hashCode = 37 * hashCode + str.charCodeAt(i);
                }
                var index = hashCode % size;
                return index;
            }

            HashTable.prototype.put = function(key, value) {
                var index = this.hashFunc(key, this.limit);
                var bucket = this.storage[index];
                if(bucket == null) {
                    bucket = [];
                    this.storage[index] = bucket;
                }
                for(var i = 0; i < bucket.length; i++) {
                    var tuple = bucket[i];
                    if(tuple[0] == key) {
                        tuple[1] = value;
                        return true;
                    }
                }
                bucket.push([key, value]);
                this.count += 1;
            }

            HashTable.prototype.get = function(key) {
                var index = this.hashFunc(key, this.limit);
                var bucket = this.storage[index];
                if(bucket == null) {
                    return null;
                }
                for(var i = 0; i < bucket.length; i++) {
                    var tuple = bucket[i];
                    if(tuple[0] == key) {
                        return tuple[1];
                    }
                }
                return null;
            }

            HashTable.prototype.remove = function(key) {
                var index = this.hashFunc(key, this.limit);
                var bucket = this.storage[index];
                if(bucket == null) {
                    return null;
                }
                for(var i = 0; i < bucket.length; i++) {
                    var tuple = bucket[i];
                    if(tuple[0] == key) {
                        bucket.splice(i, 1);
                        this.count -= 1;
                        return tuple[1];
                    }
                }
                return null;
            }

            //扩容,装填因子大于0.75,所有数据同时进行修改
            HashTable.prototype.resize = function(newLimit) {
                var oldStorage = this.storage;
                this.storage = [];
                this.count = 0;
                this.limit = newLimit;
                for(var i = 0; i < oldStorage.length; i++) {
                    var bucket = oldStorage[i];
                    if(bucket == null) {
                        continue;
                    }
                    for(var j = 0; j < bucket.length; j++) {
                        var tuple = bucket[j];
                        this.put(tuple[0], tuple[1]);
                    }
                }
            }

            //添加操作之后:
            if(this.count > this.limit * 0.75) {
                this.resize(this.limit * 1);
            }

            //删除操作之后:
            if(this.limit > 7 && this.count < this.limit * 0.25) {
                this.resize(Math.floor(this.limit / 2));
            }

            //质数判断
            function isPrime(num) {
                var temp = parseInt(Math.sqrt(num));
                for(var i = 2; i <= temp; i++) {
                    if(num % i == 0) {
                        return false;
                    }
                }
                return true;
            }

            //实现容量恒为质数
            HashTable.prototype.getPrime = function(num) {
                while(!this.isPrime(num)) {
                    num += 1;
                }
                return num;
            }
        }  

//##树
    //1.二叉树:几乎所有的树都可以表示成二叉树的形式
    //2.完全二叉树:只有叶节点不是满的,且优先为左侧节点
    //3.二叉搜索树(BST):
    //非空左子树的所有键值小于根节点的键值
    //非空右子树的所有键值大于根节点的键值
    //左右子树本身也是二叉搜索树
    //利用了二分查找的思想,查找所需的最大次数为BST的深度
        function BinarySearchTree() {
            function Node(key) {
                this.key = key;
                this.left = null;
                this.right = null;
            }
            this.root = null;

            BinarySearchTree.prototype.insert = function(key) {
                var newNode = new Node(key);
                if(this.root == null) {
                    this.root = newNode;
                }else{
                    this.insertNode(this.root, newNode);
                }
            }

            BinarySearchTree.prototype.insertNode = function(node, newNode) {
                if(newNode.key < node.key) {
                    if(node.left == null) {
                        node.left = newNode;
                    }else{
                        this.insertNode(node.left, newNode);
                    }
                }else{
                    if(node.right == null) {
                        node.right = newNode;
                    }else{
                        this.insertNode(node.right, newNode);
                    }
                }
            }

            //先序遍历:先访问根节点,然后左右子树
            BinarySearchTree.prototype.preOrderTraversal = function(handler) {
                this.preOrderTraversalNode(this.root, handler);
            }
            BinarySearchTree.prototype.preOrderTraversalNode = function(node, handler) {
                if(node != null) {
                    handler(node.key);
                    this.preOrderTraversalNode(node.left, handler);
                    this.preOrderTraversalNode(node.right, handler);
                }
            }

            //使用
            var bst = new BinarySearchTree();
            var resultString = "";
            bst.preOrderTraversal(function(key){
                resultString += key + "";
            })
            alert(resultString);

            //中序遍历:根节点第二次访问
            BinarySearchTree.prototype.inOrderTraversal = function(handler) {
                this.inOrderTraversalNode(this.root, handler);
            }
            BinarySearchTree.prototype.inOrderTraversalNode = function(node, handler) {
                if(node != null) {
                    this.inOrderTraversalNode(node.left, handler);
                    handler(node.key);
                    this.inOrderTraversalNode(node.right, handler);
                }
            }

            //后序遍历:先访问左右子树,最后访问根节点
            BinarySearchTree.prototype.postOrderTraversal = function(handler) {
                this.postOrderTraversalNode(this.root, handler);
            }
            BinarySearchTree.prototype.postOrderTraversalNode = function(node, handler) {
                if(node != null) {
                    this.postOrderTraversalNode(node.left, handler);
                    this.postOrderTraversalNode(node.right, handler);
                    handler(node.key);
                }
            }

            BinarySearchTree.prototype.min = function() {
                var node = this.root;
                while(node.left != null) {
                    node = node.left;
                }
                return node.key;
            }

            BinarySearchTree.prototype.max = function() {
                var node = this.root;
                while(node.right != null) {
                    node = node.right;
                }
                return node.key;
            }

            BinarySearchTree.prototype.search = function(key) {
                return this.searchNode(this.root, key);
            }
            BinarySearchTree.prototype.searchNode = function(node,key) {
                if(node == null) {
                    return false;
                }
                if(node.key > key) {
                    return this.searchNode(node.left, key);
                }else if(node.key < key) {
                    return this.searchNode(node.right, key);
                }else{
                    return true;
                }
            }

            //删除节点:
            //1.找到节点
            //2.删除节点
            //叶节点:父节点的left/right为null
            //一个子节点:父节点指向子节点
            //两个子节点:右子树的最小节点去更新这个节点,将原点删除,最后返回新的引用(前驱/后继)
            BinarySearchTree.prototype.remove = function(key) {
                var current = this.root;
                var parent = null;
                var isLeftChild = true;
                while(current.key != key) {
                    parent = current;
                    if(key < current.key) {
                        isLeftChild = true;
                        current = current.left;
                    }else{
                        isLeftChild = false;
                        current = current.right;
                    }
                    if(current == null) {
                        return false;
                    }
                }

                // 3.删除的结点是叶结点
                if (current.left === null && current.right === null) {
                    if (current == this.root) {
                        this.root == null
                    } else if (isLeftChild) {
                        parent.left = null
                    } else {
                        parent.right = null
                    }
                }

                // 4.删除有一个子节点的节点
                else if (current.right === null) {
                    if (current == this.root) {
                        this.root = current.left
                    } else if (isLeftChild) {
                        parent.left = current.left
                    } else {
                        parent.right = current.left
                    }
                } else if (current.left === null) {
                    if (current == this.root) {
                        this.root = current.right
                    } else if (isLeftChild) {
                        parent.left = current.right
                    } else {
                        parent.right = current.right
                    }
                }

                // 5.删除有两个节点的节点
                else {
                    // 1.获取后继节点
                    var successor = this.getSuccessor(current)

                    // 2.判断是否是根节点
                    if (current == this.root) {
                        this.root = successor
                    } else if (isLeftChild) {
                        parent.left = successor
                    } else {
                        parent.right = successor
                    }

                    // 3.将删除节点的左子树赋值给successor
                    successor.left = current.left
                }

                return true
            }

            // 找后继的方法
            BinarySerachTree.prototype.getSuccessor = function (delNode) {
                // 1.使用变量保存临时的节点
                var successorParent = delNode
                var successor = delNode
                var current = delNode.right // 要从右子树开始找

                // 2.寻找节点
                while (current != null) {
                    successorParent = successor
                    successor = current
                    current = current.left
                }

                // 3.如果是删除图中15的情况, 还需要如下代码
                if (successor != delNode.right) {
                    successorParent.left = successorParent.right
                    successor.right = delNode.right
                }
                return successor;
            }
        }
//##红黑树

    
//##图
    // 非线性数据结构:图
    // 图是网络结构的抽象模型,一组由边连接的节点,任何二元关系都可以用图来表示
    // 1.一个图G=(V,E)
    //     V:一组顶点
    //     E:一组边,连接V中的顶点
    // 2.由一条边连接在一起的顶点称为相邻顶点
    //   一个顶点的度是其相邻顶点的数量
    //   路径是顶点的一个连续序列
    //   简单路径要求不包含重复的顶点
    //   环也是一个简单路径
    //   无环:无环的 连通的:每两个顶点间都存在路径
    // 3.有向图/无向图
    //     图可以是无向的或是有向的,双向上都存在路径则是强连通的
    // 4.图的表示
    // 6.图的遍历
    //     两种算法:广度优先搜索/深度优先搜索
    //     可以寻找特定的点或寻找两个顶点之间的路径,检查图是否连通,检查图是否含有环
    //     思想:必须追踪每个第一次访问的节点,并且追踪有哪些节点还没有被完全探索,需要指定第一个被访问的节点
    //     完全搜索一个顶点要求我们查看该顶点的每一条边,对于连接的未被访问的标注被发现,加入待访问顶点列表
    //     为了保证算法的效率,务必访问每个顶点至多两次,连通图中每条边和顶点都会被访问到
    //     1.广度优先搜索:队列 存入队列,最先入队的顶点先被探索
    //         先宽后深的访问顶点
    //         1.创建一个队列Q
    //         2.标注v为被发现的,并将v入队列Q
    //         3.如果Q非空,则运行以下的步骤
    //             1.将u从Q出队列
    //             2.标注u被发现
    //             3.将u所有未被访问过的邻点入队列
    //             4.标注u为已被探索的
    //     2.深度优先搜索:栈 存入栈,沿路径被探索,存在新的相邻顶点就去访问
    //         先深后广的访问顶点
    //         1.标注v为被发现的
    //         2.对于v的所有未访问的邻点w,访问顶点w
    //         3.标注v为已被探索的
    function Graph() {
        // 属性
        this.vertex = []; // 存储顶点
        this.edges = new Dictionay(); // 存储边

        // 添加方法
        Graph.prototype.addVertex = function (v) {
            this.vertex.push(v);
            this.edges.set(v, []);
        }

        Graph.prototype.addEdge = function (v, w) {
            this.edges.get(v).push(w);
            this.edges.get(w).push(v);
        }

        Graph.prototype.toString = function () {
            var resultStr = ""
            for (var i = 0; i < this.vertex.length; i++) {
                resultStr += this.vertex[i] + "->"
                var edg = this.edges.get(this.vertex[i])
                for (var j = 0; j < edg.length; j++) {
                    resultStr += edg[j] + " "
                }
                resultStr += "\n"
            }
            return resultStr
        }

        // 初始化颜色
        Graph.prototype.initColor = function () {
            var colors = [];
            for (var i = 0; i < this.vertex.length; i++) {
                colors[this.vertex[i]] = "white";
            }
            return colors;
        }

        // 广度优先算法
        Graph.prototype.bfs = function (v, handler) {
            // 1.初始化颜色
            var color = this.initColor();
            // 2.创建队列
            var queue = new Queue();
            // 3.将传入的顶点放入队列中
            queue.enqueue(v);
            // 4.从队列中依次取出和放入数据
            while (!queue.isEmpty()) {
                // 4.1.从队列中取出数据
                var qv = queue.dequeue();
                // 4.2.获取qv相邻的所有顶点
                var qEdg = this.edgs.get(qv);
                // 4.3.将qv的颜色设置成灰色
                color[qv] = "gray";
                // 4.4.将qAdj的所有顶点依次压入队列中
                for (var i = 0; i < qEdg.length; i++) {
                    var a = qEdg[i];
                    if (color[a] === "white") {
                        color[a] = "gray";
                        queue.enqueue(a);
                    }
                }
                // 4.5.因为qv已经探测完毕, 将qv设置成黑色
                color[qv] = "black";
                // 4.6.处理qv
                if (handler) {
                    handler(qv);
                }
            }
        }

        // 深度优先搜索
        Graph.prototype.dfs = function (handler) {
            // 1.初始化颜色
            var color = this.initColor();
            // 2.遍历所有的顶点, 开始访问
            for (var i = 0; i < this.vertex.length; i++) {
                if (color[this.vertex[i]] === "white") {
                    this.dfsVisit(this.vertex[i], color, handler);
                }
            }
        }

        // dfs的递归调用方法
        Graph.prototype.dfsVisit = function (u, color, handler) {
            // 1.将u的颜色设置为灰色
            color[u] = "gray";
            // 2.处理u顶点
            if (handler) {
                handler(u)
            }
            // 3.u的所有邻接顶点的访问
            var uEdg = this.edgs.get(u)
            for (var i = 0; i < uEdg.length; i++) {
                var w = uEdg[i]
                if (color[w] === "white") {
                    this.dfsVisit(w, color, handler)
                }
            }
            // 4.将u设置为黑色
            color[u] = "black"
        }
    }
//##排序和搜索算法
    //1.冒泡排序
    //2.选择排序
    //3.插入排序
    //4.归并排序
    //5.快排
        //1.首先,在数组中选择一个值作为主元,也就是数组中间的那个值
        //2.创建两个指针引用,左边一个指向数组的第一个值,右边一个指向数组的最后一个值
        //移动左指针找到一个比主元大的值,移动右指针找到一个比主元小的值,然后交换
        //重复这个过程,直到左指针超过右指针,这一步叫做划分操作
        //3.接着对划分后的小数组重复之前的步骤,最后数组完全排序
        // 算法复杂度:O(nlog(n))
    // 封装ArrayList
    function ArrayList() {
        this.array = []

        ArrayList.prototype.insert = function (item) {
            this.array.push(item)
        }

        ArrayList.prototype.toString = function () {
            return this.array.join()
        }

        ArrayList.prototype.bubbleSort = function () {
            // 1.获取数组的长度
            var length = this.array.length

            // 2.反向循环, 因此次数越来越少
            for (var i = length - 1; i >= 0; i--) {
                // 3.根据i的次数, 比较循环到i位置
                for (var j = 0; j < i; j++) {
                    // 4.如果j位置比j+1位置的数据大, 那么就交换
                    if (this.array[j] > this.array[j+1]) {
                        // 交换
                        this.swap(j, j+1)
                    }
                }
            }
        }

        ArrayList.prototype.selectionSort = function () {
            // 1.获取数组的长度
            var length = this.array.length

            // 2.外层循环: 从0位置开始取出数据, 直到length-2位置
            for (var i = 0; i < length - 1; i++) {
                // 3.内层循环: 从i+1位置开始, 和后面的内容比较
                var min = i
                for (var j = min + 1; j < length; j++) {
                    // 4.如果i位置的数据大于j位置的数据, 记录最小的位置
                    if (this.array[min] > this.array[j]) {
                        min = j
                    }
                }
                this.swap(min, i)
            }
        }

        ArrayList.prototype.insertionSort = function () {
            // 1.获取数组的长度
            var length = this.array.length

            // 2.外层循环: 外层循环是从1位置开始, 依次遍历到最后
            for (var i = 1; i < length; i++) {
                // 3.记录选出的元素, 放在变量temp中
                var j = i
                var temp = this.array[i]

                // 4.内层循环: 内层循环不确定循环的次数, 最好使用while循环
                while (j > 0 && this.array[j-1] > temp) {
                    this.array[j] = this.array[j-1]
                    j--
                }

                // 5.将选出的j位置, 放入temp元素
                this.array[j] = temp
            }
        }

        ArrayList.prototype.shellSort = function () {
            // 1.获取数组的长度
            var length = this.array.length

            // 2.根据长度计算增量
            var gap = Math.floor(length / 2)

            // 3.增量不断变量小, 大于0就继续排序
            while (gap > 0) {
                // 4.实现插入排序
                for (var i = gap; i < length; i++) {
                    // 4.1.保存临时变量
                    var j = i
                    var temp = this.array[i]

                    // 4.2.插入排序的内存循环
                    while (j > gap - 1 && this.array[j - gap] > temp) {
                        this.array[j] = this.array[j - gap]
                        j -= gap
                    }

                    // 4.3.将选出的j位置设置为temp
                    this.array[j] = temp
                }

                // 5.重新计算新的间隔
                gap = Math.floor(gap / 2)
            }
        }

        ArrayList.prototype.swap = function (m, n) {
            var temp = this.array[m]
            this.array[m] = this.array[n]
            this.array[n] = temp
        }

    //快排
        ArrayList.prototype.quickSort = function(arr) {
            　　if (arr.length <= 1) { return arr; }   
            　　var pivotIndex = Math.floor(arr.length / 2);
                //splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,
                //并以数组形式返回被修改的内容。此方法会改变原数组
            　　var pivot = arr.splice(pivotIndex, 1)[0];
            　　var left = [];    
            　　var right = [];    
            　　for (var i = 0; i < arr.length; i++){
            　　　　if (arr[i] < pivot) {   
            　　　　　　left.push(arr[i]);  
            　　　　} else {
            　　　　　　right.push(arr[i]);
            　　　　}
            
            　　}
            　　return quickSort(left).concat([pivot], quickSort(right));  
        }
    }