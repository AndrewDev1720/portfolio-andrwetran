import React, { useState, useContext } from 'react';
import {Grid, Container} from '@mui/material';
import "./Experience.css";
import { FontColorContext } from '../../App';
const TwoColumnComponent = (props) => {
  const fontColor = useContext(FontColorContext);
  const reverseFontColor = fontColor === 'white' ? 'black' : 'white'
  const experienceData = [
    { name: 'FPT Software Corp', title: 'Software Engineer Intern', duration: 'May 2023 - Present (2 months)', description: 'Trabalhei como instrutor conteudista em frontend na Digital House, o trabalho consistia em criar conteúdos para as aulas de especialização frontend. Alguns temas dos conteúdos realizados foram: React, Redux, TypeScript, Testes, GraphQL, Next.js, MUI, React Hook Form e styled-components.'},
    { name: 'Rakuna Inc', title: 'Software Engineer Intern', duration: 'May 2022 - Dec 2022 (6 months)', description: 'expTrabalhei como Social Media e Designer na Zuplae que é um escola de programação, onde teve como foco as criações de conteúdos sobre programação para a comunidade dev através das redes sociais.erience'},
    { name: 'University Technology', title: 'Academic Mentor', duration: 'Jan 2022 - Sep 2022 (8 months)', description: 'Realizei o estágio na ContWeb, uma empresa de contabilidade. Onde pela primeira vez tive experiência com o React. Além do desenvolvimento frontend criei os designs da nova plataforma da empresa.'},
    { name: 'Self Learner', title: 'Explorer', description: 'Trabalhei como Social Media e Designer no Código Fonte TV, onde teve como foco as criações de conteúdos sobre programação para a comunidade dev através das redes sociais.'},
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