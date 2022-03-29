const calendarSelector = {
	template: calendarSelectorTpl.innerHTML,
	data() {
		return {
			date: new Date()
		}
	},
	methods: {
		getMonthTitle() {
			return getMonthName(this.date.getMonth())

		},
		nextMonth() {
			const date = new Date(this.date)
			date.setMonth(this.date.getMonth() + 1)
			this.date = date
		},
		prevMonth() {
			const date = new Date(this.date)
			date.setMonth(this.date.getMonth() - 1)
			this.date = date
		},

		getYear() {
			return this.date.getFullYear()
		},
		nextYear() {
			const date = new Date(this.date)
			date.setFullYear(this.date.getFullYear() + 1)
			this.date = date
		},
		prevYear() {
			const date = new Date(this.date)
			date.setFullYear(this.getFullYear() - 1)
			this.date = date
		}
	},
}