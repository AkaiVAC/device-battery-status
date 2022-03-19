import getAllBatteryStatuses from './all_device_statuses';
import data from '../api/data';

export const academyStatusColor = (status) => {
	if (status >= 5) {
		return 'is-danger';
	} else if (status < 5 && status >= 1) {
		return 'is-warning';
	} else {
		return 'is-primary';
	}
};

export const deviceStatusColor = (status) => {
	if (status >= 30) {
		return 'is-danger';
	} else if (status < 30 && status >= 15) {
		return 'is-warning';
	} else {
		return 'is-primary';
	}
};

export const deviceChargeLevelColor = (status) => {
	if (status <= 30) {
		return 'is-danger';
	} else if (status > 30 && status <= 60) {
		return 'is-warning';
	} else if (status > 60 && status <= 80) {
		return 'is-primary';
	} else {
		return 'is-success';
	}
};

export const chartColors = (status) => {
	const deviceStatus = getAllBatteryStatuses(data).allDeviceStatuses.filter(
		(device) => device.deviceId == status,
	);
	const batteryValue = deviceStatus[0].value.toFixed(2);
	let colors = {};
	if (batteryValue >= 30) {
		colors.lineColor = 'rgba(241, 70, 104, 1)';
		colors.areaColor = 'rgba(241, 70, 104, 0.2)';
	} else if (batteryValue < 30 && batteryValue >= 15) {
		colors.lineColor = 'rgba(255, 221, 87, 1)';
		colors.areaColor = 'rgba(255, 221, 87, 0.2)';
	} else {
		colors.lineColor = 'rgba(72, 199, 116, 1)';
		colors.areaColor = 'rgba(72, 199, 116, 0.2)';
	}
	return colors;
};
