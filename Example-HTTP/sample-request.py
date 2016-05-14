from urllib.parse import urlencode
from urllib.request import Request, urlopen

url = 'https://stoh.io/api/testing' # Set destination URL here
post_fields = {'time': '130498234'}     # Set POST fields here

request = Request(url, urlencode(post_fields).encode())
json = urlopen(request).read().decode()
print(json)
