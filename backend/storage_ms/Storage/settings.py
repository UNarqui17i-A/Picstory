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