const getDeviceDetails = (deviceId, batteryDetails) => {
	if (!deviceId || !batteryDetails) return false;
	let batteryStats = { deviceId: "", details: [] };
	batteryDetails.forEach(item => {
		if (
			item.serialNumber === deviceId &&
			//Battery checks
			item.batteryLevel &&
			typeof item.batteryLevel === "number" &&
			item.batteryLevel > 0 &&
			item.batteryLevel < 1 &&
			//Timestamp checks
			item.timestamp &&
			typeof item.timestamp === "string"
		) {
			batteryStats.details.push({
				batteryLevel: item.batteryLevel * 100,
				timestamp: new Date(item.timestamp.slice(0, 16)).getTime()
			});
		}
	});
	batteryStats.deviceId = deviceId;
	//Ensure that the timestamps are in ascending order
	batteryStats.details.sort(compare);
	return batteryStats;
};

export const compare = (item1, item2) => {
	return item1.timestamp - item2.timestamp;
};

export default getDeviceDetails;
