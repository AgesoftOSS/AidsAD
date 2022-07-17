# AidsAD

> **This Section is for the site owners who wants to add Ads in their site**<br>
> Visit the [Advertice.md](https://github.com/AgesoftOSS/AidsAD/blob/main/Advertice.md) or [Become a adverticer](https://agesoftoss.github.io/AidsAD/Site/adverticer.html) page
<br>

**AidsAD is avaible for other coding languages too:**<br>
[AidsAD Java](https://github.com/AgesoftOSS/AidsAD/tree/main/src/Java/com/agesoft/aidsad)<br>
[AidsAD++](https://github.com/AgesoftOSS/AidsAD/tree/main/src/C%2B%2B)<br>
[AidsAD Original Javascript](https://github.com/AgesoftOSS/AidsAD/tree/main/src/Javascript)

<br>

<h3><i>Ads are Aids! <br>- Developer</i></h3><br>

**AidsAD** is a Adverticement Plattform which is **scamfree** & **SFW!**

AidsAD has a simple engine which dosnt require complex stuff, it's source code is easy to read unlike other adverticement plattforms source code:

```js
// The Closure Library Authors.
// Code from: Google
var m,aa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ba="function"==typeof Object.defineProperties?Object.defineProperty
```

**Features**
-
- Showing randomized ADS Easily
- IFrame Ads for interactive adverticements
- Showing Ads in diffrent resolution
- User Friendly Controls

# Instructions

include the Javascript File in your website:
```html
<!--include that in your <head> tag and add the defer keyword-->
<script src="index.js" defer></script>
```

and start creating the ad:

```js
import AidsAD from "./src/index.js";

const ad = new AidsAD;
ad.ADCatagory = ad.Catagories.Testbench;
ad.ADResolution = ad.Resolution.Square;
```

<h2>For Iframe Adverticements:</h2>

create a div element in your html file where the iframe should appear

to create a Iframe Ad use the `createIframeAD()` method:

```js
createIframeAD(Div)
```

<h2>For Image Adverticements:</h2>

Add this part to the spot where you want your ad to be in your html file.
```html
<div id="ADcontainer">
    <img alt="Aids_AD_Adverticement" id="Ad" src="">
</div>
```

and include the stylesheet to the website that the image ads will work correctly:
```html
<link rel="stylesheet" href="./AidsADstyle.css">
```

To create a image ad you have to use the `createImageAD()` method:

**Parameters:**

`Image` - Displays and makes the image interactive *required*

`Container` - Makes that the close button functionable and positioning *required*

`URL` - opens the passed URL *required*

```js
createImageAD(Image, Container, URL)
```

> If you have issues with the ad creating and your console dosnt give errors out use the `debugData()` method<br>


# FAQ

<h2>Sources of the Images</h2>

**Source**: [Image Folder]()

[CC-Images / Openverse](https://wordpress.org/openverse)

# License (CC-BY-SA 2.0)
*License twice, three times? NAH! FOUR TIMES!!!*
```
Copyright (c) Agesoft 2022

LICENCED UNDER CC-BY-SA 2.0
https://creativecommons.org/licenses/by-sa/2.0/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
