import {createGlobalState} from 'react-hooks-global-state';

const {setGlobalState, useGlobalState} = createGlobalState({
    key: 'test'
})

export { useGlobalState, setGlobalState};
