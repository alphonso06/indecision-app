import React from 'react'
import Modal from 'react-modal'

export default function OptionModal (props) {
    return (
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.handleCloseModal}
            contentLabel="You should: "
            ariaHideApp={false}
            closeTimeoutMS={300}
            className="modal"
        >
            <h3 className="modal__title">You should: </h3>
            {
                props.selectedOption && <p className="modal__body">{props.selectedOption}</p>
            }
            <button className="button" onClick={props.handleCloseModal}>Sure!</button>
        </Modal>
    )
}