import {Modal,Button } from "react-bootstrap";
import {useState} from "react"
import { editTask } from "../JS/actions/task";
import {useDispatch} from "react-redux"

function Edit({task}) {
  const [show, setShow] = useState(false);
  const [newTitle, setnewTitle] = useState(task.description)
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = () => {
      dispatch(editTask(task.id, newTitle))
  handleClose()
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit the task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="text" onChange={(e)=> setnewTitle(e.target.value)} value={newTitle}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edit;