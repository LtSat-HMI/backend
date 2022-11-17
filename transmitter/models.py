from django.db import models

class Telemetria(models.Model):
    altitude = models.FloatField()
    temperatura = models.FloatField()
    tensao = models.FloatField()
    cont = models.Index
    
    def __str__(self):
        return self.cont

