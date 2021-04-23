let idListsData = [
	{
		imgUrl:
			'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/165624425_157218146270973_7029745587477918295_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=k-dq3a2OjuoAX9rqmaF&edm=AGeOuZUAAAAA&ccb=7-4&oh=b37a8b5bf0cc8bddb9080ce09202f6d3&oe=60A5D7E5&_nc_sid=924bfa',
		id: 'yj_loves',
		name: '정용진',
		certifiedPerson: true,
	},
	{
		imgUrl:
			'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/41177520_495457924197180_5148940788834500608_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=XQztZdjSp5IAX_WGfCE&edm=AHG7ALcAAAAA&ccb=7-4&oh=470d3cc02eff92d05e70a013af527f1f&oe=60A641E0&_nc_sid=5cbaad',
		id: 'teoyoo',
		name: '유태오',
		certifiedPerson: false,
	},
	{
		imgUrl:
			'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/141804109_826721644544936_4005794822363103818_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=y1L0lcguePUAX_uyQU_&edm=AHG7ALcAAAAA&ccb=7-4&oh=3918278d6f146fe44cc959ad63ecde11&oe=60A4ACE0&_nc_sid=5cbaad',
		id: '___silverstone___',
		name: '박은석',
		certifiedPerson: true,
	},
];

// console.log(idListsData)
// console.log(idListsData[0].imgUrl);
// console.log(idListsData[0].id)
// console.log(idListsData[0].name)

const searchInput = document.querySelector('.nav_input');
let searchInputValue;
const searchResultLists = document.querySelector('.search_result_lists');

searchInput.addEventListener('input', () => {
	searchInputValue = searchInput.value;
	if (searchInputValue) {
		let newArray = idListsData.filter((idList) => {
			return idList.id.includes(searchInputValue);
		});
		newArray.map((idList) => {
			idList = `
			<li class="search_result">
				<div class="user">
					<img class="user_img small"
						src=${idList.imgUrl}
					/>
					<div class="user_info">
						<div class="user_id">
							<span> ${idList.id}</span>
							<i class="fas fa-certificate"></i>
						</div>
						<div class="user_name">${idList.name}</div>
					</div>
				</div>
				<i class="fas fa-times"></i>
			</li>`;
			console.log(idList);
			return idList;
		});
		displaySearchResult(newArray)
	}
});

function displaySearchResult(newArray) {

	//to be continue...

}

