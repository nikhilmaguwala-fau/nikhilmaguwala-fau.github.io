import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../Chip';
import './styles.css';

const ProjectItem = ({
  project: {
    description,
    title,
    linkTitle,
    templateLink,
    authorName,
    cover,
    category,
    id,
  },
}) => {
  return (
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={cover} alt='cover' />
      <Chip label={category} />
      <a target='_black' href={templateLink}>{linkTitle}</a>
      <Link className='blogItem-link' to={`/project/${id}`}>
        <h3>{id}. {title}</h3>
        <p className='blogItem-desc'>{description}</p>
        <footer>
          <div className='blogItem-author'>
            <div>
              <h6>Type: {authorName}</h6>
            </div>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default ProjectItem;
