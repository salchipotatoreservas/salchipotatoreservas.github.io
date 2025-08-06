document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('fireworks-canvas');
    const logo = document.querySelector('.logo-img');

    if (!container || !logo) return;

    const fireworks = new Fireworks.default(container, {
        max_rockets: 5, // Más cohetes para un espectáculo más completo
        rocket_launch_speed: 15, // Velocidad de lanzamiento ligeramente mayor
        rockets_spawn_delay: 400, // Intervalo más corto para un flujo constante
        min_rocket_spawn_delay: 300,
        max_rocket_spawn_delay: 500,
        num_particles: 250, // Más partículas para explosiones más densas y realistas
        explosion_speed: 2.5, // Velocidad de expansión de la explosión
        explosion_resistance: 0.92, // Menos resistencia para una expansión más amplia
        explosion_gravity: 0.4, // Gravedad ligeramente mayor para una caída más natural
        
        // --- Configuración de la Explosión ---
        explosions: [
            {
                type: 'sphere',
                // Colores más variados y vibrantes para un efecto multicolor
                colors: ['#FF0000', '#FFA500', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#EE82EE', '#FFFFFF'],
                flickering: 100, // Mayor parpadeo para realismo
                brightness: {
                    min: 70,
                    max: 100, // Mayor brillo
                    decay: {
                        min: 0.015,
                        max: 0.025 // Decaimiento más rápido del brillo
                    }
                }
            }
        ],

        // --- Configuración de la Estela ---
        trace: {
            speed: 20, // Estela más rápida
            acc: 1.08, // Aceleración de la estela
            min_flickering: 0.3,
            max_flickering: 0.9,
            brightness: {
                min: 60,
                max: 80,
                decay: {
                    min: 0.01,
                    max: 0.02
                }
            }
        }
    });

    // --- Lanzador Personalizado ---
    function launchTowardsLogo() {
        const rect = logo.getBoundingClientRect();
        const targetX = rect.left + rect.width / 2;
        const targetY = rect.top + rect.height / 2;

        fireworks.launch(1, {
            x: Math.random() * window.innerWidth, // Origen aleatorio en el ancho
            y: window.innerHeight, // Siempre desde la parte inferior
            target: {
                x: targetX,
                y: targetY
            }
        });
    }

    // Iniciar el espectáculo
    fireworks.start();
    setInterval(launchTowardsLogo, 600); // Un flujo constante y más frecuente
});
