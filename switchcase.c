#include <stdio.h>
#include <math.h>
int main()
{
	int a;
	int b;
	int choice;

	printf("enter the value of the 1st number 'a'\n");
	scanf("%d", &a);
	printf("enter the value of the 2nd number 'b'\n");
	scanf("%d", &b);
	printf("what do you want to do \n");
	printf("1.addition \n");
	printf("2.substraction \n");
	printf("3.multiplication \n");
	printf("4.division \n");
	printf("5.modulous \n");
	printf("Enter your choice (1-5):");
	scanf("%d", &choice);

	switch (choice)
	{
	case 1:
		printf("the value is %d\n", a + b);
		break;
	case 2:
		printf("the value is %d \n ", a - b);
		break;
	case 3:

		printf("the value is %d \n", a * b);
		break;
	case 4:
		if (b != 0)
		{
			printf("the value is %d \n", a / b);
		}
		else
		{
			printf("Division by 0 is not possible");
		}
		break;
	case 5:
		printf("the value is %d \n", a % b);
		break;
	default:
		printf("invalid inputs !!\n");
		return 0;
	}
}
