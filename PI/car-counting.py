import RPi.GPIO as GPIO
import time
import requests

GPIO.setmode(GPIO.BCM)

GPIO.setup(18, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(12, GPIO.IN, pull_up_down=GPIO.PUD_UP)

#initialise a previous input variable to 0 (assume button not pressed last)
prev_input = 0
prev_input2 = 0


while True:

        #take a reading
        input = GPIO.input(18)
        #if the last reading was low and this one high, print
        if ((not prev_input) and input):
                r = requests.post("http://stoh.io:8080/api/report", data={'time': time.time(), 'lot': 22, 'direction': 0})
                print("Button0 pressed")
        #update previous input
        prev_input = input
        #slight pause to debounce
        time.sleep(0.05)

        input2 = GPIO.input(12)
        #if the last reading was low and this one high, print
        if ((not prev_input2) and input2):
                r = requests.post("http://stoh.io:8080/api/report", data={'time': time.time(), 'lot': 22, 'direction': 0})
                print("Button1 pressed")
        #update previous input
        prev_input2 = input2
        #slight pause to debounce
        time.sleep(0.05)
