import React from 'react';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';
import { ThemeProvider } from "@material-ui/core/styles";
import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';

const theme = unstable_createMuiStrictModeTheme();

const ModalConfirm
    = ({ modalOpen = false,
           modalType,
           modalTitle = '',
           modalContentText = '',
           addModalChildren,
           modalBottomType = '',
           bottomFirstButtonName = '',
           onBottomFirstButtonClick = null,
           bottomSecondButtonName = '',
           onBottomSecondButtonClick = null,
           bottomThirdButtonName = '',
           onBottomThirdButtonClick = null,
           autoClose
    }) => {

    return (
        <ThemeProvider theme = {theme}>
            <Dialog
                open={modalOpen}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{modalTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {modalContentText}
                        {addModalChildren}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {
                        {
                            /*alert_oneBtn:<button onClick={onBottomFirstButtonClick}>{bottomFirstButtonName}</button>,*/
                            modalBtm_oneBtn : <button onClick={function (){onBottomFirstButtonClick(); autoClose();}}>{bottomFirstButtonName}</button>,
                            modalBtm_twoBtn:<div><button onClick={onBottomFirstButtonClick}>{bottomFirstButtonName}</button><button onClick={onBottomSecondButtonClick}>{bottomSecondButtonName}</button></div>,
                        }[modalBottomType]

                    }
                </DialogActions>
            </Dialog>
        </ThemeProvider>

    );
}
export default ModalConfirm;
