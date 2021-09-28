import {  Button, Modal } from "react-bootstrap";

export default function TeamContent(props) {
  const { img, name, title, lan } = props.data;
  const mail = name.replace(/\s+/g, "_") + "@toaru.com.jp";
  return (
    <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
    >
        <Modal.Header className="m_header modalHeader">
            <Modal.Title id="contained-modal-title-vcenter">{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="modalImg">
            <img
                style={{ height: "100%", margin: ".5rem" }}
                src={process.env.PUBLIC_URL + `/assets/team/team${img}.png`}
                alt={name}
        />
        </div>
        <div className="modalDesc">
            <h4>{title}</h4>
            <span>Language : {lan}</span>
            <br />
            <span>Email : {mail.toLowerCase()}</span>
        </div>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
  );

}
