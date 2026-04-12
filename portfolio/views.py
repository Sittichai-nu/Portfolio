from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Profile, Skill, Project, Experience, Education
from .serializers import (
    ProfileSerializer, SkillSerializer, ProjectSerializer,
    ExperienceSerializer, EducationSerializer,
)


class ProfileView(RetrieveAPIView):
    serializer_class = ProfileSerializer

    def get_object(self):
        return Profile.objects.first()


class SkillListView(ListAPIView):
    serializer_class = SkillSerializer
    queryset = Skill.objects.all()


class ProjectListView(ListAPIView):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()


class ExperienceListView(ListAPIView):
    serializer_class = ExperienceSerializer
    queryset = Experience.objects.all()


class EducationListView(ListAPIView):
    serializer_class = EducationSerializer
    queryset = Education.objects.all()
