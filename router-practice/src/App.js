import "./App.css";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <h1>Hello React Router</h1>
      <ul>
        <li>
          <NavLink activeClassName="active" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/posts">
            Posts
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route exact path="/posts" component={Posts} />
        <Route path="/posts/:id" component={Posts} />
        {/* 404 page */}
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

function NotFound() {
  return <h2>Not Found Page</h2>;
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

const posts = [
  { id: 1, title: "React", content: "React Tutorial" },
  { id: 2, title: "Vue", content: "Vue.js Tuttorial" },
  { id: 3, title: "Laravel", content: "Laravel Tutorial" },
];

function Posts(props) {
  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <NavLink to={`/posts/${[post.id]}`}>{post.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Post(props) {
  const id = Number(props.match.params.id);
  const post = posts.find((post) => post.id === id);
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default App;
