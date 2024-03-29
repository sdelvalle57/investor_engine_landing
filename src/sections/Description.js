import React from 'react';
import Paragraph from '../components/Paragraph';
import List from '../components/List'

class Description extends React.Component {
    render() {
        const List1 = [
            "Investors are looking for good projects.",
            "Projects are looking for good investors.",
            "Agreements between investors and projects are poor quality."

        ];

        const List2 = [
            "The right business structures",
            "The right returns",
            "The right risk mitigation processes"
        ]

        const { title, background } = this.props;
        return (
            <div className="pt-4 pb-4" style={{ background: `${background}` }}>
                <div className="container">
                    <h4 className="font-weight-bold text-center text-indigo-lighten-1 mt-5 wow bounceInRight">{title}</h4>

                    <div className="col-lg-9 col-sm-12 ml-auto mr-auto pr-5 pl-md-5 mt-5">
                        <div className="container" >
                            <List
                                title="In a nutshell..."
                                list={List1}
                            />
                        </div>
                    </div>
                    < br></br>

                    {/* <div className="col-lg-9 col-sm-12 ml-auto mr-auto pr-5 pl-md-5 mt-5">    
                        <h6 className="mb-4 font-weight-bold wow fadeInLeft">Good Projects Struggle to Get Funding</h6>
                        <div className="text-center container">
                            <p className="wow fadeIn">Good projects that actually make a difference struggle to get funding.</p>
                            <p className="wow fadeIn">The very intention of an investor looking to flip his money with no care on how, but as long as it happens, is threatening our planet's homeostasis.</p>
                            <p className="wow fadeIn">With the current state of affairs, it's more profitable to do the right thing.</p>
                        </div>
                    </div>
                    <div className="col-lg-9 col-sm-12 ml-auto mr-auto pr-sm-5 pl-md-5 mt-5">    
                        <h6 className="mb-4 font-weight-bold wow fadeInLeft">Investing in 50 Ventures hoping one makes 1.000x isn't the answer</h6>
                        <div className="container text-center">
                            <p className="wow fadeIn">We think the world needs a shake up, and we want to test out holochain's micro-payments grunt.</p>
                        </div>
                    </div> */}
                    <div className="col-lg-9 col-sm-12 ml-auto mr-auto pr-sm-5 pl-md-5 mt-5">
                        <Paragraph title="Where we want to be"
                           
                        />
                       
                        {/* <Paragraph title="It Could Be Like This"
                            text={
                                <React.Fragment>A world where your investment is powered by a <b><span style={{ textDecoration: `underline` }}>value equation</span></b> that gives <b><span style={{ textDecoration: `underline` }}>open value networks (OVNs)</span></b>   the ability to distributed income back to the contributors to the network, using a set of equations and rules that the network collectively decides on.</React.Fragment>}
                        /> */}



                    </div>



                    <div className="col-lg-9 col-sm-12 ml-auto mr-auto pr-5 pl-md-5 mt-5">
                        <div className="container" >
                            <List
                                title="Projects with:"
                                list={List2}
                            />
                        </div>
                    </div>
                    <br></br>
                </div>
            </div>

        )
    }
}

export default Description;