import web

urls = (
    '/', 'index'
)

class index:
    def GET(self):
        return "Hell,suzie!"

if __name__ == "__main__":
    app = web.application(urls, globals())
    app.run()

app = web.application(urls, globals(), autoreload=False)
application = app.wsgifunc()

