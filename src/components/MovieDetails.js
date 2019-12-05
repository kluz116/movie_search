import React, {useState} from 'react'
import { Button,Col,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const MovieDetails = (props, {onDetails})=>{
    const {
        details,
        modal,
        className
      } = props;
    const {Plot,Year,Rated,Released,Runtime,Genre,Director,Writer,Title} = details

    const [modal_state, setModalState] = useState(modal);

    const toggle = () => setModalState(!modal);
    
    return (
            <div>
                <Modal isOpen={modal} toggle={onDetails} className={className}>
                <ModalHeader toggle={onDetails}>{Title}</ModalHeader>
                <ModalBody>
                     <Col>
                        <div>
                            <p> {Plot}</p>
                            <p> {Year}</p>
                            <p> {Rated}</p>
                            <p> {Released}</p>
                            <p> {Runtime}</p>
                            <p> {Genre}</p>
                            <p> {Director}</p>
                            <p> {Writer}</p>
                        </div> 
                     </Col>
                   
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>OK</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
             </Modal>
            </div>
        )
}
export default MovieDetails