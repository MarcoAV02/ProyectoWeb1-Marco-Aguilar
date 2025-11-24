document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('panorama-container')) {
        
        const viewer = pannellum.viewer('panorama-container', {
            "type": "equirectangular",
            "panorama": "panoramas/recepcion.jpg", 
            "autoLoad": true,
            "showZoom": true,
            "showFullscreen": true,
            "hotSpots": [
                
                // ZONA 1
                {
                    "pitch": 5, "yaw": -150, "type": "info",
                    "text": "1. Módulo de Recepción: Aquí te daremos la bienvenida y agendaremos tu cita. (Haz click)",
                    "URL": "contacto.html"
                },
                
                // ZONA 2
                {
                    "pitch": 10, "yaw": -20, "type": "info",
                    "text": "2. Sala de Espera: Espacio cómodo para ti y tu mascota. Consulta nuestras revistas sobre cuidado animal. (Dale click)",
                    "URL": "https://www.aon.es/personales/seguro-perro-gato/wp-content/uploads/sites/2/2022/02/Infografia-cuidados-del-Gato-MS_mobile.png" 
                },
                
                // ZONA 3
                {
                    "pitch": -5, "yaw": 50, "type": "info",
                    "text": "3. Consultorio Principal: Haz clic para ver el folleto de 'Chequeos Preventivos'. (Dale click)",
                    "URL": "https://servicios.unileon.es/hospital-veterinario/files/2014/07/Examen-f%C3%ADsico-general.pdf" 
                },
                
                // ZONA 4
                {
                    "pitch": -10, "yaw": 120, "type": "info",
                    "text": "4. Farmacia: Surtido completo de medicamentos y suplementos recomendados por nuestros doctores.",
                    "URL": ""
                },
                
                // ZONA 5
                {
                    "pitch": 0, "yaw": 160, "type": "info",
                    "text": "5. Nutrición: Alimentos Premium. Pregunta por nuestros planes de dieta personalizados.(Dale click para tener más información)",
                    "URL": "https://purina.co.cr/purina/mi-mascota?specie_filter%5B1%5D=1&article_category%5B104%5D=104&gad_source=1&gad_campaignid=22572712468&gbraid=0AAAAABVbhr0yU4g2Ol-ndk4AsC-6y2QAk&gclid=CjwKCAiA_orJBhBNEiwABkdmjOMX3rC9crZkVlks0RirICW3eX4-gX7U5cwvktqwYFYjH5jt4X-D9hoC-7cQAvD_BwE"
                },
                
                // ZONA 6
                {
                    "pitch": 30, "yaw": 10, "type": "info",
                    "text": "6. Anuncios y Promociones: Información sobre campañas de vacunación y descuentos.",
                    "URL": ""
                },
                
                // ZONA 7
                {
                    "pitch": -5, "yaw": 220, "type": "info",
                    "text": "7. Equipamiento: Haz clic para ver un video corto sobre nuestro equipo de diagnóstico por ultrasonido.",
                    "URL": "https://youtu.be/3B7QWQC-ZDw?si=gXO26k5Gdgvf7c2g&t=261" // poner un video de youtube 
                },
                
                // ZONA 8
                {
                    "pitch": -30, "yaw": 90, "type": "info",
                    "text": "8. Salida de Emergencia: Ubicación clara para la seguridad de todos.",
                    "URL": ""
                },
                
                // ZONA 9
                {
                    "pitch": 40, "yaw": -120, "type": "info",
                    "text": "9. Contacto: Llama al (506)1234-5678 para agendar tu cita.",
                    "URL": ""
                },
                
                // ZONA 10
                {
                    "pitch": -20, "yaw": -70, "type": "info",
                    "text": "10. Comodidades: Punto de hidratación para las mascotas que nos visitan.",
                    "URL": ""
                }
            ]
        });

    }


    // Lógica del formulario de contacto (se mantiene)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
            contactForm.reset();
        });
    }
});