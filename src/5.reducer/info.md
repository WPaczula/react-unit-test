# Jak testować reducery?

Tutaj sprawa jest prosta - reducer z założenia jest pure function. Czyli na podstawie danych wejściowych zawsze zwraca deterministyczny wynik. Dlatego łatwo się go testuje. 

Warto stworzyć sobie pomocniczą funkcję tworzącą state razem z defaultowymi wartościami. Większość testów wymaga takiego stanu plus zdefiniowania akcji oraz spodziewanego stanu wyjściowego. Nie ma tutaj zbyt dużo filozofi 💪.