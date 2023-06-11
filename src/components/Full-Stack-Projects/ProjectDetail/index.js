import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { projectList } from '../../data/projectList';
import Chip from '../../Chip';
import EmptyList from '../../EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    let project = projectList.find((project) => project.id === parseInt(id));
    if (project) {
      setProject(project);
    }
  }, []);

  return (
    <div className='container'>
      <Link className='blog-goBack' to='/full-stack'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {project ? (
        <div className='blog-wrap'>
          <header>
            <a className='blog-date' target='_black' href={project.templateLink}>{project.linkTitle}</a>
            <h1>{project.title}</h1>
            <div className='blog-subCategory'>
              {project.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          {project.cover !== '' && <img src={project.cover} alt='cover' />}
          {project.description !== '' && <p className='blog-desc'>{project.description}</p>}
          {project.additionalDesc.map((desc) => {
            return <p className='fundamental'>{desc}</p>
          })}
          {project.instructions.length > 0 && <br/>}
          {project.instructions.length > 0 && <h2>Instructions</h2>}
          <ol>
            {project.instructions.map((line) => {
              return <li><p className='fundamental' style={{marginTop: 5}}>{line}</p></li>
            })}
          </ol>
          {project.filesOrganized.length > 0 && <br/>}
          {project.filesOrganized.length > 0 && <h2>How are the Exercises Organized?</h2>}
          <ol>
            {project.filesOrganized.map((line) => {
              return <li><p className='fundamental' style={{marginTop: 5}}>{line}</p></li>
            })}
          </ol>
          <br/>
          {project.fundamentals.length > 0 && <h2>Fundamentals</h2>}
          <ol>
            {project.fundamentals.map((line) => {
              return <li><p className='fundamental' style={{marginTop: 5}}>{line}</p></li>
            })}
          </ol>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default ProjectDetail;
