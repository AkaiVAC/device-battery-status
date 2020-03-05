import { getAcademyDetails } from "./battery_details";
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
		academyId: 2,
		batteryLevel: 0.98,
		employeeId: "E2",
		serialNumber: "Device02",
		timestamp: "2019-05-17T07:50:35.158+01:00"
	},
	{
		academyId: 3,
		batteryLevel: 0.5,
		employeeId: "E3",
		serialNumber: "Device03",
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

describe("battery data fetching & manipulation - basic functionality", () => {
	it("should return an empty object on sending no data", () => {});
});
