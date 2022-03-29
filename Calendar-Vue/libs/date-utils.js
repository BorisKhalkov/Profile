function assertEquals(actual, expected) {
	console.assert(actual === expected, `Ошибка, значения не равны: ${actual} != ${expected}`)
}

function getDaysOfMonth(month, year) {
	return new Date(year, month + 1, 0).getDate()
}

assertEquals(getDaysOfMonth(0, 2021), 31)
assertEquals(getDaysOfMonth(1, 2021), 28)
assertEquals(getDaysOfMonth(3, 2021), 30)
assertEquals(getDaysOfMonth(2, 2021), 31)
assertEquals(getDaysOfMonth(1, 2020), 29)
assertEquals(getDaysOfMonth(11, 1555), 31)

function getFirstWeekDay(month, year) {
	return new Date(year, month, 1).getUTCDay()
}

assertEquals(getFirstWeekDay(4, 2021), 5)
assertEquals(getFirstWeekDay(5, 2021), 1)
assertEquals(getFirstWeekDay(10, 2021), 0)
assertEquals(getFirstWeekDay(7, 2021), 6)

function getWeekdayName(index) {
	const d = new Date('2022-03-07')
	d.setDate(d.getDate() + index)
	return d.toLocaleDateString('ru-RU', {weekday: 'long'})
}

assertEquals(getWeekdayName(0), 'понедельник')
assertEquals(getWeekdayName(2), 'среда')
assertEquals(getWeekdayName(5), 'суббота')
assertEquals(getWeekdayName(6), 'воскресенье')

function getMonthName(index) {
	const d = new Date(2020, index, 1)
	return d.toLocaleDateString('ru-RU', {month: 'long'})
}

assertEquals(getMonthName(0), 'январь')
assertEquals(getMonthName(3), 'апрель')
assertEquals(getMonthName(7), 'август')
assertEquals(getMonthName(11), 'декабрь')

function getISODate(date) {
	const d = new Date(date)
	d.setMinutes(d.getUTCMinutes() - d.getTimezoneOffset())
	return d.toISOString().split('T')[0]
}

assertEquals(getISODate(new Date(2022, 2, 29)), '2022-03-29')
assertEquals(getISODate(new Date(2021, 4, 9)), '2021-05-09')