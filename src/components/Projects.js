import React, {useState, useEffect} from 'react';

//import projects data
import {projectsData} from '../data'
//import projects nav data
import {projectsNav} from '../data'

//import components
import Project from './Projects'

const Projects = () => {
    const [item, setItem] = useState({name: 'all'});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);
    return <div>project</div>;
}

export default Projects;