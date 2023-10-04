class AlarmClock {
	alarmCollection = [];
	intervalId = null;

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		}

		if (this.alarmCollection.some(alarmObject => alarmObject.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		}

		this.alarmCollection.push({
			time,
			callback,
			canCall: true
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(alarmObject => alarmObject.time !== time);
	}

	getCurrentFormattedTime() {
		let currentDate = new Date().toLocaleTimeString("ru-Ru", {
			hour: "2-digit",
			minute: "2-digit",
		});

		return currentDate;
	};

	start() {
		if (this.intervalId !== null) {
			return;
		}

		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach(alarmObject => {
				if ((alarmObject.time === this.getCurrentFormattedTime()) && (alarmObject.canCall === true)) {
					alarmObject.canCall = false;
					alarmObject.callback();
				}
			})
		}, 1000);
	};

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	};

	resetAllCalls() {
		this.alarmCollection.forEach(alarmObject => alarmObject.canCall = true);
	};

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}