#include "AidsAD.h"
#include <time.h>

// Randomize Class for fully randomized numbers
class Randomize {
public:
	int randomizedInt(int max);
};

int Randomize::randomizedInt(int max)
{
	uint32_t out = 0;
	srand(time(nullptr));

	for (uint32_t i = 0; i < 3000; i++)
	{
		out = rand() % max;
	}

	return out;
}


std::string AidsAD::createStringAD(Catagories catagories)
{
	Randomize random;

	switch (catagories) {

	case Catagories::RANDOMIZED:
		return randomizedAds[random.randomizedInt(3)];
		break;

	case Catagories::TESTBENCH:
		return Testing[random.randomizedInt(4)];
		break;

	}
}

