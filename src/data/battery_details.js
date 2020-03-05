export const getAcademyDetails = data => {
	let academyArray = [];
	let deviceArray = [];
	data.filter(item => {
		if (!academyArray.includes(item.academyId)) {
			academyArray.push(item.academyId);
		}
	});

	return academyArray;
};
