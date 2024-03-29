import pytest
from core.user.models import User

data_user = {
    "username": "test",
    "email": "test@test.com",
    "first_name": "",
    "last_name": "",
    "password": "123456"
}


@pytest.mark.django_db
def test_create_user():
    user = User.objects.create_superuser(**data_user)
    assert user.username == data_user["username"]
    assert user.email == data_user["email"]
    assert user.first_name == data_user["first_name"]
    assert user.last_name == data_user["last_name"]
    assert user.is_superuser is True
    assert user.is_staff is True
