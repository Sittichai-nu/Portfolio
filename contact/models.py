from django.db import models


class ContactMessage(models.Model):
    """A message submitted by a visitor through the contact form."""
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name} — {self.email} ({self.created_at:%Y-%m-%d})"

    class Meta:
        ordering = ['-created_at']
