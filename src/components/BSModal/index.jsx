import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
// eslint-disable-next-line object-curly-newline
function ModalView({ bsOptions, title, show, children, onClose }) {
    const modalRef = useRef();

    useEffect(() => {
        if (onClose) {
            $(modalRef.current).on('hidden.bs.modal', onClose);
        }
    }, []);

    useEffect(() => {
        bsOptions.show = show;
        if (show) {
            $(modalRef.current).modal(bsOptions);
        } else {
            $(modalRef.current).modal(bsOptions);
        }
    }, [show]);

    return (
        <div ref={modalRef} className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

ModalView.propTypes = {
    title: PropTypes.string,
    show: PropTypes.bool,
    // eslint-disable-next-line
    children: PropTypes.any,
    onClose: PropTypes.func,
    bsOptions: PropTypes.shape({
        show: PropTypes.bool,
        backdrop: PropTypes.oneOf([true, false, 'static']),
        keyboard: PropTypes.bool,
        focus: PropTypes.bool
    })
};

ModalView.defaultProps = {
    title: '',
    show: false,
    children: null,
    onClose: () => {},
    bsOptions: {
        show: false,
        backdrop: true,
        keyboard: true,
        focus: true
    }
};

export default ModalView;
