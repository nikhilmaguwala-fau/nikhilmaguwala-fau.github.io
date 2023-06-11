import React, { useState } from 'react'
import Header from './Header'
import { projectList } from './data/projectList'
import Projects from './Full-Stack-Projects/Projects';
import EmptyList from './EmptyList';
import SearchBar from './SearchBar';
import './FullStack.css'


export default function FullStack(){

    const [projects, setProjects] = useState(projectList);
    const [searchKey, setSearchKey] = useState('');

    // Search submit
    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults();
    };

    // Search for blog by category
    const handleSearchResults = () => {
        const allProjects = projectList;
        const filteredProjects = allProjects.filter((project) =>
            project.category.toLowerCase().includes(searchKey.toLowerCase().trim())
        );
        setProjects(filteredProjects);
    };

    // Clear search and show all blogs
    const handleClearSearch = () => {
        setProjects(projectList);
        setSearchKey('');
    };

    return (
        <div className='container'>
            <Header />
            <SearchBar
                value={searchKey}
                clearSearch={handleClearSearch}
                formSubmit={handleSearchBar}
                handleSearchKey={(e) => setSearchKey(e.target.value)}
            />
            {!projects.length ? <EmptyList /> : <Projects projects={projects} />}
        </div>
    )
  }