import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Configure Gemini AI
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")
if GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)
    model = genai.GenerativeModel('gemini-1.5-flash')
else:
    model = None

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy", "gemini_configured": model is not None})

@app.route('/api/chat', methods=['POST'])
def chat():
    if not model:
        return jsonify({"error": "Gemini AI not configured. Please set GEMINI_API_KEY."}), 500

    data = request.json
    user_message = data.get("message")
    
    if not user_message:
        return jsonify({"error": "No message provided"}), 400

    try:
        # Contextual prompt for the election assistant
        prompt = f"""
        You are 'Bharat Elects Bot', a friendly and knowledgeable digital assistant for the Indian election process.
        Your goal is to help voters understand how to vote, the security of EVMs, VVPAT, registration process, and election laws in India.
        Always be polite, accurate, and encourage civic participation.
        Use emojis where appropriate.
        
        User: {user_message}
        """
        
        response = model.generate_content(prompt)
        return jsonify({"response": response.text})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
