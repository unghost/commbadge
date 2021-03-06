define('routes_api', [], function() {

    // List API routes here.
    // E.g.:
    // {
    //     "route": "/foo/bar/{0}",
    //     "another_route": "/foo/bar/{0}/asdf"
    // }
	return {
        'login': '/api/v1/account/login/',
        'logout': '/api/v1/account/logout/',

        'app': '/api/v1/apps/app/{0}/',

        'threads': '/api/v1/comm/thread/',
        'thread': '/api/v1/comm/thread/{0}/',
        'subscribe': '/api/v1/comm/thread/subscribe/{0}/',
        'notes': '/api/v1/comm/thread/{0}/note/',
        'note': '/api/v1/comm/thread/{0}/note/{1}/',
        'attachments': '/api/v1/comm/note/{0}/attachment/',
        'attachment': '/api/v1/comm/note/{0}/attachment/{1}',
    };
});
