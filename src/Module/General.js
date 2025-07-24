// Importing sponsors logos
import replit from "./Assets/sponsorsLogos/replit.png";
import dev from "./Assets/sponsorsLogos/dev-black.png";
import BU from "./Assets/sponsorsLogos/BU.png";
import hcb from "./Assets/sponsorsLogos/hackclubbank.png";
import interviewC from "./Assets/sponsorsLogos/interview-cake.jpg";
import echoAR from "./Assets/sponsorsLogos/echoAR.png";
import qoom from "./Assets/sponsorsLogos/qoom.svg";
import egg from "./Assets/sponsorsLogos/egg.png";
import DO from "./Assets/sponsorsLogos/DO.png";
import ll from "./Assets/sponsorsLogos/ll.png";
import devfolio from "./Assets/sponsorsLogos/Devfolio.png";
import polygon from "./Assets/sponsorsLogos/polygon.png";
import filecoin from "./Assets/sponsorsLogos/filecoin.png";
import tezos from "./Assets/sponsorsLogos/tezos.png";
import pass from "./Assets/sponsorsLogos/1pass.png";
import celo from "./Assets/sponsorsLogos/celo.png";

// Importing team members
import farhan from "./Assets/teami/farhan.jpg";
import sidra from "./Assets/teami/Sidra.png";
import usama from "./Assets/teami/usama.png";
import usman from "./Assets/teami/usman.png";
import asim from "./Assets/teami/asim.png";
import tauqeer from "./Assets/teami/tauqeer.png";
import sameer from "./Assets/teami/sameer.png";
import awais from "./Assets/teami/awais.png";
import hamid from "./Assets/teami/hamid.png";
import azeem from "./Assets/teami/azeem.jpeg";
import haris from "./Assets/sponsers/harisali.jpg";
import php from "./Assets/sessions/php.jpg";
import anton from "./Assets/judges/anton.jpg";
import timofey from "./Assets/judges/tim.jpg";
import hackmafest from "./Assets/teami/hackmafest.png";
import boy from "./Assets/boy.png";

// ==================== TOP SECTION ====================
const TOP_SECTION = {
  TITLE: "SMART MAKE-A-THON",
  Typed_effect: [
    "Hack For Community",
    "Hack For Diversity",
    "Hack For Inclusion",
    "Win Awesome Prizes",
    "Week long of Learning",
    "Week long of Creation"
  ],
  SHORT_DESCRIPTION:
    "SMART MAKE-A-THON is a 36-hour hackathon designed to inspire innovation, collaboration, and creativity. This hybrid event invites students, developers, designers, and entrepreneurs from all backgrounds to come together and solve real-world problems using technology. Over the course of the hackathon, participants will attend insightful sessions, network with mentors, and build solutions that can make a real impact. Whether you're a beginner exploring hackathons or an experienced coder, SMART MAKE-A-THON is your platform to learn, create, and grow.",
  IMG_SRC: boy,
  DISCORD_LINK: "https://discord.smartmakeathon.tech/",
  JUDGES_FORM_LINK: "http://speakerform.smartmakeathon.tech/",
  HACKERS_REGISTRATION_FORM_LINK: "http://hackerform.smartmakeathon.tech/"
};

// ==================== SOCIALS ====================
const SOCIALS = {
  instagram: "https://instagram.smartmakeathon.tech",
  discord: "https://discord.smartmakeathon.tech",
  linkedin: "https://linkedin.smartmakeathon.tech/",
  twitter: "https://twitter.smartmakeathon.tech/",
  devpost: "https://smartmakeathon.devfolio.co/",
  email: "mailto:hi@smartmakeathon.tech",
  mail: "hi@smartmakeathon.tech"
};

// ==================== MIDDLE SECTION ====================
const MIDDLE_SECTION = {
  TITLE: "What is SMART MAKE-A-THON?",
  LONG_DESCRIPTION:
    "SMART MAKE-A-THON is a weeklong festival to welcome beginner hackers to hacker communities and hackathons. This 7-day hybrid event (with limited in-person attendees) will be held on October 25th–31st. We invite hackers, artists, coders, designers, tech evangelists, creatives, and developers from all disciplines to take part, win awesome prizes, and collaborate with other developers. Participants will have unique opportunities to learn from each other and try hands-on with the latest technologies provided by the organizers. We are determined to have an inclusive and diverse group of students attending.",
  LOGO_EFFECT: true,
  LOGO: hackmafest
};

// ==================== FOOTER ====================
const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: "https://volunteerform.smartmakeathon.tech/"
  },
  JOIN_TEAM: {
    required: true,
    src: "http://speakerform.smartmakeathon.tech/"
  },
  Privacy_policy: {
    required: true,
    src: "https://privacypolicy.smartmakeathon.tech/"
  },
  Terms_of_use: {
    required: true,
    src: "https://tom.smartmakeathon.tech"
  },
  Code_of_conduct: {
    required: true,
    src: "https://conduct.smartmakeathon.tech"
  }
};

// ==================== PRIZE INFO ====================
const Prizeinfo = [
  [
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: "Prizes Details Coming Soon",
      content: "There will be some amazing prizes, stay tuned!"
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: "Best Ethereum Hack",
      content:
        "$150 for the best hack built on Ethereum, or $200 for the best hack built on Ethereum + Polygon"
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: "Best Tezos DApp",
      content:
        "$250 for best Dapp built on Tezos. Continuity Grant opportunity for exceptional builders."
    }
  ],
  [
    {
      icon: <i className="fab fourth fa-3x fa-wpbeginner"></i>,
      type: "Best Solo",
      content: "$250 for best Dapp built on Celo"
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: " Best Beginner",
      content:
        "Your project will qualify for this category if SMART MAKE-A-THON is your first hackathon."
    },
    {
      icon: <i className="fifth fa-3x fas fa-book-open"></i>,
      type: "Best UI/UX",
      content: "Project with the most creative design wins the UI/UX track."
    }
  ],
  [
    {
      icon: <i className="fas fa-4x sixth fa-male"></i>,
      type: "Best Web App with Qoom",
      content: "Must use Qoom in your project to win this category."
    },
    {
      icon: <i className="fas fa-user-friends seventh fa-3x"></i>,
      type: "Best use of Filecoin",
      content:
        "$250 for best use of IPFS and/or Filecoin. Microgrants up to $5000, open grants up to $50,000."
    }
  ]
];

// ==================== TEAM INFO ====================
const TeamInfo = [
  [
    {
      Name: "Farhan Ashraf",
      role: "Lead Organizer",
      github: "https://github.com/mriceflame",
      linkedin: "https://www.linkedin.com/in/s4a/",
      img: farhan
    },
    {
      Name: "Haris Ali",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: haris
    },
    {
      Name: "Sidra Wajid",
      role: "Head Promotions",
      github: "",
      linkedin: "https://www.linkedin.com/in/sidra-wajid-778172214/",
      img: sidra
    }
  ],
  [
    {
      Name: "Azeem Farooqi",
      role: "Content Writers Team Head",
      github: "",
      linkedin: "https://www.linkedin.com/in/azeem-farooqi-2ab588222",
      img: azeem
    },
    {
      Name: "Hamid Azeem",
      role: "Graphics & Media Team Head",
      github: "",
      linkedin: "",
      img: hamid
    },
    {
      Name: "Sameer Tahir",
      role: "Community Manager",
      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/",
      img: sameer
    }
  ]
];

// ==================== SESSION INFO ====================
const Session = [
  [
    {
      title: "Workshop Name and schedule coming soon",
      speaker: "Speaker Name",
      img: php,
      role: "Intro",
      date: "Date",
      time: "Time",
      feature1: "Feature 1",
      feature2: "Feature 2",
      feature3: "Feature 3"
    },
    {
      title: "Advanced Web Dev",
      speaker: "Haris Ali",
      img: php,
      role: "Software Engineer",
      date: "21/04/2021",
      time: "8:30 PM",
      feature1: "KickStart your programming",
      feature2: "Intro to Web",
      feature3: "Get to Know React"
    }
  ]
];

// ==================== SPEAKERS ====================
const SpeakersInfo = [
  [
    {
      Name: "Anton Yakutovich",
      role: "Software Engineer",
      github: "https://github.com/drakulavich",
      linkedin: "https://www.linkedin.com/in/s4a/",
      img: anton
    },
    {
      Name: "Timofey Krestyanov",
      role: "Senior App Developer/Team Lead",
      github: "https://github.com/tkrest",
      linkedin: "https://www.linkedin.com/in/timofeykrestyanov/",
      img: timofey
    }
  ]
];

// ==================== SPONSORS ====================
const sponsorLogos = [
  [{ src: devfolio }, { src: polygon }, { src: celo }],
  [{ src: tezos }, { src: filecoin }, { src: egg }],
  [{ src: qoom }, { src: hcb }, { src: echoAR }],
  [{ src: BU }, { src: pass }, { src: interviewC }],
  [{ src: ll }, { src: DO }, { src: dev }]
];

// ==================== FAQ ====================
const frequentlyAskedQuestions = [
  [
    [
      {
        label: "What is a hackathon?",
        content:
          "Hackathons are community events where you get to interact with students from around the world and form teams to build future tech."
      },
      {
        label: "I have no idea what coding is?",
        content:
          "That’s why you must attend our event! We will guide you through everything with awesome workshops, tech talks, and more."
      },
      {
        label: "Do I need to pay any money?",
        content:
          "Absolutely not! Our event is free and open for all. If anyone asks for money, please DM our moderators."
      },
      {
        label: "I don’t have a team to participate?",
        content:
          "You don’t need one! Prior to the event, you'll meet many hackers on Discord to form teams. You can also participate solo — we have a special best solo prize."
      }
    ],
    [
      {
        label: "How to participate?",
        content:
          "Fill out our registration form above and join Discord. We’ll guide you through everything there."
      },
      {
        label: "I have more doubts?",
        content:
          "Reach us directly at (hi@smartmakeathon.tech) — we’re happy to help!"
      },
      {
        label: "Can I volunteer?",
        content:
          "Yes! We are looking for volunteers. Fill out the form in the footer section to join."
      },
      {
        label: "What are the conduct guidelines?",
        content:
          "We follow the Hack Club Code of Conduct strictly. Our team will enforce this throughout the event. You can view it in the website footer."
      }
    ]
  ]
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Session,
  Prizeinfo,
  sponsorLogos,
  SpeakersInfo,
  TeamInfo,
  frequentlyAskedQuestions
};
