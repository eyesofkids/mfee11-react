import React from 'react'
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap'

const AnimalModal = props => {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            寵物資料 {props.disableIdField ? '編輯' : '新增'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                編號
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              name="id"
              disabled={props.disableIdField}
              value={
                /* 因為props預設為0，不要該數字0出現，應該是出現空白字串 */
                props.id ? props.id : ''
              }
              onChange={props.handleModalFormInputChange}
            />
          </InputGroup>
          <br />
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                姓名
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              name="name"
              value={props.name}
              onChange={props.handleModalFormInputChange}
            />
          </InputGroup>
          <br />
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                出生年月日
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              name="birth"
              value={
                /* 因為props預設為0，不要該數字0出現，應該是出現空白字串(第二種寫法) */
                props.birth || ''
              }
              onChange={props.handleModalFormInputChange}
            />
          </InputGroup>
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            關閉
          </Button>
          <Button variant="primary" onClick={props.handleModalFormInputSave}>
            儲存
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AnimalModal
