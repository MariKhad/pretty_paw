export const debounce = (fn, msec) => {
	let lastCall = 0;
	let lastCallTimer = 0;

	return (...args) => {
		const prevCall = lastCall;
		lastCall = Date.now();
		if (prevCall && (lastCall - prevCall) < msec) {
			clearTimeout(lastCallTimer);
		} else {
			lastCallTimer = setTimeout(() => fn(...args), msec);
		}
	}
};
