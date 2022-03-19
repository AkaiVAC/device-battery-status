const getAcademyDetails = (data) => {
	let academyArray = [];
	if (!data) return false;
	data.filter((item) => {
		if (!academyArray.includes(item.academyId) && item.academyId) {
			academyArray.push(item.academyId);
		}
	});
	return academyArray;
};
export default getAcademyDetails;
