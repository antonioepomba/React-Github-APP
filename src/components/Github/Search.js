import React, { Component } from 'react';
import '../../style.css'
import '../../assets/css/search.css'
import searchImage from '../../assets/images/search-image.png'

class Search extends Component {

    onSubmit = (e) => {
        e.preventDefault();
        let username = this.refs.username.value.trim();
        if (!username) {
            alert('Please Enter a username');
            return
        }
        this.props.onFormSubmit(username);
        this.refs.username.value = '';
    }

    render() {
        return (
            <div  className="container" style={{display:`${this.props.disp}`}}>
            
                  <h3>  Repository Github App</h3>
                    
                    <form className='form-form' onSubmit={this.onSubmit.bind(this)}>
                        <div className="form-group">
                            <input type="text" className="text_input" ref="username" placeholder="Enter a username..."></input>
                            <input type="submit" className="btn" value="search"/>
                            <img src={searchImage} className="img-class" alt="Girl in a jacket"/>
                        </div>
                    </form>
                </div>
        );
    }
}

export default Search;
