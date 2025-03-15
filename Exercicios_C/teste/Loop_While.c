#include <unistd.h>

int main(void)
{
    char linha0 [6];
    int contador = 0;
    while (contador < 3)
    {
        if (contador == 0) linha0 [contador] = '/';
        else if (contador == 4) linha0 [contador] ='\\';
        else if (contador == 6) linha0 [contador] = '\n';
        else linha0 [contador] = '*';
        contador ++;

    }  
}