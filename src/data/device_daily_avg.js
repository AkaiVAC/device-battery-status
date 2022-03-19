const getDeviceDailyAvg = (deviceId, batteryStats, data) => {
	if (!deviceId || !batteryStats) return false;
	if (batteryStats.length == 1) return 0;
	let batteryLevelOvertime = 0;
	let totalTimeElapsed = 0;

	let deviceDailyAvg = { deviceId: deviceId, value: '', academyId: '' };
	batteryStats.forEach((item, index) => {
		const nextItem = batteryStats[index + 1];
		if (
			index < batteryStats.length - 1 &&
			typeof nextItem !== 'undefined' &&
			!isNaN(item.batteryLevel) &&
			item.batteryLevel > nextItem.batteryLevel &&
			item.timestamp !== nextItem.timestamp
		) {
			batteryLevelOvertime += item.batteryLevel - nextItem.batteryLevel;
			totalTimeElapsed +=
				(nextItem.timestamp - item.timestamp) / (1000 * 60 * 60);
		}
	});

	deviceDailyAvg.academyId = data.filter(
		(item) => item.serialNumber == deviceId,
	)[0].academyId;
	deviceDailyAvg.value = (24 / totalTimeElapsed) * batteryLevelOvertime;

	return deviceDailyAvg;
};

export default getDeviceDailyAvg;
