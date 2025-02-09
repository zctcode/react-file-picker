import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import FilePicker from './components';
import './components/style.css';
import './index.scss';

function App() {
    const [files1, setFiles1] = useState<File[]>([]);
    const [files2, setFiles2] = useState<File[]>([]);

    return (
        <div className="container">
            <div className="container__left">
                <div className='container__title'>
                    <h4>Default</h4>
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                    <FilePicker
                        style={{ width: 200 }}
                        multiple
                        onChange={(files) => setFiles1(Array.from(files || []))}
                    >
                        Click (file)
                    </FilePicker>
                    <FilePicker
                        style={{ width: 200 }}
                        directory
                        onChange={(files) => setFiles1(Array.from(files || []))}
                    >
                        Click (directory)
                    </FilePicker>
                </div>
                {files1.map((file, index) => (<div key={index} className="file-item">
                    {file.name}
                </div>))}
            </div>
            <div className="container__right">
                <div className='container__title'>
                    <h4>Drag and Drop</h4>
                </div>
                <FilePicker
                    draggable
                    className='container__right__file-picker'
                    onChange={(files) => setFiles2(Array.from(files || []))}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="ihs-plus-icon" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
                    </svg>
                    <div>Click or drag file to this area.</div>
                </FilePicker>
                {files2.map((file, index) => (<div key={index} className="file-item">
                    {file.name}
                </div>))}
            </div>
        </div>
    );
}

const container = document.getElementById('root') || document.body;
const root = createRoot(container);
root.render(<App />);