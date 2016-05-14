# Python Post Request

This uses the latest Python. 
Source: 
<br>
http://stackoverflow.com/questions/11322430/python-how-to-send-post-request
<br>
<br>
Try the sample code: 
```
python sample-request.py

Output:

{
  "args": {},
  "data": "",
  "files": {},
  "form": {
    "foo": "bar"
  },
  "headers": {
    "Accept-Encoding": "identity",
    "Content-Length": "7",
    "Content-Type": "application/x-www-form-urlencoded",
    "Host": "httpbin.org",
    "User-Agent": "Python-urllib/3.5"
  },
  "json": null,
  "origin": "71.64.121.64",
  "url": "https://httpbin.org/post"
}

```

Now edit the our-request.py
- Send a blank request to stoh.io/api/testing
- Print the response


