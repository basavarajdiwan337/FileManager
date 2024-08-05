import { ADD_FILES, REMOVE_FILE, UPDATE_FILE_STATUS } from './actions';

const initialState = {
  files: []
};

const uploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILES:
      return {
        ...state,
        files: [...state.files, ...action.payload]
      };
    case REMOVE_FILE:
      return {
        ...state,
        files: state.files.filter(file => file.uri !== action.payload)
      };
    case UPDATE_FILE_STATUS:
      return {
        ...state,
        files: state.files.map(file => file.uri === action.payload.fileUri ? { ...file, status: action.payload.status } : file)
      };
    default:
      return state;
  }
};

export default uploadReducer;
