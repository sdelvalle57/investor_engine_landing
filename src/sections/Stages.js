import React from 'react';
import CardStage from '../components/CardStage';
import Photo from '../images/cuadro-07.png'

function Stages(){
    const list1 = ["Initial concept. - DONE",
                   "Build MVP to take Expressions of Interests. - DONE",
                   "Define value flow equations. - IN PROGRESS",
                   "Seed Money (Value Flow subject to change). - IN PROGRESS",
                   "Validate Value Flow Equations. - IN PROGRESS",
                   "Initial Team Recruited - IN PROGRESS",
                   "Build Tax Free Legal Structure - DONE",
                   "Build Crowdfund Page - DONE"
                  ];

    const list2 = ["Execute work as fund raising milestones met. - IN PROGRESS",
                   "Deploy Equity Token as Regulated ERC20 Token.",
                   "Manage Buckets of Equity on Ethereum - DONE"
                  ];

    const list3 = ["Migrate Investor Engine to Holochain Backend.",
                   "Design Knowledge Layer ontologies for HoloREA backend",
                   "Build Investor Engine Process in HoloREA",
                   "Assist other projects to raise funds from InvestorEngine MVP.",
                  ];
    return(
        <div style={{background:`#FAFAFA`}} className="pt-5 pb-5">         
            <div className="container-fluid pl-5 pr-5">
                <div className="wow bounceIn mb-2">
                    <img src={Photo} className="img-fluid" />
                </div>
                <div style={{position:`relative`}}>
                <div id="whatComes" className="signalBig"></div>
                </div>
                <h3 className="text-center text-indigo-lighten-1 font-weight-bold mb-5 wow bounceInRight">So What Comes Next?</h3>
                <div className="row mt-4">
                    <div className="col-lg-4 mb-3 wow fadeInLeft">
                        <CardStage title="STAGE 0: NOW" subtitle="" list={list1}/>
                    </div>
                    <div className="col-lg-4 mb-3 wow fadeInUp">
                         <CardStage title="STAGE 1: RAISE FUNDS" subtitle="" list={list2}/>
                    </div>
                    <div className="col-lg-4 mb-3 wow fadeInRight">
                        <CardStage title="STAGE 2:" subtitle="Build MVP" list={list3}/>
                    </div>
                </div>
                <br />
                
                
            </div>
        </div>
    )
}

export default Stages;