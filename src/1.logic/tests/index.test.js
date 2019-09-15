import { filterObjectsProperties } from '..';

describe('filterObjectsProperties', () => {
    it('should return object argument if its not of an object type.', () => {
        const notAnObjectWithProperties = null;

        const result = filterObjectsProperties(notAnObjectWithProperties);

        expect(result).toBe(notAnObjectWithProperties);
    })

    it('should filter undefined properties by default.', () => {
        const expectedObject = {
            a: 5,
            b: 6,
        }
        const object = {
            ...expectedObject,
            c: undefined,
        }

        const result = filterObjectsProperties(object);

        expect(result).toEqual(expectedObject);
    })

    it('should use filter argument if it is defined.', () => {
        const filter = jest.fn().mockImplementation(v => !!v)
        const expectedObject = {
            a: 5,
        }
        const object = {
            ...expectedObject,
            b: 0,
            c: undefined,
            d: null,
        }

        const result = filterObjectsProperties(object, filter)

        expect(result).toEqual(result)
        expect(filter).toHaveBeenCalledTimes(4)
        Object.values(object).forEach(v => {
            expect(filter).toHaveBeenCalledWith(v)
        })
    })  
})