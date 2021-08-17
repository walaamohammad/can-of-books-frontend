import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
class BestBooks extends React.Component {
  constructor(props){
    super();
    this.state={
      listOfBooks:[]
    }
  }
  componentDidMount=()=>{
    let url='http://localhost:8000/books?email=walaaosamaajaj2013@gmail.com';
    axios.get(url).then(response=>{
this.setState({
  listOfBooks:response.data
})
    })
  }
  render() {
    return(
      <div>
        <h1>My Favorite Books</h1>
<ol>
  {
    this.state.listOfBooks.map(book=>{
      return <li>{book.name}</li> 
    })
  }
</ol>
      
      </div>
    )
  }
}

export default BestBooks;
