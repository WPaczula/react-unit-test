# Jak testować sagi?

Do testowania sag może posłużyć biblioteka `redux-saga-test-plan`. Pozwala ona na napisanie scenariusza sagi i sprawdza, czy został on spełniony. Budowa tagiego testu wygląda następująco:

```
import { expectSaga } from 'redux-saga-test-plan';

it('should do sth', () => {
    // build arguments
    
    return expectSaga(saga, args)
        .select/call/put
        .run();
})
```

Ważne jest, aby zwrócić `expectSaga` z testu. Jest to promise, który czeka na zresolve'owanie i w ten sposób jest jest w stanie na niego poczekać.

# Co z mockami?

Biblioteka pozwala na mockowanie skomplikowanych select'ów, czy asynchronicznych strzałów do backendu. Robi to dzięki funkcji `provide`. Ma dość ciekawą budowę:

`provide(providers: array)`, gdzie provider to tablice o dwóch elementach - jakie wywołanie yielda ma być zamockowane oraz jaka wartość ma być zwrócona. Na przykład dla select'a o nazwie selectAllIds wyglądałoby to tak:

```
    return expectSaga(saga)
        .provide([
            [select(selectAllIds), mockedValue],
        ]);
```

## Co zrobić z fabrykami selektorów?

Matchowanie po stronie biblioteki testującej szuka wywołania funkcji o danej referencji. W przypadku fabryk selektorów referencja będzie inna przy każdym wywołaniu i dlatego biblioteka nie odnajdzie wywołania aby je zmockować. Można sobie z tym poradzić mockując ten jeden selektor. Aby to zrobić można posłużyć się funkcją `requireActual`, która zwraca obiekt modułu. Poniżej znajduje się template takiego wywołania:

```
    const mockSelector = jest.fn();
    jest.mock('path/to/selectors', () => {
        const module = require.requireActual('path/to/selectors');

        return ({
            ...module,
            makeMockSelector: () => mockSelector,
        });
    });
```

# Co testować?

W sagach warto sprawdzać scenariusze i zazwyczaj jest ich niewiele. Opisuje się co stanie się w przypadku udanego/nieudanego calla do api oraz w przypadku specyficznych warunków aplikacji.