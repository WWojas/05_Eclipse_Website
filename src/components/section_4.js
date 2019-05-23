import React from "react";
import down_arrow from "../images/Shape_38.svg";
import design_layer from "../images/Design_layer.svg";
import design_arrow from "../images/design_arrow.svg"


class Section_4 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isDesignVisible: true,
            isBusinessVisible: false,
            isArtsVisible: false
        }
    }

    render() {
        return (

            <section class="section_4">
                <div class="container">

               <span className="section_4_span">
                        <img src={down_arrow}/>
                    </span>

                    <div className="row">
                        <div className="col-12 text-center">

                            <h1> Our design guidelines</h1>
                            Sed vestibulum mollis arcu, quis semper tortor scelerisque eget. In purus lorem, pretium at tristique ac, fermentum vitae metus.
                            <br />
                            Morbi sed ullamcorper orci, eget semper nibh. In tincidunt mattis quam, et sollicitudin urna tempus eget.
                        </div>
                    </div>

                    <div className="row">
                        <div class="col-12 col-md-6 m-auto">

                            <div class="design_border d-none d-lg-block">

                                {/*Desktop*/}
                                <div class="row">
                                    <div className="col-4">
                                    </div>
                                    <div className="col-8">

                                    <button className='btn col-4 text-center' onClick={() =>
                                        this.setState({isDesignVisible: true, isBusinessVisible: false, isArtsVisible: false })  }
                                            >
                                     Design </button>

                                        <button className='btn col-4 text-center' onClick={() =>
                                            this.setState({isBusinessVisible: true, isDesignVisible: false, isArtsVisible: false })}
                                        >
                                            Business</button>

                                        <button className='btn col-4 text-center' onClick={() =>
                                            this.setState({isArtsVisible: true, isDesignVisible: false, isBusinessVisible: false})}
                                            >
                                            Arts</button>
                                    </div>

                                </div>
                            </div>

                            {/* Mobile */}
                            <div className="design_border d-block d-lg-none">
                                <div className="row">
                                    <div className="col-12">
                                        <button className='btn col-4 text-center' onClick={() =>
                                            this.setState({isDesignVisible: true, isBusinessVisible: false, isArtsVisible: false})}
                                        >
                                            Design </button>

                                        <button className='btn col-4 text-center'onClick={() =>
                                            this.setState({isBusinessVisible: true, isDesignVisible: false, isArtsVisible: false })}
                                        >
                                            Business</button>

                                        <button className='btn col-4 text-center'onClick={() =>
                                            this.setState({isArtsVisible: true, isDesignVisible: false, isBusinessVisible: false})}
                                        >
                                            Arts</button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="row">

                        {/* Design Box*/}

                        {
                            this.state.isDesignVisible &&

                            <div className="col-12 d-flex-column d-sm-flex justify-content-center text-center mb-5">

                                <div className="design_box">
                                    <img src={design_layer} className="img-fluid"/>

                                    <div className="flex justify-content-center m-3">
                                        <span> Design Listing One </span>
                                        <a className="pl-4"><img src={design_arrow}/></a>
                                    </div>
                                </div>

                                <div className="design_box">
                                    <img src={design_layer} className="img-fluid"/>

                                    <div className="flex justify-content-center m-3">
                                        <span> Design Listing One </span>
                                        <a className="pl-4"><img src={design_arrow}/></a>
                                    </div>
                                </div>


                                <div className="design_box">
                                    <img src={design_layer} className="img-fluid"/>

                                    <div className="flex justify-content-center m-3">
                                        <span> Design Listing One </span>
                                        <a className="pl-4"><img src={design_arrow}/></a>
                                    </div>
                                </div>


                            </div>

                        }

                        {
                            this.state.isBusinessVisible &&

                            <div className="col-12 d-flex-column d-sm-flex justify-content-center text-center mb-5">

                                <div className="design_box">
                                    <img src={design_layer} className="img-fluid"/>

                                    <div className="flex justify-content-center m-3">
                                        <span> Business Listing One </span>
                                        <a className="pl-4"><img src={design_arrow}/></a>
                                    </div>
                                </div>

                                <div className="design_box">
                                    <img src={design_layer} className="img-fluid"/>

                                    <div className="flex justify-content-center m-3">
                                        <span> Business Listing One </span>
                                        <a className="pl-4"><img src={design_arrow}/></a>
                                    </div>
                                </div>


                                <div className="design_box">
                                    <img src={design_layer} className="img-fluid"/>

                                    <div className="flex justify-content-center m-3">
                                        <span> Business Listing One </span>
                                        <a className="pl-4"><img src={design_arrow}/></a>
                                    </div>
                                </div>


                            </div>

                        }


                        {

                            this.state.isArtsVisible &&

                            <div className="col-12 d-flex-column d-sm-flex justify-content-center text-center mb-5">

                                <div className="design_box">
                                    <img src={design_layer} className="img-fluid"/>

                                    <div className="flex justify-content-center m-3">
                                        <span> Arts Listing One </span>
                                        <a className="pl-4"><img src={design_arrow}/></a>
                                    </div>
                                </div>

                                <div className="design_box">
                                    <img src={design_layer} className="img-fluid"/>

                                    <div className="flex justify-content-center m-3">
                                        <span> Arts Listing One </span>
                                        <a className="pl-4"><img src={design_arrow}/></a>
                                    </div>
                                </div>


                                <div className="design_box">
                                    <img src={design_layer} className="img-fluid"/>

                                    <div className="flex justify-content-center m-3">
                                        <span> Arts Listing One </span>
                                        <a className="pl-4"><img src={design_arrow}/></a>
                                    </div>
                                </div>


                            </div>

                        }



                    </div>


                </div>
            </section>


        )
    }
}

export default Section_4