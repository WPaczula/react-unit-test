# Jak testować kontenery?

Aby przetestować logikę komponentu, który jest w coś opakowany należy się do niego najpierw dostać. Jeżeli używa się funkcji `mount` wystarczy znaleźć go przez `find`. 

Można to również zrobić za pomocą funkcji `shallow`! Należy jednak świadomie zagłębić się tyle razy, żeby przejść przez wszystkie opakowania szukanego komponentu. Służy do tego funkcja `dive`. Powoduje ona render typu shallow komponentu, na który wskazuje wrapper.

# Jak zamockować kontener, aby nie korzystać z zewnętrznych/złożonych funkcji?

Aby zamockować moduł należy użyć funkcji `jest.mock('sciezka/do/modulu', inline'owa funkcja zwracająca mock)`. Funkcja musi być obowiązkowo inline. W przypadku korzystania z jakichś zewnętrznych parametrów ich nazwa musi zaczynać się od słowa `mock`. W przypadku innej nazwy zostanie wyświetlony komunikat:

```
The modue factory of jest.mock is not allowed to reference any out-of-scope variables.

NOTE: This is a precaution to guard against uninitialized mock variables. If it is ensured that the mock is required lazily, variable names prefixed with `mock` (case insensitive) are permitted.
```

Należy zadbać o to, żeby mock był zainicjalizowany podczas wykonywania skryptu.

# O czym należy pamiętać podczas mockowania modułów?

Podczas tworzenia mocka, należy pamiętać o resetowaniu go przed każdym testem. Służy do tego funkcja `beforeEach(fn)`. W przypadku funkcji `jest.fn` można użyć `mockRestore`, aby zrestartować dany mock. Zostanie przy tym również zapomniana implementacja funkcji. Aby do tego nie dopuścić można użyć `mockReset`.
