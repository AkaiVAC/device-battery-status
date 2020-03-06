let defectiveDeviceCount = [];
let deviceDailyAvg = [];

export const getAcademyDetails = batteryDetails => {
	let academyArray = [];
	batteryDetails.filter(item => {
		if (!academyArray.includes(item.academyId)) {
			academyArray.push(item.academyId);
		}
	});

	return academyArray;
};

export const getDeviceDetails = (academyId, batteryDetails) => {
	if (!academyId) return false;
	let deviceArray = [];
	batteryDetails.filter(item => {
		if (
			item.academyId === Number(academyId) &&
			!deviceArray.includes(item.serialNumber)
		) {
			deviceArray.push(item.serialNumber);
		}
	});
	return deviceArray;
};

export const getDeviceDailyAvg = (deviceId, batteryDetails) => {
	if (!deviceId) return;
	let deviceDetails = [];
	batteryDetails.filter(item => {
		if (item.serialNumber === deviceId) {
			deviceDetails.push({
				batteryLevel: item.batteryLevel,
				timestamp: item.timestamp,
			});
		}
	});

	return deviceDetails;
};
