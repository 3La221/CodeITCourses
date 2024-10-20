# Generated by Django 5.1 on 2024-08-27 18:07

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='level',
            field=models.CharField(choices=[('BEGINNER', 'beginner'), ('INTERMEDIATE', 'intermediate'), ('ADVANCED', 'advanced')], default=api.models.Level['BEGINNER'], max_length=20),
        ),
    ]
