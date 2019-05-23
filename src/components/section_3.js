import after_arrow from "../images/arrow_white_down.svg";
import feature_1 from "../images/Shape_43.svg";
import feature_2 from "../images/Shape_42.svg";
import feature_3 from "../images/Shape_41.svg";
import feature_4 from "../images/Shape_44.svg";

import React from "react";


class Section_2 extends React.Component {
    render() {
        return (

            <section>

                <div class="container">

<span className="section_3_span">
                        <img src={after_arrow}/>
                    </span>

                    <div className="row">
                        <div className="col-12 text-center">

                            <h1> Features Of App</h1>
                            <p> Sed vestibulum mollis arcu, quis semper tortor scelerisque eget. <br /> In purus lorem, pretium at tristique ac.</p>
                        </div>

                    </div>

                    <div className='row mb-5 mt-5'>

                            <div class="col-sm-12 col-md-6 col-lg-3 feature_box text-center">
                                <img src={feature_1} />
                                <p class="feature_bold mt-3"> lorem ipsum dolor sit</p>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    <br />
                                    Ut congue ante at eleifend gravida. Morbi dictum nibh sed libero vulputate commodo. </p>

                            </div>

                            <div className=" col-sm-12 col-md-6 col-lg-3 feature_box text-center">
                                <img src={feature_2}/>
                                <p className="feature_bold mt-3"> ametseconecteur</p>
                                <p> Fusce tristique tincidunt neque, aliquet accumsan nisl ullamcorper et.
                                    <br />
                                    Nulla facilisi. Sed eu dui viverra, semper nisl sit amet, aliquam dui. </p>

                            </div>

                            <div className=" col-sm-12 col-md-6 col-lg-3 feature_box text-center">
                                <img src={feature_3}/>
                                <p className="feature_bold mt-3"> lorem ipsum dolor sit</p>
                                <p> Proin tempus justo a vehicula pellentesque. Praesent sollicitudin metus ac erat posuere, sed gravida lacus dignissim.
                                    <br />
                                    Donec quis odio elementum, fringilla ante eget, pulvinar felis.
                                </p>

                            </div>

                            <div className= " col-sm-12  col-md-6 col-lg-3 feature_box text-center">
                                <img src={feature_4}/>
                                <p className="feature_bold mt-3"> vestibulum mollis</p>
                                <p>Nullam eu dui nec tellus condimentum vulputate.
                                    <br />
                                    Nullam ornare tortor diam, eget convallis tellus tempus eget. Aenean molestie tincidunt elit quis blandit.
                                </p>
                        </div>

                    </div>


                </div>
            </section>

        )
    }
};

export default Section_2
