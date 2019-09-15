# Jak stworzyć plik testu, żeby został odpalony?

Wystarczy stworzyć plik pod daną ścieżką: 

```
*/tests/*.test.js
```

# Jak odpalać testy i jakie są przydatne przełączniki?

## Odpalanie testów

Aby odpalić test pojedynczo należy odpalić runnera jest'a. Zazwyczaj jest to po prostu klasyczne polecenie:

```
npm run test
```

## Watch dla testów, dla przyspieszenia pracy

Jest tak samo jak webpack posiada przełącznik, który pozwala na tryb *watch*. Aby go odpalić należy użyć przełącznika `--watchAll`. Całość polecenia to:

```
npm run test -- --watchAll
```

## Odpalenie jednego pliku

Żeby odpalić jeden plik testowy wystarczy podać regexa, który będzie określał ścieżkę do tego pliku. Na przykład dla odpalenia testów dla części *logic* można wywołać: 

```
npm run test -- logic
```

# Jaką budowę ma plik testowy?

Większość plików składa się z opisu testowanego modułu w funkcji `describe`, opisu scenariuszy testowych w funkcji `it`, które kończą się asercją `expect`. Przykładowy boilerplate to:

```
import superFunction from '..';

describe('superFunction', () => {
    it('should do this and that.', () => {
        expect(superFunction()).toBe(Number.infinity);
    });
});
```

Do asercji można użyć takich funkcji jak:
- `toBe` - równość co do wartości/referencji,
- `toEqual` - równość co do znaczenia np. array, object,
- `toHaveBeenCalled` - funkcja została odpalona,
    - `toHaveBeenCalledTimes` - funkcja została odpalona x razy,
    - `toHaveBeenCalledWith` - funkcja została odpalona z argumentem.
- ... wiele innych jak `toBeNull`, `toBeDefined`.

Aby zanegować można użyć `not` przed funckją np.
```
expect(10).not.toEqual(5);
```

# Mockowanie funkcji

Tworzenie mocka do funkcji można otrzymać wywołując `jest.fn()`. Następnie można sprawdzać, czy została ona odpalona przez wspomniane funckje już `toHaveBeenCalled...`. Można dodatkowo określić zwracaną wartość przez mock:

```
const mockReturningFive = jest.fn().mockReturnValue(5);
```

Albo określić implementację funkcji:

```
const toBoolean = jest.fn().mockImplementation(value => !!value)
```

