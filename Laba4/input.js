/*document.querySelectorAll('.target').forEach(target => {
    const colors = [
        'yellow', 'red', 'blue', 'green', 'orange',
        'purple', 'pink', 'cyan', 'magenta', 'lime',
        'brown', 'teal', 'navy', 'gold', 'silver',
        'coral', 'salmon', 'violet', 'khaki', 'lavender'
    ];
    let colorInterval;
    let isDragging = false;
    let isStuck = false;
    let isResizing = false;
    let offsetX, offsetY;
    let originalPosition = { left: target.style.left || '0px', top: target.style.top || '0px' };
    let initialTouch = null;

    // Минимальный размер элемента
    const minSize = 50;

    // Элемент для изменения размера
    const resizeHandle = document.createElement('div');
    resizeHandle.style.width = '10px';
    resizeHandle.style.height = '10px';
    resizeHandle.style.backgroundColor = 'black';
    resizeHandle.style.position = 'absolute';
    resizeHandle.style.bottom = '0';
    resizeHandle.style.right = '0';
    resizeHandle.style.cursor = 'se-resize';
    target.appendChild(resizeHandle);

    target.addEventListener('mousedown', (e) => {
        if (e.target === resizeHandle) {
            startResizing(e.clientX, e.clientY);
        } else {
            startDragging(e.clientX, e.clientY);
        }
    });

    target.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        if (e.touches.length > 1) {
            resetElement();
        } else {
            if (isStuck) {
                moveElement(touch.clientX, touch.clientY); // Следует за пальцем
            } else {
                initialTouch = touch;
                startDragging(touch.clientX, touch.clientY);
            }
        }
    });

    document.addEventListener('touchmove', (e) => {
        if (isDragging) {
            const touch = e.touches[0];
            moveElement(touch.clientX, touch.clientY);
        } else if (isResizing) {
            const touch = e.touches[0];
            resizeElement(touch.clientX, touch.clientY);
        }
    });

    target.addEventListener('dblclick', () => {
        startSticking();
    });

    target.addEventListener('touchend', (e) => {
        if (e.touches.length === 0) {
            resetElement();
        }
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging || isStuck) {
            moveElement(e.clientX, e.clientY);
        } else if (isResizing) {
            resizeElement(e.clientX, e.clientY);
        }
    });

    document.addEventListener('mouseup', () => {
        stopDragging();
        stopResizing();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && (isDragging || isStuck)) {
            resetElement();
        }
    });

    function startDragging(clientX, clientY) {
        if (isStuck) {
            isStuck = false;
            target.style.backgroundColor = '';
        } else {
            isDragging = true;
            offsetX = clientX - target.getBoundingClientRect().left;
            offsetY = clientY - target.getBoundingClientRect().top;
            target.style.cursor = 'grabbing';
        }
    }

    function moveElement(clientX, clientY) {
        target.style.position = 'absolute';
        target.style.left = `${clientX - (isStuck ? offsetX : 0)}px`;
        target.style.top = `${clientY - (isStuck ? offsetY : 0)}px`;
    }

    function stopDragging() {
        if (!isStuck) {
            clearInterval(colorInterval);
            isDragging = false;
            target.style.cursor = 'grab';
        }
    }

    function startSticking() {
        isStuck = true;
        colorInterval = setInterval(() => {
            if (isStuck) {
                target.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            }
        }, 300);
    }

    function resetElement() {
        isDragging = false;
        isStuck = false;
        target.style.left = originalPosition.left;
        target.style.top = originalPosition.top;
        target.style.cursor = 'grab';
        target.style.backgroundColor = '';
        clearInterval(colorInterval);
    }

    function startResizing(clientX, clientY) {
        isResizing = true;
        initialWidth = target.offsetWidth;
        initialHeight = target.offsetHeight;
        initialX = clientX;
        initialY = clientY;
    }

    function resizeElement(clientX, clientY) {
        const widthDiff = clientX - initialX;
        const heightDiff = clientY - initialY;

        const newWidth = Math.max(minSize, initialWidth + widthDiff);
        const newHeight = Math.max(minSize, initialHeight + heightDiff);

        target.style.width = `${newWidth}px`;
        target.style.height = `${newHeight}px`;
    }

    function stopResizing() {
        isResizing = false;
    }
});*/
document.querySelectorAll('.target').forEach(target => {
    const colors = [
        'yellow', 'red', 'blue', 'green', 'orange',
        'purple', 'pink', 'cyan', 'magenta', 'lime',
        'brown', 'teal', 'navy', 'gold', 'silver',
        'coral', 'salmon', 'violet', 'khaki', 'lavender'
    ];
    let colorInterval;
    let isDragging = false;
    let isStuck = false;
    let isResizing = false;
    let offsetX, offsetY;
    let originalPosition = { left: target.style.left || '0px', top: target.style.top || '0px' };
    let initialTouch = null;

    // Минимальный размер элемента
    const minSize = 50;

    // Элемент для изменения размера
    const resizeHandle = document.createElement('div');
    resizeHandle.style.width = '10px';
    resizeHandle.style.height = '10px';
    resizeHandle.style.backgroundColor = 'black';
    resizeHandle.style.position = 'absolute';
    resizeHandle.style.bottom = '0';
    resizeHandle.style.right = '0';
    resizeHandle.style.cursor = 'se-resize';
    target.appendChild(resizeHandle);

    target.addEventListener('mousedown', (e) => {
        if (e.target === resizeHandle) {
            startResizing(e.clientX, e.clientY);
        } else {
            startDragging(e.clientX, e.clientY);
        }
    });

    target.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        if (e.touches.length > 1) {
            resetElement();
        } else {
            if (isStuck) {
                moveElement(touch.clientX, touch.clientY); // Следует за пальцем
            } else {
                initialTouch = touch;
                startDragging(touch.clientX, touch.clientY);
            }
        }
    });

    document.addEventListener('touchmove', (e) => {
        if (isDragging) {
            const touch = e.touches[0];
            moveElement(touch.clientX, touch.clientY);
        } else if (isResizing) {
            const touch = e.touches[0];
            resizeElement(touch.clientX, touch.clientY);
        }
    });

    target.addEventListener('dblclick', () => {
        startSticking();
    });

    target.addEventListener('touchend', (e) => {
        if (e.touches.length === 0) {
            resetElement();
        } else if (e.touches.length > 1) {
            resetElement();
        }
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging || isStuck) {
            moveElement(e.clientX, e.clientY);
        } else if (isResizing) {
            resizeElement(e.clientX, e.clientY);
        }
    });

    document.addEventListener('mouseup', () => {
        stopDragging();
        stopResizing();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && (isDragging || isStuck)) {
            resetElement();
        }
    });

    function startDragging(clientX, clientY) {
        if (isStuck) {
            isStuck = false;
            target.style.backgroundColor = '';
        } else {
            isDragging = true;
            offsetX = clientX - target.getBoundingClientRect().left;
            offsetY = clientY - target.getBoundingClientRect().top;
            target.style.cursor = 'grabbing';
        }
    }

    function moveElement(clientX, clientY) {
        target.style.position = 'absolute';
        target.style.left = `${clientX - (isStuck ? offsetX : 0)}px`;
        target.style.top = `${clientY - (isStuck ? offsetY : 0)}px`;
    }

    function stopDragging() {
        if (!isStuck) {
            clearInterval(colorInterval);
            isDragging = false;
            target.style.cursor = 'grab';
        }
    }

    function startSticking() {
        isStuck = true;
        colorInterval = setInterval(() => {
            if (isStuck) {
                target.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            }
        }, 300);
    }

    function resetElement() {
        isDragging = false;
        isStuck = false;
        target.style.left = originalPosition.left;
        target.style.top = originalPosition.top;
        target.style.cursor = 'grab';
        target.style.backgroundColor = '';
        clearInterval(colorInterval);
    }

    function startResizing(clientX, clientY) {
        isResizing = true;
        initialWidth = target.offsetWidth;
        initialHeight = target.offsetHeight;
        initialX = clientX;
        initialY = clientY;
    }

    function resizeElement(clientX, clientY) {
        const widthDiff = clientX - initialX;
        const heightDiff = clientY - initialY;

        const newWidth = Math.max(minSize, initialWidth + widthDiff);
        const newHeight = Math.max(minSize, initialHeight + heightDiff);

        target.style.width = `${newWidth}px`;
        target.style.height = `${newHeight}px`;
    }

    function stopResizing() {
        isResizing = false;
    }
});

