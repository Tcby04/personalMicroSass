// Desktop OS Portfolio Application
class DesktopOS {
    constructor() {
        this.desktopIcons = document.getElementById('desktopIcons');
        this.windowsContainer = document.getElementById('windowsContainer');
        this.contextMenu = document.getElementById('contextMenu');
        this.currentTime = document.getElementById('currentTime');
        
        this.windows = new Map();
        this.selectedIcons = new Set();
        this.draggedElement = null;
        this.dragOffset = { x: 0, y: 0 };
        this.windowZIndex = 1000;
        
        this.projects = [
            {
                id: 'task-manager',
                name: 'TASK_MANAGER.exe',
                icon: 'fas fa-terminal',
                description: 'Advanced task management system with encrypted team collaboration, real-time synchronization, and AI-powered analytics. Built with zero-trust architecture.',
                features: [
                    {
                        title: 'Encrypted Collaboration',
                        description: 'End-to-end encrypted team workspaces with secure real-time synchronization and quantum-resistant protocols.'
                    },
                    {
                        title: 'AI Time Analytics',
                        description: 'Machine learning algorithms analyze productivity patterns and generate predictive insights for optimal task scheduling.'
                    },
                    {
                        title: 'Threat Intelligence',
                        description: 'Advanced security monitoring with automated threat detection and incident response capabilities.'
                    }
                ],
                links: [
                    { text: 'EXECUTE', url: '#', icon: 'fas fa-play' },
                    { text: 'SOURCE', url: '#', icon: 'fab fa-github' }
                ]
            },
            {
                id: 'expense-tracker',
                name: 'FINANCE_HACK.exe',
                icon: 'fas fa-coins',
                description: 'Cryptocurrency-aware expense tracking with blockchain integration, AI-powered fraud detection, and quantum-encrypted financial data storage.',
                features: [
                    {
                        title: 'Blockchain Integration',
                        description: 'Direct integration with major cryptocurrencies and DeFi protocols for comprehensive financial tracking.'
                    },
                    {
                        title: 'AI Fraud Detection',
                        description: 'Advanced machine learning models detect suspicious transactions and potential security breaches in real-time.'
                    },
                    {
                        title: 'Quantum Encryption',
                        description: 'Military-grade encryption protects financial data using quantum-resistant algorithms and zero-knowledge proofs.'
                    }
                ],
                links: [
                    { text: 'EXECUTE', url: '#', icon: 'fas fa-play' },
                    { text: 'SOURCE', url: '#', icon: 'fab fa-github' }
                ]
            },
            {
                id: 'habit-tracker',
                name: 'HABIT_SYSTEM.exe',
                icon: 'fas fa-brain',
                description: 'Neural network-powered habit formation system with biometric monitoring, gamified achievements, and social engineering resistance training.',
                features: [
                    {
                        title: 'Neural Pattern Analysis',
                        description: 'Advanced AI analyzes behavioral patterns and optimizes habit formation algorithms based on individual neuroplasticity data.'
                    },
                    {
                        title: 'Biometric Integration',
                        description: 'Real-time monitoring of physiological markers to track habit formation progress and predict success probability.'
                    },
                    {
                        title: 'Social Engineering Defense',
                        description: 'Built-in training modules to resist social manipulation and maintain habit consistency under pressure.'
                    }
                ],
                links: [
                    { text: 'EXECUTE', url: '#', icon: 'fas fa-play' },
                    { text: 'SOURCE', url: '#', icon: 'fab fa-github' }
                ]
            },
            {
                id: 'password-manager',
                name: 'VAULT_CRACKER.exe',
                icon: 'fas fa-lock',
                description: 'Military-grade password vault with quantum encryption, biometric authentication, and advanced threat detection. Designed for high-security environments.',
                features: [
                    {
                        title: 'Quantum Encryption',
                        description: 'Post-quantum cryptographic algorithms ensure password security against future quantum computing threats.'
                    },
                    {
                        title: 'Biometric Authentication',
                        description: 'Multi-factor authentication using fingerprint, retina, and voice pattern recognition with liveness detection.'
                    },
                    {
                        title: 'Threat Intelligence',
                        description: 'Real-time monitoring of dark web databases and automated password breach detection with instant alerts.'
                    }
                ],
                links: [
                    { text: 'EXECUTE', url: '#', icon: 'fas fa-play' },
                    { text: 'SOURCE', url: '#', icon: 'fab fa-github' }
                ]
            },
            {
                id: 'note-taker',
                name: 'NEURAL_NOTES.exe',
                icon: 'fas fa-microchip',
                description: 'Advanced neural network-powered knowledge management system with real-time voice processing, semantic search, and encrypted cloud synchronization.',
                features: [
                    {
                        title: 'Neural Voice Processing',
                        description: 'Real-time speech-to-text using transformer models with context awareness and multi-language support.'
                    },
                    {
                        title: 'Semantic Search Engine',
                        description: 'AI-powered search that understands context and meaning, not just keywords, with vector-based similarity matching.'
                    },
                    {
                        title: 'Encrypted Cloud Sync',
                        description: 'End-to-end encrypted synchronization across devices with zero-knowledge architecture and quantum-resistant protocols.'
                    }
                ],
                links: [
                    { text: 'EXECUTE', url: '#', icon: 'fas fa-play' },
                    { text: 'SOURCE', url: '#', icon: 'fab fa-github' }
                ]
            },
            {
                id: 'weather-app',
                name: 'WEATHER_HACK.exe',
                icon: 'fas fa-satellite',
                description: 'Advanced meteorological analysis system with satellite data integration, AI-powered weather prediction, and climate change monitoring.',
                features: [
                    {
                        title: 'Satellite Data Integration',
                        description: 'Real-time integration with multiple weather satellites and ground stations for comprehensive atmospheric analysis.'
                    },
                    {
                        title: 'AI Weather Prediction',
                        description: 'Machine learning models trained on decades of weather data provide highly accurate long-term forecasts and pattern recognition.'
                    },
                    {
                        title: 'Climate Intelligence',
                        description: 'Advanced climate change monitoring with predictive modeling and environmental impact assessment tools.'
                    }
                ],
                links: [
                    { text: 'EXECUTE', url: '#', icon: 'fas fa-play' },
                    { text: 'SOURCE', url: '#', icon: 'fab fa-github' }
                ]
            },
            {
                id: 'habit-streak-tracker',
                name: 'STREAK_HACK.exe',
                icon: 'fas fa-fire',
                description: 'Advanced habit formation system with neural network-powered streak tracking, gamified rewards, biometric integration, and social accountability protocols.',
                features: [
                    {
                        title: 'Neural Streak Analysis',
                        description: 'AI-powered streak prediction and optimization using behavioral pattern recognition and habit formation algorithms.'
                    },
                    {
                        title: 'Gamified Reward System',
                        description: 'Blockchain-based achievement tokens and NFT rewards for habit completion milestones with social verification.'
                    },
                    {
                        title: 'Social Accountability Network',
                        description: 'Encrypted peer-to-peer accountability system with anonymous progress sharing and group challenge protocols.'
                    },
                    {
                        title: 'Biometric Integration',
                        description: 'Real-time physiological monitoring to track habit impact on health metrics and optimize formation strategies.'
                    }
                ],
                links: [
                    { text: 'EXECUTE', url: '#', icon: 'fas fa-play' },
                    { text: 'SOURCE', url: '#', icon: 'fab fa-github' }
                ]
            }
        ];
        
        this.init();
    }
    
    init() {
        this.updateTime();
        this.createDesktopIcons();
        this.setupEventListeners();
        this.startTimeUpdater();
        this.addHackerEffects();
    }
    
    updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { 
            hour12: false, 
            hour: '2-digit', 
            minute: '2-digit',
            second: '2-digit'
        });
        this.currentTime.textContent = `[${timeString}]`;
    }
    
    startTimeUpdater() {
        setInterval(() => this.updateTime(), 1000);
    }
    
    createDesktopIcons() {
        this.projects.forEach((project, index) => {
            const icon = this.createDesktopIcon(project, index);
            this.desktopIcons.appendChild(icon);
        });
    }
    
    createDesktopIcon(project, index) {
        const icon = document.createElement('div');
        icon.className = 'desktop-icon';
        icon.draggable = true;
        icon.dataset.projectId = project.id;
        
        icon.innerHTML = `
            <div class="icon">
                <i class="${project.icon}"></i>
            </div>
            <div class="label">${project.name}</div>
        `;
        
        // Double-click to open
        icon.addEventListener('dblclick', (e) => {
            e.preventDefault();
            this.openProject(project);
        });
        
        // Single click to select
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            this.selectIcon(icon, e.ctrlKey || e.metaKey);
        });
        
        // Drag and drop
        icon.addEventListener('dragstart', (e) => this.handleDragStart(e, icon));
        icon.addEventListener('dragend', (e) => this.handleDragEnd(e));
        
        // Context menu
        icon.addEventListener('contextmenu', (e) => this.showContextMenu(e, icon));
        
        return icon;
    }
    
    selectIcon(icon, multiSelect = false) {
        if (!multiSelect) {
            this.clearSelection();
        }
        
        icon.classList.toggle('selected');
        if (icon.classList.contains('selected')) {
            this.selectedIcons.add(icon);
        } else {
            this.selectedIcons.delete(icon);
        }
    }
    
    clearSelection() {
        this.selectedIcons.forEach(icon => {
            icon.classList.remove('selected');
        });
        this.selectedIcons.clear();
    }
    
    openProject(project) {
        if (this.windows.has(project.id)) {
            this.bringWindowToFront(project.id);
            return;
        }
        
        const window = this.createProjectWindow(project);
        this.windows.set(project.id, window);
        this.windowsContainer.appendChild(window);
        this.bringWindowToFront(project.id);
    }
    
    createProjectWindow(project) {
        const window = document.createElement('div');
        window.className = 'window';
        window.dataset.projectId = project.id;
        window.style.zIndex = this.windowZIndex++;
        
        window.innerHTML = `
            <div class="window-header">
                <div class="window-title">${project.name}</div>
                <div class="window-controls">
                    <button class="window-control minimize" data-action="minimize">
                        <i class="fas fa-minus"></i>
                    </button>
                    <button class="window-control maximize" data-action="maximize">
                        <i class="fas fa-square"></i>
                    </button>
                    <button class="window-control close" data-action="close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <div class="window-content">
                <div class="project-header">
                    <h1 class="project-title">${project.name}</h1>
                    <p class="project-subtitle">Micro SaaS Application</p>
                    <p class="project-description">${project.description}</p>
                </div>
                
                <div class="project-features">
                    ${project.features.map(feature => `
                        <div class="feature-card">
                            <h3 class="feature-title">${feature.title}</h3>
                            <p class="feature-description">${feature.description}</p>
                        </div>
                    `).join('')}
                </div>
                
                <div class="project-links">
                    ${project.links.map(link => `
                        <a href="${link.url}" class="project-link ${link.text === 'GitHub' ? 'secondary' : ''}" target="_blank">
                            <i class="${link.icon}"></i>
                            ${link.text}
                        </a>
                    `).join('')}
                </div>
            </div>
        `;
        
        this.setupWindowEvents(window);
        return window;
    }
    
    setupWindowEvents(window) {
        const header = window.querySelector('.window-header');
        const controls = window.querySelectorAll('.window-control');
        
        // Make window draggable
        header.addEventListener('mousedown', (e) => this.startWindowDrag(e, window));
        
        // Window controls
        controls.forEach(control => {
            control.addEventListener('click', (e) => {
                e.stopPropagation();
                const action = control.dataset.action;
                this.handleWindowControl(action, window);
            });
        });
        
        // Bring to front on click
        window.addEventListener('mousedown', () => {
            this.bringWindowToFront(window.dataset.projectId);
        });
    }
    
    startWindowDrag(e, window) {
        if (e.target.closest('.window-control')) return;
        
        const startX = e.clientX;
        const startY = e.clientY;
        const startLeft = parseInt(window.style.left) || 100;
        const startTop = parseInt(window.style.top) || 100;
        
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            
            window.style.left = `${startLeft + deltaX}px`;
            window.style.top = `${startTop + deltaY}px`;
        };
        
        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
        
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }
    
    handleWindowControl(action, window) {
        switch (action) {
            case 'minimize':
                window.style.display = 'none';
                break;
            case 'maximize':
                window.classList.toggle('maximized');
                break;
            case 'close':
                this.closeWindow(window.dataset.projectId);
                break;
        }
    }
    
    bringWindowToFront(projectId) {
        const window = this.windows.get(projectId);
        if (window) {
            window.style.zIndex = this.windowZIndex++;
        }
    }
    
    closeWindow(projectId) {
        const window = this.windows.get(projectId);
        if (window) {
            window.remove();
            this.windows.delete(projectId);
        }
    }
    
    handleDragStart(e, icon) {
        this.draggedElement = icon;
        this.dragOffset.x = e.offsetX;
        this.dragOffset.y = e.offsetY;
        
        icon.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
    }
    
    handleDragEnd(e) {
        if (this.draggedElement) {
            this.draggedElement.classList.remove('dragging');
            this.draggedElement = null;
        }
    }
    
    showContextMenu(e, icon) {
        e.preventDefault();
        this.hideContextMenu();
        
        this.contextMenu.style.display = 'block';
        this.contextMenu.style.left = `${e.clientX}px`;
        this.contextMenu.style.top = `${e.clientY}px`;
        
        // Select the icon if not already selected
        if (!icon.classList.contains('selected')) {
            this.clearSelection();
            this.selectIcon(icon);
        }
    }
    
    hideContextMenu() {
        this.contextMenu.style.display = 'none';
    }
    
    setupEventListeners() {
        // Hide context menu on click outside
        document.addEventListener('click', () => this.hideContextMenu());
        
        // Desktop context menu
        this.desktopIcons.addEventListener('contextmenu', (e) => {
            if (e.target === this.desktopIcons) {
                e.preventDefault();
                this.showContextMenu(e, null);
            }
        });
        
        // Context menu actions
        this.contextMenu.addEventListener('click', (e) => {
            const action = e.target.closest('.context-item')?.dataset.action;
            if (action) {
                this.handleContextAction(action);
                this.hideContextMenu();
            }
        });
        
        // Prevent default drag behavior on desktop
        this.desktopIcons.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        });
        
        this.desktopIcons.addEventListener('drop', (e) => {
            e.preventDefault();
            if (this.draggedElement) {
                const rect = this.desktopIcons.getBoundingClientRect();
                const x = e.clientX - rect.left - this.dragOffset.x;
                const y = e.clientY - rect.top - this.dragOffset.y;
                
                this.draggedElement.style.position = 'absolute';
                this.draggedElement.style.left = `${x}px`;
                this.draggedElement.style.top = `${y}px`;
            }
        });
    }
    
    handleContextAction(action) {
        switch (action) {
            case 'new-folder':
                this.createNewProject();
                break;
            case 'refresh':
                this.refreshDesktop();
                break;
            case 'properties':
                this.showProperties();
                break;
        }
    }
    
    createNewProject() {
        // This would open a dialog to create a new project
        console.log('Create new project dialog would open here');
    }
    
    refreshDesktop() {
        // This would refresh the desktop icons
        console.log('Desktop refreshed');
    }
    
    showProperties() {
        // This would show properties dialog
        console.log('Properties dialog would open here');
    }
    
    addHackerEffects() {
        // Add glitch effect to desktop icons
        this.desktopIcons.addEventListener('mouseenter', (e) => {
            if (e.target.classList.contains('desktop-icon')) {
                this.addGlitchEffect(e.target);
            }
        });
        
        // Add matrix-style text effect
        this.addMatrixEffect();
        
        // Add terminal-style boot sequence
        this.addBootSequence();
    }
    
    addGlitchEffect(element) {
        element.style.animation = 'glitch 0.3s ease-in-out';
        setTimeout(() => {
            element.style.animation = '';
        }, 300);
    }
    
    addMatrixEffect() {
        const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const desktop = document.querySelector('.desktop');
        
        for (let i = 0; i < 50; i++) {
            const char = document.createElement('div');
            char.textContent = matrixChars[Math.floor(Math.random() * matrixChars.length)];
            char.style.position = 'absolute';
            char.style.color = '#00ff00';
            char.style.fontSize = '12px';
            char.style.fontFamily = 'Courier New, monospace';
            char.style.opacity = '0.1';
            char.style.left = Math.random() * 100 + '%';
            char.style.top = Math.random() * 100 + '%';
            char.style.animation = `matrix-fall ${Math.random() * 3 + 2}s linear infinite`;
            char.style.pointerEvents = 'none';
            desktop.appendChild(char);
        }
    }
    
    addBootSequence() {
        const bootMessages = [
            'INITIALIZING HACKER_OS v2.0...',
            'LOADING NEURAL NETWORKS...',
            'ESTABLISHING QUANTUM ENCRYPTION...',
            'CONNECTING TO DARK WEB...',
            'SCANNING FOR VULNERABILITIES...',
            'SYSTEM READY. WELCOME, HACKER.'
        ];
        
        let messageIndex = 0;
        const bootInterval = setInterval(() => {
            if (messageIndex < bootMessages.length) {
                console.log(`[BOOT] ${bootMessages[messageIndex]}`);
                messageIndex++;
            } else {
                clearInterval(bootInterval);
            }
        }, 500);
    }
}

// Initialize the desktop OS when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new DesktopOS();
});
