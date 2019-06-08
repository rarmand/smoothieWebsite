import React from 'react';
import './styles.sass';
import { ReactComponent as Logo } from './assets/cocktail.svg';
import Cocktail from './components/Cocktail';
import Net from './components/Net';

class App extends React.Component {
    render() {
        return (<div className="content">
            <header>
                <Logo className="logo" />
                <h1 className="mainTitle">Frutti & Veggie</h1>
            </header>

            <main>
                <Net color="#FDBA12" className="netIconMainLeft" />
                <Net color="#FDBA12" className="netIconMainRight" />
                <div className="mainContent">
                    <div className="mainText">
                        <span>Healthy food, healthy life!</span>
                        <h2>Smoothie Delight</h2>

                        <div className="smoothieIcons">
                            <Cocktail fillLeft="#FF3501" fillRight="#FF663F" text="Healthy" />
                            <Cocktail fillLeft="#5F8B01" fillRight="#74AA00" text="Fresh" />
                            <Cocktail fillLeft="#FDBA12" fillRight="#FF9C38" text="Delicious" />
                        </div>
                    </div>
                </div>
                <div className="infoContent">
                    <div className="infoImg1">
                    </div>
                    <div className="infoText">
                        <h3>Healthy fit</h3>
                        <span>We are pleased to introduce an exciting line of healthy, delicious <b>smoothies</b>.</span>
                        <span>Such a smoothie is a perfect solution for <b>healthy</b> and <b>active living</b></span>
                        <span>containing 60% of vegetables and 40% of fruits.</span>
                    </div>
                </div>

                <div className="infoContent">
                    <div className="infoText">
                        <h3>Always fresh</h3>
                        <span>We take care about our products providing the freshest</span>
                        <span>and best possible <b>ingredients from local sources</b>.</span>
                        <span>Our mission is to give you a fresh full-pack of <b>vitamins</b> and <b>nutriens</b>.</span>
                    </div>
                    <div className="infoImg2">
                    </div>
                </div>

                <div className="infoContent">
                    <div className="infoImg3">
                    </div>
                    <div className="infoText">
                        <h3>Good day!</h3>
                        <span>Our delicious recipes are a great <b>kick start for your day</b></span>
                        <span>and literally put a <b>smile</b> on your face.</span>
                    </div>
                </div>
                <div className="newsletterContent">
                    <Net color="#FF7956" className="netIconNewsletter" />
                    <div className="newsletterText">
                        <span>Stay tuned with our promotions, healthy advice and new products!</span>
                        <input placeholder="Email" />
                        <span>You can resign in any time.</span>
                    </div>
                </div>
            </main>

            <footer className="footer">
                <span>&copy; Copyright Frutti & Veggie</span>
                <span><b>Have a good day!</b></span>
            </footer>
            </div>);
    }
}
export default App;
