import React, { Component } from 'react';
import '../../assets/css/profile.css'
class Repo extends Component {

    render() {
        const { repo } = this.props;
        return (
            <section className='repo'>
                <hr />
                
                <div className="card-repo">
                    <h3 className="card-header-repo">
                        <a href={repo.html_url}>{repo.name}  </a>
                        <span className="badge badge-info"> {repo.language}</span>
                    </h3>
                    <div className="card-block-repo">
                        <p className="texto">{repo.description}</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Repo;
