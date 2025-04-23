
        // Mobile Menu Toggle
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.querySelector('.mobile-menu').classList.add('active');
        });

        document.querySelector('.mobile-menu-close').addEventListener('click', function() {
            document.querySelector('.mobile-menu').classList.remove('active');
        });

        // Simple carousel functionality
        const activities = document.querySelector('.activities');
        let isDown = false;
        let startX;
        let scrollLeft;

        activities.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - activities.offsetLeft;
            scrollLeft = activities.scrollLeft;
        });

        activities.addEventListener('mouseleave', () => {
            isDown = false;
        });

        activities.addEventListener('mouseup', () => {
            isDown = false;
        });

        activities.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - activities.offsetLeft;
            const walk = (x - startX) * 2;
            activities.scrollLeft = scrollLeft - walk;
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
