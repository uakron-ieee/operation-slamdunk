# operation-slamdunk

Check examples branch for example RESTful services. 

# GOAL
Working protoype to show Sastry. 
- Success!
<br> 
Technology Stack
- Raspberry Pi with Python and GPIO
- Node.js with MySQL 
<br>
# Run Code
<br>
Server: 
```
cd Server
npm install
node index.js
```
<br>
Python Script on PI:
```
ssh pi@<ip of PI>
cd ~/github/operation-slamdunk/PI
sudo python car-counting.py
now press the buttons
```
# Current state
- RPi setup to recognize button input and send button information to server
- Buttons can easily be replaces by a strain gauge
- Server logs to Database
- 2 API endpoints set up for server (get open spots for specified lot, insert a report)

