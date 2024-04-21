const email = "abdulrafaykhatana@gmail.com";
const githubLink = "https://github.com/abd-ul-rafay";
const facebookLink = "https://facebook.com/abd-ul-rafay";
const instagramLink = "https://instagram.com/abd.ul.rafay";
const linkedinLink = "https://linkedin.com/abd-ul-rafay";
const twitterLink = "https://twitter.com/abd-ul-rafay";

const mainHeading2 = "I do projects for web and mobile.";
const mainDescription =
  "I'm a passionate software engineer dedicated to building innovative solutions for web and mobile platforms, with an intense interest in delving into the forefront of AI exploration.";

const aboutPara1 =
  'Hey there! I\'m <span class="primary-color">Abdul Rafay </span> from Pakistan 🇵🇰, a dedicated software engineer with over three years of hands-on experience in the field.';
const aboutPara2 =
  'Over the years, I\'ve honed my skills in <span class="primary-color">mobile app</span> development, crafting sleek and user-friendly experiences that bring ideas to life in the palm of your hand. As I delved deeper into the world of technology, I expanded my expertise to include <span class="primary-color">web applications</span>, leveraging the power of the web to create dynamic and responsive interfaces.';
const aboutPara3 =
  "Constantly seeking growth and new challenges, I'm currently diving into the realms of <span class=\"primary-color\"> artificial intelligence and machine learning</span>. The potential to harness data-driven insights and automate processes fascinates me, and I'm excited to explore how these cutting-edge technologies can revolutionize the way we interact with software.";

const skillsDescription =
  "As previously stated, my expertise lies in developing mobile and web applications. On a daily basis, I utilize a variety of technologies to both build and deploy my applications. These technologies are essential components of my workflow, ensuring that my projects are developed efficiently and deployed seamlessly. Some of the key technologies are below.";

const skills = [
  {
    name: "Programming Languages",
    subSkills: ["JavaScript", "Dart", "C++", "Python"],
  },
  {
    name: "Mobile Technologies",
    subSkills: ["Flutter", "Native Android", "React Native"],
  },
  {
    name: "Web Technologies",
    subSkills: ["HTML5/CSS3", "React.Js", "Express.Js", "Django"],
  },
  { name: "Databases", subSkills: ["MongoDB", "Firebase", "MySQL"] },
  {
    name: "Tools",
    subSkills: [
      "VSCode/AndroidStudio",
      "Git/Github",
      "Docker",
      "Postman",
    ],
  },
];

const projects = [
  {
    name: "Mobile Projects",
    projects: [
      {
        name: "TrackED",
        repoSource: "https://github.com/abd-ul-rafay/TrackED",
        tech: [
          "Flutter",
          "Firebase",
          "Qr_code_scanner",
          "File_picker",
          "Excel",
        ],
        description:
          "The mobile application facilitates the marking of student attendance via QR codes and enables the sending of SMS notifications to parents. Users are categorized into super admin, sub admin, teacher, or guard roles. Super admins can create multiple schools and corresponding user accounts. Sub admins have the authority to create users within their own school. Student attendance records are stored within users' lists (teachers, guards) and can be exported in Excel format. Teachers can manage multiple subjects, each with details such as gender distribution and duration. Additionally, they can create and manage multiple groups for sending group messages to designated phone numbers. The app provides daily and monthly reports in tabular and chart formats respectively. Users have the ability to create grades, sections, and manage student details, including generating QR codes for students.",
      },
      {
        name: "BuyRight",
        repoSource: "https://github.com/abd-ul-rafay/buy_right",
        tech: ["Flutter", "Node.jS", "Express.js", "MongoDB"],
        description: "BuyRight is a comprehensive Flutter-based ecommerce mobile application, offering users a seamless shopping experience with features including user authentication, product browsing with detailed descriptions and images, shopping cart functionality, order placement and tracking, and a user-friendly interface for payments via various gateways. The app also provides administrators with robust management tools, allowing them to add products, track orders, manage users, and gain valuable insights into business performance through analytics tools. Powered by Flutter for the frontend, Node.js/Express.js for the backend, and MongoDB for the database, BuyRight ensures efficiency and reliability in every aspect of online shopping and administration.",
      },
      {
        name: "Traveling App",
        repoSource: "https://github.com/abd-ul-rafay/Travel-App-UI",
        tech: ["Flutter", "Firebase"],
        description:
          "The Flutter Travel App showcases a stunning user interface, comprising four main screens. The Home screen features a horizontal listview displaying recommended places, alongside a vertical listview presenting all available destinations. The Search screen enables users to explore all listed places conveniently. Additionally, the Favourites screen allows users to bookmark their preferred locations for easy access. Furthermore, a bottom modal sheet dynamically displays detailed information about selected places upon clicking, enhancing the user experience and facilitating seamless navigation throughout the app.",
      },
      {
        name: "Instagram Clone",
        repoSource: "https://github.com/abd-ul-rafay/Instagrarm-Clone",
        tech: ["Flutter"],
        description:
          "This Instagram clone, developed for practice purposes, showcases the integration of network images for demonstration. It offers both light and dark themes to users, allowing them to personalize their experience seamlessly.",
      },
      {
        name: "Music Player",
        repoSource: "https://github.com/abd-ul-rafay/Music-Player-App",
        tech: ["Android Native", "Java"],
        description:
          "A cutting-edge music player app, designed to elevate your listening experience to new heights. Seamlessly fetching all your favorite tracks, whether they're in .mp3 or .wav format, the app presents them in a sleek Recycler View interface for effortless navigation. With just a tap, immerse yourself in a world of melody as you're transported to a dedicated music player activity, complete with a dynamic loading indicator ensuring smooth playback. With intuitive controls at your fingertips—prev, pause, and next buttons—you're in full command of your musical journey, making every moment a symphony of delight.",
      },
      {
        name: "Notes App",
        repoSource: "https://github.com/abd-ul-rafay/Notes-App",
        tech: ["Android Native", "Kotlin", "Room DB"],
        description:
          "Advanced Notes app, empowered by Room Database technology for seamless note management. Create, read, update, and delete notes effortlessly, ensuring your thoughts and ideas are always organized and easily accessible. Need to find a specific note? Our app offers a convenient search function, enabling swift retrieval of your most important memos. Plus, each note is stamped with the date it was added, providing valuable context and chronology to your entries. And when it's time for a fresh start, our app simplifies the process with a one-tap option to delete all notes, giving you a clean slate to begin anew. Experience the ultimate in note-taking convenience with our feature-rich app.",
      }
    ],
  },
  {
    name: "Web Projects",
    projects: [
      {
        name: "SocialSphere",
        repoSource: "https://github.com/abd-ul-rafay/SocialSphere",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
        description:
          "Social Sphere is a all-in-one destination for connecting, sharing, and engaging with a vibrant online community. Seamlessly register and login to unlock a world of possibilities where you can effortlessly create posts, share your thoughts, and contribute to lively discussions. Dive into a dynamic feed where you can explore a diverse range of content curated just for you, and express your appreciation with likes and meaningful comments. Expand your social circle by making new friends, fostering connections that enrich your online experience. Discover more about your peers by exploring their profiles, gaining insights into their interests and passions. Join us on Social Sphere and immerse yourself in a thriving digital landscape where connections are made, stories are shared, and friendships flourish.",
      },
      {
        name: "ChatConnect",
        repoSource: "https://github.com/abd-ul-rafay/ChatConnect",
        tech: ["React.js", "Node.js", "Socket.IO", "MongoDB"],
        description:
          "ChatConnect is the ultimate real-time chat app powered by the cutting-edge MERN Stack and turbocharged with Socket.io technology. Dive into seamless communication where users can easily register and login, gaining instant access to a world of dynamic conversation. With ChatConnect, sending and receiving real-time messages has never been smoother, ensuring that your interactions are as fluid as face-to-face conversations. Explore your message history effortlessly, with a comprehensive archive of all your exchanges with other users, empowering you to pick up right where you left off. Join the ChatConnect community today and experience the future of instant communication, where every connection is just a click away.",
      },
      {
        name: "Portfolio",
        repoSource: "https://github.com/abd-ul-rafay/portfolio",
        tech: ["React.js", "Tailwind"],
        description:
          "My portfolio website, crafted with React for seamless functionality and adorned with Tailwind CSS for a sleek and responsive design. Explore a showcase of my projects, skills, and experiences, beautifully presented across all devices, ensuring an optimal viewing experience whether you're on a desktop, tablet, or smartphone. From captivating animations to intuitive navigation, every element is thoughtfully designed to captivate and engage visitors. Step into my world and discover the passion and expertise that drive my journey. ",
      },
      {
        name: "Twitter Clone",
        repoSource: "https://github.com/abd-ul-rafay/TwitterClone",
        tech: ["Python", "Django"],
        description:
          "Twitter-inspired platform built on Django, where users can immerse themselves in a world of social connection and expression. With seamless account creation, users can effortlessly join the community and start sharing their thoughts with the world. Tweet freely, knowing that you have full control with the ability to delete your posts at any time. Dive into the dynamic feed to discover a diverse array of content from users you follow, ensuring an engaging and personalized experience. Explore the profiles of other users to gain insights into their interests and perspectives, and with the simple click of a button, forge connections by following them. What's more, our platform encourages reciprocal relationships, allowing users to follow each other back, fostering a community where connections flourish.",
      },
      {
        name: "Meals App",
        repoSource: "https://github.com/abd-ul-rafay/meals-app",
        tech: ["React.js", "ContextAPI"],
        description:
          "React Meals App with culinary exploration meets convenience, all powered by the robust Context API. Delve into a world of gastronomic delights as we fetch an array of delectable meals from themealdb.com, showcasing them in a visually stunning interface designed to tantalize your taste buds. With our intuitive search feature, finding your next culinary masterpiece is a breeze—simply input your cravings, and let us do the rest. But the experience doesn't stop there—mark your favorite meals with a simple click, and watch as they're seamlessly persisted locally, ensuring they're always at your fingertips for future indulgence. Whether you're a seasoned chef or a culinary novice, React Meals App is your passport to a world of flavor and discovery.",
      },
    ],
  },
  {
    name: "Others",
    projects: [
      {
        name: "Shopping Management System",
        repoSource: "https://github.com/abd-ul-rafay/Shopping-Management",
        tech: ["C++"],
        description:
          "The Shopping Management System, implemented in C++, serves as a comprehensive platform facilitating product management and customer transactions. Administrators can seamlessly add, remove, update, and read product information, ensuring an organized inventory. Meanwhile, customers enjoy a user-friendly interface to browse and purchase items. Leveraging efficient file handling techniques, the system securely stores data, guaranteeing reliability and persistence across sessions. With its robust functionality, the Shopping Management System streamlines the shopping experience for both administrators and customers, enhancing efficiency and convenience in retail operations.",
      },
      {
        name: "Library Management System",
        repoSource: "https://github.com/abd-ul-rafay/Library-Management",
        tech: ["SQL", "MySQL"],
        description:
          "The Library Management System, powered by SQL and MySQL, offers a comprehensive solution for efficiently organizing and managing library resources. Users can seamlessly add, update, and categorize books by various attributes such as author, publisher, and genre, ensuring easy accessibility and navigation. Additionally, the system enables the registration and management of library members, facilitating borrowing and returning processes. Leveraging the robust capabilities of SQL and MySQL, the system ensures efficient data management and retrieval, guaranteeing the integrity and security of library information.",
      },
      {
        name: "Space Invaders",
        repoSource: "https://github.com/abd-ul-rafay/Space-Invaders-Game",
        tech: ["Python", "PyGame"],
        description:
          "Space Invader is an exciting arcade game created in Python, throwing players into an intense space battle. With three thrilling difficulty levels - Easy, Medium, and Hard - you'll face waves of enemy ships invading the galaxy. Armed with bullets, your mission is to pilot your spacecraft and destroy these invaders with precision shooting. Each level offers its own mix of excitement and challenge, making it suitable for players of all skill levels. Get ready for an immersive experience where your reflexes, strategy, and determination will be put to the test as you fight to save the galaxy from destruction by the alien threat.",
      },
      {
        name: "Disease Tracking System",
        repoSource: "https://github.com/abd-ul-rafay/Disease-Tracking/",
        tech: ["C++", "STL"],
        description:
          "The Disease Management System, built with C++ and utilizing the Standard Template Library (STL), provides a robust platform for effectively managing diseases within a specific area. Users can seamlessly enter, view, and generate reports on various diseases and their respective patients. Leveraging the power of C++ and STL, the system ensures efficient data storage, retrieval, and manipulation, optimizing the management of disease-related information.",
      },
      {
        name: "Netflix Clone",
        repoSource: "https://github.com/abd-ul-rafay/Netflix-Clone/",
        tech: ["HTML", "CSS", "JavaScript"],
        description:
          "The Netflix Clone, crafted with HTML, CSS, and Javascript, delivers a captivating streaming experience reminiscent of the popular entertainment platform. Seamlessly blending design aesthetics with functionality, the clone features a visually appealing user interface, complete with vibrant thumbnails and intuitive navigation elements.",
      },
    ],
  },
];

const contactDescription =
  "Feel free to reach out to me for any inquiries, whether you're looking to discuss a project, have a question, or simply want to say hi! Your communication is valuable to me, and I strive to provide prompt and thoughtful responses to all messages received via email.";

export {
  email,
  githubLink,
  facebookLink,
  instagramLink,
  linkedinLink,
  twitterLink,
  mainHeading2,
  mainDescription,
  aboutPara1,
  aboutPara2,
  aboutPara3,
  skillsDescription,
  skills,
  projects,
  contactDescription,
};
