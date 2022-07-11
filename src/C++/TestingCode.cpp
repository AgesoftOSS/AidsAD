#include "AidsAD.h"
#include <iostream>

// Ignore this file while developing this shows how to use aidsad

int main() {
	
	AidsAD ads;
	for (size_t i = 0; i < 1000; i++)
	{
		std::string t = ads.createStringAD(ads.RANDOMIZED);
		std::cout << t << std::endl;
	}
	
	system("pause");
	return 0;
}