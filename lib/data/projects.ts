import { Project } from "../../types";

export const projects: Project[] = [
  {
    title: "SITOR (Emosi Detector)",
    description:
      "A web-based emotion detection platform designed to analyze and visualize group emotions in real time. Using facial expression recognition (via Face-API) and a robust Golang backend, SITOR helps users gain insight into collective emotional states—ideal for classrooms, meetings, or focus groups. Features include live emotion tracking, session analysis, and an intuitive interface powered by Next.js.",
    tech: ["Golang", "React", "Face-API", "MongoDB", "Fiber", "Next.js"],
    github: "https://github.com/Fadhail/sitor-frontend",
    demo: null,
  },
  {
    title: "Face Recognition Attendance System",
    description:
      "An attendance management system that uses face recognition for student verification. The system captures facial data via webcam and matches it in real time with registered student profiles. Built with PHP and JavaScript, it provides a lightweight and accessible interface for educational institutions seeking to streamline attendance processes.",
    tech: ["PHP", "Javascript", "Face-API", "MySQL"],
    github: "https://github.com/Fadhail/face-recognition-attendance-system",
    demo: null,
  },
  {
    title: "RFID Attendance System",
    description:
      "An offline-compatible RFID-based attendance system developed using Arduino (C++) for hardware integration and PHP for backend management. Students scan RFID cards, and the data is automatically logged and synced to a MySQL database. Suitable for offline environments such as classrooms or workshops needing a simple yet reliable attendance solution.",
    tech: ["PHP", "C++", "MySQL"],
    github: "https://github.com/Fadhail/Absenza",
    demo: null,
  },
  {
    title: "Arduino Drone",
    description:
      "A DIY quadcopter drone built using Arduino for flight control. The project involves integrating sensors like the MPU-6050 gyroscope and accelerometer for stability, along with electronic speed controllers (ESC) and brushless motors for propulsion. This drone serves as a platform for learning about UAV technology, flight dynamics, and embedded systems programming.",
    tech: ["Arduino UNO", "Gryo MPU-6050", "ESC 30A", "Brushless Motor 1400kv"],
    github: "#",
    demo: null,
  },
  {
    title: "GeoFlow",
    description:
      "A real-time location tracking application that monitors journeys from mobile devices and displays them on an interactive web-based map. Built with Leaflet for mapping capabilities, GeoFlow enables users to track travel routes, view movement history, and analyze trip patterns through an intuitive web interface.",
    tech: ["Next.js", "Golang", "Leaflet", "MongoDB"],
    github: "https://github.com/Fadhail/frontend-GeoFlow.git",
    demo: null,
  },
  {
    title: "AerialCast",
    description:
      "AerialCast is a full-stack IoT platform engineered for long-range UAV telemetry and mission management, leveraging ESP32-based LoRa communication for reliable data transmission in off-grid environments. The architecture bridges edge hardware to the cloud via MQTT and a robust Flask backend, utilizing PostgreSQL for optimized time-series data storage. Featuring an interactive dashboard built with Next.js, AerialCast delivers real-time visualization of critical flight metrics—such as GPS coordinates and battery status—creating a modern, scalable, and responsive Ground Control Station (GCS) solution for autonomous drone operations.",
    tech: ["ESP32", "LoRa", "MQTT", "Python", "Flask", "PostgreSQL", "Next.js"],  
    github: "https://github.com/Astheria23/AerialCast.git",
    demo: null,
  },
];

