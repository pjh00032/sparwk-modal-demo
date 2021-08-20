import React, {Component, useState} from 'react';
import ModalConfirm from "./ModalConfirm"; // opensource(material-ui)
import { FileDrop } from 'react-file-drop';
import ModalComponent from "./ModalComponent"; // opensource 활용하여 별도로 만든거
import ReactDOM from 'react-dom';

//https://darrengwon.tistory.com/560

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            modalOpen : false,
            modalProps : {
                modalType : "alert_twoBtn",
                modalTitle : "alert_oneBtn",
                modalContentText : "타이틀",
                addModalChildren : null,
                modalBottomType : "one Button Modal",
                bottomFirstButtonName : "OK",
                onBottomFirstButtonClick : (this.onFirstButtonClick),
                autoClose : (this.onAutoClose)
            }
        }

    }

    //modal 창 바깥쪽 클릭시 modal 닫기
    //작동이 되긴 하지만 에러가 있어서 주석 처리
/*
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside, true);
    }

    componentWillUnmount() {
        document.addEventListener('mousedown', this.handleClickOutside, true);
    }

    handleClickOutside = event => {
        const domNode = ReactDOM.findDOMNode(this);
        if(event.target.className === 'openModal modal'){
            console.log("false");
            this.setState({modalOpen : false});
        }

    }*/

    onAutoClose = () => {
        this.setState({modalOpen : false});
    }

    onFirstButtonClick = () => {
        this.setState({modalOpen : false});
        console.log("onFirstButtonClick");
    }

    onModalOpen = (
        modalType,
        modalTitle = "",
        modalContentText = "",
        addModalChildren = null,
        modalBottomType = "modalBtm_oneBtn",
        bottomFirstButtonName = "",
        onBottomFirstButtonClick = null,
        bottomSecondButtonName = "",
        onBottomSecondButtonClick = null,
        bottomThirdButtonName = "",
        onBottomThirdButtonClick = null
    ) => {
        let changeModal = this.state.modalProps;
        changeModal.modalType = modalType;
        changeModal.modalTitle = modalTitle;
        changeModal.modalContentText = modalContentText;
        changeModal.addModalChildren = addModalChildren;
        changeModal.modalBottomType = modalBottomType;
        changeModal.bottomFirstButtonName = bottomFirstButtonName;
        changeModal.onBottomFirstButtonClick = onBottomFirstButtonClick;
        changeModal.bottomSecondButtonName = bottomSecondButtonName;
        changeModal.onBottomSecondButtonClick = onBottomSecondButtonClick;
        changeModal.bottomThirdButtonName = bottomThirdButtonName;
        changeModal.onBottomThirdButtonClick = onBottomThirdButtonClick;


        this.setState({modalProps : changeModal});

        this.setState({modalOpen:true});
    }

    onDropFile = (file, e) => {
        let reader = new FileReader();
        const scope = this;
        let modal = this.state.modalProps;

        reader.onload = function () {
            scope.onModalOpen(
                "",
                "drag & drop test",
                "1. drop file.\r\n2.modal open.(with file)",
                (<img src={reader.result}/>),
                "modalBtm_oneBtn",
                "OK",
                function (){
                    alert("OK");
                },
            );
        }

        reader.readAsDataURL(file[0]);
    }

    render() {

        return (
            <div>
                <ModalComponent
                    modalOpen={this.state.modalOpen}
                    {...this.state.modalProps}
                />

                <div style={{border: '1px solid black', width: 600, color: 'black', padding: 20, height:300, verticalAlign:"middle", textAlign: "center", display:"table-cell"}}>
                    <FileDrop
                        /*                        onFrameDragEnter={(event) => this.onDropFile(event)}
                                                onFrameDragLeave={(event) => console.log('onFrameDragLeave', event)}
                                                onFrameDrop={(event) => console.log('onFrameDrop', event)}
                                                onDragOver={(event) => console.log('onDragOver', event)}
                                                onDragLeave={(event) => console.log('onDragLeave', event)}*/
                        onDrop={(files, event) => this.onDropFile( files, event)}
                    >
                        <h1>Drop some files here!</h1>
                    </FileDrop>
                </div>

                <br/>
                <br/>
                <button onClick={this.alertBtnTest}>
                    Open alert dialog
                </button>
                <br/>
                <br/>
                <button onClick={this.twoBtnTest}>another button</button>
                <br/>
                <br/>
                <button onClick={this.loginTest}>login test</button>


            </div>
        );





    };

    alertBtnTest = () => {
        const change = this;
        this.onModalOpen(
            "",
            "alert test",
            "this is alert test.",
            null,
            "modalBtm_oneBtn",
            "confirm",
            function (){
                alert("confirm");
                //change.setState({modalOpen:false});
            },
        );


    }

    twoBtnTest = () => {
        const change = this;
        this.onModalOpen(
            "",
            "two button test",
            "this is two button test.",
            null,
            "modalBtm_twoBtn",
            "OK",
            function (){
                alert("OK");
                change.setState({modalOpen:false});
            },
            "Cancel",
            function (){
                alert("Cancel");
                change.setState({modalOpen:false});
            },
        );



    }

    buttonOnClick = (changeTest) =>{
        alert("buttonOnClick");
        alert(changeTest);
    }

    loginTest = () => {

        const change = this;
        let changeTest = '';

        const loginForm = (
            <div>
                <input type={"text"} onChange={function(e){
                    changeTest = e.target.value;
                }}/>
                <button onClick={() => this.buttonOnClick(changeTest)}>check</button>
            </div>
        );

        this.onModalOpen(
            "",
            "login form test",
            "",
            loginForm,
            "modalBtm_twoBtn",
            "OK",
            function (){
                alert("OK");
                change.setState({modalOpen:false});
            },
            "Cancel",
            function (){
                alert("Cancel");
                change.setState({modalOpen:false});
            },
        );


    }

}
