import blogApp from '../../assets/projects/blogApp.png';
import calculator from '../../assets/projects/calculator.png';
import css3 from '../../assets/projects/css3.png';
import ems from '../../assets/projects/ems.png';
import github from '../../assets/projects/github.png';
import meme from '../../assets/projects/meme.png';
import next from '../../assets/projects/next.png';
import storyfeed from '../../assets/projects/storyfeed.png';
import react from '../../assets/projects/react.png';
import js from "../../assets/projects/js.png"

const data_projects = [
    {
        name: 'Storyfeed Landing Page',
        image: storyfeed,
        deployed_url: 'https://storyfeed.xyz/',
        github_url: '',
        category: ["ReactJs"]
    },

    {
        name: 'Calculator',
        image: calculator,
        // deployed_url: '',
        github_url: 'https://github.com/nanaji0133/Calculator_DRF',
        category: ["HTML5", "CSS3", "Django REST framework"]
    },

    {
        name: 'Blog App',
        image: blogApp,
        // deployed_url: 'https://sumit-chat.netlify.app/',
        github_url: 'https://github.com/nanaji0133/Blog',
        category: ["Django", "HTML5", "CSS3"]
    },

    {
        name: 'Employement Managment Sysytem',
        image: ems,
        // deployed_url: 'http://sumaxtweetme.pythonanywhere.com/',
        github_url: 'https://github.com/nanaji0133/Employement-Managment-System',
        category: ["Django REST framework"]
    },

    {
        name: 'GitHub lesson(Useful GitHub Commands)',
        image: github,
        // deployed_url: '!#',
        github_url: "https://github.com/nanaji0133/GIT-COMMANDS",
        category: ['GitHub']
    },

    {
        name: 'Meme Generator',
        image: meme,
        // deployed_url: 'http://suprateem.herokuapp.com/',
        github_url: "https://github.com/nanaji0133/MemeGenerator---React-Js",
        category: ['ReactJs']
    },

    {
        name: 'NextJs Course',
        image: next,
        deployed_url: 'https://github.com/nanaji0133/next.js-course',
        category: ['NextJs']
    },

    {
        name: 'CSS3 Course',
        image: css3,
        // deployed_url: '!#',
        github_url: 'https://github.com/nanaji0133/CSS-course',
        category: ['CSS3']
    },

    {
        name: 'React.js Course',
        image: react,
        // deployed_url: 'https://dey-sumit.github.io/Blinking_Bubbles/',
        github_url: 'https://github.com/nanaji0133/ReactJS-Course',
        category: ['ReactJs']
    },
    {
        name: 'JavaScript Course',
        image: js,
        // deployed_url: 'https://dey-sumit.github.io/Blinking_Bubbles/',
        github_url: 'https://github.com/nanaji0133/javascript',
        category: ['JavaScript']
    }
];

export default data_projects;