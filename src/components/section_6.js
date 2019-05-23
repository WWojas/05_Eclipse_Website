import React from "react";
import macbook from "../images/Macbook.svg";
import macbook_pic from "../images/macbook_pic.png";
import tweet from "../images/tweet.svg";
import fb from "../images/fb.svg";


class Section_6 extends React.Component {
    render() {
        return (

            <div class="section_6">

            <div className="row macbook_img d-none d-lg-block">
                <div className="col-12">
                    <img src={macbook} class='macbook' />
                    <img src={macbook_pic} class="macbook_pic"/>

                </div>
            </div>

                <footer>
                    <div class="container">

                        <div class="row ">
                            <div class="col-12">
                    <div class="flex justify-content-end d-none d-sm-flex">

                        <div class=" flex justify-content-around align-content-center tweet">
                    <p> <img src={tweet}/>  Tweet </p>
                        </div>

                        <div className=" flex justify-content-around align-content-center fb">
                            <p><img src={fb}/> Share </p>
                        </div>
                    </div>
                            </div>

                            <div class="row w-100">
                                {/* Desktop*/}
                                <div class="d-none d-sm-block col-12 flex justify-content-between align-self-center">

                                    <div class="box-left flex">

                                    <div class=" footer_list">
                                      <ul>
                                          <li><a> About Us</a></li>
                                          <li><a> Support</a></li>
                                          <li><a> Why Buy</a></li>
                                          <li><a> Affiliates</a></li>
                                      </ul>
                                    </div>

                                    <div className=" footer_list ">
                                        <ul>
                                            <li><a> Contact Us</a></li>
                                            <li><a> Returns</a></li>
                                        </ul>
                                    </div>
                                    </div>

                                    <div class="box_2 text-right m-0 mt-5">
                                        <p> Made in Poland by CodeWave.com.pl</p>
                                        <p> Copyright &copy; 2016,  Wojciech Wojas</p>

                                    </div>

                                </div>

                            {/*     Mobile */}
                                <div className="box-left d-flex d-sm-none">

                                    <div className=" footer_list">
                                        <ul>
                                            <li><a> About Us</a></li>
                                            <li><a> Support</a></li>
                                            <li><a> Why Buy</a></li>
                                            <li><a> Affiliates</a></li>
                                        </ul>
                                    </div>

                                    <div className=" footer_list">
                                        <ul>
                                            <li><a> Contact Us</a></li>
                                            <li><a> Returns</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="row box_2 text-right m-0 mt-5  d-flex d-sm-none">
                                    <p class="col-12"> Made in Poland by CodeWave.com.pl</p>
                                    <p  class="col-12"> Copyright &copy; 2016, Wojciech Wojas</p>

                                </div>


                            </div>

                    </div>
</div>
                </footer>





            </div>







        )
    }
}

export default Section_6