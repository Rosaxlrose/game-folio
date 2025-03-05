export class GameboyScreen extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.currentPage = 'welcome';
      
      this.pages = {
        welcome: {
          title: 'Rosaxlrose',
          content: `Press START to begin
  
  Controls:
  A/SELECT - Next page
  B - Back to home
  ↑/↓ - Scroll content`
        },
        about: {
          title: 'About Me',
          content: `Hi! I'm a passionate developer who loves creating beautiful and functional web applications.
  
  I specialize in frontend development with a focus on creating engaging user experiences.
  
  My goal is to build applications that are not only functional but also delightful to use.`
        },
        skills: {
          title: 'Skills',
          content: `Frontend:
  - HTML/CSS/JavaScript
  - React/Vue/Angular
  - Responsive Design
  - UI/UX Design
  
  Backend:
  - Node.js/Express
  - Python/Django
  - RESTful APIs
  - GraphQL
  
  Tools:
  - Git/GitHub
  - Docker
  - AWS/Firebase
  - Jest/Testing`
        },
        projects: {
          title: 'Projects',
          content: `Game Boy Portfolio
  A retro-styled portfolio website built with Web Components, featuring authentic Game Boy aesthetics and interactions.
  
  E-commerce Platform
  Full-stack application with product management, cart functionality, and secure payments.
  
  Social Media Dashboard
  Real-time analytics dashboard for social media metrics using React and Firebase.
  
  Weather App
  Mobile-first weather application with location-based forecasts and beautiful visualizations.`
        },
        contact: {
          title: 'Contact',
          content: `Let's connect!
  
  Email: your@email.com
  GitHub: github.com/username
  LinkedIn: /in/username
  Twitter: @username
  
  Feel free to reach out for collaboration or just to say hi!`
        },
        thankyou: {
          title: 'Thank You',
          content: `Thanks for visiting my portfolio!
  
  I hope you enjoyed this retro Game Boy experience.
  
  Have a great day! 😊`
        }
      };
    }
  
    static get styles() {
      return /* css */`
        :host {
          --width: 210px;
          --height: 180px;
        }
  
        .container {
          background: #9ca04c;
          width: var(--width);
          height: var(--height);
          box-shadow:
            5px 5px 10px #0008 inset,
            -2px -1px 10px #0005 inset,
            0 0 4px 3px #aaa4;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          overflow: hidden;
          padding: 10px;
          box-sizing: border-box;
        }
  
        .content {
          width: 100%;
          height: 100%;
          overflow-y: auto;
          scrollbar-width: none;
          font-family: 'RetroGaming', monospace;
          color: #1a2f1a;
          line-height: 1.4;
          text-shadow: 1px 1px #b5c99a;
        }
  
        .content::-webkit-scrollbar {
          display: none;
        }
  
        .title {
          font-size: 14px;
          margin-bottom: 10px;
          text-align: center;
          text-transform: uppercase;
        }
  
        .text {
          font-size: 12px;
          white-space: pre-wrap;
          padding: 0 5px;
        }
  
        .blink {
          animation: blink 1s step-end infinite;
        }
  
        @keyframes blink {
          50% { opacity: 0; }
        }
      `;
    }
  
    connectedCallback() {
      this.render();
      window.addEventListener('gameboyButtonPress', this.handleButtonPress.bind(this));
    }
  
    disconnectedCallback() {
      window.removeEventListener('gameboyButtonPress', this.handleButtonPress.bind(this));
    }
  
    handleButtonPress(event) {
      const button = event.detail.button;
      const content = this.shadowRoot.querySelector('.content');
      
      switch (button) {
        case 'START':
          if (this.currentPage === 'welcome') {
            this.currentPage = 'about';
            if (content) content.scrollTop = 0;
            this.render();
          }
          break;
        case 'SELECT':
        case 'A':
          if (this.currentPage !== 'welcome' && this.currentPage !== 'thankyou') {
            const pages = ['about', 'skills', 'projects', 'contact', 'thankyou'];
            const currentIndex = pages.indexOf(this.currentPage);
            const nextIndex = (currentIndex + 1) % pages.length;
            this.currentPage = pages[nextIndex];
            if (content) content.scrollTop = 0;
            this.render();
          }
          break;
        case 'UP':
          if (content && this.currentPage !== 'welcome') {
            content.scrollBy({ top: -20, behavior: 'smooth' });
          }
          break;
        case 'DOWN':
          if (content && this.currentPage !== 'welcome') {
            content.scrollBy({ top: 20, behavior: 'smooth' });
          }
          break;
        case 'B':
          if (this.currentPage !== 'welcome') {
            this.currentPage = 'welcome';
            if (content) content.scrollTop = 0;
            this.render();
          }
          break;
      }
    }
  
    render() {
      const page = this.pages[this.currentPage];
      const blinkClass = this.currentPage === 'welcome' ? 'blink' : '';
      
      this.shadowRoot.innerHTML = /* html */`
      <style>${GameboyScreen.styles}</style>
      <div class="container">
        <div class="content">
          <div class="title">${page.title}</div>
          <div class="text ${blinkClass}">${page.content}</div>
        </div>
      </div>`;
    }
  }
  
  customElements.define("gameboy-screen", GameboyScreen);
  