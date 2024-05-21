import React, {useEffect} from 'react';
import './Projects.css';
import parkdiarySiteImg from "./0Components/Images/nat-park-site.png";
import flareSiteImg from "./0Components/Images/clothing-store-site.png";
import peaterySiteImg from "./0Components/Images/restaurant-site.png";
import blogSiteImg from "./0Components/Images/blog-site.png";

const Projects = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div className="projects-page">
            <h1>Projects</h1>
            <div className="projects-display-container">
                <div className="project-row project-row-a">
                    <div className='res-wrapper'>
                    <div className='project-desc'>
                            <p className='project-desc-header'>BlogLife</p>
                            <p className='project-desc-par'>
                            A social media website where users can blog about their lives or interests. 
                            This full-stack, fully responsive MERN website gives users the ability to create, edit, and delete their own post or view, like, & unlike the posts of other users. 
                            Users may also follow or unfollow other users. Other features include image file uploads, React-Quill rich text editor integration and a personalized home feed based
                            on who user is following. 
                            </p>
                            <div className='project-links'>
                                <a href='https://bloglife-rzg1.onrender.com' target='_blank' rel="noreferrer">
                                    <button className='project-link-btns'>Go to Website</button>
                                </a>
                                <a href='https://github.com/AleyH30/bloglife' target='_blank' rel="noreferrer">
                                    <button className='project-link-btns'>Go to Github</button>
                                </a>
                            </div>
                        </div>
                        <div className="project-image-container">
                            <div className='project-img-container'>
                                <a href='https://bloglife-rzg1.onrender.com' target='_blank' rel="noreferrer">
                                    <img src={blogSiteImg} alt='' /> 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-row project-row-b">
                    <div className='res-wrapper res-wrapper-b'>
                        <div className='project-desc'>
                            <p className='project-desc-header'>Park Diary</p>
                            <p className='project-desc-par'>
                                An information retrieval website that allows users to search and receive information about a national park using the National Park Service API. 
                                This front-end, fully responsive React website features a beautiful moving image gallery, organized data presentation, as well as Google Maps integration.
                            </p>
                            <div className='project-links'>
                                <a href='https://aleyh30.github.io/parkdiary' target='_blank' rel="noreferrer">
                                    <button className='project-link-btns'>Go to Website</button>
                                </a>
                                <a href='https://github.com/AleyH30/parkdiary' target='_blank' rel="noreferrer">
                                    <button className='project-link-btns'>Go to Github</button>
                                </a>
                            </div>
                        </div>
                        <div className="project-image-container project-image-container-b">
                            <div className='project-img-container'>
                                <a href='https://aleyh30.github.io/parkdiary' target='_blank' rel="noreferrer">
                                    <img src={parkdiarySiteImg} alt='' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-row project-row-a">
                    <div className='res-wrapper'>
                        <div className='project-desc'>
                            <p className='project-desc-header'>Flare</p>
                            <p className='project-desc-par'>An e-commerce website for clothing apparel. This front-end, fully responsive React website features a functional filter system
                                that allows user to sort by price, color, and size, full cart functionality including the ability to remove or increase quantity,
                                sliders to showcase products and a fully working single product display that allows users to smoothly
                                switch between product colors and images.
                            </p>
                            <div className='project-links'>
                                <a href='https://aleyh30.github.io/flare' target='_blank' rel="noreferrer">
                                    <button className='project-link-btns'>Go to Website</button>
                                </a>
                                <a href='https://github.com/AleyH30/flare' target='_blank' rel="noreferrer">
                                    <button className='project-link-btns'>Go to Github</button>
                                </a>
                            </div>
                        </div>
                        <div className="project-image-container">
                            <div className='project-img-container'>
                                <a href='https://aleyh30.github.io/flare' target='_blank' rel="noreferrer">
                                    <img src={flareSiteImg} alt='' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-row project-row-b">
                    <div className='res-wrapper res-wrapper-b'>
                        <div className='project-desc'>
                            <p className='project-desc-header'>Pinela's Eatery</p>
                            <p className='project-desc-par'>A business website for an elite restaurant that features an expandable restaurant menu, image gallery, and other details that enhance user experience.
                                This front-end, fully responsive React website also features a reservation section that integrates the MUI API date and time selection feature and a contact section 
                                that allows for customer inquiries to be set-up.
                            </p>
                            <div className='project-links'>
                                <a href='https://aleyh30.github.io/peatery' target='_blank' rel="noreferrer">
                                    <button className='project-link-btns'>Go to Website</button>
                                </a>
                                <a href='https://github.com/AleyH30/peatery' target='_blank' rel="noreferrer">
                                    <button className='project-link-btns'>Go to Github</button>
                                </a>
                            </div>
                        </div>
                        <div className="project-image-container project-image-container-b">
                            <div className='project-img-container'>
                                <a href='https://aleyh30.github.io/peatery' target='_blank' rel="noreferrer">
                                    <img src={peaterySiteImg} alt='' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects