import getAllBatteryStatuses from "./all_device_statuses";

const getDeviceStatus = (academyId, data) => {
	if (!academyId || !data) return false;
	const allData = getAllBatteryStatuses(data);
	const deviceStatus = [];
	allData.allDeviceStatuses.map(device => {
		if (device.academyId == academyId) {
			deviceStatus.push({
				item: device.deviceId,
				status: device.value.toFixed(2)
			});
		}
	});

	deviceStatus.sort(compare).reverse();
	return deviceStatus;
};

export const compare = (item1, item2) => {
	return item1.status - item2.status;
};

export default getDeviceStatus;
