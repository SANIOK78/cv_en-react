import React from 'react';
import Navigation from '../components/Navigation';
// import methode permetant de faire de copy au click
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {

    return (
        <div className='contact'>
            <Navigation />
           
            <div className="contactContent">
                <div className="header"></div>

                <div className="contactBox">
                    <h1>Contactez - moi </h1>
                    <ul>
                        <li>
                            <i className='fas fa-map-marker-alt'></i>
                            <span> Conflans-Sainte-Honorine</span>
                        </li>

                        <li>
                            <i className='fas fa-mobile-alt'></i>
                          {/* Copy de cet élément */}
                            <CopyToClipboard text="0677421905">
                                <span className="clickInput"
                                    onClick={() => alert("Numéro de téléphone copié !")}
                                > 06 77 42 19 05</span>
                            </CopyToClipboard>
                        </li>

                        <li>
                            <i className='far fa-envelope'></i>
                          {/* Copy de cet élément */}
                            <CopyToClipboard text="aghilev@yahoo.fr">
                                <span className="clickInput"
                                    onClick={() => alert("E-mail copié !")}
                                > aghilev@yahoo.fr</span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>

                <div className="socialNetwork">
                    <ul>
                        
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"> 
                            <h4>Linkedin</h4>                                          
                            <i className="fab fa-linkedin"></i>    
                        </a>
                    
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                            <h4>GitHub</h4>                                           
                            <i className="fab fa-github"></i>    
                        </a>
                    
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                            <h4>Twitter</h4>                                           
                            <i className="fab fa-twitter"></i>    
                        </a>
                
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"> 
                            <h4>CodePen</h4>                                          
                            <i className="fab fa-codepen"></i>    
                        </a>
                       
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Contact;