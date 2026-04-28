export const personalInfo = {
  name: "Tasfi Fairoz Nidhi",
  title: "Software Engineer L-1",
  company: "Vivasoft Limited",
  bio: "Software engineer experienced in building scalable and efficient web applications. Passionate about problem-solving and competitive programming. I enjoy taking on challenges, learning continuously, and working closely with cross-functional teams to deliver meaningful software solutions.",
  email: "fairoz1697@gmail.com",
  github: "https://github.com/fairoznidhi",
  linkedin: "https://linkedin.com/in/tasfifairoznidhi",
  codeforces: "https://codeforces.com/profile/_nidhi_",
  codechef: "https://www.codechef.com/users/fairoznidhi",
  atcoder: "https://atcoder.jp/users/fairoz_nidhi",
  location: "Dhaka, Bangladesh",
  education: {
    degree: "B.Sc.(Engg.) in Computer Science and Engineering",
    university: "Rajshahi University of Engineering and Technology",
    period: "January 2020 – June 2025",
    cgpa: "3.84",
  },
};

export const experiences = [
  {
    title: "Software Engineer L-1",
    company: "Vivasoft Limited",
    location: "Dhaka, Bangladesh",
    period: "July 2025 – Present",
    type: "Full-time",
    description:
      "Built and maintained web applications using Next.js, React, and TypeScript. Created reusable components to improve development efficiency. Collaborated with the team through Git and code reviews. Optimized UI components for better performance and responsiveness.",
    highlights: [
      "Built production-grade web apps with Next.js, React, TypeScript",
      "Created reusable component libraries to speed up development",
      "Optimized UI for performance and responsiveness",
      "Collaborated via Git and code reviews",
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "Vivasoft Limited",
    location: "Rajshahi, Bangladesh",
    period: "November 2024 - June 2025",
    type: "Internship (Part-time)",
    description:
      "Learned front-end development with React, Next.js, and Tailwind CSS. Built interactive pages with reusable components. Improved code quality by refactoring older components. Collaborated using Git and participated in code reviews.",
    highlights: [
      "Front-end dev with React, Next.js, Tailwind CSS",
      "Built interactive pages with reusable components",
      "Refactored legacy components for better code quality",
      "Participated in code reviews",
    ],
  },
];

export const projects = [
  {
    title: "Novara",
    status: "Live",
    description:
      "A platform for job seekers and employers to streamline the hiring process. Job seekers can view jobs matched to their profile, update resumes, and apply. Employers can create job postings, track applicants, and offer or reject candidates. Features AI-powered scheduled interviews for practice.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "RTK Query",
      "TanStack Router",
    ],
    github: null,
    live: null,
    featured: true,
  },
  {
    title: "VivaMeal",
    status: "Live",
    description:
      "A weekly meal management web app where users can view menus, update lunch and snack status, and add guests. Users can only update preferences within a specific time window and track penalties for unconsumed meals. Admins can view total meal counts and assign penalties.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "MongoDB",
    ],
    github: null,
    live: null,
    featured: true,
  },
  {
    title: "Weed Detection",
    status: "Research",
    description:
      "A deep learning model for weed vs. non-weed image classification using MobileNetV2 and ResNet50 with Squeeze-and-Excitation attention mechanisms in TensorFlow/Keras. Achieved 93.9% accuracy on the DeepWeeds dataset.",
    tags: [
      "Python",
      "TensorFlow",
      "Keras",
      "MobileNetV2",
      "ResNet50",
      "Deep Learning",
    ],
    github: "https://github.com/fairoznidhi",
    live: null,
    featured: true,
  },
  {
    title: "Teampico",
    status: "Live",
    description:
      "A technology-based website for IT firms to showcase services in a minimal and clean layout. Built many customized interactive features using JavaScript and jQuery. Implemented a contact form and service selection for potential customers.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
    github: "https://github.com/fairoznidhi",
    live: null,
    featured: false,
  },
  {
    title: "RUET Cafeteria Management",
    status: "Completed",
    description:
      "A web-based cafeteria management system with CRUD operations using PHP and MySQL. Enables users to add, update, and delete menu items, track stock levels, and manage orders efficiently.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/fairoznidhi",
    live: null,
    featured: false,
  },
];

export const skills = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Redux",
    "RTK Query",
    "HTML/CSS",
    "Bootstrap",
  ],
  Backend: ["Node.js", "Express.js", "PHP"],
  "Machine Learning": [
    "TensorFlow",
    "Keras",
    "pandas",
    "NumPy",
    "scikit-learn",
  ],
  Languages: ["C/C++", "Python", "Java", "JavaScript", "TypeScript", "PHP"],
  Database: ["MySQL", "MongoDB"],
  "Tools & Infra": ["Docker", "Git", "AWS"],
};

export const competitive = [
  {
    platform: "Codeforces",
    handle: "_nidhi_",
    rating: 1430,
    rank: "Specialist",
    solved: 485,
    url: personalInfo.codeforces,
    color: "#00b5a5",
  },
  {
    platform: "CodeChef",
    handle: "fairoznidhi",
    rating: 1359,
    rank: "1★",
    solved: 16,
    url: personalInfo.codechef,
    color: "#666666",
  },
  {
    platform: "AtCoder",
    handle: "fairoz_nidhi",
    rating: 126,
    rank: "11 Kyu",
    solved: 17,
    url: personalInfo.atcoder,
    color: "#7f7f7f",
  },
];

export const achievements = [
  { title: "MBSTU CSE IDPC 2023", result: "16th Position" },
  {
    title: "6th National Girls Programming Contest 2022",
    result: "28th Position",
  },
  {
    title: "RUET CodeSmash Freshers Programming Contest 2020",
    result: "10th Position",
  },
];

export const publications = [
  {
    title:
      "Triple Attention MobileNetV3: Harnessing Integrated Attention and Transfer Learning for Next-Generation Skin Lesion Detection",
    venue:
      "2024 IEEE International Conference on Computing, Applications and Systems (COMPAS)",
    type: "Conference Paper",
    date: "September 2024",
    authors:
      "Tasfi Fairoz Nidhi, Anwar Hossain Efat, S. M. Mahedy Hasan, Md. Shahid Uz Zaman, Abdun Nur Wasit",
    link: "https://ieeexplore.ieee.org/document/10796988",
    doi: "10.1109/COMPAS60761.2024.10796988",
    pdf: "/publications/Triple_Attention_MobileNetV3_Harnessing_Integrated_Attention_and_Transfer_Learning_for_Next-Generation_Skin_Lesion_Detection.pdf",

    abstract:
      "Detecting skin lesions, especially cancerous melanoma, early is vital for effective treatment. However, traditional detection methods are costly, time-consuming, and involve numerous tests, making early detection challenging. This study introduces a new approach called Triple Attention MobileNetV3 (TAMN), which utilizes a novel multi-stream attention-infused Convolutional Neural Network (CNN) architecture based on Transfer Learning principles. TAMN aims to improve skin lesion recognition, offering a potentially more efficient solution. Data augmentation and careful dataset splitting addressed class imbalance, preventing biased modeling. This TAMN architecture integrated an Attention Module comprising Channel Attention, Squeeze and Excitation Attention, and Soft Attention mechanisms to emphasize crucial features and regions relevant to accurate classification. Gradient Class Activation Map (Grad-CAM) visualization identified areas the model focused on, improving interpretability and explainability. The proposed model achieved 99.56% accuracy on the PAD-UFES-20 dataset, outperforming the direct use of any pre-trained models. The attention modules significantly boosted metrics like precision, recall, F1-score and specificity compared to baselines, showcasing their efficacy in enhancing skin lesion classification for early cancer detection. The approach demonstrates the potential of attention-based deep learning models for accurate and interpretable skin lesion analysis, paving the way for improved early screening and diagnosis.",
  },
];

export const leadership = [
  {
    role: "Secretary",
    org: "Onuronon, RUET Cultural Club",
    period: "May 2024 – Present",
    location: "Rajshahi, Bangladesh",
  },
  {
    role: "Joint Secretary",
    org: "Ovijatrik, RUET Adventure Club",
    period: "February 2024 – Present",
    location: "Rajshahi, Bangladesh",
  },
];
