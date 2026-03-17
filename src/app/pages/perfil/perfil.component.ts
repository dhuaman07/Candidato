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
    name: 'Dra. Jacqueline Santos Julca ',
    role: 'Candidato a Diputado',
    location: 'Región Junín',
    service: 'Servicio Público',
    leadership: 'Liderazgo Comunitario',

    bio: [
      'El Dra. Jacqueline Santos Julca ha dedicado más de 15 años a la transformación del sector público. Con un enfoque en la gestión eficiente y la equidad social, ha liderado iniciativas que han impactado positivamente a miles de ciudadanos.',
      'Nacido y criado en el corazón de nuestra región, su compromiso con el desarrollo local nace de una comprensión profunda de los retos diarios que enfrentan las familias. Su visión combina la excelencia técnica académica con una sensibilidad social inigualable.'
    ],

    experience: [
      {
        period: '2018 - Actualidad',
        title: 'Docente Universitaria',
        description: 'Docente de la Universidad Continental'
      },
      {
        period: '2014 - 2018',
        title: 'Ex decana del colegio de profesores de la región Junín',
        description: 'Colegio de Psicologos del Perú - Junín'
      }
    ],

    education: [
      {
        degree: 'Doctora en Psicología',
        institution: 'Universidad Nacional Mayor de San Marcos'
      },
      {
        degree: 'Magister en Evaluación y Acreditación de la calidad educativa',
        institution: 'Universidad ---'
      },
      {
        degree: 'Magister en Políticas sociales ',
        institution: 'Universidad ---'
      }
      ,
      {
        degree: 'Magister en Educación ',
        institution: 'Universidad ---'
      } 
      ,
      {
        degree: 'Licenciada en Psicología ',
        institution: 'Universidad ---'
      }   
      ,
      {
        degree: 'Licenciada en Pedagogía y Humanidades - especialidad de Matemática y Física ',
        institution: 'Universidad ---'
      }   
    ],

    stats: [
      { value: '15+', label: 'Años de Experiencia' },
      { value: '40+', label: 'Proyectos Ejecutados' },
      { value: 'Dra.',  label: 'Nivel Académico' }
    ],

    contact: {
      email: 'jsantos@gmail.com',
      website: ''
    }
  };
}