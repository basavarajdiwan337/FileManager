export const ADD_FILES = 'ADD_FILES';
export const REMOVE_FILE = 'REMOVE_FILE';
export const UPDATE_FILE_STATUS = 'UPDATE_FILE_STATUS';

export const addFiles = (files) => ({
  type: ADD_FILES,
  payload: files
});

export const removeFile = (fileUri) => ({
  type: REMOVE_FILE,
  payload: fileUri
});

export const updateFileStatus = (fileUri, status) => ({
  type: UPDATE_FILE_STATUS,
  payload: { fileUri, status }
});
