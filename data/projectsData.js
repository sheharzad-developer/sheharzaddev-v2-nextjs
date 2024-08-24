import { v4 as uuidv4 } from "uuid";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

export const projectsData = [
  {
    id: 1,
    title: "Dental Application",
    url: "project-management-ui",
    category: "Dental",
    img: "/images/dental.png",
    ProjectHeader: {
      title: "Dental Application",
      publishDate: "Jul 26, 2021",
      tags: "Dental",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Kabul Project Management UI",
        img: "/images/dental.png",
      },
      {
        id: uuidv4(),
        title: "Kabul Project Management UI",
        img: "/images/dental.png",
      },
      {
        id: uuidv4(),
        title: "Kabul Project Management UI",
        img: "/images/dental.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails: "Hello Superman",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vue.js",
            "TailwindCSS",
            "AdobeXD",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details: "Hello Superman",
        },
        {
          id: uuidv4(),
          details: "Hello Superman",
        },
        {
          id: uuidv4(),
          details: "Hello Superman",
        },
        {
          id: uuidv4(),
          details: "Hello Superman",
        },
      ],
      //SocialSharingHeading: 'Share This',
      // SocialSharing: [
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Twitter',
      // 		icon: <FiTwitter />,
      // 		url: 'https://twitter.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Instagram',
      // 		icon: <FiInstagram />,
      // 		url: 'https://instagram.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Facebook',
      // 		icon: <FiFacebook />,
      // 		url: 'https://facebook.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'LinkedIn',
      // 		icon: <FiLinkedin />,
      // 		url: 'https://linkedin.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Youtube',
      // 		icon: <FiYoutube />,
      // 		url: 'https://www.youtube.com/c/StomanStudio',
      // 	},
      // ],
    },
  },
  {
    id: 2,
    title: "Superman",
    url: "project-management-ui",
    category: "DC Comics",
    img: "/images/DC-Comics.jpg",
    ProjectHeader: {
      title: "Superman",
      publishDate: "Jul 26, 2021",
      tags: "DC-Comics",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Kabul Project Management UI",
        img: "/images/DC-Comics.jpg",
      },
      {
        id: uuidv4(),
        title: "Kabul Project Management UI",
        img: "/images/DC-Comics.jpg",
      },
      {
        id: uuidv4(),
        title: "Kabul Project Management UI",
        img: "/images/DC-Comics.jpg",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        // {
        // 	id: uuidv4(),
        // 	title: 'Website',
        // 	details: 'https://company.com',
        // },
        // {
        // 	id: uuidv4(),
        // 	title: 'Phone',
        // 	details: '555 8888 888',
        // },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails: "Hello Superman",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["HTML", "CSS", "JavaScript", "Vue.js", "TailwindCSS"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details: "Hello Superman",
        },
        {
          id: uuidv4(),
          details: "Hello Superman",
        },
        {
          id: uuidv4(),
          details: "Hello Superman",
        },
        {
          id: uuidv4(),
          details: "Hello Superman",
        },
      ],
      ////SocialSharingHeading: 'Share This',
      // SocialSharing: [
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Twitter',
      // 		icon: <FiTwitter />,
      // 		url: 'https://twitter.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Instagram',
      // 		icon: <FiInstagram />,
      // 		url: 'https://instagram.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Facebook',
      // 		icon: <FiFacebook />,
      // 		url: 'https://facebook.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'LinkedIn',
      // 		icon: <FiLinkedin />,
      // 		url: 'https://linkedin.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Youtube',
      // 		icon: <FiYoutube />,
      // 		url: 'https://www.youtube.com/c/StomanStudio',
      // 	},
      // ],
    },
  },
  {
    id: 2,
    title: "Spiderman",
    url: "project-management-ui",
    category: "DC Comics",
    img: "/images/spiderman.png",
    ProjectHeader: {
      title: "Spiderman",
      publishDate: "Jul 26, 2021",
      tags: "DC-Comics",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "DC Project Management",
        img: "/images/spiderman.png",
      },
      {
        id: uuidv4(),
        title: "DC Project Management",
        img: "/images/spiderman.png",
      },
      {
        id: uuidv4(),
        title: "DC Project Management",
        img: "/images/spiderman.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails: "Hello Spiderman",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["HTML", "CSS", "JavaScript", "Vue.js", "TailwindCSS"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details: "Hello Spiderman",
        },
        {
          id: uuidv4(),
          details: "Hello Spiderman",
        },
        {
          id: uuidv4(),
          details: "Hello Spiderman",
        },
        {
          id: uuidv4(),
          details: "Hello Spiderman",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Netsol Website",
    url: "project-management-ui",
    category: "Company",
    img: "/images/marketplace.png",
    ProjectHeader: {
      title: "Netsol Website",
      publishDate: "Aug 16, 2024",
      tags: "Company",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Netsol Website",
        img: "/images/productstranscend.png",
      },
      {
        id: uuidv4(),
        title: "Netsol Website",
        img: "/images/productstranscendone.png",
      },
      {
        id: uuidv4(),
        title: "Netsol Website",
        img: "/images/servicesdigitalsolutions.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://netsoltech.com",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails: "Netsol Website",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vue.js",
            "TailwindCSS",
            "NuxtJS",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "This is a website called Netsol Technologies. It is a software company that provides software solutions to its clients. Here is the link: https://netsoltech.com",
        },
      ],
    },
  },
];
