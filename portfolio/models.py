from django.db import models


class Profile(models.Model):
    """Your personal information displayed on the portfolio."""
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=200, help_text="e.g. Full-Stack Software Engineer")
    bio = models.TextField(help_text="About me section content")
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    location = models.CharField(max_length=100, blank=True)
    github_url = models.URLField(blank=True)
    linkedin_url = models.URLField(blank=True)
    resume_file = models.FileField(upload_to='resumes/', blank=True)
    photo = models.ImageField(upload_to='photos/', blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Profile"


class Skill(models.Model):
    """A skill grouped by category (Frontend, Backend, Tools, etc.)."""
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=50, help_text="e.g. Frontend, Backend, Tools")
    order = models.IntegerField(default=0, help_text="Display order within category")

    def __str__(self):
        return f"{self.category} — {self.name}"

    class Meta:
        ordering = ['category', 'order']


class Project(models.Model):
    """A project to showcase in the portfolio."""
    title = models.CharField(max_length=200)
    description = models.TextField()
    technologies = models.CharField(max_length=500, help_text="Comma-separated: React, Django, PostgreSQL")
    image = models.ImageField(upload_to='projects/', blank=True)
    github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)
    featured = models.BooleanField(default=False, help_text="Show on home page")
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['order', '-created_at']


class Experience(models.Model):
    """Work experience entry for the resume section."""
    role = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True, help_text="Leave blank if current job")
    description = models.TextField()
    order = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.role} at {self.company}"

    class Meta:
        ordering = ['order', '-start_date']


class Education(models.Model):
    """Education entry for the resume section."""
    degree = models.CharField(max_length=200)
    school = models.CharField(max_length=200)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    description = models.TextField(blank=True)
    order = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.degree} — {self.school}"

    class Meta:
        ordering = ['order', '-start_date']
