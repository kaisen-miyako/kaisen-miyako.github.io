from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os

# アプリケーションの初期化
app = Flask(__name__)
CORS(app) # CORSを許可して、フロントエンドからのリクエストを受け付けられるようにする

# --- データベース設定 ---
# ベースディレクトリの取得
basedir = os.path.abspath(os.path.dirname(__file__))
# データベースのパス設定
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'app.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# --- モデル定義 ---
# データベースに保存するメッセージのデータ構造を定義
class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(200), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'text': self.text,
        }

# --- APIエンドポイント ---
# 全てのメッセージを取得する (GETリクエスト)
@app.route('/api/messages', methods=['GET'])
def get_messages():
    messages = Message.query.all()
    return jsonify([message.to_dict() for message in messages])

# 新しいメッセージを投稿する (POSTリクエスト)
@app.route('/api/messages', methods=['POST'])
def add_message():
    data = request.get_json()
    if not data or 'text' not in data:
        return jsonify({'error': 'Text is required'}), 400

    new_message = Message(text=data['text'])
    db.session.add(new_message)
    db.session.commit()
    return jsonify(new_message.to_dict()), 201

# --- データベースの初期化 ---
# アプリケーションコンテキスト内でデータベーステーブルを作成
with app.app_context():
    db.create_all()

# --- アプリケーションの実行 ---
if __name__ == '__main__':
    app.run(debug=True) # debug=Trueで開発モードで実行