from __future__ import unicode_literals
from django.db import models
from django.utils.encoding import python_2_unicode_compatible



class Contacto(models.Model):
	nombre = models.CharField(max_length=100)
	correo = models.EmailField()
	mensaje = models.TextField()

@python_2_unicode_compatible
class Cliente(models.Model):
	empresa = models.CharField(max_length=100)

	def __str__(self):
		return self.empresa

@python_2_unicode_compatible
class Equipo(models.Model):
	nombre = models.CharField(max_length= 100)
	imagen = models.ImageField(upload_to='Equipos')

	def __str__(self):
		return self.nombre

class Mision(models.Model):
	texto = models.TextField()

	class Meta:
		verbose_name_plural='Mision'

class Vision(models.Model):
	texto = models.TextField()

	class Meta:
		verbose_name_plural='Vision'

class Somos(models.Model):
	texto = models.TextField()

	class Meta:
		verbose_name_plural='Somos'

@python_2_unicode_compatible
class Servicio(models.Model):
	nombre = models.CharField(max_length=100)
	imagen = models.ImageField(upload_to='Servicios')

	def __str__(self):
		return self.nombre





