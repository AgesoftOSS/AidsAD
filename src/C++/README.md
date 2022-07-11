# C++ AidsAD

<h3><i>Ads are Aids! <br>- Developer</i></h3><br>

**AidsAD** is a Adverticement Plattform which is **scamfree** & **SFW!**

AidsAD has a simple engine which dosnt require complex stuff, it's source code is easy to read.
This is the C++ Version of AidsAD

# Instructions

Include the AidsAD Header file:

```cpp
#include "AidsAD.h"
```

Create a object of the AidsAD class and call the `createStringAD()` method:

```cpp
int main() {
	AidsAD ads;
	std::string t = ads.createStringAD(ads.TESTBENCH); // From the Catagories Enum
	std::cout << t << std::endl;
}
```
