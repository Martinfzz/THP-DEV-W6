import React from 'react';
import {
  Link,
  useParams,
  useLocation
} from 'react-router-dom';

const Works = () => {
  const clientName = ["Platon", "Solane", "Sedal"];
  const { worksSlug } = useParams();
  console.log(worksSlug)
  const { pathname } = useLocation();
  console.log(pathname)
  return (
    <div className="mt-5">
      { (<><h2>Projects</h2>
      <ul>
        {clientName.map(element => 
          <li>
          <Link to={{pathname: `/works/${element.toLowerCase()}-study-case`}}>{element}</Link>
        </li>
        )}
      </ul></>)}


    </div>
  )
}

export default Works;