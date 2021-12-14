import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  Outlet,
  useParams,
} from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home ...
    </div>
  );
}

let contents = [
  { id: 1, title: 'HTML', description: 'HTML is ...' },
  { id: 2, title: 'JS', description: 'JS is ...' },
  { id: 3, title: 'React', description: 'React is ...' },
];

function Topics() {
  // let lis = [];
  // for (var i = 0; i < contents.length; i++) {
  //   lis.push(
  //     <li>
  //       <NavLink to={'/topics/' + contents[i].id}>{contents[i].title}</NavLink>
  //     </li>
  //   );
  // }

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {contents.map((content) => (
          <li key={content.id}>
            <NavLink to={`/topics/${content.id}`}>{content.title}</NavLink>
          </li>
        ))}
      </ul>
      {/* Outlet을 적어야 하위 Route를 출력할 수 있음 */}
      <Outlet />
    </div>
  );
}

function Topic() {
  // userParams 로 :contentId 값을 당겨올 수 있음
  let params = useParams();
  // console.log(params);
  // contentId
  let topicId = params.contentId;
  let selected_topic = {
    title: 'Sorry',
    description: 'Not Found',
  };
  for (var i = 0; i < contents.length; i++) {
    if (contents[i].id === Number(topicId)) {
      selected_topic = contents[i];
      break;
    }
  }
  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact ...
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>React Router DOM example</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/topics">Topic</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />}>
          <Route path=":contentId" element={<Topic />}></Route>

          {/* <Route
            path="/topics/1"
            element={
              <div>
                <p>HTML is ...</p>
              </div>
            }
          />
          <Route
            path="/topics/2"
            element={
              <div>
                <p>JS is ...</p>
              </div>
            }
          />
          <Route
            path="/topics/3"
            element={
              <div>
                <p>React is ...</p>
              </div>
            }
          /> */}
        </Route>
        <Route
          path="/contact"
          element={
            <div>
              <h2>Contact</h2>
              Contact ...
            </div>
          }
        />
      </Routes>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
