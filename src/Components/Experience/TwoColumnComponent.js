import React, { useState, useContext } from 'react';
import {Grid} from '@mui/material';
import "./Experience.css";
import { FontColorContext } from '../../App';
const TwoColumnComponent = () => {
  const fontColor = useContext(FontColorContext);
  const experienceData = [
    { name: 'FPT Software Corp', 
      title: 'Software Engineer Intern', 
      duration: 'May 2023 - Present (3 months)', 
      description: 'Revamped Front API with batch REST endpoints, slashing inter-service server requests, and optimizing user queries, UI data flow, and database interactions. Automated API checks and testing across production/non-production using Postman. Enhanced Java Spring Boot cart updater for Starhub Online Store, enabling REST API support and Oracle SQL integration for upstream team.'},
    { name: 'Rakuna Inc', 
      title: 'Software Engineer Intern', 
      duration: 'May 2022 - Dec 2022 (6 months)', 
      description: 'Collaborated on CRM release with Designer and Tester with Agile workflow, Confluence, Jira, and Bitbucket. Restructured Interview Scheduling emails with Ruby and Javascript. Enhanced mailer MVC model for scalability via modular programming and RESTful APIs using SendGrid, Sidekiq, and Redis. Revamped Form Validation, optimized Prospect search with ReactJS, Yup, and ElasticSearch'},
    { name: 'University Technology', 
      title: 'Academic Mentor', 
      duration: 'Jan 2022 - Sep 2022 (8 months)', 
      description: 'Engaged in one-on-one Java OOP & Data Structures tutoring sessions, driving grade enhancements of 15% to 25% among students. Simultaneously, partnered with faculty to craft personalized coursework, leading to a 18% increase in the retention rate of at-risk students.'},
    { name: 'Self Learner', 
      title: 'Explorer', 
      duration: 'July 2002 - ∞',
      description: "Embark on a thrilling life journey, where learning never stops. Adapt and acquire fresh skills, while forging meaningful connections and sharing stories along the way. I'm glad you are here with me!"},
  ];
  const options = experienceData;
  const [selected, setSelect] = useState(options[0]);

  const handleSelect = (option) => {
    setSelect(option);
  };
  const itemStyle ={
    display: 'flex', justifyContent: 'left', alignItems: 'center',
    paddingTop: '24px',
    paddingBottom: '24px',
    paddingLeft: '32px',
    paddingRight: '32px',
    backgroundColor: fontColor === 'white' ? '#0D0B0D' : 'white'
  }
    return(
      <Grid container >
        <Grid item container direction="row" gap={5}>
          <Grid item direction="column" md={3} style={{borderRadius: '4px'}}>
            {options.map((option) => (
              <Grid item style={{borderLeft: option.name === selected.name ? '5px solid #e5202b' : '5px white',}} sx={itemStyle}>
                <div
                  key={option.name}
                  onClick={() => handleSelect(option)}
                  style={{
                    fontSize: '18px',
                    color: option.name === selected.name ? '#e5202b' : fontColor,
                    cursor: 'pointer',
                    fontFamily: 'GoogleSans-Medium'
                  }}
                >
                  {option.name}
                </div>
              </Grid>
            ))}
          </Grid>
          <Grid item md={8}>
            <Grid item container direction="column">
              <Grid item container style={{color: fontColor}}>
                  <Grid item md={6} style={{fontSize: '24px', fontFamily: 'GoogleSans-Medium'}}>
                    {selected && <div>{selected.title}</div>}
                  </Grid>
                  <Grid item md={6} style={{fontSize: '18px', fontFamily: 'GoogleSans-Medium', display: 'flex', alignSelf: 'center', justifyContent: 'flex-end'}}>
                    {selected && <div>{selected.duration}</div>}
                  </Grid>
              </Grid>
              <Grid item style={{margin: '32px 0px', color: '#e5202b', fontSize: '22px', fontFamily: 'GoogleSans-Medium'}}>
                {selected && <div>{selected.name}</div>}
              </Grid>
              <Grid item style={{lineHeight: '160%', textAlign: 'justify', fontSize: '20px', fontFamily: 'GoogleSans-Medium', color: fontColor}}>
                <div>
                  {selected && <div>{selected.description}</div>}
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
export default TwoColumnComponent;