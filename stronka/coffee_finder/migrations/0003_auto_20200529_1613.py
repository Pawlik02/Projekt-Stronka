# Generated by Django 3.0.6 on 2020-05-29 14:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('coffee_finder', '0002_auto_20200529_1613'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='kupsko',
            new_name='location',
        ),
    ]
