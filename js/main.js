// Active link navigation
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll(".navbar__menu a");
    const currentPage = window.location.pathname.split("/").pop();
    
    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // Burger menu toggle for mobile
    const burger = document.getElementById('burger');
    const menu = document.querySelector('.navbar__menu');
    
    if (burger && menu) {
        burger.addEventListener('click', function() {
            menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
            if (menu.style.display === 'flex') {
                menu.style.flexDirection = 'column';
                menu.style.position = 'absolute';
                menu.style.top = '70px';
                menu.style.left = '0';
                menu.style.right = '0';
                menu.style.background = 'rgba(0, 0, 0, 0.95)';
                menu.style.padding = '20px';
                menu.style.gap = '15px';
                menu.style.zIndex = '1000';
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!menu.contains(event.target) && !burger.contains(event.target)) {
                menu.style.display = 'none';
            }
        });

        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                menu.style.display = 'flex';
                menu.style.flexDirection = 'row';
                menu.style.position = 'static';
                menu.style.background = 'transparent';
                menu.style.padding = '0';
            } else {
                menu.style.display = 'none';
            }
        });
    }

    // Concert filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // News category filter functionality
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Settings navigation
    const settingsNavItems = document.querySelectorAll('.settings__nav-item');
    const settingsSections = document.querySelectorAll('.settings-section');
    
    settingsNavItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Update active nav item
            settingsNavItems.forEach(navItem => navItem.classList.remove('active'));
            this.classList.add('active');
            
            // Show target section
            settingsSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });
        });
    });

    // Form validation for auth pages
    const authForms = document.querySelectorAll('.auth__form form');
    authForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const inputs = this.querySelectorAll('input[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ff4757';
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (isValid) {
                // Simulate successful form submission
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = 'Processing...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    submitBtn.textContent = 'Success!';
                    submitBtn.style.background = 'linear-gradient(135deg, #00b894, #55efc4)';
                    
                    setTimeout(() => {
                        if (window.location.pathname.includes('signup')) {
                            window.location.href = 'home.html';
                        } else if (window.location.pathname.includes('index')) {
                            window.location.href = 'home.html';
                        }
                    }, 1000);
                }, 1500);
            }
        });
    });

    // Card hover effects
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Concert card ticket buttons
    const ticketButtons = document.querySelectorAll('.concert-card__btn');
    ticketButtons.forEach(button => {
        button.addEventListener('click', function() {
            const concertTitle = this.closest('.concert-card').querySelector('h3').textContent;
            alert(`Tickets for "${concertTitle}" added to cart!`);
            this.textContent = 'Added ✓';
            this.disabled = true;
            this.style.background = '#00b894';
            
            setTimeout(() => {
                this.textContent = 'Get Tickets';
                this.disabled = false;
                this.style.background = '';
            }, 2000);
        });
    });

    // Read more buttons for news
    const readMoreButtons = document.querySelectorAll('.btn.primary');
    readMoreButtons.forEach(button => {
        if (button.textContent.includes('Read')) {
            button.addEventListener('click', function() {
                const newsTitle = this.closest('.news-card')?.querySelector('h3')?.textContent 
                    || this.closest('.featured-news')?.querySelector('h3')?.textContent;
                alert(`Loading full article: "${newsTitle}"`);
            });
        }
    });

    // Settings switch toggles
    const switches = document.querySelectorAll('.switch input');
    switches.forEach(switchInput => {
        switchInput.addEventListener('change', function() {
            const setting = this.closest('.setting-item').querySelector('h4').textContent;
            const status = this.checked ? 'enabled' : 'disabled';
            console.log(`${setting}: ${status}`);
        });
    });

    // Subscription management
    const managePlanBtn = document.querySelector('.subscription-card .btn.primary');
    if (managePlanBtn) {
        managePlanBtn.addEventListener('click', function() {
            alert('Redirecting to subscription management...');
        });
    }

    // Profile picture change
    const changePicBtn = document.querySelector('.profile-picture .btn');
    if (changePicBtn) {
        changePicBtn.addEventListener('click', function() {
            alert('Upload new profile picture feature would open here.');
        });
    }

    // Danger zone buttons
    const deleteBtn = document.querySelector('.btn-danger');
    const downloadBtn = document.querySelector('.btn-outline');
    
    if (deleteBtn) {
        deleteBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
                alert('Account deletion requested. Check your email for confirmation.');
            }
        });
    }
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            alert('Your data download has started. You will receive an email when it\'s ready.');
        });
    }

    // Search functionality for news page
    const newsSearch = document.querySelector('.news-search input');
    if (newsSearch) {
        newsSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const searchTerm = this.value;
                if (searchTerm.trim()) {
                    alert(`Searching for: ${searchTerm}`);
                }
            }
        });
    }
});

// Redirect home function
function redirectHome(e) {
    e.preventDefault();
    window.location.href = "home.html";
}

// Initialize when window loads
window.addEventListener('load', function() {
    console.log('Music Platform loaded successfully!');
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});