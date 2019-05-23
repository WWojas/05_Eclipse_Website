import React from "react";
import down_arrow from "../images/Shape_38.svg";
import after_arrow from "../images/arrow_white_down.svg";
import iphone from "../images/iPhone_6_cutout.png";

class Section_2 extends React.Component {
    render() {
        return (


            <section class="section_2">

                <div className="container">

                <span class="section_2_span">
                    <img src={down_arrow} />
                </span>


                <div class="row">
                    <div class="col-12 text-center">

                        <h1> Latest Design Style</h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue ante at eleifend gravida. <br/> Morbi dictum nibh sed libero vulputate commodo.</p>
                    </div>

                </div>

                <div class="row" >
                      <div class="col-12 d-sm-block d-md-none text-center iphone_small">
                        <img src={iphone}/>
                      </div>

                    <div className="col-12 d-none d-md-block text-center iphone">
                        <img src={iphone}/>
                    </div>

                </div>

                </div>
            </section>

        )
    }
}

export default Section_2