import React, { Component } from 'react';
import Profile from './User_Profile';
import Search from './Search';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {urlUserData,urlUserRepo} from '../../util/endPoint'
import 'whatwg-fetch';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'antonioepomba',
      userData: [],
      userRepos: [],
      display:'none',
      disp :'flex',
      back:'none',
      perPage: 10
    }
  }
  Somar = () => {


    return this.setState({
        perPage: this.state.perPage + 10
    })

}

reduzir = () => {



    return this.setState({
        perPage: this.state.perPage - 10
    })

}
  // Get User's profile information from github API
  getUserData = () => {
    fetch(urlUserData(this.state.username))
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response
      })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState(
          { userData: json })
      })
      .catch(function (error) {
        console.log('There was a problem with fetch operation:' + error.message)
      })
  }
  // Get User's repositories Github API call
  getUserRepos = () => {
    fetch(urlUserRepo(this.state.username,this.state.perPage))
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response
      })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState(
          { userRepos: json })
      })
      .catch(function (error) {
        console.log('There was a problem with fetch operation:' + error.message)
      })
  }

  handleFormSubmit = (username) => {
    this.setState({ username }, function () {
      this.getUserData();
      this.getUserRepos();
      this.setState({display:'flex'})
      this.setState({disp:'none'})
    })
  }

  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  }

  render() {
    return (
      <section>
        <Search onFormSubmit={this.handleFormSubmit.bind(this)}
        disp={this.state.disp} />
        <Profile {...this.state}
        display={this.state.display}
        back={this.setState.back} />
         <Router>
        <Routes>
          <Route path='/' element={ <Search onFormSubmit={this.handleFormSubmit.bind(this)}
        disp='none' />}/>
       </Routes>
      </Router>
      </section>
    );
  }
}

export default Home;
