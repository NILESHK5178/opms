import { useState, useReducer } from 'react';

function useGlobalState() {
    const [state, setState] = useState({
        userimage: ''
        });
    
    const actions = (action) => {
        const {type, payload} = action;
        switch(type) {
            case 'setState':
                return setState(payload);
            default:
                return state;
        }
    }
    return {state, actions}
}

export default useGlobalState;