

import contactBg from './assets/img/contact-bg.jpg';
import NavBar from './NavBar';
import Footer from './Footer';
function Contact() {
    return (
        <>
            <NavBar />
            <header className="masthead"
                style={{ backgroundImage: `url(${contactBg})` }} >
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="page-heading">
                                <h1>Contact Me</h1>
                                <span className="subheading">Have questions? I have answers.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                            <div className="my-5">

                                <form id="contactForm" metthod="POST">
                                    <div className="form-floating">
                                        <input className="form-control" id="name" type="text" placeholder="Enter your name..." required />
                                        <label htmlFor="name">Name</label>
                                    </div>

                                    <div className="form-floating">
                                        <input className="form-control" id="email" type="email" placeholder="Enter your email..." required />
                                        <label htmlFor="email">Email address</label>

                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="phone" type="tel" placeholder="Enter your phone number..." required />
                                        <label htmlFor="phone">Phone Number</label>
                                    </div>

                                    <div className="form-floating">
                                        <textarea className="form-control" id="message" placeholder="Enter your message here..." style={{ height: "12rem" }} required></textarea>
                                        <label htmlFor="message">Message</label>
                                    </div>
                                    <br />
                                    <button className="btn btn-primary text-uppercase disabled" id="submitButton" type="submit">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}




export default Contact;
