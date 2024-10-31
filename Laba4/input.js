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
    let initialWidth, initialHeight, initialX, initialY;
    let originalPosition = { left: target.style.left, top: target.style.top };
    let initialTouch = null;

    const minSize = 50; // Минимальный размер элемента

    // Добавляем элемент для изменения размера
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
        if (e.target === resizeHandle) {
            startResizing(touch.clientX, touch.clientY);
        } else {
            startDragging(touch.clientX, touch.clientY);
            initialTouch = touch;
        }
    });

    target.addEventListener('dblclick', () => {
        startSticking();
    });

    target.addEventListener('touchend', (e) => {
        if (initialTouch && e.changedTouches[0].identifier === initialTouch.identifier) {
            startSticking();
        }
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging || isStuck) {
            moveElement(e.clientX, e.clientY);
        } else if (isResizing) {
            resizeElement(e.clientX, e.clientY);
        }
    });

    document.addEventListener('touchmove', (e) => {
        if (isDragging || isStuck) {
            const touch = e.touches[0];
            moveElement(touch.clientX, touch.clientY);
        } else if (isResizing) {
            const touch = e.touches[0];
            resizeElement(touch.clientX, touch.clientY);
        }
    });

    document.addEventListener('mouseup', () => {
        stopDragging();
        stopResizing();
    });

    document.addEventListener('touchend', (e) => {
        if (e.touches.length === 0) {
            stopDragging();
            stopResizing();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isDragging || isStuck) {
            resetElement();
        }
    });

    document.addEventListener('touchstart', (e) => {
        if (e.touches.length > 1 && isDragging || isStuck) {
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
    }

    function startResizing(clientX, clientY) {
        isResizing = true;
        initialWidth = target.offsetWidth;
        initialHeight = target.offsetHeight;
        initialX = clientX;
        initialY = clientY;
    }

    function resizeElement(clientX, clientY) {
        const newWidth = initialWidth + (clientX - initialX);
        const newHeight = initialHeight + (clientY - initialY);
        target.style.width = `${Math.max(newWidth, minSize)}px`;
        target.style.height = `${Math.max(newHeight, minSize)}px`;
    }

    function stopResizing() {
        isResizing = false;
    }
});