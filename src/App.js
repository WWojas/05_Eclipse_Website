import React, {Component} from 'react';
import SectionOne from './components/section_1.js';
import SectionTwo from './components/section_2.js';
import SectionThree from './components/section_3.js';
import SectionFour from './components/section_4.js';
import SectionFive from './components/section_5.js';
import SectionSix from './components/section_6.js';

class App extends Component{
    render(){
        return (
            <div>
                <SectionOne />
                <SectionTwo />
                <SectionThree />
                <SectionFour/>
                <SectionFive />
                <SectionSix />
            </div>
        );
    }
}


export default App;


