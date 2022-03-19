import getDeviceDetails, { compare } from '../data/device_details.js';

const serialNumber = 1;
const testData = [
	{
		serialNumber: 1,
		batteryLevel: 0.51,
		timestamp: '2019-05-17T14:20:53.061+01:00',
	},
	{
		serialNumber: 1,
		batteryLevel: 0.5,
		timestamp: '2019-05-20T07:57:13.125+01:00',
	},
	{
		serialNumber: 1,
		batteryLevel: null,
		timestamp: '2019-05-20T08:25:17.78+01:00',
	},
	{ serialNumber: 1, batteryLevel: 0.48, timestamp: null },
	{ serialNumber: 1, batteryLevel: 0.46, timestamp: '' },
	{
		serialNumber: 1,
		batteryLevel: '0.44',
		timestamp: '2019-05-20T08:25:17.78+01:00',
	},
	{
		serialNumber: 1,
		batteryLevel: 4.44,
		timestamp: '2019-05-20T08:25:17.78+01:00',
	},
];
const asExpected = {
	deviceId: 1,
	details: [
		{ batteryLevel: 51, timestamp: 1558083000000 },
		{ batteryLevel: 50, timestamp: 1558319220000 },
	],
};

describe(`Fetch device measurement details by device`, () => {
	test('should return false on sending no data', () => {
		expect(getDeviceDetails()).toBeFalsy();
	});
	test('should return data with timestamps in ascending order', () => {
		const testData = [
			{
				batteryLevel: 42,
				timestamp: 1558102853061,
			},
			{
				batteryLevel: 45,
				timestamp: 1558099253061,
			},
			{
				batteryLevel: 26,
				timestamp: 1558106453061,
			},
			{
				batteryLevel: 32,
				timestamp: 1558113653061,
			},
			{
				batteryLevel: 36,
				timestamp: 1558110053061,
			},

			{
				batteryLevel: 22,
				timestamp: 1558113653061,
			},
		];
		const asExpected = [
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
		];
		expect(testData.sort(compare)).toStrictEqual(asExpected);
	});
	test('should convert all timestamps to UTC time', () => {
		expect(getDeviceDetails(serialNumber, testData)).toStrictEqual(
			asExpected,
		);
	});
	test('should skip devices without battery data', () => {
		expect(getDeviceDetails(serialNumber, testData)).toStrictEqual(
			asExpected,
		);
	});
	test('should skip devices without a timestamp', () => {
		expect(getDeviceDetails(serialNumber, testData)).toStrictEqual(
			asExpected,
		);
	});
	test('should skip non-numeric battery data as casting may lead to corrupt data', () => {
		expect(getDeviceDetails(serialNumber, testData)).toStrictEqual(
			asExpected,
		);
	});
	test('should skip battery data where percentage value is negative or more than 100', () => {
		expect(getDeviceDetails(serialNumber, testData)).toStrictEqual(
			asExpected,
		);
	});
});
