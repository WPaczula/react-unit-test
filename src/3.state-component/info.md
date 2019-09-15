# Jak testować stan i zmianę propsów?

Wrapper enzyme'a posiada wiele metod do pobierania propsów/stanu oraz ich ustawiania. Najważniejsze z nich wraz z opisem podane poniżej:

- `state(-|name: string)` - zwraca cały stan lub tylko jego część o podanej nazwie,
- `props(-|name: string)` - zwraca wszystkie propsy lub tylko jeden o podanej nazwie,
- `setState(state: object)` - działa dokładnie tak samo jak setState w komponencie
- `setProps(props: object)` - działa tak samo jak setState tylko dla propsów. Nie trzeba przekazywać wszystkich, zostaje wykonany merge obiektów.

# Czy powinno się testować stan?

Autorzy enzyme'a w opisie metody `setState` piszą, że lepiej użyć zewnętrznego API, które daje komponent, żeby doprowadzić go do konkretnego stanu, który powinien testowany. Ta metoda może być jednak użyteczna, jeżeli ciężko jest doprowadzić komponent do jakiegoś stanu. Można jej wtedy użyć jak czegoś w rodzaju skrótu.