from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
import anthropic

SYSTEM_PROMPT = """You are a helpful assistant on Nu Chai's portfolio website.
You answer visitor questions about Nu Chai's background, skills, projects, and experience.

Here is what you know about Nu Chai:
- Full-Stack Software Engineer
- Skilled in React, Django, Python, JavaScript, HTML/CSS, Tailwind CSS
- Experienced with REST APIs, PostgreSQL, Git, Docker, Linux
- Builds modern, scalable web applications with clean code
- Passionate about creating software that makes a difference

Rules:
- Keep answers concise, friendly, and professional (2-4 sentences max).
- Only answer questions related to Nu Chai's professional background, skills, or projects.
- If asked something unrelated, politely redirect to professional topics.
- Never reveal that you are powered by any specific AI provider.
- Never share personal or private information beyond what is listed above.
"""


class ChatView(APIView):
    def post(self, request):
        user_message = request.data.get('message', '').strip()

        if not user_message:
            return Response(
                {"error": "Message is required."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        api_key = settings.AI_API_KEY
        if not api_key:
            return Response(
                {"reply": "Chat is currently unavailable. Please use the contact form instead."},
                status=status.HTTP_200_OK,
            )

        try:
            client = anthropic.Anthropic(api_key=api_key)
            response = client.messages.create(
                model=settings.AI_MODEL,
                max_tokens=300,
                system=SYSTEM_PROMPT,
                messages=[
                    {"role": "user", "content": user_message}
                ],
            )
            reply = response.content[0].text
        except Exception:
            reply = "Sorry, I'm having trouble responding right now. Please try again or use the contact form."

        return Response({"reply": reply}, status=status.HTTP_200_OK)
