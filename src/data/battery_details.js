const getAcademyDetails = batteryDetails => {
	let academyArray = [];
	if (!batteryDetails) return false;
	batteryDetails.filter(item => {
		if (!academyArray.includes(item.academyId) && item.academyId) {
			academyArray.push(item.academyId);
		}
	});

	return academyArray;
};

const getDeviceDetails = (academyId, batteryDetails) => {
	if (!academyId || !batteryDetails) return false;
	let deviceArray = [];
	batteryDetails.filter(item => {
		if (
			item.academyId === Number(academyId) &&
			!deviceArray.includes(item.serialNumber) &&
			item.serialNumber
		) {
			deviceArray.push(item.serialNumber);
		}
	});
	return deviceArray;
};

const getDeviceMeasurements = (deviceId, batteryDetails) => {
	if (!deviceId || !batteryDetails) return false;
	let deviceDetails = [];
	batteryDetails.filter(item => {
		if (
			item.serialNumber === deviceId &&
			item.batteryLevel &&
			item.timestamp
		) {
			deviceDetails.push({
				batteryLevel: item.batteryLevel,
				timestamp: new Date(item.timestamp).getTime()
			});
		}
	});

	getDeviceDailyAvg(deviceId, deviceDetails);

	return deviceDetails;
};

const getDeviceDailyAvg = (deviceId, deviceDetails) => {
	if (!deviceId || !deviceDetails) return false;
	return 0.5;
};

exports.getAcademyDetails = getAcademyDetails;
exports.getDeviceDetails = getDeviceDetails;
exports.getDeviceMeasurements = getDeviceMeasurements;
exports.getDeviceDailyAvg = getDeviceDailyAvg;
