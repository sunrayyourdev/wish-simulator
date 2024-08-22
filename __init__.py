import shelve
from flask import Flask, render_template, request, redirect, url_for, session
from User import User


app = Flask(__name__)
app.secret_key = 'C1ZPbB0tapxqNpeYou7EpmRJN4hBT7li'


def manage_session():
    if 'user' not in session:
        with shelve.open('wish_sim') as wish_db:
            users = wish_db['Users']
            session['user'] = len(users)
            users.append(User())
            wish_db['Users'] = users
    session['banner'] = request.form.get('banner', session.get('banner', 'standard'))
    return redirect(url_for('home'))


def get_current_user():
    with shelve.open('wish_sim') as wish_db:
        users = wish_db['Users']
        return users[session['user']]
    

def update_current_user(updated_user):
    with shelve.open('wish_sim') as wish_db:
        users = wish_db['Users']
        users[session['user']] = updated_user
        wish_db['Users'] = users


@app.route('/', methods=['GET', 'POST'])
def home():
    manage_session()
    if request.method == 'POST':
        user = get_current_user()
        print(session['banner'])
        user.wish(user.banners[session['banner']], int(request.form["quantity"]))
        update_current_user(user)
        return redirect(url_for('home'))
    return render_template('home.html', wish_result=get_current_user().last_wish_result, banner=session['banner'])


@app.route('/history', methods=['GET', 'POST'])
def history():
    # add this feature
    return render_template('history.html')


@app.route('/restart-database', methods=['GET', 'POST'])
def restart_database():
    with shelve.open('wish_sim') as wish_db:
        wish_db['Users'] = []
    try:
        del session['user']
    except KeyError:
        print("User does not exist, nothing to delete")
    print("Database restarted")
    return redirect(url_for('home'))


if __name__ == '__main__':
    try:
        with shelve.open('wish_sim') as wish_db:
            if not wish_db:
                wish_db['Users'] = []
    except IOError:
        print("Error opening or creating the shelve file.")
    app.run(debug=True)