# Enzyme, czyli jak testować komponent w izolacji?

Do testowania komponentów można użyć biblioteki open source od airbnb o nazwie `enzyme`. Pozwala ona na wyrenderowanie komponentów React'owych i udostępnia funkcje pomocne do odnalezienia ich dzieci lub sprawdzenia ich stanu. Udostępnia trzy metody do renderowania komponentów.
- `shallow` - płytki render komponentu,
- `mount` - pełny render komponentu,
- `render` - render do statycznego htmla,

Aby sprawdzić rezultat rendera można użyć funkcji `debug()`, która zwraca stringa, który określa otrzymane drzewo komponentów React'a.

## render

Renderuje pełne drzewo jako statyczny html. Pozwala tylko na jego przeszukiwanie. Nie pozwala na sprawdzanie state'a ani propsów komponentów. Może być przydatny podczas testowania buildowania aplikacji czy server side renderingu.

## mount

Renderuje pełne drzewo aż do ostatniego dziecka. Może być użyte na przykład w testach integracyjnych. Pozwala na użycie tych samych metod co `shallow`.

## shallow

Najczęściej używana funkcja do renderowania komponentów. Renderuje tylko jeden poziom komponentów! Posiada sporo metod, które pozwalają na wyszukiwanie dzieci, poruszanie się po płytkim drzewie lub symulowanie eventów:

1. `find(css: string|props: object|react component)` - metoda wyszukiwania elementu. Można tutaj używać css-owych selektorów wrzucając string'a jako argument, reactowych komponentów wrzucając ich konstruktor lub określone propsy.
2. `childAt(i: number)` - metoda pobierania i-tego dziecka komponentu. Czasem lepiej jej nie używać, bo gdy zmieni się kolejność np przez opakowanie div'em, to test się wysypuje.
3. `hasClass(class: string)` - sprawdza, czy dany wrapper posiada daną klasę.
4. `simulate(eventName: string, event: object)` - symuluje dany event o podanej nazwie.
5. `exists()` - sprawdza, czy dany wrapper został wyrenderowany.
 
