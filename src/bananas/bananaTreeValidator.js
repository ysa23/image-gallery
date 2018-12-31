
function validateTree(node, min, max) {
	if (node === undefined)
		return true;

	if (max !== undefined && node.value > max)
		return false;

	if (min !== undefined && node.value < min)
		return false;

	const isLeftValid = validateTree(node.left, min, node.value);
	const isRightValid = validateTree(node.right, node.value, max);

	return isLeftValid && isRightValid;
}

export default (tree) => {
	return validateTree(tree);
}