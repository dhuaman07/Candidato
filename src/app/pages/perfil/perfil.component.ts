import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: 'perfil.html',
  styleUrls: ['perfil.css']
})
export class PerfilComponent {

  candidate = {
    name: 'Dr. Alejandro Vargas',
    role: 'Candidato a Gobernador',
    location: 'Región Metropolitana',
    service: 'Servicio Público',
    leadership: 'Liderazgo Comunitario',

    bio: [
      'El Dr. Alejandro Vargas ha dedicado más de 15 años a la transformación del sector público. Con un enfoque en la gestión eficiente y la equidad social, ha liderado iniciativas que han impactado positivamente a miles de ciudadanos.',
      'Nacido y criado en el corazón de nuestra región, su compromiso con el desarrollo local nace de una comprensión profunda de los retos diarios que enfrentan las familias. Su visión combina la excelencia técnica académica con una sensibilidad social inigualable.'
    ],

    experience: [
      {
        period: '2018 - 2023',
        title: 'Secretario de Desarrollo Social',
        description: 'Liderazgo de programas regionales de reducción de pobreza y apoyo a la vivienda.'
      },
      {
        period: '2014 - 2018',
        title: 'Director de Proyectos Urbanos',
        description: 'Gestión de infraestructuras críticas y modernización de espacios públicos urbanos.'
      }
    ],

    education: [
      {
        degree: 'Doctorado en Gestión Pública',
        institution: 'Universidad Nacional de Administración'
      },
      {
        degree: 'Maestría en Políticas Sociales',
        institution: 'Instituto de Estudios Políticos'
      }
    ],

    stats: [
      { value: '15+', label: 'Años de Experiencia' },
      { value: '40+', label: 'Proyectos Ejecutados' },
      { value: 'PhD',  label: 'Nivel Académico' }
    ],

    contact: {
      email: 'vargas@vanguardiacivil.org',
      website: 'www.vanguardiacivil.org'
    }
  };
}