
function validateTree(node, min, max) {
	if (node === undefined)
		return true;

	if (max !== undefined && node.value > max)
		return false;

	if (min !== undefined && node.value < min)
		return false;

	const isLeftValid = validateTree(node.left, min, node.value);

	if (!isLeftValid || (node.left !== undefined && node.left.value > node.value))
		return false;

	const isRightValid = validateTree(node.right, node.value, max);

	if (!isRightValid || (node.right !== undefined && node.right.value < node.value))
		return false;

	return true;
}

export default (tree) => {
	return validateTree(tree);
}