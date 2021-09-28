import { Form, Button } from "react-bootstrap"

export default function Contact() {
  const submitForm = () => {

  }
  return (
    <section>

      <div className="sec_content">
        <Form onSubmit={submitForm} className="contact_form">
          <Form.Group className="mb-3" size="lg" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3" size="lg" controlId="formBasicEmail">
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            size="lg"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label> Message</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>
          <Form.Group className="mb-3 formStyle" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Emergent!" />
          </Form.Group>
          <Button variant="light">Confirm</Button>
        </Form>
      </div>
    </section>
  );
}
