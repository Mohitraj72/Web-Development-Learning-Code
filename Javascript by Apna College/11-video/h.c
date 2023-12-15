#include <stdio.h>

int main() {
    float side;

    printf("Enter the side length of the square: ");
    scanf("%f", &side);

   // if (side >= 0) {
        float perimeter = 4 * side;

        printf("Perimeter of the square: %.2f\n", perimeter);
   // } else {
        //printf("Error: Side length should be non-negative.\n");
  //  }

   // return 0;
}
