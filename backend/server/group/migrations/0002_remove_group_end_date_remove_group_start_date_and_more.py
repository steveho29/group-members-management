# Generated by Django 4.1.3 on 2022-11-30 05:57

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('group', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='group',
            name='end_date',
        ),
        migrations.RemoveField(
            model_name='group',
            name='start_date',
        ),
        migrations.AddField(
            model_name='group',
            name='avatar',
            field=models.ImageField(null=True, upload_to='images'),
        ),
        migrations.AddField(
            model_name='group',
            name='co_owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='co_owned_groups', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='group',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='owned_groups', to=settings.AUTH_USER_MODEL),
        ),
    ]
