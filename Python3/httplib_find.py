import http.client

connection1 = http.client.HTTPSConnection('www.somesecuresite.com')



conn = http.client.HTTPConnection('https://api.os.uk/opennames/v1',8080)
print (conn)
conn.request("GET", "https://api.os.uk/opennames/v1/find?query=southampton")
r1 = conn.getresponse()
response = r1.read()
print (str(response))