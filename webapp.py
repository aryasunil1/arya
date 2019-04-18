from flask import Flask,render_template
app=Flask(__name__)
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/cuisine')
def course():
    return render_template("cuisine.html")

@app.route('/service')
def service():
    return render_template("service.html")


if(__name__=="__main__"):
    app.run(port=5011)