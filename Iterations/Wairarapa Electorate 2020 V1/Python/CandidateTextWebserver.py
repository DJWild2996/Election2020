from controller import setup
from flask import Flask

# the Flask object works out where this file is running from
app = Flask(__name__)

# get data from controller
the_electorate = setup()

# format data into html f-string template
html = f"""
    <!DOCTYPE html> 
    <html lang="en"> 
    <head> 
    <title>Election</title> 
    <link rel="stylesheet" type="text/css" href="/static/table_style.css">
    </head> 
    <body>  
    {the_electorate.to_candidate_results()}
    {the_electorate.to_candidate_result_table()}
    {the_electorate.to_candidate_result_form()}
    </body> 
    """

# some magic to connect the app to the web
@app.route('/')
def index():
    return html

# needs this to run in PyCharm
app.run(debug=True,
        port=5000,
        use_debugger=False,
        use_reloader=False,
        passthrough_errors=True)
