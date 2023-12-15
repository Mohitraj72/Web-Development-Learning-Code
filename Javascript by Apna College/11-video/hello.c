#include <stdio.h>
void main (){
  int length, breadth;
  printf("Enter your length: ");
  scanf("%d", &length);

  printf("Enter Your Breadth: ");
  scanf("%d", & breadth);

  int side = length * breadth;
  printf("side: %d\n", side);
}

