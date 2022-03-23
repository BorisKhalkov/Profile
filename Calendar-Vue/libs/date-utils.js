function assertEquals(actual, expected) {
	console.assert(actual === expected, `Ошибка, значения не равны: ${actual} != ${expected}`)
}

function getDaysOfMonth(month, year) {
	return new Date(year, month + 1, 0).getDate()
}

function n(str, char) {
	return [...str].filter(ch => char === ch).length
}

assertEquals(n('hello', 'l'), 2)
