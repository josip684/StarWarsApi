import React from 'react';
import logo from '../assets/logo.png';
import dartWader from '../assets/dart-wader.png';

function Home() {
  return (
    <div className="App" style={styles.container}>
      <div className="App-header" style={styles.AppHeader}>
        <img src={logo} alt="logo" style={styles.logoImg} />
      </div>
      <div id="DartWader" style={styles.otherPic}>
        <img src={dartWader} alt="logo" style={styles.dartWaderImg} />
      </div>
    </div>
  );
}

const styles = {
  container: {

  },
  AppHeader: {
  },
  otherPic: {
  },
  logoImg: {
  },
  dartWaderImg: {
  }

}

export default Home;
