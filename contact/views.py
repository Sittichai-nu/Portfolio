from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .models import ContactMessage
from .serializers import ContactMessageSerializer


class ContactCreateView(CreateAPIView):
    serializer_class = ContactMessageSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        message = serializer.save()

        # Send auto-reply email to the visitor
        if settings.EMAIL_HOST and settings.EMAIL_HOST_USER:
            try:
                send_mail(
                    subject="Thank you for reaching out!",
                    message=(
                        f"Hi {message.name},\n\n"
                        "Thank you for your message. I have received it and "
                        "will get back to you as soon as possible.\n\n"
                        "Best regards,\n"
                        "Nu Chai"
                    ),
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[message.email],
                    fail_silently=True,
                )
            except Exception:
                pass

        # Send notification email to you
        if settings.EMAIL_HOST and settings.EMAIL_HOST_USER:
            try:
                send_mail(
                    subject=f"New contact form message from {message.name}",
                    message=(
                        f"Name: {message.name}\n"
                        f"Email: {message.email}\n\n"
                        f"Message:\n{message.message}"
                    ),
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[settings.EMAIL_HOST_USER],
                    fail_silently=True,
                )
            except Exception:
                pass

        return Response(
            {"detail": "Message sent successfully."},
            status=status.HTTP_201_CREATED,
        )
