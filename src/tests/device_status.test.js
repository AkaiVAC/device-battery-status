import getDeviceStatus from '../data/device_status';

const academyId = 1;
const testData = [
	{
		academyId: 1,
		batteryLevel: 0.68,
		employeeId: 'T1007384',
		serialNumber: '1805C67HD02259',
		timestamp: '2019-05-17T07:47:25.833+01:00',
	},
	{
		academyId: 1,
		batteryLevel: 0.51,
		employeeId: 'T1001417',
		serialNumber: '1805C67HD02332',
		timestamp: '2019-05-17T07:48:4.147+01:00',
	},
	{
		academyId: 2,
		batteryLevel: 0.98,
		employeeId: 'T1008250',
		serialNumber: '1805C67HD02009',
		timestamp: '2019-05-17T07:50:35.158+01:00',
	},
	{
		academyId: 2,
		batteryLevel: 0.96,
		employeeId: 'T1008250',
		serialNumber: '1805C67HD02009',
		timestamp: '2019-05-17T08:50:35.158+01:00',
	},
];

describe('Get all device statuses by academy', () => {
	test('should return false on sending no data', () => {
		expect(getDeviceStatus()).toBeFalsy();
	});
	test('should return all device statuses for the academy', () => {
		expect(getDeviceStatus(academyId, testData));
	});
});
