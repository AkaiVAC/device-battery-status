import getAcademyDetails from "../data/academy_details.js";
import getDevices from "../data/devices.js";
import getDeviceDetails from "../data/device_details.js";
import getDeviceDailyAvg from "../data/device_daily_avg.js";
import getAllBatteryStatuses from "../data/all_device_statuses.js";

const testData = [
	{
		academyId: 1,
		batteryLevel: 0.68,
		employeeId: "T1007384",
		serialNumber: "1805C67HD02259",
		timestamp: "2019-05-17T07:47:25.833+01:00"
	},
	{
		academyId: 1,
		batteryLevel: 0.51,
		employeeId: "T1001417",
		serialNumber: "1805C67HD02332",
		timestamp: "2019-05-17T07:48:4.147+01:00"
	},
	{
		academyId: 2,
		batteryLevel: 0.98,
		employeeId: "T1008250",
		serialNumber: "1805C67HD02009",
		timestamp: "2019-05-17T07:50:35.158+01:00"
	},
	{
		academyId: 2,
		batteryLevel: 0.96,
		employeeId: "T1008250",
		serialNumber: "1805C67HD02009",
		timestamp: "2019-05-17T08:50:35.158+01:00"
	}
];

const deviceData = {
	deviceId: "1805C67HD02009",
	details: [
		{ batteryLevel: 98, timestamp: 1558059600000 },
		{ batteryLevel: 96, timestamp: 1558063200000 }
	]
};

describe("Get all device statuses on load", () => {
	test("should return false on sending no data", () => {
		expect(getAllBatteryStatuses()).toBeFalsy();
	});
	test("should return correct academy data", () => {
		expect(getAcademyDetails(testData)).toStrictEqual([1, 2]);
	});
	test("should return correct device data", () => {
		const expected = {
			academyId: 1,
			devices: ["1805C67HD02259", "1805C67HD02332"]
		};
		const expected_2 = {
			academyId: 2,
			devices: ["1805C67HD02009"]
		};
		expect(getDevices(1, testData)).toMatchObject(expected);
		expect(getDevices(2, testData)).toMatchObject(expected_2);
	});
	test("should return correct device measurements", () => {
		expect(getDeviceDetails("1805C67HD02009", testData)).toStrictEqual(
			deviceData
		);
	});
	test("should return correct device status", () => {
		const expected = {
			deviceId: "1805C67HD02009",
			value: 48,
			academyId: 2
		};
		expect(
			getDeviceDailyAvg(deviceData.deviceId, deviceData.details, testData)
		).toMatchObject(expected);
	});
	test("should return all device statuses in the correct format", () => {
		expect(getAllBatteryStatuses(testData));
	});
});
