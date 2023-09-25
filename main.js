// Create the About component
const About = {
    template: `
      <section class="about" id="about">
        <div class="container">
          <h1>About Me</h1>
          <p> Hello, I'm Adorn Jose, an enthusiastic IT student studying in Melbourne. I'm currently in my first year pursuing a Bachelor's degree in Information Technology.
  
              During my leisure time, I like to watch movies and explore the fundamentals of coding. I'm constantly excited about acquiring fresh knowledge related to emerging technologies and software tools..</p>
        </div>
      </section>
    `,
  };
  
  // Create the Projects component
  const Projects = {
    template: `
      <section class="projects" id="projects">
        <div class="container">
          <h1>Projects</h1>
          <!-- Your Projects content here -->
          <div class="project">
            <h2>Project Task 1.1p</h2>
            <p>Description of Project 1.1p Created a website for donutshop.</p>
            <p><strong>Technologies used:</strong> The skill used in this HTML code and added CSS style in this website</p>
          </div>
          <div class="project">
            <h2>Project Task 1.2P</h2>
            <p>Description of Project 1.2P. I have made a website for Responsive webapps design .</p>
            <p><strong>Technologies used:</strong> The skill used in this HTML code and added CSS style and javascript also added in this website</p>
          </div>
        </div>
      </section>
    `,
  };
  
  // Create the Contact component
  const Contact = {
    template: `
      <section class="contact" id="contact">
        <div class="container">
          <h1>Contact Me</h1>
          <p>If you'd like to get in touch or discuss potential collaborations, please feel free to contact me. You can reach me in email at <a href="mailto:adornjm@gmail.com">adornjm@gmail.com</a>.</p>
        </div>
      </section>
    `,
  };
  
  // Set up Vue Router
  const routes = [
    { path: '/about', component: About },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact },
  ];
  
  const router = new VueRouter({
    routes,
  });
  
  // Create the Vue instance
  const app = new Vue({
    router,
  }).$mount('#app');
  