<template>
    <section id="projects" class="section">
      <h2>My Projects</h2>
  
      <div v-if="projects.length === 0">No projects available.</div>
      <div class="cards-container">
        <div v-for="(project, index) in projects" :key="index" class="project-card">
          <div class="media">
            <img v-if="project.type === 'image'" :src="project.media" alt="Project Image">
            <video v-if="project.type === 'video'" :src="project.media" autoplay muted loop></video>
          </div>
          <div class="project-info">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <p>↳Technologies Used: {{ project.technologies }}</p>
            <div class="links">
              <a :href="project.link" target="_blank">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const projects = ref([
    {
      title: "What's Da Moov",
      description: "A web-based event discovery platform...",
      technologies: "SQL, Database Design, HTML, Python, Flask",
      media: "assets/Whats_Da_Moov.mp4",
      type: "video",
      link: "https://github.com/Lactoseandtolerance/What-s-Da-Moov"
    },
    {
      title: "Video Surveillance Technique Enhancement",
      description: "Developed advanced object detection techniques...",
      technologies: "Python, OpenCV, Machine Learning, Data Processing",
      media: "assets/Video_Surveillance_Output.mp4",
      type: "video",
      link: "https://github.com/Lactoseandtolerance/Video-Surveilance-Technique"
    }
  ]);
  
  const projectCount = computed(() => projects.value.length);
  </script>
  
  <style scoped>
  #projects {
  margin: 0;
  width: 100%;
  position: relative;
  padding: 60px 0;
  text-align: center;
}

.cards-container {
  position: relative;
  width: 80%;
  max-width: 850px;
  height: 1000px;
  margin: 0 auto;
}

.project-card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60%;
  height: 80%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background: #1b1b1b;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  color: #f0f0f0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.6s ease, opacity 0.6s ease;
  opacity: 0;
  z-index: 0;
}

.project-card .media {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
}

.project-card .media img,
.project-card .media video {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

.project-card .project-info {
  flex: 1 1 auto;
  padding: 20px;
  text-align: left;
}

.project-card .project-info h3 {
  margin-top: 0;
}

.project-card .project-info .links a {
  display: inline-block;
  margin-right: 10px;
  color: #d4af37;
  text-decoration: none;
  font-weight: bold;
}

.project-card .project-info .links a:hover {
  text-decoration: underline;
}

.project-card.active {
  opacity: 1;
  z-index: 2;
  transform: translate(-50%, -50%) scale(1);
}

.controls {
  margin-top: 30px;
}

.controls button {
  background: #d4af37;
  color: #000;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;
}

.controls button:hover {
  background: #a98c37;
}
  </style>