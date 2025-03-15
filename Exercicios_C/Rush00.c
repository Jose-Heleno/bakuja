#include<unistd.h>
int main(void)
{
    int counter1 = 0;
    while (counter1 < 5)
    {
        int counter = 0;
        while (counter < 5)
        {
            write(1,"*",1);
            sleep(1);
            counter ++;
        }
        write(1,"\n",2);
        counter1 ++;
    }
}
