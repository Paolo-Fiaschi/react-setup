import React, {useState} from 'react';
import Post from './facebookPost';
//JSX
function App() {
  const [posts, setPosts] = useState([
    {author: 'Andrea', description: 'Oggi vado al mare'},
    {author: 'Pippo', description: 'Oggi gioco a calcetto'},
    {author: 'Pluto', description: 'Oggi gioco a tennis'},
    {author: 'Paperino', description: 'Oggi vado a sciare'},
  ]);
  return(
    <div className='container'>
      {posts.map(post => (
        <Post author={post.author} description = {post.description}/>
      ))}
  </div>
  )
}

// FUNCTION COMPONENT
// function App() {
//   const [count, setCount] = useState(0);
//   const increment = ()=> {
//     setCount(count + 1);
//   }
//   return(
//     <div className='container'>
//     <h3>Counter: {count}</h3>
//     <button onClick={increment}>Aumenta</button>
//   </div>
//   )
// }

// CLASS COMPONENT
// class App extends React.Component {  
//   state = {
//     count: 0,
//   }
//   increment = ()=> {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }
//   render(){
//     return ( 
//       <div className='container'>
//         {/* <h2>Ciao Mondo</h2>
//         <Post author="Andrea" description="il mio primo post"/>
//         <Post author="Pippo" description="post react"/>
//         <Post author="Pluto" description="sto imparando"/>
//         <Post author="Paperino" description="ce la faremo"/> */}
//         <h3>Counter: {this.state.count}</h3>
//         <button onClick={this.increment}>Aumenta</button>
//       </div>
//     )
//   }
// }

export default App;
