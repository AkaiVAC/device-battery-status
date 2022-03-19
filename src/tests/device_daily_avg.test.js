import getDeviceDailyAvg from '../data/device_daily_avg.js';
const allData = [
	{
		academyId: 1,
		batteryLevel: 0.68,
		employeeId: 'T1007384',
		serialNumber: 1,
		timestamp: '2019-05-17T07:47:25.833+01:00',
	},
	{
		academyId: 1,
		batteryLevel: 0.51,
		employeeId: 'T1001417',
		serialNumber: 1,
		timestamp: '2019-05-17T07:48:4.147+01:00',
	},
	{
		academyId: 1,
		batteryLevel: 0.98,
		employeeId: 'T1008250',
		serialNumber: 1,
		timestamp: '2019-05-17T07:50:35.158+01:00',
	},
	{
		academyId: 1,
		batteryLevel: 0.5,
		employeeId: 'T1001417',
		serialNumber: 1,
		timestamp: '2019-05-17T07:57:08.29+01:00',
	},
];
const testData = {
	deviceId: 1,
	details: [
		{
			batteryLevel: 45,
			timestamp: 1558099253061,
		},
		{
			batteryLevel: 42,
			timestamp: 1558102853061,
		},
		{
			batteryLevel: 26,
			timestamp: 1558106453061,
		},
		{
			batteryLevel: 36,
			timestamp: 1558110053061,
		},
		{
			batteryLevel: 32,
			timestamp: 1558113653061,
		},
		{
			batteryLevel: 22,
			timestamp: 1558113653061,
		},
		{
			batteryLevel: 22,
			timestamp: 1558117253061,
		},
		{
			batteryLevel: 21,
			timestamp: 1558117253061,
		},
		{
			batteryLevel: '21',
			timestamp: 1558117253061,
		},
	],
};

const expected = { deviceId: 1, value: 184, academyId: 1 };

describe(`Measure the device's daily average discharge rate`, () => {
	test('should return false on sending no data', () => {
		expect(getDeviceDailyAvg()).toBeFalsy();
	});
	test('should return results in the expected format', () => {
		expect(
			getDeviceDailyAvg(testData.deviceId, testData.details, allData),
		).toStrictEqual(expected);
	});
	test('should skip calculation when battery levels have equal values', () => {
		expect(
			getDeviceDailyAvg(testData.deviceId, testData.details, allData),
		).toStrictEqual(expected);
	});
	test('should skip calculation when timestamps have equal values', () => {
		expect(
			getDeviceDailyAvg(testData.deviceId, testData.details, allData),
		).toStrictEqual(expected);
	});
	test('should skip calculation when battery level format is invalid', () => {
		expect(
			getDeviceDailyAvg(testData.deviceId, testData.details, allData),
		).toStrictEqual(expected);
	});
});
