# TRIKI 3D
Sistema de referencia de las posiciones para todos los tableros:

| **1** | **2** | **3** |

| **4** | **5** | **6** |

| **7** | **8** | **9** |

Valores de las casillas:

> 0: Vacío
> 1: Jugador 1
> 2: Jugador 2

## logic.js :

***Iniciar el juego***
    start();
Crea los arrays de los tableros vacíos:
A=B=C=

| 0 | 0 | 0 |

| 0 | 0 | 0 |

| 0 | 0 | 0 |


***Nueva Jugada***

    move(Tablero,posición,jugador);

**Recibe:**
>  Tablero: [**A, B , C**]
>  La posición: [1,9]
>  Jugador (1,2):

**Retorna:**
    True: Se ejecutó el movimiento
    False: No se ejecutó el movimiento, la casilla está ocupada.

***Verificar Casilla***

    check(Tablero,posición);

**Recibe:**

>  Tablero: (**A, B** o **C**)
>  La posición: [1,9]

**Retorna el valor actual de la casilla:**

> 0: Vacío 
> 1: Jugador 1. 
> 2: Jugador 2.

Limpia (llena de 0) el tablero **T**:

    clear_board(T);

Imprime el Tablero **T** en consola:

    print_board(T);

Imprime todos los tableros en consola.

    print_boards();



## winner.js :
Sistema de referencia.

--- **1**-- **2**--**3**

**1:** | 1 | 2 | 3 |

**2:** | 4 | 5 | 6 |

**3:** | 7 | 8 | 9 |


***Ganador en el eje Z***

    check_winnerZ();
 **Devuelve:**
> -1: No hay ganador 
> 1: Jugador 1. 
> 2: Jugador 2.
>Si hay ganador Imprime en consola **Ganó *(jugador)* en el eje Z *(posición)***

***Ganador en alguna Fila del tablero T***
check_winnerH(T);
***Ganador en alguna Columna del tablero T***
check_winnerV(T);
 **Devuelven:**
> 1: Jugador 1. 
> 2: Jugador 2.
>Si hay ganador Imprime en consola **Ganó *(jugador)* en  *[1-3]***

***Ganador en alguna Diagonal del tablero T***
check_winnerD(T);
 **Devuelve:**
> 1: Jugador 1. 
> 2: Jugador 2.
>Si hay ganador Imprime en consola **Ganó *(jugador)* en la diagonal *(Principal, Secundaria)***
