const list = document.querySelector("#list");
const listContent = Array.from(list.children);

listContent.forEach(item => {
	const duplicatedItem = item.cloneNode(true);
	duplicatedItem.setAttribute("aria-hidden",true);
	list.appendChild(duplicatedItem);
});