import * as actionTypes from '../constants/actionTypes';

export const updateObject = (oldObject, updatedProperties) => {
    const updated = {
        ...oldObject,
        ...updatedProperties,
    };
    return updated;
};

const initialState = {
    uploadDocumentModal: {
        show: false,
        type: "tpo",
    },
    documents: [],
}

const updateDocuments = (state, action) => {
    return updateObject(state, { documents: action.data })
}

const updateUploadDocumentModal = (state, action) => {
    return updateObject(state, { uploadDocumentModal: action.data })
}

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DOCUMENTS:
            return updateDocuments(state, action)
        case actionTypes.UPLOAD_DOCUMENT_MODAL:
            return updateUploadDocumentModal(state, action)
        default:
            return state
    }
}

export default studentReducer