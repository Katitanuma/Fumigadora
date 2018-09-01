# coding=utf-8
from django.shortcuts import render, render_to_response
from django.template.loader import render_to_string, get_template
from .models import * 
from django.views.generic import TemplateView
from django.core.mail import send_mail,EmailMessage
from .forms import Form_Contacto
from django.template import RequestContext
from django.http import HttpResponse,HttpResponseRedirect, JsonResponse

def home(request):
	somos = Somos.objects.all()
	mision = Mision.objects.all()
	vision = Vision.objects.all()
	servicios = Servicio.objects.all()
	clientes = Cliente.objects.all()
	contacto = Form_Contacto()
  
	data={
		'somos':somos,
		'mision':mision,
		'vision':vision,
		'listado_servicios':servicios,
		'listado_clientes':clientes,
		'contacto':contacto
	}

	return render(request,'home.html',data)

def mision(request):
	mision = Mision.objects.all()
	return render(request,'mision.html',{'mision':mision})

def envio(request, *args, **kwargs):
	if request.method == 'POST':
		form = Form_Contacto(request.POST)
		if form.is_valid():
			nombre = request.POST.get('nombre')
			correo = request.POST.get('correo')
			mensaje = request.POST.get('mensaje')

			try:
				body = render_to_string( 
					'email_content.html', {
					'nombre': nombre, 
					'correo': correo, 
					'mensaje': mensaje,
					},
				)
				email_message = EmailMessage(
					subject='Mensaje de FUMIGADORA Y LIMPIEZA BRILLOS Y MÁS',
					body=body,
					from_email=correo,
					to=['katy.421997@gmail.com'],
				)
				email_message.content_subtype = 'html'
				email_message.send()

				return JsonResponse({'mensaje': 'Tu mensaje ha sido enviado' })
				# return JsonResponse({'mensaje':mensaje})
				# return HttpResponse ('Mensaje de correo enviado')
			except Exception as e:
				return HttpResponse('Error: ' +str(e))



