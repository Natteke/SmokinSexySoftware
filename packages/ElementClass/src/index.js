export const elementHasClass = (element, string) => element.className.indexOf(string) >= 0;

export const elementAddClass = (element, string) => {
	if(!elementHasClass(element, string)) element.className += ` ${string}`;
};
export const elementRemoveClass = (element, string) => {
	element.className = element.className.replace(new RegExp('[\\s]{0,1}\\b' + string + '\\b',"g"),"")
};

// element replace class
// element toggle class




