import './App.css';
import React from 'react';
import Profile from './component/profiles';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isShow: false,
      currentCount: 0,
      profiles: [
        {
          name: "Mohamed Hedi Slatni",
          bio: " a 28 years old, and i'm a student in Go My Code Gabes.",
          imgUrl: "https://ambit.blog/wp-content/uploads/2020/06/PROGRAMMER.jpg",
          profession: "my profession is a developer"
        }
      ]
    };
  }
  timer() {
    this.setState({
      currentCount: this.state.currentCount + 1,
    });
    if (this.state.currentCount < 1) {
      clearInterval(this.intervalId);
    }
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <div className="App">
        <div>
          <button className="btn-show"
            onClick={() => {
              this.setState({
                isShow: !this.state.isShow,
              });
            }}
          > 
            {this.state.isShow ?'Hide the profile' :'Show the profile'}
          </button>
        </div>
        {this.state.isShow === true ? (
          <Profile
            name={this.state.profiles[0].name}
            bio={this.state.profiles[0].bio}
            imgUrl={this.state.profiles[0].imgUrl}
            profession={this.state.profiles[0].profession}
          />
        ) :
          (
            <div></div>
          )}
        {this.state.currentCount}
      </div>
    );
  }
}

export default App;
