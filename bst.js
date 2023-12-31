class Node
    {
        constructor(k)
        {
            this.data = k;
            this.left = null;
            this.right = null;
        }
         
    }
     
    // A utility function to check if a given node is leaf or not
    function isLeaf(node)
    {
        if (node == null)
            return false;
        if (node.left == null && node.right == null)
            return true;
        return false;
    }
     
    // This function returns sum of all left leaves in a given
     // binary tree
    function leftLeavesSum(node)
    {
     
        // Initialize result
        let res = 0;
   
        // Update result if root is not NULL
        if (node != null)
        {
         
            // If left of root is NULL, then add key of
            // left child
            if (isLeaf(node.left))
                res += node.left.data;
            else // Else recur for left child of root
                res += leftLeavesSum(node.left);
   
            // Recur for right child of root and update res
            res += leftLeavesSum(node.right);
        }
   
        // return result
        return res;
    }
     
    // Driver program
    root = new Node(20);
    root.left = new Node(9);
    root.right = new Node(49);
    root.left.right = new Node(12);
    root.left.left = new Node(5);
    root.right.left = new Node(23);
    root.right.right = new Node(52);
    root.left.right.right = new Node(12);
    root.right.right.left = new Node(50);
     
    console.log("The sum of leaves is " +leftLeavesSum(root));