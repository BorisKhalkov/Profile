const calendar = {
	template: calendarTpl.innerHTML,
	props: ['date'],
	components: {
		calendarSelector,
	},
	watch: {
		date: {
			immediate: true,
			handler() {
				const currentDay = this.date
				const month = currentDay.getMonth()
				const year = currentDay.getFullYear()
				const daysInMonth = getDaysOfMonth(month, year)
				const firstDayIndex = getFirstWeekDay(month, year)
				const days = []
				for (let i = firstDayIndex; i < daysInMonth + firstDayIndex; i++) {
					days[i] = i + 1 - firstDayIndex
				}
				this.days = days
			}
		},
	},
	methods: {
		weekday(i) {
			return getWeekdayName(i)
		},
	},
}