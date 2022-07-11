#pragma once
#include <string>

/*
The C++ AidsAD Class
*/
class AidsAD
{
public:

	// The Catagories enum which has all catagories
	enum Catagories {
		RANDOMIZED,
		TESTBENCH
	};

	/*
	* Creates a Ad string and returns it
	* 
	@param catagories - The catagory of the ad
	*/
	std::string createStringAD(Catagories catagories);

private:

	const char* randomizedAds[3] = {
		"Wanna break from the ads?",
		"Here could be your ad",
		"AidsAD has now a C++ Solution visit now (https://agesoftoss.github.io/AidsAD/Site/solutions.html)"
	};

	// Testing Sample to check if AidsAD Works Correctly.
	const char* Testing[4] = {
		"Test 1", "Test 2", "Test 3", "Test 4"
	};

};

