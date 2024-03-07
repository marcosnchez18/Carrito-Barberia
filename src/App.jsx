import React, { useState } from 'react';
import Vista_principal from './pages/HomePage';
import Otra_vista from './pages/OtherPage';
function App() {
    const [mostrar_vista_principal, set_mostrar_vista_principal] = useState(true);
    const cambiar_vista = () => {
        set_mostrar_vista_principal(!mostrar_vista_principal);
    };
    return (
        <div className="App">
            {mostrar_vista_principal ? (
                <Vista_principal onClick={cambiar_vista} />
            ) : (
                <Otra_vista onClick={cambiar_vista} />
            )}
        </div>
    );
}

export default App;
