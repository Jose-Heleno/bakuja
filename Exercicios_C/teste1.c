#include <unistd.h>
// int function_1(int x, int y) 
void function_1(void) 
{
    
    char linha0[6];// = { '/', };
    int coluna = 0;
    while(coluna < 7)
    { 
        if (coluna == 0) linha0[coluna] = '/';
        else if (coluna == 5) linha0[coluna] = '\\';
        else if (coluna == 6) linha0[coluna] = '\n';
        else linha0[coluna] = '*';
        coluna++;
    }
    coluna = 0;
    char linha1[6]; // = { '*', ' ', ' ', ' ', '*' ,'\n'};
    while (coluna < 7)
    {
        if (coluna == 0) linha1[coluna] = '*';
        else if (coluna == 5) linha1[coluna] = '*';
        else if (coluna == 6) linha1[coluna] = '\n';
        else linha1[coluna] = ' ';
        coluna++;
    }
    coluna = 0;
    char linha4[6];// = {'\\', '*', '*', '*', '/' ,'\n'};
    while (coluna < 7)
    {
        if (coluna == 0)
        {
            linha4[coluna] = '\\';
        }
        else if (coluna == 5)
        {
            linha4[coluna] = '/';
        }
        else if (coluna == 6)
        {
            linha4[coluna] = '\n';
        }
        else linha4[coluna] = '*';
        coluna++;
        
    }
    coluna = 0
   char *matriz[5] = {linha0,linha1,linha1,linha1,linha4};
    while (matriz)
    {
        write (1,matriz++,sizeof(matriz[coluna])); 
        coluna++;

    }
}

/* Teste para linguagem C*/
int  main(void)
{
    // int a;
    // int b;

    // b = 5;
    // a = 5;
     
    function_1 ();

    return (0);



}