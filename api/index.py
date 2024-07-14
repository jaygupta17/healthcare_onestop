from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import base64
import os
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)

load_dotenv()
api = os.getenv("NEXT_PUBLIC_GEMINI_API_KEY")
genai.configure(api_key=api)

# Set up the model
model = genai.GenerativeModel('gemini-pro-vision')

# Define the default prompt
DEFAULT_PROMPT = """
Analyze the following image and provide information about:
1. Name the medicine present in the photo
2. Name the company that made it 
3. Name the ingredients used to make it 
4. Name various disease that can be treated using this medicine
5. If possible give the expiraton period of medicine

Additionally, address the following user prompt: 
"""

@app.route('/api/test', methods=['GET'])
def test():
    return jsonify({"message": "API is working"}), 200

@app.route('/api/analyze', methods=['POST'])
def analyze_image():
    print("Received request to /api/analyze")
    print(f"Request method: {request.method}")
    print(f"Request form data: {request.form}")
    print(f"Request files: {request.files}")

    if 'image' not in request.files or 'prompt' not in request.form:
        return jsonify({'error': 'Missing image or prompt'}), 400

    image = request.files['image']
    user_prompt = request.form['prompt']

    # Combine default prompt with user prompt
    full_prompt = DEFAULT_PROMPT + user_prompt

    # Read and encode the image
    image_data = base64.b64encode(image.read()).decode('utf-8')

    # Create the input for Gemini
    contents = [
        {
            'parts': [
                {'text': full_prompt},
                {
                    'inline_data': {
                        'mime_type': image.content_type,
                        'data': image_data
                    }
                }
            ]
        }
    ]

    # Generate content
    try:
        response = model.generate_content(contents)
        return jsonify({'result': response.text})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)