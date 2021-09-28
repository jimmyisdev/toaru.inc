import { teamData } from "./../../data";
import { Card, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import {   useState } from "react";
import TeamContent from  "./TeamContent"


export default function Team() {
  const [ modalShow, setModalShow ] = useState(false);
  const [ modalContent, setMondaContent ] = useState({});
  
  
  function handelClick(item) {
        setModalShow(true);  
        setMondaContent(item);  
    }


  return (
    <section className="team">

      <div className="sec_content">

        {
          modalShow &&
            <TeamContent
          show={modalShow}
          onHide={() => setModalShow(false)}
          data={modalContent}
        />
        }
        <div className="item_row">
          {teamData.map((item) => {
            const { img, name } = item;
            const newId = uuidv4();
            return (
              <Card className="teamCard" key={newId}>
                <Card.Body>
                  <Card.Title>{name}</Card.Title>

                  <div className="teamImg">
                    <Card.Img
                      variant="bottom"
                      style={{ width: "18rem", margin: ".5rem" }}
                      src={
                        process.env.PUBLIC_URL + `/assets/team/team${img}.png`
                      }
                    />
                  </div>

                  <Button variant="primary" onClick={() => handelClick(item)}>
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
