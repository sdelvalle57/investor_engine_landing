import React from 'react';

import Header from '../sections/Header';
import Team from '../sections/Team';
import Description from '../sections/Description';
import InvestorModel from '../sections/InvestorModel';
import Barra from '../components/Barra'
import Description2 from '../sections/Description2';
//import * as serviceWorker from '../serviceWorker';
import AcquiringFounds from '../sections/AcquiringFounds';
import TestBlue from '../components/TestBlue';
import Principals from '../sections/Principals';
import Stages from '../sections/Stages';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';
import Paragraph from '../components/Paragraph';

import Photo from '../images/holo-05.jpg'

import Picture1 from '../images/mapa 1-08.png'

function Principal() {
    return (
        <div>

            <header id="header">
                <div style={{ position: `relative` }}>
                    <div id="what" className="signal"></div>
                </div>
                <Header />
            </header>

            <div style={{ position: `relative`, }}>
                <div id="who" className="signal"></div>
            </div>
            {/* <section className="container team-section text-center my-5">
                <Team />
            </section> */}

            <div className="container-fluid mt-5">
                <p className="text-center font-weight-bolder">Our Mission is to Help you Fund Your Web3 Project</p>
                <img src={Picture1} width="100%" className="wow fadeInRight" />
            </div>
            <section style={{ position: `relative` }}>
                <div id="why" className="signal"></div>
                <Description title="Problem" background="#FAFAFA" />
            </section>

            <section>
                <InvestorModel />
            </section>
            <div style={{ position: `relative` }}>
                <div id="forProductCreators" className="signalBig"></div>
            </div>
            <Barra title="We have the right Technology, Structures and Relationships to make this happen." classTitle="font-weight-bold wow fadeInLeft" />

            <section>
                <AcquiringFounds />
            </section>

            <Barra title="This will be awesome" classTitle="font-weight-bold wow fadeInRight" />

            <section>
                <Description2 title="For social Entrepreneurs" background="#FAFAFA"/>
            </section>

            <div style={{ position: `relative` }}>
                <div id="forInvestor" className="signal"></div>
            </div>
            <TestBlue title="For The Investor" classbackground="indigo-lighten-2 pt-5 pb-5"
                text="Finally you have a lens to evaluate investments to see if they make sense"
                text2={<React.Fragment>We de-risk the Investor Model using the benefit redistribution algorithm which prescribes how benefits (including revenue, access to governance, etc.) are distributed to all participants (active <a className="font-weight-bolder text-info" href="http://valuenetwork.referata.com/wiki/Affiliates">affiliates</a>) in a collaborative process.</React.Fragment>}
                text3={<strong><b>Investing just got a whole lost easier</b></strong>}
            />

            <section>
                <br></br>
                <br></br>

                <Paragraph title="Dont't Trust us... Run the Numbers for yourself" />
            </section>

            <section>
                <div className="container-fluid pt-3">
                    <div style={{ position: `relative` }}>
                        <div id="theOffer" className="signalBig"></div>
                    </div>
                    <div className="container text-center wow fadeIn" style={{ maxWidth: `600px` }}>

                        <br /><br />
                        <p><strong>CHECK OUT OUR</strong></p>
                        <p>InvestorEngine: Value Equation</p>
                        <p>This project will kickoff once enough poeple evaluate this value equation to see if this business model will work for them as either an investment or service provider.</p>
                    </div>
                    {/* <div className="m-auto" style={{maxWidth:`600px`,position:'relative',transform:'translateY(50%)',zIndex:`2`}}>
                        <div className="card" style={{borderRadius:`0`}}>
                        <div className="card-body">
                        The value equation gives open value networks (OVNs) the ability to distributed income back to the contributors to the network, using a set of equations and rules that the network collectively decides on.            
                            </div>
                            </div>
                        </div> */}
                </div>
                <div className="container-fluid">
                    <img src={Photo} width="100%" className="img-fluid wow bounceIn" />
                </div>
            </section>

            <section>
                <div style={{ position: `relative` }}>
                    <div id="principals" className="signal"></div>
                </div>
                <Principals title="These Principals Guild Everything We Do" />
            </section>

            <section>
                <div style={{ position: `relative` }}>
                    <div id="accountability" className="signal"></div>
                </div>
                <Stages />
            </section>

            <TestBlue
                // title="Testimonials" 
                classbackground="indigo-lighten-2 pt-5 pb-5" 
                // img={<i className="fas fa-quote-left"></i>}
                // text="Courtesy of Adjunct Digital Value Professor and consultant Stephen Alexander we have designed a lens to evaluate if the suggested capacity will be valuable to individuals and the likelihood of it being adopted."
                subtitle="Register Expression of Interest"
            />

            <section style={{ position: `relative` }}>
                <div id="contact" className="signal"></div>
                <Contact />
            </section>

            <footer className="mt-5" style={{ position: `relative` }}>
                <div className="signal" id="footer"></div>
                <Footer />
            </footer>

        </div >
    )
}

export default Principal;