import React, { Component } from 'react';
import Repo from './Repo';
import '../../assets/css/profile.css'

class RepoList extends Component {

    render() {
        return (
            <div className='list-container'>
                
                <div>
                   {
                       this.props.userRepos.map(repo => {
                           return <Repo
                                    repo= {repo}
                                    key={repo.id}
                                    {...this.props}
                           />
                       })
                   }
                </div>
            </div>
        );
    }
}

export default RepoList;
