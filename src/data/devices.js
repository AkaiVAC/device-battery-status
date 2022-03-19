const getDevices = (academyId, data) => {
	if (!academyId || !data) return false;
	let academyDevices = { academyId: '', devices: [] };
	data.filter((item) => {
		if (
			item.academyId === Number(academyId) &&
			!academyDevices.devices.includes(item.serialNumber) &&
			item.serialNumber
		) {
			academyDevices.devices.push(item.serialNumber.toString());
		}
	});
	academyDevices.academyId = academyId;
	return academyDevices;
};
export default getDevices;
