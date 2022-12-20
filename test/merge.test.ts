import { merge } from '../src/merge';

describe('merge', () => {
    it('should merge [1, 3, 5] and [2, 4, 6] into [1, 2, 3, 4, 5, 6]', () => {
        const result = merge([1, 3, 5], [2, 4, 6]);
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });
});

describe('merge', () => {
    it('should merge [1, 3, 5] and [2] into [1, 2, 3, 5]', () => {
        const result = merge([1, 3, 5], [2]);
        expect(result).toEqual([1, 2, 3, 5]);
    });
});

describe('merge', () => {
    it('should merge [1] and [2, 4, 6] into [1, 2, 4, 6]', () => {
        const result = merge([1], [2, 4, 6]);
        expect(result).toEqual([1, 2, 4, 6]);
    });
});