import getAcademyDetails from "./academy_details";
import getDevices from "./devices";
import getDeviceDetails from "./device_details";
import getDeviceDailyAvg from "./device_daily_avg";
import data from "../api/data";

export const getAllAcademies = data => {
	return getAcademyDetails(data);
};

export const getAllDevices = allAcademies => {
	const allDevices = [];
	allAcademies.forEach(academy => {
		allDevices.push(getDevices(academy, data));
	});
	return allDevices;
};

export const getAllDeviceDetails = allDevices => {
	const allDeviceDetails = [];
	allDevices.forEach(device => {
		device.devices.forEach(item => {
			allDeviceDetails.push(getDeviceDetails(item, data));
		});
	});
	return allDeviceDetails;
};

export const getAllDeviceStatuses = (allDeviceDetails, data) => {
	const allDeviceStatuses = [];
	allDeviceDetails.forEach(device => {
		allDeviceStatuses.push(
			getDeviceDailyAvg(device.deviceId, device.details, data)
		);
	});
	return allDeviceStatuses;
};

const getAllBatteryStatuses = data => {
	if (!data) return false;
	const allAcademies = getAllAcademies(data);
	const allDevices = getAllDevices(allAcademies);
	const allDeviceDetails = getAllDeviceDetails(allDevices);
	const allDeviceStatuses = getAllDeviceStatuses(allDeviceDetails, data);
	return { allAcademies, allDevices, allDeviceDetails, allDeviceStatuses };
};

export default getAllBatteryStatuses;
