import React from 'react'
import './styles/Widgets.css'

import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


function Widgets() {
  const newArticle = (heading, subtitle) => (
    <div className="widgets__news">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h3>Linked News</h3>
        <InfoIcon />
      </div>
      <div>
        {newArticle("Angular JS", "Javascript Framework update")}
        {newArticle("DevOps Engineering", "Deploying Modern Apps on AWS")}
        {newArticle("Elastic Kubernettes Services", "Deploying Apps on container services")}
        {newArticle("AWS Senior Software Engineer", "Vacancy open for AWS Software Engineer")}
        {newArticle("Microsoft Azure", "New microsoft update version 12")}
      </div>
    </div>
  );
}

export default Widgets;