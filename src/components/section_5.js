import React from "react";
import bigLogo from "../images/logo_big.svg";
import macbook from "../images/Macbook.svg";

class Section_4 extends React.Component {
    render() {
        return (

            <section class="section_5">
                <div class="container">
                    <div class="row">
                        <div class="col-12 flex flex-column text-center text-sm-left flex-sm-row cta align-content-center">

                            <div className="cta_box mt-5">
                            <img src={bigLogo} />

                            </div>

                            <div class="cta_desc align-self-center">
                                <h1> Push yourself <br /> & your
                                    <br /> designs</h1>
                                <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. < br/> Ut congue ante at eleifend gravida</span>
                            </div>




                        </div>
                    </div>


                </div>



            </section>

        )
    }
}

export default Section_4