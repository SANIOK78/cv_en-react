import React, { Component } from 'react';
// import fichier "data" de projet
import { portfolioData } from '../../data/portfolioData';
import Project from './Project';

class ProjectList extends Component {
    state = {
        projects: portfolioData,
        radios: [
            { id: 1, value: "javascript" },  // State pour gérer
            { id: 2, value: "css" },         // l'affichage de cartes
            { id: 3, value: "react" },       // en fonction de langage
            { id: 4, value: "php" }         // utilisé pour le codé
        ],
        selectedRadio: "javascript"      // de départ sera sur "javascript"
    };

    // methode permettant l'evolution du "state"
    handleRadio = (event) => {
        const elementClique = event.target.value;      // récup de l'evenement

        this.setState({                     // mise a jour du State "selectedRadio"
            selectedRadio : elementClique
        })
    }

    render() {
        // destructuring
        const { projects, radios, selectedRadio } = this.state;

        return (
            <div className='portfolioContent'>
                <ul className="radioDisplay">
                    {
                        radios.map((radio) => {
                            return (
                                <li key={radio.id}>
                                    <input type="radio" name='radio' value={radio.value}
                                        checked={radio.value === selectedRadio}                                       
                                        id={radio.value}  //relier "input" avec "label"
                                        onChange={this.handleRadio}
                                    />
                                    <label htmlFor={radio.value} >{radio.value}</label>
                                </li>
                            )
                        })
                    }
                </ul>
                
                <div className="projects">    {/* LOGIQUE pour filtrer les élément */}
                    {
                        projects                         
                            .filter(element => element.languages.includes(selectedRadio))   
                            .map((item) => {  

                            return  <Project key={item.id} element={item} />                           
                        })
                    }
                </div>
            </div>
        );
    }
}
export default ProjectList;


