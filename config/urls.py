from django.contrib import admin
from django.urls import path, include
# from rest_framework_swagger.views import get_swagger_view
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.conf import settings
from rest_framework.permissions import AllowAny
from django.conf.urls.static import static

schema_view = get_schema_view(
    openapi.Info(
        title='Telli Messenger Application',
        default_version='v1',
    ),
    public=True,
    permission_classes=(AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/", include(("core.routers", "core"), namespace="core-api")),
    path("docs/", schema_view.with_ui(
        'swagger',
        cache_timeout=0,
    ), name='schema-swagger-ui',
    )
]

if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT
    )
