<template>
    <section id="about" class="section">
      <div class="container">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer with skills in a variety of technologies.
          I enjoy getting lost in learning and applying my skills to the fullest extent I can!
        </p>
        
        <!-- Skills Marquee -->
        <div class="skills-marquee">
          <div class="skills-track">
            <span v-for="(skill, index) in skills" :key="index">{{ skill }}</span>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const skills = ref([
    "Python", "CSS", "Data Visualization", "JavaScript", "Microsoft Excel", 
    "Three.js", "HTML", "SQL", "Database Design", "Pandas", "Machine Learning", 
    "Scikit-learn", "Collaborative Filtering", "Plotly", "Firebase", "Data Wrangling", 
    "Data Mining", "RESTful APIs", "Tkinter", "OpenCV", "Content-Based Filtering", 
    "OOP", "Data Structures", "Digital Image Processing", "Big Data Analysis", 
    "Microsoft PowerPoint", "Research Techniques", "Statistics"
  ]);
  </script>
  
  <style scoped>
  .skills-marquee {
    overflow: hidden;
    white-space: nowrap;
    background: #000;
    padding: 15px 0;
    border-radius: 10px;
    border: 1px solid #444;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
    text-align: center;
  }
  
  .skills-track {
    display: inline-block;
    animation: marquee 40s linear infinite;
    padding-left: 100%;
  }
  
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }
  
  .skills-track span {
    display: inline-block;
    padding: 10px 30px;
    font-size: 1.5em;
    font-weight: bold;
    background: #111;
    color: #fff;
    border-radius: 5px;
    margin-right: 20px;
    border: 1px solid #d4af37;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
  }
  
  .skills-track span:hover {
    background: #d4af37;
    color: #000;
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
  }
  </style>
  