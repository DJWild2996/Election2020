from flask import Flask, request, Response
import json

app = Flask(__name__)

candidate_counts = {}
party_counts = {}


@app.route('/', methods=['POST', 'GET'])
def count():
    global party_counts, candidate_counts
    if request.method == 'POST':
        post = request.form
        print(post)
        party = post['party']
        candidate = post['candidate']
        print(party, candidate)
        if party not in party_counts:
            party_counts[party] = 1
        else:
            party_counts[party] += 1
        if candidate not in candidate_counts:
            candidate_counts[candidate] = 1
        else:
            candidate_counts[candidate] += 1
        print(party_counts, candidate_counts)
        return 'GOT IT'
    if request.method == 'GET':
        result = json.dumps([candidate_counts, party_counts])
        resp = Response(response=result,
                        status=200,
                        mimetype='application/json')
        return resp


if __name__ == '__main__':
    app.run(debug=True,
            port=5000,
            use_debugger=False,
            use_reloader=False,
            passthrough_errors=True)















