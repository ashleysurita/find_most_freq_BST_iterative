class TreeNode {
    constructor(value = 0, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function mostFreq (root) {
    if(!root) return null
    
    const map = {}
    let queue = [root]
    while(queue.length){
        const curr = queue.shift()
        if(!map[curr.value]) map[curr.value] = 0
        
        map[curr.value]++
        if(curr.left) queue.push(curr.left)
        if(curr.right) queue.push(curr.right)        
    }
    let highest
    Object.keys(map).forEach(key => {
        if(!highest) highest = key
        else if(map[key] > map[highest]) highest = key
    })
    
    return highest
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
