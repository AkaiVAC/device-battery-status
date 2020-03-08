import {
	academyStatusColor,
	deviceStatusColor,
	deviceChargeLevelColor
} from "../data/utils";

describe("Basic utility functions", () => {
	test("should return class values for academy status in correct format", () => {
		expect(academyStatusColor(5)).toBe("is-danger");
		expect(academyStatusColor(3)).toBe("is-warning");
		expect(academyStatusColor(0)).toBe("is-primary");
	});
	test("should return class values for device status in correct format", () => {
		expect(deviceStatusColor(30)).toBe("is-danger");
		expect(deviceStatusColor(25)).toBe("is-warning");
		expect(deviceStatusColor(6)).toBe("is-primary");
	});
	test("should return class values for device status in correct format", () => {
		expect(deviceChargeLevelColor(30)).toBe("is-danger");
		expect(deviceChargeLevelColor(52)).toBe("is-warning");
		expect(deviceChargeLevelColor(70)).toBe("is-primary");
		expect(deviceChargeLevelColor(96)).toBe("is-success");
	});
});
