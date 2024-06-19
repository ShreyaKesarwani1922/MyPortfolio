document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Scroll reveal animations
    const sr = ScrollReveal({
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        reset: false
    });

    sr.reveal('.content-section h2', { origin: 'top', delay: 200 });
    sr.reveal('.about-content', { origin: 'bottom', delay: 400 });
    sr.reveal('.skills-list li', { interval: 200 });
    sr.reveal('.projects-grid .project-item', { interval: 200 });
    sr.reveal('.contact-section p', { interval: 200 });

    // Modal functionality
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    window.openModal = (projectId) => {
        let projectContent = '';

        switch (projectId) {
            case 'project1':
                projectContent = '<h2>Project One</h2><p>Detailed description of project one.</p>';
                break;
            case 'project2':
                projectContent = '<h2>Project Two</h2><p>Detailed description of project two.</p>';
                break;
            case 'project3':
                projectContent = '<h2>Project Three</h2><p>Detailed description of project three.</p>';
                break;
            default:
                projectContent = '<h2>Unknown Project</h2><p>No description available.</p>';
        }

        modalBody.innerHTML = projectContent;
        modal.style.display = 'block';
    }

    window.closeModal = () => {
        modal.style.display = 'none';
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
