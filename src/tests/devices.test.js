import getDevices from '../data/devices.js';

const academyId = 1;
const testData = [
	{
		academyId: 1,
		serialNumber: 'Device01',
	},
	{
		academyId: 1,
		serialNumber: 'Device02',
	},
	{
		academyId: 1,
		serialNumber: null,
	},
	{
		academyId: 1,
		serialNumber: '',
	},
	{
		academyId: 1,
		serialNumber: 41,
	},
];
const asExpected = {
	academyId: 1,
	devices: ['Device01', 'Device02', '41'],
};
describe(`Fetch device details by academy`, () => {
	test('should return false on sending no data', () => {
		expect(getDevices()).toBeFalsy();
	});
	test('should skip devices without a serial number or with an invalid format', () => {
		expect(getDevices(academyId, testData)).toStrictEqual(asExpected);
	});
	test('should cast numeric values to string', () => {
		expect(getDevices(academyId, testData)).toStrictEqual(asExpected);
	});
});
