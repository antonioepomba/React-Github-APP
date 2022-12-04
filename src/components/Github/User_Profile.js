import React, { Component } from 'react';
import RepoList from './Repo_List';
import '../../assets/css/profile.css'

class Profile extends Component {

  render() {
    return (
      <section>
      <div style={{ display: `${this.props.display}` }}>
        <div className="card-foto-repo">
          <h3 className="foto-titulo"> Nome: {this.props.userData.name}</h3>
          <h3 className="">{this.props.userData.login}'s Repositories</h3>


          <div className="container-paragrafo">
            <img className="img-profile" src={this.props.userData.avatar_url} alt="" />
            <div className="texto">
              <span>Username: {this.props.userData.login}</span>
              <br />
              <br />
              <span className="span1">Repos: {this.props.userData.public_repos}</span>
              <span className="span2">Gists: {this.props.userData.public_gists}</span>
              <span className="span3">Followers: {this.props.userData.followers}</span>
              <span className="span4">Following: {this.props.userData.following}</span>
              <p className><span >Location </span>:{this.props.userData.location}</p>
              <p ><span className="texto-default">Bio </span>:{this.props.userData.bio}</p>
              <br />
              <a href={this.props.userData.html_url} target="_blank" rel="noopener noreferrer" className="btn-profile">Visit Github Profile</a>
              <a href="/">
                <button className='btn-back'>voltar</button>
              </a>
            </div>
          </div>

        </div>
        <div className='repo-ccontainer'>
          <RepoList userRepos={this.props.userRepos} /></div>
      </div>
      </section>
    );
  }
}

export default Profile;
