// Floating Particles Animation
document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.getElementById('floatingParticles');
    
    if (particlesContainer) {
        // Create floating particles
        function createParticles() {
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Random starting position
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                
                // Random animation delay
                particle.style.animationDelay = Math.random() * 15 + 's';
                
                // Random size variation
                const size = 2 + Math.random() * 4;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                
                particlesContainer.appendChild(particle);
            }
        }
        
        createParticles();
    }
    
    // NexBot image interaction
    const nexbotImage = document.getElementById('nexbotImage');
    if (nexbotImage) {
        nexbotImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            this.style.filter = 'drop-shadow(0 0 50px rgba(0, 255, 255, 0.6))';
        });
        
        nexbotImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.filter = 'drop-shadow(0 0 30px rgba(0, 255, 255, 0.3))';
        });
    }
});