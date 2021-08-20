import React, {Component} from "react";
import './ModalComponent.css';

class ModalComponent extends Component{

    render() {
        const { modalOpen,
                close,
                modalTitle,
                modalContentText,
            addModalChildren,
                modalBottomType,
                bottomFirstButtonName ,
                onBottomFirstButtonClick,
                bottomSecondButtonName,
                onBottomSecondButtonClick,
                bottomThirdButtonName,
                onBottomThirdButtonClick,
                autoClose
                 } = this.props;

        return(
            <div className={ modalOpen ? 'openModal modal': 'modal' }>
                { modalOpen ? (
                    <section>
                        <header>
                            { modalTitle }
                            <button className="close" onClick={autoClose}> &times; </button>
                        </header>
                        <main>
                            {modalContentText? <div>{modalContentText}</div> : ''}
                            {this.props.children}
                            {addModalChildren}
                        </main>
                        <footer>
                            {
                                {
                                    /*alert_oneBtn:<button onClick={onBottomFirstButtonClick}>{bottomFirstButtonName}</button>,*/
                                    modalBtm_oneBtn : <button onClick={function (){ onBottomFirstButtonClick(); autoClose();}}>{bottomFirstButtonName}</button>,
                                    modalBtm_twoBtn:<div><button onClick={function (){ onBottomFirstButtonClick(); autoClose();}}>{bottomFirstButtonName}</button><button onClick={function (){ onBottomSecondButtonClick(); autoClose();}}>{bottomSecondButtonName}</button></div>,
                                }[modalBottomType]

                            }
                        </footer>
                    </section>
                ) : null }
            </div>

        );
    }
}
export default ModalComponent;