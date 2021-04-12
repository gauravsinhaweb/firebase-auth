import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Dashboard() {
  const { currentUser, signout } = useAuth();
  const history = useHistory();

  async function signOutHandler() {
    await signout();
    history.push("/");
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Dashboard</h2>
          <h4 className="text-center mb-4">
            {" "}
            {currentUser && currentUser.email}
          </h4>
          <Button
            onClick={signOutHandler}
            className="w-100 mb-2 mt-4"
            type="submit"
          >
            Log Out
          </Button>{" "}
        </Card.Body>
      </Card>
    </>
  );
}

export default Dashboard;
