import { useEffect } from 'react';

const ParticlesBackground = () => {
  useEffect(() => {
    // Function to get particle colors based on theme
    const getParticleColors = () => {
      // Check if dark mode is active - more comprehensive detection
      const isDarkMode = document.documentElement.classList.contains('dark') ||
        document.body.classList.contains('dark') ||
        document.querySelector('html').classList.contains('dark') ||
        window.matchMedia('(prefers-color-scheme: dark)').matches ||
        document.body.style.backgroundColor === 'rgb(0, 0, 0)' ||
        document.body.style.backgroundColor === 'black';

      console.log('Theme detection:', {
        isDarkMode,
        htmlClasses: document.documentElement.classList.toString(),
        bodyClasses: document.body.classList.toString(),
        bodyBg: document.body.style.backgroundColor
      });

      // Force black particles for light theme if detection fails
      const particleColor = isDarkMode ? '#ffffff' : '#000000';
      const lineColor = isDarkMode ? '#ffffff' : '#000000';

      console.log('Using colors:', { particleColor, lineColor });

      return { particleColor, lineColor };
    };

    // Load particles.js script dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;

    script.onload = () => {
      // Initialize particles.js after script loads
      if (window.particlesJS) {
        const colors = getParticleColors();

                console.log('Initializing particles with colors:', colors);
        
        // Force black particles for testing light theme visibility
        const forceBlackForLightTheme = true; // Set to true to force black particles
        
        if (forceBlackForLightTheme) {
          colors.particleColor = '#000000';
          colors.lineColor = '#000000';
          console.log('Forcing black particles for light theme visibility');
        }
        
        // Fallback configuration for light theme
        const fallbackConfig = {
          particles: {
            number: { value: 80 },
            color: { value: '#000000' }, // Force black for light theme
            shape: { type: 'circle' },
            opacity: { value: 0.9 }, // Very visible
            size: { value: 5 }, // Larger size
            line_linked: {
              enable: true,
              distance: 150,
              color: '#000000', // Force black lines
              opacity: 0.6,
              width: 1
            },
            move: { enable: true, speed: 6 }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'repulse' },
              onclick: { enable: true, mode: 'push' }
            }
          }
        };

        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 120, // More particles
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: colors.particleColor
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000'
              }
            },
            opacity: {
              value: 0.8,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.3,
                sync: false
              }
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.5,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: colors.lineColor,
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 6,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse'
              },
              onclick: {
                enable: true,
                mode: 'push'
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        });
      }
    };

    document.head.appendChild(script);

    // Function to update particles when theme changes
    const updateParticlesForTheme = () => {
      if (window.pJSDom && window.pJSDom[0]) {
        const colors = getParticleColors();
        const pJS = window.pJSDom[0].pJS;

        // Update particle colors
        pJS.particles.array.forEach(particle => {
          particle.color.value = colors.particleColor;
        });

        // Update line colors
        pJS.particles.line_linked.color = colors.lineColor;

        // Refresh the canvas
        pJS.fn.canvasPaint();
      }
    };

    // Listen for theme changes
    const observer = new MutationObserver(updateParticlesForTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Cleanup function
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style jsx>{`
        #particles-js {
          position: fixed;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          z-index: 1;
          pointer-events: none;
          background: transparent;
        }
      `}</style>
      <div id="particles-js"></div>
    </>
  );
};

export default ParticlesBackground;
