# Generated by Django 4.0.1 on 2024-02-27 12:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core_user', '0007_user_is_staff'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='is_staff',
            field=models.BooleanField(default=False),
        ),
    ]
