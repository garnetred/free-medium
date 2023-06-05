# Free Medium

## Abstract
This browser extension allows users to access member-only Medium articles for free. Unfortunately this browser extension does not work for custom domains - see "next steps" for more details. 

## Important Note 
This browser extension currently does not work while the DuckDuckGo browser extension is being used on Medium. If you have both extensions installed, you'll need to disable DuckDuckGo temporarily and refresh the page in order to read member-only Medium articles using Free Medium. 

## Tech Stack
This project uses vanilla JS, CSS, and HTML. 

## Setup/Installation
You can clone the repo locally using `git clone`. 

[This article](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked) offers detailed instructions on loading an unpacked chrome extension. You can navigate to the chrome extensions page via the puzzle piece icon in the toolbar. After enabling developer mode, you can click "load unpacked extension" and choose the folder via the popup. You should then see the book icon appear in the toolbar. When you click on it, you can see "Free Medium." If you navigate to `www.medium.com` and view more than 3 articles without being logged in, you should still be able to access each article without hitting a paywall. 

## Preview



https://github.com/garnetred/free-medium/assets/59572865/e7c82a3a-c4c3-497c-af63-10611811bbfb



## Next Steps
- I'd like to hide the gray bar that indicates how many member-only articles you have left. 
- I'd also like to convert this into a Firefox add-on. 
- Ideally, I'd like to update the browser extension to work with custom domains. However, my goal with all of the browser extensions that I've built is to request the lowest amount of permissions possible in order for the extension to function. Currently this extension only requests host permissions for medium.com. In order to support custom domains, I would likely need to expand this permission to all urls, which I'm not comfortable with for privacy reasons. If I'm able to find another way to implement this, I'll likely update the browser extension but if not, I will leave as-is. 

