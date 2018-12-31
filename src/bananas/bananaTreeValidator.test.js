import target from './bananaTreeValidator';

describe('Banana Tree validator tests', () => {
	test('tree is empty, return true', () => {
		const tree = undefined;

		const result = target(tree);

		expect(result).toEqual(true);
	});

	test('node has no children, return true', () => {
		const tree = {
			value: 5,
			left: undefined,
			right: undefined
		};

		const result = target(tree);

		expect(result).toEqual(true);
	});

	test('node has only left child and its value is smaller then current, return true', () => {
		const tree = {
			value: 5,
			left: {
				value: 3
			},
			right: undefined
		};

		const result = target(tree);

		expect(result).toEqual(true);
	});

	test('node has only right child and its value is bigger then current, return true', () => {
		const tree = {
			value: 5,
			right: {
				value: 7
			},
			left: undefined
		};

		const result = target(tree);

		expect(result).toEqual(true);
	});

	test('node has left and right child, when left is smaller and right is bigger, return true', () => {
		const tree = {
			value: 5,
			left: {
				value: 3
			},
			right: {
				value: 7
			}
		};

		const result = target(tree);

		expect(result).toEqual(true);
	});

	test('when left child  is a not a valid banana tree, return false', () => {
		const tree = {
			value: 5,
			left: {
				value: 3,
				left: {
					value: 1
				},
				right: {
					value: 2
				}
			},
			right: {
				value: 7
			}
		};

		const result = target(tree);

		expect(result).toEqual(false);
	});

	test('when right child is a not a valid banana tree, return false', () => {
		const tree = {
			value: 5,
			left: {
				value: 3
			},
			right: {
				value: 7,
				left: {
					value: 8
				},
				right: {
					value: 10
				}
			}
		};

		const result = target(tree);

		expect(result).toEqual(false);
	});

	test('when left child is valid banana tree, return false', () => {
		const tree = {
			value: 5,
			left: {
				value: 3,
				left: {
					value: 1
				},
				right: {
					value: 4
				}
			},
			right: {
				value: 7
			}
		};

		const result = target(tree);

		expect(result).toEqual(true);
	});

	test('when right child is valid banana tree, return false', () => {
		const tree = {
			value: 5,
			left: {
				value: 3
			},
			right: {
				value: 7,
				left: {
					value: 6
				},
				right: {
					value: 8
				}
			}
		};

		const result = target(tree);

		expect(result).toEqual(true);
	});

	test('when left child is valid banana tree but has a value greater then the root node, return false', () => {
		const tree = {
			value: 5,
			left: {
				value: 3,
				left: {
					value: 1
				},
				right: {
					value: 6
				}
			},
			right: {
				value: 7
			}
		};

		const result = target(tree);

		expect(result).toEqual(false);
	});

	test('when right child is valid banana tree but has a value smaller then the root node, return false', () => {
		const tree = {
			value: 5,
			left: {
				value: 3,
			},
			right: {
				value: 7,
				left: {
					value: 4
				},
				right: {
					value: 10
				}
			}
		};

		const result = target(tree);

		expect(result).toEqual(false);
	});

	test('when tree is valid, return true', () => {
		const tree = {
			value: 5,
			left: {
				value: 3,
				left: {
					value: 1,
					right: {
						value: 2
					}
				},
				right: {
					value: 4
				}

			},
			right: {
				value: 7,
				left: {
					value: 6
				},
				right: {
					value: 10,
					left: {
						value: 9
					},
					right: {
						value: 12,
						left: {
							value: 11
						}
					}
				}
			}
		};

		const result = target(tree);

		expect(result).toEqual(true);
	});

	test('when one of the sub trees is not valid return false', () => {
		const tree = {
			value: 6,
			left: {
				value: 3,
				left: {
					value: 1,
					left: {
						value: 0
					},
					right: {
						value: 2
					}
				},
				right: {
					value: 4
				}
			},
			right: {
				value: 8,
				left: {
					value: 7
				},
				right: {
					value: 10,
					left: {
						value: 2
					},
					right: {
						value: 14
					}
				}
			}
		};

		const result = target(tree);

		expect(result).toEqual(false);
	});

});