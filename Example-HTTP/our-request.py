from urllib.parse import urlencode
from urllib.request import Request, urlopen

url = 'stoh.io/api/testing' # Set destination URL here
post_fields = {'foo': 'bar'}     # Set POST fields here

request = Request(url, urlencode(post_fields).encode())
json = urlopen(request).read().decode()
print(json)
