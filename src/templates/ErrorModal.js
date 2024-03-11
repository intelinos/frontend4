function ErrorModal() {
    return (
        <div id="error-modal" className="modal">
            <div className="modal-content">
                <span className="close">&times;</span>
                <p id="error-message"></p>
            </div>
        </div>
    )
}

export default ErrorModal
