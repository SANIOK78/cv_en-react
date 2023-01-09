import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {

    state = {
        languages: [
            {id: 1, value: "JavaScript", exp: 1.8 },
            {id: 2, value: "Css", exp: 2 },
            {id: 3, value: "Php", exp: 0.7 },
            {id: 4, value: "Python", exp: 0.4 },
        ],
        frameworks: [
            {id: 1, value: "React", exp: 1.4 },
            {id: 2, value: "Bootstrap", exp: 2 },
            {id: 3, value: "Sass", exp: 1.5 },
            {id: 4, value: "Material UI", exp: 0.5 },
        ]
    }

    render() {
        // destructuring
        let {languages, frameworks} = this.state;

        return (
            <div className='langagesFrameworks'>
              {/* Transmission des infos via chaque "ProgressBar" */}
                <ProgressBar className="languageDisplay"
                    langue={languages}
                    title="Languages"
                />

                <ProgressBar className="frameworksDisplay"
                    langue={frameworks}
                    title="Frameworks & Bibliothèques"
                />
                
            </div>
        );
    }
}

export default Languages;