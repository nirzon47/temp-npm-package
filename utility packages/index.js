/**
 * A function that takes in a variable number of arguments and returns the sum of all the arguments.
 *
 * @param {...number} nums - the numbers to be added together
 * @return {number} the sum of the input numbers
 */
const add = (...nums) => {
	let sum = 0
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i]
	}

	return sum
}

/**
 * A function that multiplies all the input numbers together.
 *
 * @param {...number} nums - The numbers to be multiplied
 * @return {number} The product of all the input numbers
 */
const multiply = (...nums) => {
	let product = 1
	for (let i = 0; i < nums.length; i++) {
		product *= nums[i]
	}

	return product
}

const subtract = (a, b) => a - b

const divide = (a, b) => a / b

const remainder = (a, b) => a % b

const removeRepetitions = (arr) => [...new Set(arr)]

/**
 * Deletes the specified key from the object and returns a new object without the specified key.
 *
 * @param {object} obj - The original object
 * @param {string} key - The key to be deleted from the object
 * @return {object} A new object without the specified key
 */
const deleteKey = (obj, key) => {
	const newObj = { ...obj }
	delete newObj[key]

	return newObj
}

/**
 * Deletes the specified keys from the given object and returns a new object with the keys removed.
 *
 * @param {Object} obj - The original object
 * @param {Array} keys - The keys to be deleted
 * @return {Object} The new object with specified keys removed
 */
const deleteKeys = (obj, keys) => {
	const newObj = { ...obj }
	for (let i = 0; i < keys.length; i++) {
		delete newObj[keys[i]]
	}

	return newObj
}

const findPower = (a, b) => a ** b

const findSquareRoot = (a) => Math.sqrt(a)

module.exports = {
	add,
	multiply,
	subtract,
	divide,
	remainder,
	removeRepetitions,
	deleteKey,
	deleteKeys,
	findPower,
	findSquareRoot,
}
