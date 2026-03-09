import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomeComponent {

  /**
   *
   */
  constructor(private router: Router) {        
  }
  features = [
    {
      icon: '🏛️',
      title: 'Voz Ciudadana',
      text: 'Nos aseguramos de que tus encuestas sean escuchadas y tomadas en cuenta por los principales tomadores de decisiones de la administración pública.'
    },
    {
      icon: '🔍',
      title: 'Transparencia',
      text: 'Mantenemos transparentes los procesos: La Voz y datos abiertos para que toda la comunidad pueda contribuir y exigir los resultados de cada iniciativa.'
    },
    {
      icon: '🌍',
      title: 'Impacto Social',
      text: 'Transformamos cada voz de los respondientes en acciones concretas reales y medibles que mejoran la situación de la ciudad en el mundo y la sociedad.'
    }
  ];

  navLinks = [
    { label: 'Inicio', href: '#' },
    { label: 'Cuestionarios', href: '#' },
    { label: 'Impacto', href: '#' },
    { label: 'Transparencia', href: '#' },
    { label: 'Contacto', href: '#' }
  ];

  footerColumns = [
    {
      title: 'Plataforma',
      links: ['Cuestionarios Activos', 'Resultados Públicos', 'Metodología', 'Seguridad de Datos']
    },
    {
      title: 'Compañía',
      links: ['Sobre Nosotros', 'Transparencia', 'Prensa', 'Blog']
    },
    {
      title: 'Metodología',
      links: ['Cómo Funciona', 'Validación', 'Impacto', 'Alianzas']
    },
    {
      title: 'Soporte',
      links: ['Centro de Ayuda', 'Preguntas Frecuentes', 'Términos de Uso', 'Privacidad']
    }
  ];

  onStartSurvey(): void {
    console.log('Iniciar cuestionario clicked');
    // Navigate to survey route
  }

  onViewProfile(): void {
    console.log('Ver perfil clicked');
    // Navigate to profile route
  }

  onRegister(): void {
    console.log('Registrarse clicked');
    // Navigate to register route
  }

  onStartFree(): void {
    console.log('Empezar gratis clicked');
    // Navigate to register route
  }
  onCuestionario():void{
    this.router.navigate(['/cuestionario']);
  }
  onVerPerfil():void{
    this.router.navigate(['/perfil']);
  }
}