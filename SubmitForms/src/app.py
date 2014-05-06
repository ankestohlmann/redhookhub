import flask

app = flask.Flask(__name__)

@app.route('/')
def hello_world():
    return flask.render_template("page1.html")

if __name__ == '__main__':
    app.run()