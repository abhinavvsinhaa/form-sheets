import React from 'react';
import './App.css';
import axios from 'axios';

/*
METHOD TO UPLOAD FORM DATA ON GOOGLE SHEETS
1. Create a google sheet document and give it a name
2. Click on share and change it to anyone with the link can edit, and copy the link
3. Go to https://sheet.best/ and sign up for free
4. Add connection and paste the copied link there
5. Copy the connection url for the further use in code
*/

class App extends React.Component {

  constructor() {
    super();
    
    this.state = {
      name: '',
      age: '',
      email: ''
    }
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  onSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();

    const url = '<YOUR CONNECTION URL>'; //provided on sheet.best
    
    axios.post(url,this.state)
      .then(console.log)
      .catch(console.log)
  }

  render() {
    return (
      <div className="App container">
        <p className=''>Form Data upload to Sheets
        </p>
        <div className="row">
          <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 formCol offset-lg-4 offset-md-2'>
            <form onSubmit={this.onSubmit}>
            <div className="mb-3">
                <label 
                htmlFor="exampleInputEmail1" className="form-label">Name</label>
  
                <input type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp"
                name='name' value={this.state.name} onChange={this.onChange}/>
              </div>
  
              <div className="mb-3">
                <label 
                htmlFor="exampleInputAge1" className="form-label">Age</label>
  
                <input type="text" className="form-control" id="exampleInputAge1" aria-describedby="emailHelp"
                name='age' value={this.state.age} onChange={this.onChange}/>
              </div>
  
              <div className="mb-3">
                <label 
                htmlFor="exampleInputEmail1" className="form-label">Email address</label>
  
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                name='email' value={this.state.email} onChange={this.onChange}/>
              </div>
              
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
