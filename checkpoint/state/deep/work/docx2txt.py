import sys, zipfile, re
z = zipfile.ZipFile(sys.argv[1])
x = z.read('word/document.xml').decode('utf8')
x = re.sub(r'</w:p>', '\n', x)
x = re.sub(r'<w:tab/>', '\t', x)
x = re.sub(r'<[^>]+>', '', x)
import html
print(html.unescape(x))
