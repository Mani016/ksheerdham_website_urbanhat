import React, { Component } from 'react';


class WorkProcess extends Component {

    render() {

        const workProcesstArray = [
            {
                image: 'process_1.png',
                number: '01',
                title: 'MILK IT !!!',
                description: 'Making sure that the cows and utensils are clean and calves are already fed we milk the cow.',
                arrowIcon: 'shape1.png',
            },
            {
                image: 'process_2.png',
                number: '02',
                title: 'CHILL IT ...',
                description: 'The fresh milk is immediately chilled in our Bulk Milk Cooler.',
                arrowIcon: 'shape2.png',
            },
            {
                image: 'process_3.png',
                number: '03',
                title: 'INTO POUCHES',
                description: 'Once the batch is ready the packaging machine starts taking milk from the cooler and directly to the pouches. No Hands !!',
                arrowIcon: 'shape1.png',
            },
            {
                image: 'process_4.png',
                number: '04',
                title: '...AND TO YOUR PLACE',
                description: 'Our own truck then rushes for delivery',
                arrowIcon: 'shape1.png',
            },
        ]

        const workProcesstMap = workProcesstArray.map((valu, i) => {
            return (

                <div className="col-md-3 col-sm-12" key={i}>
                    <div className="process-item">
                        <div className="img_process">
                            <img src={`assets/images/${valu.image}`} alt="" />
                            <span>{valu.number}</span>
                            <div className="angle_icon">
                                <img src={`assets/images/${valu.arrowIcon}`} alt="" />
                            </div>
                        </div>
                        <div className="process_text">
                            <h4>{valu.title}</h4>
                            <p>{valu.description}</p>
                        </div>
                    </div>
                </div>

            )
        });

        return (
            <section className="process-section">
                <div className="container">

                    {/* Heading */}
                    <div className="base-header">
                        <small>Working Process</small>
                        <h3>How does we work</h3>
                    </div>
                    {/* End: Heading */}

                    <div className="row">

                        {workProcesstMap}

                    </div>
                </div>
            </section>
        )

    }
}


export default WorkProcess;
