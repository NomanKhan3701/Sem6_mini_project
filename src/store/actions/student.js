import axios from 'axios';
import * as actionTypes from '../constants/actionTypes';


export const setDocuments = (data) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        data: data,
    };
};

export const setUploadDocumentModal = (data) => {
    return {
        type: actionTypes.UPLOAD_DOCUMENT_MODAL,
        data: data,
    };
}

