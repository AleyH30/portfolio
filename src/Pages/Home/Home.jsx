import React, {useEffect} from 'react';
import './Home.css';
import csharpicon from './0Components/SkillIcons/csharpicon.png';
import cssicon from './0Components/SkillIcons/cssicon.png'
import htmlicon from './0Components/SkillIcons/htmlicon.png'
import javascripticon from './0Components/SkillIcons/javascripticon.png'
import mongodbicon from './0Components/SkillIcons/mongodbicon.png'
import nodejsicon from './0Components/SkillIcons/nodejsicon.png'
import reacticon from './0Components/SkillIcons/reacticon.png'
import githubicon from './0Components/SkillIcons/githubicon.png'
import {Link} from 'react-router-dom'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div className='home-page'>
            <div className="intro-container">
                <div className="intro-contents">
                    <div className='intro-res-wrapper'>
                        <div className="intro-aboutme">
                            <p className='intro-aboutme-title'>About Me</p>
                            <p className='intro-aboutme-blurb'>
                                Hello, I'm Alexis. I am a full-stack developer 
                                who enjoys making cleanly coded, functional applications. I specialize in React, JavaScript, C#, CSS and HTML.
                                In my free time, I create mobile games, drink chocolate milkshakes, and watch
                                anything spooky-related. Enjoy my portfolio!
                            </p>
                            <Link to='/projects' className="intro-projects-btn"> <p>View my projects!</p></Link>
                        </div>
                        <div className="intro-name">
                            <p>Alexis<br/>Nicole<br/>Hall</p>
                        </div>
                    </div>
                    <div className='skills-icons-container'>
                        <div className='skills-img-container'><img src={reacticon} alt=''/></div>
                        <div className='skills-img-container'><img src={javascripticon} alt=''/></div>
                        <div className='skills-img-container'><img src={cssicon} alt=''/></div>
                        <div className='skills-img-container'><img src={htmlicon} alt=''/></div>
                        <div className='skills-img-container'><img src={csharpicon} alt=''/></div>
                        <div className='skills-img-container'><img src={nodejsicon} alt=''/></div>
                        <div className='skills-img-container'><img src={githubicon} alt=''/></div>
                        <div className='skills-img-container'><img src={mongodbicon} alt=''/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home