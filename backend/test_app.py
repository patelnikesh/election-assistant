import pytest
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_health_check(client):
    rv = client.get('/api/health')
    assert rv.status_code == 200
    assert b'healthy' in rv.data

def test_chat_no_message(client):
    rv = client.post('/api/chat', json={})
    if rv.status_code == 500:
        assert b'Gemini AI not configured' in rv.data
    else:
        assert rv.status_code == 400
        assert b'No message provided' in rv.data

def test_chat_with_message_no_api_key(client):
    # This test assumes GEMINI_API_KEY is not set or model is None
    rv = client.post('/api/chat', json={"message": "Hello"})
    # If model is None, it should return 500
    if rv.status_code == 500:
        assert b'Gemini AI not configured' in rv.data
    else:
        # If it works (e.g. API key is set in environment), it should return 200
        assert rv.status_code == 200
        assert b'response' in rv.get_json()
