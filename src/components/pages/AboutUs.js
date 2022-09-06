
import * as React from "react";
import "./AboutUs.scss";
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Video from './Video';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function About() {
  const [users, setUsers] = React.useState([]);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    f();
  }, []);
  return (
    <Container>

    <div className="App">
        <br/>

        <Video/>

        <br/>

        
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
                <Card style={{ width: '18rem' }}>
                    <img key={user.avatar} src={user.avatar} alt=""/>
                    <Card.Body>
                    <Card.Title>
                    <p>
                    <strong>{user.first_name}</strong>
                    </p>
                    </Card.Title>
                    <Card.Text>
                        <p>{user.email}</p>
                    </Card.Text>

                    <Link to="/biografy"
                    className="btn btn-outline-primary text-uppercaser"
                    >Read More</Link>
                
                
                
                </Card.Body>
                </Card>
            );
          })}
      </div>
    </div>
    </Container>
  );
}