import { isEmpty } from '../index';
import { describe, test, expect } from '@jest/globals';

describe('src/isEmpty', () => {
	test('should return true when given input is null', () => {
		const results = isEmpty(null);
		expect(results).toBe(true);
	});
});
