# find_most_freq_BST_iterative


```
class TreeNode {
    constructor(value = 0, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function mostFreq (root) {
}

// test
const t1 = new TreeNode(5, 
                        new TreeNode(2,
                                    new TreeNode(2),
                                    new TreeNode(4)),
                        new TreeNode(7,
                                    new TreeNode(6),
                                    new TreeNode(8)))
const t2 = new TreeNode(2, new TreeNode(1))
const t3 = new TreeNode(3)
console.log(mostFreq(t1), 'expect 2')
console.log(mostFreq(t2), 'expect 1')
console.log(mostFreq(t3), 'expect 3')
console.log(mostFreq(null), 'expect null')
```
