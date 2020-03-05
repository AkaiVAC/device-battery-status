const batteryDetails = require("./server/battery");

const getAcademyDetails = (resultObject, item) => {
	if (!resultObject[item.academyId]) resultObject[item.academyId] = [];
	if (!resultObject[item.academyId].includes(item.serialNumber)) {
		resultObject[item.academyId].push(item.serialNumber);
	}
	return resultObject;
};

const getDeviceDetails = (resultObject, item) => {
	if (!resultObject[item.serialNumber]) resultObject[item.serialNumber] = [];
	resultObject[item.serialNumber].push({
		batteryLevel: item.batteryLevel,
		timestamp: item.timestamp,
	});
	return resultObject;
};

const batteryDetails2 = [
	{
		academyId: 30006,
		batteryLevel: 0.68,
		employeeId: "T1007384",
		serialNumber: "1805C67HD02259",
		timestamp: "2019-05-17T07:47:25.833+01:00",
	},
	{
		academyId: 30006,
		batteryLevel: 0.51,
		employeeId: "T1001417",
		serialNumber: "1805C67HD02332",
		timestamp: "2019-05-17T07:48:4.147+01:00",
	},
	{
		academyId: 30007,
		batteryLevel: 0.98,
		employeeId: "T1008250",
		serialNumber: "1805C67HD02009",
		timestamp: "2019-05-17T07:50:35.158+01:00",
	},
	{
		academyId: 30007,
		batteryLevel: 0.5,
		employeeId: "T1001417",
		serialNumber: "1805C67HD02332",
		timestamp: "2019-05-17T07:57:08.29+01:00",
	},
	{
		academyId: 30006,
		batteryLevel: 0.68,
		employeeId: "T1001820",
		serialNumber: "TT-C67ML-A-0001-01429",
		timestamp: "2019-05-17T07:57:58.979+01:00",
	},
];

let academyDetails = batteryDetails.reduce(getAcademyDetails, {});
let deviceDetails = batteryDetails.reduce(getDeviceDetails, {});

// console.log(academyDetails);
// console.log(deviceDetails);

let resultTime = 0;
let resultBL = 0;
deviceDetails["1805C67HD02259"].forEach((item, index) => {
	if (
		index < deviceDetails["1805C67HD02259"].length - 1 &&
		item.batteryLevel >=
			deviceDetails["1805C67HD02259"][index + 1].batteryLevel
	) {
		resultBL +=
			item.batteryLevel -
			deviceDetails["1805C67HD02259"][index + 1].batteryLevel;

		let time1 = new Date(item.timestamp.replace("T", " ")).getTime();
		let time2 = new Date(
			deviceDetails["1805C67HD02259"][index + 1].timestamp
				.toString()
				.replace("T", " ")
		).getTime();
		let timeDiff = time2 - time1;
		resultTime += timeDiff;
	}
});
console.log(resultBL * 100);
// console.log(resultTime / (1000 * 60 * 60 * 24));

// console.log(deviceDetails["1805C67HD02259"]);
