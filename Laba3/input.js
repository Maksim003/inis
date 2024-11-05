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
    let offsetX, offsetY;
    let originalPosition = { left: target.style.left, top: target.style.top };

    target.addEventListener('mousedown', (e) => {
        if (isStuck) {
            isStuck = false;
            target.style.backgroundColor = '';
        } else {
            isDragging = true;
            offsetX = e.clientX - target.getBoundingClientRect().left;
            offsetY = e.clientY - target.getBoundingClientRect().top;
            target.style.cursor = 'grabbing';
        }
    });

    target.addEventListener('dblclick', () => {
        isStuck = true;
        colorInterval = setInterval(() => {
            if (isStuck) {
                target.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            }
        }, 300);
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging || isStuck) {
            target.style.position = 'absolute';
            target.style.left = `${e.clientX - (isStuck ? offsetX : 0)}px`;
            target.style.top = `${e.clientY - (isStuck ? offsetY : 0)}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        if (!isStuck) {
            clearInterval(colorInterval);
            isDragging = false;
            target.style.cursor = 'grab';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && (isDragging || isStuck)) {
            isDragging = false;
            isStuck = false;
            target.style.left = originalPosition.left;
            target.style.top = originalPosition.top;
            target.style.cursor = 'grab';
            target.style.backgroundColor = '';
        }
    });
});