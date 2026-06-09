import '../Modal/Modal.scss'
import Carousel from '../../components/Carousel'

function Modal({ project, onClose }) {
    return (
        <div
            className="modal-overlay"
            onClick={onClose}
        >
            <div
                className="modal"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="modal-close"
                    onClick={onClose}
                >
                    ×
                </button>

                <div className="modal-gallery">
                    <Carousel images={project.gallery} />
                </div>

                <div className="modal-details">

                    <img
                        src={project.image}
                        alt={project.title}
                        className="modal-logo"
                    />

                    <p className="modal-description">
                        {project.description}
                    </p>
                    <div className="modal-links">

                        <p>
                            <strong>GitHub:</strong>{' '}
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Repository
                            </a>
                        </p>

                        <p>
                            <strong>Website:</strong>{' '}
                            <a
                                href={project.website}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit Website
                            </a>
                        </p>

                    </div>
                    <div className="modal-technologies">
                        {project.technologies.join(' • ')}
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Modal;