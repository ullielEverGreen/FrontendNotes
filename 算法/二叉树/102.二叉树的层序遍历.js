// 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 
// （即逐层地，从左到右访问所有节点）。

// 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

const { TreeNode } = require('./utils')

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // 处理空树的情况
    if (root === null) return [];
    
    const result = [];  // 存储最终结果
    const queue = [root];  // 队列，初始包含根节点
    
    while (queue.length > 0) {
        // 记录当前层的节点数量
        const levelSize = queue.length;
        const currentLevel = [];  // 存储当前层的节点值
        
        // 遍历当前层的所有节点
        for (let i = 0; i < levelSize; i++) {
            // 从队列头部取出节点
            const currentNode = queue.shift();
            // 将节点值加入当前层数组
            currentLevel.push(currentNode.val);
            
            // 将左子节点加入队列（如果存在）
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            // 将右子节点加入队列（如果存在）
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
        
        // 将当前层的结果加入最终结果
        result.push(currentLevel);
    }
    
    return result;
};

const root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)
console.log(levelOrder(root))