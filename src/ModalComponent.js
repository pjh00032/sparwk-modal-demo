import React, {Component} from "react";
import './ModalComponent.css';

class ModalComponent extends Component{

    render() {
        const { modalOpen,
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
                autoClose,
                isAutoClose
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
                                    modalBtm_oneBtn :
                                        <button onClick={function ()
                                            {
                                                onBottomFirstButtonClick();
                                                if(isAutoClose){
                                                    autoClose();
                                                }
                                            }}>
                                            {bottomFirstButtonName}
                                        </button>,

                                    modalBtm_twoBtn:
                                        <div>
                                            <button onClick={function ()
                                            {
                                                onBottomFirstButtonClick();
                                                if(isAutoClose){
                                                    autoClose();
                                                }
                                            }}>
                                                {bottomFirstButtonName}
                                            </button>
                                            <button onClick={function ()
                                            {
                                                onBottomSecondButtonClick();
                                                if(isAutoClose){
                                                    autoClose();
                                                }
                                            }}>
                                                {bottomSecondButtonName}
                                            </button>
                                        </div>,
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