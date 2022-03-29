const calendarSelector = {
	template: calendarSelectorTpl.innerHTML,
	props: ['date'],
	methods: {
		getMonthTitle() {
			return getMonthName(this.date.getMonth())

		},
		nextMonth() {
			state.updateCalendarDateMonth(1)
		},
		prevMonth() {
			state.updateCalendarDateMonth(-1)
		},

		getYear() {
			return this.date.getFullYear()
		},
		nextYear() {
			state.updateCalendarYear(1)
		},
		prevYear() {
			state.updateCalendarYear(-1)
		}
	},
}