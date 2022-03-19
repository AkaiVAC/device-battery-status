import getAllBatteryStatuses from './all_device_statuses';

const getAcademyStatuses = (data) => {
	if (!data) return false;
	const allData = getAllBatteryStatuses(data);
	const academyStatus = [];
	allData.allAcademies.forEach((academy) => {
		let criticalCount = 0;
		allData.allDeviceStatuses.map((status) => {
			if (status.academyId === academy && status.value > 30) {
				criticalCount++;
			}
		});
		academyStatus.push({
			item: academy,
			status: criticalCount,
		});
	});

	academyStatus.sort(compare).reverse();
	return academyStatus;
};

export const compare = (item1, item2) => {
	return item1.status - item2.status;
};

export default getAcademyStatuses;
