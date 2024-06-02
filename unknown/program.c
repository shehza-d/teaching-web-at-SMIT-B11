// gcc ./unknown/program.c -o compiledBinary && ./compiledBinary

#include <stdio.h>

// https://www.studysmarter.co.uk/explanations/computer-science/computer-programming/c-memory-address/
int main()
{
	// Pointers
	int likes = 3;

	printf("\n memory address: %p", &likes);

	return 0;
}