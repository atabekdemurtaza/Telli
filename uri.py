from django.http import HttpRequest

request = HttpRequest()
request.scheme = 'http'
request.META['HTTP_HOST'] = 'example.com'

relative_path = '/some/page/'
absolute_url = request.build_absolute_uri(relative_path)

print(absolute_url)
