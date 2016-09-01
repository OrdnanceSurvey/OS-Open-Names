import urllib

url = 'https://api.os.uk/opennames/v1/nearest?%s'
params = urllib.urlencode({'point':'437342.5,115485.5', 'key':'INSERT_YOUR_API_KEY_HERE'})

try:
    f = urllib.urlopen(url % params)
except Exception as e:
    print(str(e))
    
response=f.read()
#print 'RESPONSE:', response


for line in response.splitlines():
    
    word_lst = line.split(':')
    for word in word_lst:
        if '"NAME1" ' in word: print(line)
        if 'GEOMETRY' in word: print(line)    
        if 'ID' in word: print(line)
f.close()