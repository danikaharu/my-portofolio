document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const htmlElement = document.documentElement;
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const themeToggleDesktop = document.getElementById('theme-toggle-desktop');

    // Check system preference or localStorage
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }

    const toggleTheme = () => {
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            localStorage.theme = 'light';
        } else {
            htmlElement.classList.add('dark');
            localStorage.theme = 'dark';
        }
    };

    if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);
    if (themeToggleDesktop) themeToggleDesktop.addEventListener('click', toggleTheme);

    // Helper function for icons (since GitHub and LinkedIn were removed from Lucide core)
    const getIconHTML = (iconName, sizeClass = "w-4 h-4") => {
        if (iconName === 'github') {
            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${sizeClass}"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`;
        }
        if (iconName === 'linkedin') {
            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${sizeClass}"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`;
        }
        return `<i data-lucide="${iconName}" class="${sizeClass}"></i>`;
    };

    // 1. Render Hero Section
    const heroAvailability = document.getElementById('hero-availability');
    if (heroAvailability) heroAvailability.textContent = portfolioData.hero.availability;
    
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) heroTitle.innerHTML = portfolioData.hero.title;
    
    const heroDescription = document.getElementById('hero-description');
    if (heroDescription) heroDescription.innerHTML = portfolioData.hero.description;

    // 2. Render Metrics Section
    const metricsContainer = document.getElementById('metrics-container');
    if (metricsContainer) {
        metricsContainer.innerHTML = portfolioData.metrics.map(metric => `
            <div class="flex-1 p-8 lg:p-10">
                <div class="text-3xl font-bold text-gray-900 dark:text-white mb-2">${metric.value}</div>
                <div class="text-gray-500 dark:text-gray-400 text-sm">${metric.label}</div>
            </div>
        `).join('');
    }

    // 3. Render Projects Section
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        projectsContainer.innerHTML = portfolioData.projects.map(project => `
            <div class="border border-gray-200 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-900 p-8 lg:p-10 transition-colors duration-300">
                <div class="flex flex-wrap gap-2 mb-6">
                    ${project.tags.map(tag => `<span class="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-semibold px-3 py-1 rounded-md transition-colors">${tag}</span>`).join('')}
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">${project.title}</h3>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-8">
                    ${project.description}
                </p>
                <div class="flex gap-4">
                    ${project.links.map(link => {
                        const baseClasses = "inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors";
                        const linkClasses = link.type === 'case-study' 
                            ? `${baseClasses} bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500` 
                            : `${baseClasses} border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700`;
                        
                        // For case-study the icon is on the right, for github it's on the left.
                        const iconHtml = getIconHTML(link.icon, "w-4 h-4");
                        const innerHtml = link.type === 'case-study' 
                            ? `${link.text} ${iconHtml}` 
                            : `${iconHtml} ${link.text}`;
                            
                        return `<a href="${link.url}" class="${linkClasses}">${innerHtml}</a>`;
                    }).join('')}
                </div>
            </div>
        `).join('');
    }

    // 4. Render Skills Section
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
        skillsContainer.innerHTML = portfolioData.skills.map(skillGroup => `
            <div class="border border-gray-200 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-900 p-8 transition-colors duration-300">
                <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-widest uppercase mb-6">${skillGroup.category}</h3>
                <div class="flex flex-wrap gap-3">
                    ${skillGroup.items.map(item => `<span class="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-1.5 rounded-full text-sm transition-colors">${item}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }

    // 5. Render Certifications
    const certsContainer = document.getElementById('certifications-container');
    if (certsContainer) {
        certsContainer.innerHTML = portfolioData.certifications.map(cert => `
            <div class="flex items-center gap-3 text-gray-700 dark:text-gray-300 transition-colors">
                <i data-lucide="award" class="w-5 h-5 text-blue-500"></i> ${cert}
            </div>
        `).join('');
    }

    // 6. Render Contact / Footer Section
    const contactEmail = document.getElementById('contact-email');
    if (contactEmail) {
        contactEmail.href = `mailto:${portfolioData.contact.email}`;
        contactEmail.innerHTML = `<i data-lucide="mail" class="w-4 h-4"></i> ${portfolioData.contact.email}`;
    }

    const contactLinkedin = document.getElementById('contact-linkedin');
    if (contactLinkedin) {
        contactLinkedin.href = portfolioData.contact.linkedin;
        contactLinkedin.innerHTML = getIconHTML('linkedin', 'w-5 h-5');
    }

    const contactGithub = document.getElementById('contact-github');
    if (contactGithub) {
        contactGithub.href = portfolioData.contact.github;
        contactGithub.innerHTML = getIconHTML('github', 'w-5 h-5');
    }

    const footerText = document.getElementById('footer-text');
    if (footerText) {
        footerText.innerHTML = portfolioData.contact.footerText;
    }

    // Re-initialize Lucide icons since we just modified the DOM
    if (window.lucide) {
        window.lucide.createIcons();
    }
});
