# 🛡️ B-BREAK: AI Support Companion

![Status](https://img.shields.io/badge/Status-Prototype-blue?style=for-the-badge)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**B-Break** is an empathetic, AI-powered chatbot designed to support individuals facing gender discrimination and domestic violence. Built with **Flask** and powered by **Google Gemini 2.0 Flash**, it provides quick, action-oriented guidance, ranging from emotional support and self-care tips to emergency safety planning and legal resources.

---

## ⚡ Tech Stack

### **Backend & AI**
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)

### **Frontend**
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🔮 Key Features

* **🤖 Empathetic AI:** Utilizes a fine-tuned system prompt on **Gemini 2.0 Flash** to ensure responses are warm, understanding, and direct.
* **🆘 Scenario-Based Assistance:**
    * **Anxiety/Overwhelm:** Provides breathing exercises and grounding techniques.
    * **Safety Planning:** Offers steps for securing documents and packing essentials.
    * **Emergency (SOS):** Prioritizes helpline numbers and exit strategies.
    * **Empowerment:** Connects users to career and financial resources.
* **💬 Real-Time Chat Interface:** A clean, responsive web interface for immediate interaction.
* **🎵 Audio Integration:** Includes background audio capabilities for a calming user experience.

---

## 📂 Project Structure

```text
B-Break/
├── static/
│   ├── css/
│   │   └── chat.css            # Chat interface styling
│   ├── images/                 # Project assets/icons
│   ├── js/
│   │   └── chatbot.js          # Frontend chat logic
│   ├── sounds/
│   │   └── background-music.mp3 # Calming background audio
│   ├── scipt.js                # Additional scripts
│   └── style.css               # Global styles
├── templates/
│   ├── chat.html               # Chatbot UI Page
│   └── index.html              # Landing Page
├── app.py                      # Main Flask Application & AI Logic
├── requirements.txt            # Python dependencies
├── .env                        # Environment variables (API Keys)
└── README.md                   # Project Documentation
