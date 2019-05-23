import React from 'react';
import logo from '../images/Shape_47.svg';
import mini_arrow from "../images/right_mini_arrow.svg";


import App from "../sass/App.scss";

class Section_1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           isNavbarVisible: false
        }
      }

      handleNavbar = () => {
        this.setState ({
            isNavbarVisible: true
        })
      };

    render() {
        return (

                <section class="hero_img">

                    <div class="container">

                        <header class="row">
                            <div class="col-12 flex justify-content-between mt-5">

                                <div class="logo">
                                    <img src={logo} />
                                </div>

                                <div class="nav d-none d-md-block">
                                    <ul>
                                        <li>about </li>
                                        <li> studio</li>
                                        <li> pricing</li>
                                        <li>blog</li>
                                        <li><button class="btn flex justify-content-around align-content-center"><b> Join </b> <img src={mini_arrow} /></button></li>
                                    </ul>
                                </div>

                                <div className="d-block d-md-none">
                                    <button class="navbar-btn" onClick={() => !this.state.isNavbarVisible ? this.setState({ isNavbarVisible: true}) : this.setState({ isNavbarVisible:false})}>
                                       M E N U
                                    </button>

                                    {
                                        this.state.isNavbarVisible &&
                                        (
                                       <ul class="burger_menu">
                                           <li> About</li>
                                           <li> Studio</li>
                                           <li> Pricing</li>
                                           <li> Blog</li>
                                       </ul>
                                        )
                                    }


                                </div>

                            </div>
                        </header>

                        <section >
                            <div class="row">
                                <div class="cta col-6">
                                    <h1> push yourself <br /> & your designs</h1>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore manga aliqua</p>
                                </div>
                            </div>

                            <div class="row">

                                <form class="col-6">
                                    <input type="text" placeholder="Design Style" name="text" required className="col-12 col-md-5 form_cta"/>
                                    <input type="text" placeholder="Email" name="email" required class="col-12 col-md-5 form_cta" />
                                    <button className="mini_arrow col-12 col-md-1 text-center"><img src={mini_arrow}/></button>
                                </form>


                            </div>



                        </section>


                    </div>
                </section>

            )
    }


}

export default Section_1;