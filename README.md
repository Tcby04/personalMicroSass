# Desktop OS Portfolio

A modern, interactive personal website that mimics a desktop operating system interface to showcase micro SaaS products. Features drag-and-drop folders, double-click functionality, and a beautiful desktop environment.

## Features

- 🖥️ **Desktop OS Interface**: Complete desktop environment with taskbar, desktop icons, and window management
- 📁 **Drag & Drop**: Move project folders around the desktop by dragging them
- 🖱️ **Double-Click to Open**: Open project details in windows by double-clicking folders
- 🪟 **Window Management**: Minimize, maximize, and close windows with proper controls
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Beautiful gradient backgrounds, glassmorphism effects, and smooth animations
- ⚡ **Interactive**: Context menus, real-time clock, and smooth transitions

## Project Showcase

The portfolio includes 6 sample micro SaaS projects:

1. **Task Manager Pro** - Team collaboration and project management
2. **Expense Tracker** - AI-powered expense tracking with receipt scanning
3. **Habit Tracker** - Build better habits with streak tracking
4. **SecurePass** - Enterprise-grade password manager
5. **Smart Notes** - AI-powered note-taking with voice transcription
6. **Weather Pro** - Advanced weather application with detailed forecasts

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in the browser

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! The portfolio is ready to use

### File Structure

```
desktop-portfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Usage

### Desktop Interactions

- **Single Click**: Select project folders
- **Double Click**: Open project details in a new window
- **Drag & Drop**: Move folders around the desktop
- **Right Click**: Open context menu for additional options
- **Window Controls**: Use minimize, maximize, and close buttons on windows

### Mobile Interactions

- **Tap**: Select folders
- **Double Tap**: Open project details
- **Long Press**: Open context menu
- **Swipe**: Navigate through content

## Customization

### Adding New Projects

To add your own micro SaaS projects, edit the `projects` array in `script.js`:

```javascript
this.projects = [
    {
        id: 'your-project-id',
        name: 'Your Project Name',
        icon: 'fas fa-icon-name', // Font Awesome icon class
        description: 'Your project description...',
        features: [
            {
                title: 'Feature Title',
                description: 'Feature description...'
            }
        ],
        links: [
            { text: 'Live Demo', url: 'https://your-demo.com', icon: 'fas fa-external-link-alt' },
            { text: 'GitHub', url: 'https://github.com/your-repo', icon: 'fab fa-github' }
        ]
    }
];
```

### Styling

- Edit `styles.css` to customize colors, fonts, and layout
- The CSS uses CSS custom properties for easy theming
- All animations and transitions can be modified in the CSS file

### Functionality

- Add new features by extending the `DesktopOS` class in `script.js`
- Window management, drag & drop, and context menus are all customizable
- Add new desktop applications by creating new window types

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with flexbox, grid, and animations
- **Vanilla JavaScript**: No frameworks, pure JavaScript for maximum compatibility
- **Font Awesome**: Icons for projects and UI elements
- **CSS Grid & Flexbox**: Responsive layout system

## Performance

- Lightweight and fast loading
- No external dependencies except Font Awesome icons
- Optimized animations using CSS transforms
- Efficient event handling and memory management

## Contributing

Feel free to fork this project and submit pull requests for improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing the portfolio, please open an issue on GitHub.

---

**Happy coding!** 🚀

