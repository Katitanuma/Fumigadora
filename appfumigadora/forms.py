from django.forms import ModelForm 
from django import forms 
from .models import *

class Form_Contacto(ModelForm):
	class Meta:
		model = Contacto
		fields = '__all__'

		widgets = {
			'nombre':forms.TextInput(attrs={'class':'form-control',
											'style':'font-size:13pt'
										  }),
			'correo':forms.EmailInput(attrs={'class':'form-control',
											'style':'font-size:13pt'
										  }),
			'mensaje':forms.Textarea(attrs={'class':'form-control',
											'rows':'5',
											'style':'font-size:13pt'
										  }),
		}
