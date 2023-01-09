import React from 'react';
import Navigation from '../components/Navigation';
import Experience from '../components/competences/Experience';
import Hobbies from '../components/competences/Hobbies';
import Languages from '../components/competences/Languages';
import OtherSkills from '../components/competences/OtherSkills';

const Competences = () => {

    return (

        <div className='competences'>
            <Navigation />

            <div className='knowledgesContent'>
                
                <Languages />
                <Experience />
                <OtherSkills />
                <Hobbies />
            </div>
            
        </div>
    );
};

export default Competences;