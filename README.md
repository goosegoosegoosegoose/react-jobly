# What I did
- Frontend everything except half of api.js
- A lot of react stuff

## Problems that still exist
- I'm using useContext to lug around the current users info, but it doesn't update dynamically and im forced to have to refresh. Not sure how to fix it since I tried putting it inside a useEffect to detect changes and it didn't like it. 
  - I might have fixed this for some components but at this point I don't know what's really working and why its working.
- Pretty sure I'm running into the same problem as useContext for localStorage. It doesn't update until refresh, leading to using a previous user's token in ajax call for current user info. 
- I should ask but I have a hard time putting into words what exactly is going wrong and this app is fairly sizable. I'm also afraid of breaking everything if I fiddle with it anymore.
