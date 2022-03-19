import getAcademyDetails from '../data/academy_details.js';

const testData = [
	{ academyId: 1 },
	{ academyId: 2 },
	{ academyId: null },
	{ academyId: 3 },
	{ academyId: 4 },
	{ academyId: undefined },
	{ academyId: 'text12' },
];

const asExpected = [1, 2, 3, 4, 'text12'];

describe(`Fetch Academy details`, () => {
	test('should return false on sending no data', () => {
		expect(getAcademyDetails()).toBeFalsy();
	});
	test('should return data in the expected format', () => {
		expect(getAcademyDetails(testData)).toStrictEqual(asExpected);
	});
	test('should skip null and invalid data', () => {
		expect(getAcademyDetails(testData)).toStrictEqual(asExpected);
	});
	test('should accept text values as ID may be alphanumeric', () => {
		expect(getAcademyDetails(testData)).toStrictEqual(asExpected);
	});
});
