import digital from "./assets/Digital-Marketing-for-Dummies-book-cover.jpg";

export const genres = [
  {
    id: 1,
    name: "Business/Entrepreneurship",
  },
  {
    id: 2,
    name: "Psychology/Sales",
  },
  {
    id: 3,
    name: "Business/Marketing",
  },
  {
    id: 4,
    name: "Business/Technology",
  },
  {
    id: 5,
    name: "Marketing/Technology",
  },
];

export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  img: string;
  price: string;
  summary: string;
}

export const books = [
  {
    id: 1,
    title:
      "The $100 Startup",
    author: "Chris Guillebeau",
    genre: "Business/Entrepreneurship",
    img: "https://th.bing.com/th/id/OIP.sfU755OxpK54CY5N-R82yAAAAA?rs=1&pid=ImgDetMain",
    price: "$35.42",
    summary:
      "Learn how to apply continuous innovation principles to your IT projects at Counterflow Technologies Limited, ensuring your solutions are always aligned with evolving business needs.",
  },
  {
    id: 2,
    title: "Human Psychology",
    author: "Howard C. Warren",
    genre: "Psychology/Sales",
    img: "https://th.bing.com/th/id/R.cb1b2eb6e19ad151ee1455975b4cc188?rik=Y989agiiAX0G1A&pid=ImgRaw&r=0",
    price: "$92.50",
    summary:
      "Understand the psychology behind user adoption and persuasion techniques to enhance your IT sales strategies at Counterflow Technologies Limited, driving client engagement and satisfaction.",
  },
  {
    id: 3,
    title: "Making Things Happen",
    author: "Elizabeth Murphy",
    genre: "Business/Marketing",
    img: "https://th.bing.com/th/id/R.b52acc284cc465c52bb8e0103f384e02?rik=cgaNknigsm5EQQ&pid=ImgRaw&r=0",
    price: "$38.99",
    summary:
      "Discover how to design IT solutions that create lasting habits for users at Counterflow Technologies Limited, ensuring high retention rates and user satisfaction.",
  },
  {
    id: 4,
    title:
      "Google cloud for Devops Engineers",
    author: "Sandeep Madamanchi",
    genre: "Business/Technology",
    img: "https://static.packt-cdn.com/products/9781800562387/graphics/image/B15587_cover.png",
    price: "$55.25",
    summary:
      "Follow the journey of an IT manager at Counterflow Technologies Limited as he implements DevOps practices to transform the company's infrastructure, driving efficiency and success.",
  },
  {
    id: 5,
    title: "Digital Solutions Marketing for IT Services",
    author: "Riley Dennis, Ruby Henry",
    genre: "Marketing/Technology",
    img: digital,
    price: "$65.99",
    summary:
      "Master digital marketing strategies tailored for IT services at Counterflow Technologies Limited, including SEO, content marketing, and social media, to expand your client base and market presence.",
  },
];


export const blog = [
  {
      id: 1,
      href: "/blog/one",
      image: "https://3back.com/app/uploads/2017/07/Team-scaled.jpg",
      text: "Demystifying DevOps: Streamlining IT Operations for Efficiency",
      keywords: ["Devops", "IT", "Collaboration"]
  },
  {
      id: 2,
      href: "/blog/two",
      image: "https://static.vecteezy.com/system/resources/previews/006/946/284/original/a-logo-image-of-a-shield-with-a-lock-in-the-middle-of-it-symbolizing-protection-and-security-for-digital-or-technology-related-company-icon-free-vector.jpg",
      text: "Cybersecurity Best Practices: Protecting Your Business in a Digital Age",
      keywords: ["Threat Detection", "Cybersecurity ", "Compliance"]
  },
  {
      id: 3,
      href: "/blog/three",
      image: "https://th.bing.com/th/id/OIP.WOYd9Fcl0tOvAUYd9FSLWQHaFB?rs=1&pid=ImgDetMain",
      text: "The Future of Cloud Computing: Leveraging Cloud Solutions for Business Success",
      keywords: ["Cloud Computing", "Cloud Migration", "Flexibility"]
  },
]

export const Faqs = [
  {
    id: 1,
    question: "Does it cost money to get a consultation?",
    answer: "No, it does not cost money to get a consultation from us. Simply fill out our online form or give us a call, and one of our agents will be happy to provide you with all you need. We look forward to helping you."

  },
  {
    id: 2,
    question: "How does Counterflow Technologies Limited approach cybersecurity for its clients?",
    answer: "At Counterflow Technologies Limited, cybersecurity is a top priority. We take a proactive approach to cybersecurity, implementing a multi-layered security strategy to protect our clients' digital assets from cyber threats"

  },
  {
    id: 3,
    question: "How does Counterflow Technologies Limited help businesses leverage cloud solutions for success?",
    answer: "We offer a range of cloud services, including cloud migration, infrastructure optimization, and cloud-native application development, tailored to meet the unique needs of our clients."

  },
  {
    id: 4,
    question: "Can I Study Abroad?",
    answer: "Yes, you can. However, there are certain requirements and eligibility criteria stipulated by a number of universities and scholarship bodies before you can study abroad."

  },
  {
    id: 5,
    question: "Do I need travel Insurance?",
    answer: "Yes. We highly recommend travel protection, it’s important to protect your trip investment and loved ones. We will offer you the best option."

  },
  {
    id: 6,
    question: "Will you be available while I am on vacation?",
    answer: "Yes, we will be available to answer any questions or address any concerns that you may have. You can get in touch with us anytime. We are committed to providing the best possible service and helping our clients create memorable vacations that they will always remember."
  },
  {
    id: 7,
    question: "Do you have an office I can visit for consultation?",
    answer: "Yes, Our office is at: 21, Bekwere Wosu Street, D-Line, Port Harcourt, Rivers State, Nigeria."
  }
]

export const product = [
  {
    product: "Smartphone (Brand XYZ)",
    price: 499.99,
    description: "The latest smartphone model from Brand XYZ with advanced features and high-performance specifications."
  },
  {
    product: "Laptop (Brand ABC)",
    price: 899.99,
    description: "A powerful and sleek laptop from Brand ABC, perfect for work, entertainment, and productivity on the go."
  },
  {
    product: "Wireless Headphones (Model DEF)",
    price: 149.99,
    description: "High-quality wireless headphones with noise-cancellation technology and long battery life for immersive audio experiences."
  },
  {
    product: "Smartwatch (Brand GHI)",
    price: 249.99,
    description: "A stylish and feature-rich smartwatch from Brand GHI, offering health tracking, notifications, and customizable watch faces."
  },
  {
    product: "Digital Camera (Model JKL)",
    price: 799.99,
    description: "Professional-grade digital camera with advanced imaging capabilities, perfect for capturing stunning photos and videos."
  },
  {
    product: "Gaming Console (Model MNO)",
    price: 399.99,
    description: "The latest gaming console with cutting-edge graphics and immersive gameplay experiences for gamers of all ages."
  },
  {
    product: "Fitness Tracker (Brand PQR)",
    price: 129.99,
    description: "A sleek and lightweight fitness tracker from Brand PQR, offering activity tracking, heart rate monitoring, and sleep analysis."
  },
  {
    product: "Tablet (Brand STU)",
    price: 329.99,
    description: "A versatile tablet from Brand STU, ideal for multimedia consumption, productivity tasks, and entertainment on the go."
  },
  {
    product: "Bluetooth Speaker (Model VWX)",
    price: 79.99,
    description: "Portable Bluetooth speaker with high-fidelity sound and waterproof design, perfect for"
  }]