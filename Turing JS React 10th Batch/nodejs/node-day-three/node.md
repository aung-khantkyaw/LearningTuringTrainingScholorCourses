# SOAP
    XML 
Cross Programming
SOAP Server
SOAP Client

ROUTE - METHOD + URL

GET - /api/movies
    - /api/movies/categories/1/list
POST - /api/movies
PUT - /api/movies/1 (Edit the whole data)
PUTCH - /api/movies/1 (Edit the items)
DELETE - /api/movies/1

## HTTP Status Code

### 2xx Successful responses

200 OK
201 Created (POST method)

### 3xx Redirection messages

### 4xx Client error responses

Client error - wrong url, method, content type, invalid input
400 Bad request (url, content type)
401 Unauthorized (access denied, no login)
402 Payment Required
403 Forbidden (after login but role, admin, user)
404 Not Found
405 Method Not Allowed (wrong method)
406 Not Acceptable

### 5xx Server error responses

500 Internal Server Error
502 Bad Gateway
503 Service Unavailable (Server Down)