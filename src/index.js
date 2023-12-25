import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//export edilen App function default olarak export edildiğinden dolayı {} içerisine almadık
//export edilirken default yazılmaz ise burada import edilirken {} arasında export edilen yazılmalıdır.
//Default olarak sadece 1 alan export edilebilir. exportlara birden fazla default tanımlanamaz.
import App from './App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
