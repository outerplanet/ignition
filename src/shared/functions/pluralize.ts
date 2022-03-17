export const pluralize = (qty: number, word: string, ending = 's') => {
	if (qty === 1) {
		return word;
	}

	return word + ending;
};
