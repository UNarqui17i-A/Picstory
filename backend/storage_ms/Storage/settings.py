#Change Host
def_host='0.0.0.0'

#Default port to expose service
def_port = 8015

#Main and only AWS S3 Bucket
main_bucket = 'picstorybucket'

#Volatile entity, not used
posts = {
    'schema' : {
        'id' : {
            'type' : 'string',
            'required' : True,
        },
        'codimg' : {
            'type' : 'string',
            'required' : True,
        }
    }
}

#Domain
DOMAIN = {
    'posts': posts
}

#Allowed CRUD Methods
RESOURCE_METHODS = ['POST']

#Enabling fucking CORS
#X_DOMAINS = '*'
X_HEADERS = ['Content-Type','Authorization','Access-Control-Allow-Origin','If-Match','Accept','Content-Length']

