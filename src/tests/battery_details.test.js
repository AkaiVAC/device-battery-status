const batteryDetails = require("../data/battery_details");
const testData = [
	{
		academyId: 1,
		batteryLevel: 0.68,
		employeeId: "E1",
		serialNumber: "Device01",
		timestamp: "2019-05-17T07:47:25.833+01:00"
	},
	{
		academyId: 2,
		batteryLevel: 0.51,
		employeeId: "E2",
		serialNumber: "Device02",
		timestamp: "2019-05-17T07:48:4.147+01:00"
	},
	{
		academyId: null,
		batteryLevel: 0.98,
		employeeId: "E2",
		serialNumber: "Device02",
		timestamp: "2019-05-17T07:50:35.158+01:00"
	},
	{
		academyId: 1,
		batteryLevel: 0.5,
		employeeId: "E3",
		serialNumber: "",
		timestamp: "2019-05-17T07:57:08.29+01:00"
	},
	{
		academyId: 4,
		batteryLevel: 0.68,
		employeeId: "E4",
		serialNumber: "Device04",
		timestamp: "2019-05-17T07:57:58.979+01:00"
	}
];

describe(`Fetching Academy details`, () => {
	test("should return false on sending no data", () => {
		expect(batteryDetails.getAcademyDetails()).toBeFalsy();
	});
	test("should return data in the expected format", () => {
		const asExpected = [1, 2, 4];
		expect(batteryDetails.getAcademyDetails(testData)).toStrictEqual(
			asExpected
		);
	});
	test("should skip null data", () => {
		const testData = [
			{ academyId: 1 },
			{ academyId: 2 },
			{ academyId: null },
			{ academyId: 3 },
			{ academyId: 4 }
		];
		const asExpected = [1, 2, 3, 4];
		expect(batteryDetails.getAcademyDetails(testData)).toStrictEqual(
			asExpected
		);
	});
});

describe(`Fetching device details by academy`, () => {
	test("should return false on sending no data", () => {
		expect(batteryDetails.getDeviceDetails()).toBeFalsy();
	});
	test("should skip devices without a serial number", () => {
		const asExpected = ["Device01"];
		expect(batteryDetails.getDeviceDetails(1, testData)).toStrictEqual(
			asExpected
		);
	});
});

describe(`Fetching device measurement details by device`, () => {
	test("should return false on sending no data", () => {
		expect(batteryDetails.getDeviceDetails()).toBeFalsy();
	});

	const testData = [
		{
			serialNumber: 1,
			batteryLevel: 0.51,
			timestamp: "2019-05-17T14:20:53.061+01:00"
		},
		{
			serialNumber: 1,
			batteryLevel: 0.5,
			timestamp: "2019-05-20T07:57:13.125+01:00"
		},
		{
			serialNumber: 1,
			batteryLevel: null,
			timestamp: "2019-05-20T08:25:17.78+01:00"
		},
		{ serialNumber: 1, batteryLevel: 0.48, timestamp: null }
	];

	const asExpected = [
		{ batteryLevel: 0.51, timestamp: 1558099253061 },
		{ batteryLevel: 0.5, timestamp: 1558335433125 }
	];

	const result = expect(
		batteryDetails.getDeviceMeasurements(1, testData)
	).toStrictEqual(asExpected);

	test("should convert all timestamps to UTC time", () => result);
	test("should skip devices without battery data", () => result);
	test("should skip devices without a timestamp", () => result);
});

describe(`Measuring the device's daily average discharge rate`, () => {
	const testData = [
		{ batteryLevel: 0.25, timestamp: 1558099253061 },
		{ batteryLevel: 0.22, timestamp: 1558102853061 },
		{ batteryLevel: 0.26, timestamp: 1558106453061 }
	];
	const deviceId = 1;
	const asExpected = 0.5;
	test("should return correct result on input of a single value", () => {
		expect(
			batteryDetails.getDeviceDailyAvg(deviceId, testData)
		).toStrictEqual(asExpected);
	});
});
