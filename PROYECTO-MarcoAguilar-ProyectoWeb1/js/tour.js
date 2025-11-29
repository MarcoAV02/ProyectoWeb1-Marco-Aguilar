document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('panorama-container')) {
        
        const viewer = pannellum.viewer('panorama-container', {
            "type": "equirectangular",
            "panorama": "panoramas/recepcion.jpg", 
            "autoLoad": true,
            "showZoom": true,
            "showFullscreen": true,
            "hotSpots": [
                
                // ZONA 1: Enlace Interno (Redirecciona a Contacto.html)
                {
                    "pitch": 5, "yaw": -150, "type": "info",
                    "text": "1. Módulo de Recepción: Haz clic aquí para agendar tu cita.",
                    "URL": "contacto.html"
                },
                
                // ZONA 2: Imagen Local (Uso de elementos web: Imagen)
                {
                    "pitch": 10, "yaw": -20, "type": "info",
                    // Se incluye la imagen directamente en el contenido del hotspot.
                    "text": "<h4>2. Sala de Espera Tranquila</h4><p>Espacio cómodo para ti y tu mascota. Haz clic para ver el consejo:</p><img src='img/consejo_mascotas.png' style='width: 100%; max-width: 200px; border-radius: 5px; margin-top: 10px;'>",
                    "URL": "img/consejo_mascotas.png" 
                },
                
                // ZONA 3: PDF Local (Uso de elementos web: PDF)
                {
                    "pitch": -5, "yaw": 50, "type": "info",
                    "text": "3. Consultorio Principal: Haz clic para ver el folleto de 'Chequeos Preventivos'.",
                    "URL": "data/chequeos.pdf" // RUTA LOCAL CORRECTA
                },
                
                // ZONA 4: Enlace a Farmacia Externa
                {
                    "pitch": -10, "yaw": 120, "type": "info",
                    "text": "4. Farmacia: Surtido completo de medicamentos y suplementos recomendados.",
                    "URL": "https://petsavenuecr.net/collections/farmacia"
                },
                
                // ZONA 5: Enlace a Nutrición Externa
                {
                    "pitch": 0, "yaw": 160, "type": "info",
                    "text": "5. Nutrición: Alimentos Premium. Pregunta por nuestros planes de dieta personalizados.",
                    "URL": "https://purina.co.cr/purina/mi-mascota"
                },
                
                // ZONA 6: Imagen Externa (Ejemplo de Anuncio)
                {
                    "pitch": 30, "yaw": 10, "type": "info",
                    "text": "6. Anuncios y Promociones: Información sobre campañas de vacunación y descuentos.",
                    "URL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVHuLbTMzsoOU_YnAS8Ye1NXrgMHwUGuBTxQ&s"
                },
                
                // ZONA 7: Video Incrustado (Uso de elementos web: Video)
                {
                    "pitch": -5, "yaw": 220, "type": "info",
                    "text": "7. Equipamiento: Haz clic para ver un video corto sobre nuestro equipo de diagnóstico por ultrasonido.",
                    // Se usa el formato /embed/ para que Pannellum pueda mostrarlo.
                    "URL": "https://www.youtube.com/embed/3B7QWQC-ZDw" 
                },
                
                // ZONA 8: Salida (Texto)
                {
                    "pitch": -30, "yaw": 90, "type": "info",
                    "text": "8. Salida de Emergencia: Ubicación clara para la seguridad de todos.",
                    "URL": ""
                },
                
                // ZONA 9: Contacto Telefónico (Texto)
                {
                    "pitch": 40, "yaw": -120, "type": "info",
                    "text": "9. Contacto: Llama al (506)1234-5678 para agendar tu cita.",
                    "URL": ""
                },
                
                // ZONA 10: Comodidades (Texto)
                {
                    "pitch": -20, "yaw": -70, "type": "info",
                    "text": "10. Comodidades: Punto de hidratación para las mascotas que nos visitan.",
                    "URL": ""
                }
            ]
        });

    }

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
            contactForm.reset();
        });
    }
});