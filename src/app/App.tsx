import React from 'react';
import ButtonUI from '../components/ButtonUI';
import IconButton from '../components/IconButton/IconButton';


const App: React.FC = () => {
    return (
        <div>
            <ButtonUI variant='primary'>Сменить место</ButtonUI>
            <ButtonUI variant='secondary'>Сменить место</ButtonUI>
        </div>
    )
}

export default App;