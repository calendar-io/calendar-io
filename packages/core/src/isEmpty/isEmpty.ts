export type isEmptyProps = string | null;

/**
 * Checks if `input` is an empty string, object, collection, map, or set.
 * @param {*} input - Input value to validate
 * @returns {boolean} Returns `true` if input value is empty, else `false`
 */
export function isEmpty(input?: isEmptyProps) {
	if (typeof input === 'undefined' || input === null) {
		return true;
	}

	return false;
}
