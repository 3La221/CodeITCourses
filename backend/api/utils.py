from importlib import import_module
from django.apps import apps

def get_serializer_class_for_model(obj):
    model_class = type(obj)

    serializer_class_name = f'{model_class.__name__}Serializer'

    serializer = import_module('api.serializers')

    return getattr(serializer, serializer_class_name,None)
