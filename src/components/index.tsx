import * as React from 'react';
import cn from 'classnames';

interface FilePickerProps {
    className?: string;
    style?: React.CSSProperties;
    accept?: string;
    multiple?: boolean;
    directory?: boolean;
    draggable?: boolean;
    children?: React.ReactNode;
    onChange?: (files: FileList | null) => void;
}

const PlusIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="ihs-plus-icon" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
        </svg>
    );
};

const FilePicker: React.FC<FilePickerProps> = (props) => {
    const [dragging, setDragging] = React.useState(false);

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();

        const input = document.createElement('input');
        input.type = 'file';
        input.accept = props.accept || '*/*';
        input.multiple = Boolean(props.multiple);
        input.webkitdirectory = Boolean(props.directory);
        input.onchange = () => {
            props.onChange?.(input.files);
        }
        input.click();
        input.remove();
    };

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragging(false);
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragging(false);

        if (e.dataTransfer.types.includes('Files')) {
            props.onChange?.(e.dataTransfer.files);
        }
    }

    const classes = cn('ihc-file-picker__wrapper', {
        'ihc-file-picker__draggable': props.draggable,
        'ihc-file-picker__dragging': dragging
    }, props.className);

    const dragProps: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> = props.draggable ? {
        onDragEnter: handleDragEnter,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop
    } : {};

    return (
        <div
            style={props.style}
            className={classes}
            onClick={handleClick}
            {...dragProps}
        >
            {props.children || <PlusIcon />}
        </div>
    );
}

export default FilePicker;
