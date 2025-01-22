import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shameer Rahman",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer and Game Developer. I love building things, trying new things and helping people.",
  summary:
    "Passionate game developer with experience in Unity and Unreal Engine, skilled in 3D design with Blender, and proficient in full-stack web and mobile development using frameworks like Laravel, React, and Django. During my [freelance years](#projects), I picked up a broad range of skills, including Mobile development with Java, and Flutter, foundational LLM knowledge, and plugin creation. I've also worked on various [personal projects](#projects) implementing Three.js, LLMs, and game development to continuously learn and explore new technologies. Dedicated to blending creativity and technical expertise to deliver engaging digital experiences.",
  avatarUrl: "/me.jpg",
  skills: [
    "Unity",
    "Unreal Engine",
    "Blender",
    "Laravel",
    "Python",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
    "Langchain/Langgraph",
    "LLM",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/MrShameer/",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mrshameerali/",
        icon: Icons.linkedin,
        navbar: true,
      },
      InteractivePortfolio: {
        name: "Interactive Portfolio",
        url: "https://mrshameer.github.io/InteractivePortfolio/",
        icon: Icons.globe,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "/resume.pdf",
        icon: Icons.resume,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:mrshameer333@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      IMDB: {
        name: "IMDB",
        url: "https://www.imdb.com/name/nm16694329/",
        icon: Icons.imdb,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "PlayStation Studios",
      href: "https://www.playstation.com/en-my/corporate/playstation-studios/",
      badges: ["Current"],
      location: "Malaysia",
      title: "Associate Technical Artist",
      logoUrl: "/pssmy_logo.png",
      start: "Sept 2022",
      end: "Present",
      description:
        "Contributed to high-profile projects like Spider-Man 2 and MLB, working as a technical artist. Skilled in developing and maintaining art pipelines, tools, and workflows to streamline asset creation, reduce iteration time, and boost team efficiency. Developed automation solutions, custom plugins, and scripting to optimize workflows. Set up and configured infrastructure, including machine setups and vendor systems, ensuring optimized performance and seamless workflows. Collaborated with artists and developers to troubleshoot complex issues, debug tools, and optimize system reliability. Experienced in web and desktop tool creation, including integration with frameworks like LangChain and LangGraph for chatbot and LLM applications. Have hands-on knowledge in creating conversational AI solutions and leveraging ComfyUI for efficient project management. Continuously expanding my expertise in advanced automation and large language models to drive technical innovation.",
    },
    {
      company: "Freelancer",
      badges: [],
      href: "",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "",
      start: "January 2021",
      end: "April 2021",
      description:
        "Worked on diverse projects in mobile and web development, creating applications, designing posters, and producing videos for organizations and startups. Developed multiplayer and single-player games, honing my programming and game development skills. Continuously expanded my technical expertise by learning new stacks and frameworks, including REST APIs, Three.js, and various front-end and back-end technologies, to deliver innovative and effective digital solutions tailored to client needs.",
    },
    {
      company: "Food Service Worker",
      href: "https://nvidia.com/",
      badges: [],
      location: "KFC, Johor",
      title: "Cook",
      logoUrl: "/kfc.png",
      start: "May 2019",
      end: "Jun 2019",
      description:
        "Gained hands-on experience in a fast-paced kitchen environment, preparing and cooking menu items to KFC’s quality standards. Ensured food safety and cleanliness while managing multiple orders under pressure. Developed strong teamwork and time-management skills, consistently meeting customer demands efficiently. Contributed to maintaining high standards in food presentation and customer satisfaction.",
    },
    {
      company: "Mathematics Teacher",
      href: "",
      badges: [],
      location: "Mersing, Johor",
      title: "Teacher",
      logoUrl: "",
      start: "January 2018",
      end: "March 2018",
      description:
        "Taught Mathematics and Additional Mathematics, simplifying complex concepts to improve student understanding and performance. Created engaging lessons and provided personalized support, helping students build confidence and excel academically.",
    },
  ],
  education: [
    {
      school: "National University of Malaysia",
      href: "https://www.ukm.my/portalukm/ms/selamat-datang/",
      degree: "Bachelor of Software Engineering (Multimedia) with Honours, 3.90",
      logoUrl: "/ukm.png",
      start: "2019",
      end: "2023",
    },
    {
      school: "Johor Matriculation College",
      href: "https://www.kmj.matrik.edu.my/",
      degree: "Cumulative GPA: 4.00",
      logoUrl: "/kmj.svg",
      start: "2018",
      end: "2019",
    },
    {
      school: "Sri Mersing HighSchool",
      href: "#",
      degree: "Straight A's",
      logoUrl: "/highschool.png",
      start: "2016",
      end: "2021",
    },
  ],
  showcase: [
    {
      title: "Interactive Portfolio",
      href: "https://mrshameer.github.io/InteractivePortfolio/",
      dates: "",
      active: true,
      description:
        "An immersive 3D portfolio built with Spline, featuring an interactive background that engages users and showcases creativity and technical skill.",
      technologies: [
        "Spline",
        "HTML",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://mrshameer.github.io/InteractivePortfolio/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MrShameer/InteractivePortfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/portfolio.jpg",
      video:"",
    },
    {
      title: "ThreeJS Templates",
      href: "https://github.com/MrShameer/ThreeJS-WebGL-Template",
      dates: "",
      active: true,
      description:
        "Websites showcasing creative and customizable templates built with Three.js, designed to simplify the creation of stunning 3D web experiences for developers and designers.",
      technologies: [
        "ThreeJS",
        "HTML",
        "CSS",
      ],
      links: [
        {
          type: "Model Spawner",
          href: "https://mrshameer.github.io/ThreeJS-WebGL-Template/SpawningModels/Example/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Model Spawner",
          href: "https://mrshameer.github.io/ThreeJS-WebGL-Template/SpawningModels/Example/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MrShameer/ThreeJS-WebGL-Template",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "ThreeJSTemplate.mp4",
    },
    {
      title: "SPECK",
      href: "https://github.com/MrShameer/Speck",
      dates: "",
      active: true,
      description:
        "Speck is a Unity 3D simulation where users observe AI behaving like humans in closed spaces like malls or train stations. The focus is on visualizing how particles from one person spread in the environment, offering insights into disease transmission and identifying vulnerable areas that require sanitization. User can build their custion ares and test with it.",
      technologies: [
        "Unity",
        "Node System",
        "Laravel",
        "Rest API",
      ],
      links: [
        {
          type: "Unity Source",
          href: "https://github.com/MrShameer/Speck",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Web - API Source",
          href: "https://github.com/MrShameer/Speck-API",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/speck.mp4",
    },
    {
      title: "Alfread-AI",
      href: "https://github.com/MrShameer/Alfread-AI",
      dates: "",
      active: true,
      description:
        "A Node.js and Discord.js-powered bot with voice recognition, enabling seamless voice commands and interactive features for enhanced Discord server experiences.",
      technologies: [
        "Node.js",
        "DiscordJS",
        "Heroku",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/MrShameer/Alfread-AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/alfread.avif",
      video: "",
    },
    {
      title: "Flutter-Games",
      href: "https://github.com/lepak-xyz/Flutter-Games",
      dates: "",
      active: true,
      description:
        "A sleek and engaging mobile app built with Flutter, offering seamless gameplay and a smooth user experience across platforms.",
      technologies: [
        "Flutter",
        "Dart"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/lepak-xyz/Flutter-Games",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/flutter.jpg",
      video: "",
    },
    {
      title: "Vroom",
      href: "https://github.com/MrShameer/Vroom",
      dates: "",
      active: true,
      description:
        "This project is an mobile app for vehicle rental for vehicle i.e Cars, Motorcycler, Bike & Van.",
      technologies: [
        "Android",
        "Java",
        "Laravel",
        "API",
        "Digital Ocean (Droplets)",
      ],
      links: [
        {
          type: "APP",
          href: "https://github.com/MrShameer/Vroom",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Web - API",
          href: "https://github.com/MrShameer/vroom-api",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/vroom.png",
      video: "",
    },
    {
      title: "Wall Game",
      href: "https://github.com/MrShameer/Wall-UE4",
      dates: "",
      active: true,
      description:
        "A Fps Survival maze game made in Unreal Engine 4. This game included a random maze generator using Recursive Backtrack Algorithm by Michael Pattison",
      technologies: [
        "Unreal",
        "C++",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/MrShameer/Wall-UE4",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/unreal.png",
      video: "",
    },
    {
      title: "Unity Multiplyer",
      href: "https://github.com/MrShameer/Classroom",
      dates: "",
      active: true,
      description:
        "Few unity multiplyer project with a dedicated server",
      technologies: [
        "Unity",
        "Custom Multiplyer",
      ],
      links: [
        {
          type: "Classroom",
          href: "https://github.com/MrShameer/Classroom",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "The Wall",
          href: "https://github.com/MrShameer/TheWall",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/unity.png",
      video: "",
    },
    {
      title: "Selenium Automation",
      href: "https://github.com/MrShameer/SPPP-Selenium",
      dates: "",
      active: true,
      description:
        "A selenium automation program to answer surveys for UKM Student. This program uses python.",
      technologies: [
        "Selenium",
        "Python",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/MrShameer/SPPP-Selenium",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/selenium.avif",
      video: "",
    },
  ],
  projects: [
    {
      title: "Real-Time 3D Train Visualization",
      dates: "",
      location: "",
      description:
        "A 3D map that visualizes real-time train locations and routes, providing live updates on train movements and schedules for efficient travel planning and tracking. Containing a 3D map of the Klang Vally, showcasing hotspots and train routes.",
      image: "",
      links: [],
    },
    {
      title: "Legal AI Research Assistant",
      dates: "",
      location: "",
      description:
        "An LLM-powered tool for searching cases, laws and drafting legal documents, simplifying research and writing for legal professionals.",
      image: "",
      links: [],
    },
    {
      title: "Elevator Optimization Model",
      dates: "",
      location: "",
      description:
        "A data-driven project analyzing elevator usage patterns—time, passenger counts, and floor stops—to develop a predictive model that minimizes waiting times by optimizing elevator scheduling.",
      image: "",
      links: [],
    },
    {
      title: "Restaurant Food Prediction Model",
      dates: "",
      location: "",
      description:
        "A data analysis project that forecasts food demand by analyzing restaurant trends, helping optimize cooking schedules to reduce waste and meet customer needs efficiently.",
      icon: "public",
      image: "",
      links: [],
    },
    {
      title: "Seamless QR Code Generator",
      dates: "",
      location: "",
      description:
        "A website that creates QR codes seamlessly blended with 3D AI-generated art, combining functionality with stunning, unique designs.",
      image: "",
      links: [
      ],
    },
    {
      title: "Custom Attire Design Platform",
      dates: "",
      location: "",
      description:
        "A website that lets users design personalized clothing with interactive tools, offering unique, made-to-order attire tailored to individual styles and preferences.",
      image: "",
      links: [],
    },
  ],
} as const;
