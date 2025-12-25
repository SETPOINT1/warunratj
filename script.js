const snowContainer = document.getElementById('snowContainer');

function createSnow() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + 'vw';
    const size = Math.random() * 5 + 3 + 'px';
    snowflake.style.width = size; snowflake.style.height = size;
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random() * 0.5 + 0.3;
    snowContainer.appendChild(snowflake);
    setTimeout(() => { snowflake.remove(); }, 5000);
}

const snowInterval = setInterval(createSnow, 150);

function openGift() {
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.volume = 0.5;
    bgMusic.play().catch(e => console.log("Click to play music"));

    document.querySelector('.gift-lid').classList.add('open');
    createConfetti(); 

    const flash = document.getElementById('flash-overlay');
    setTimeout(() => {
        flash.style.opacity = '1';
        
        setTimeout(() => {
            document.body.style.backgroundColor = 'var(--bg-red)';
            document.getElementById('intro-scene').style.display = 'none';
            document.getElementById('memory-scene').style.display = 'flex';
            
            clearInterval(snowInterval);
            document.getElementById('snowContainer').innerHTML = ''; 

            startMagicSnowballs();
            
            flash.style.opacity = '0';
        }, 800);
    }, 300);
}

function startMagicSnowballs() {
    const container = document.getElementById('snowballContainer');
    setInterval(() => {
        const ball = document.createElement('div');
        ball.classList.add('magic-snowball');
        ball.style.left = Math.random() * 100 + 'vw';
        const size = Math.random() * 40 + 10 + 'px';
        ball.style.width = size; ball.style.height = size;
        ball.style.animationDuration = Math.random() * 5 + 5 + 's';
        ball.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(ball);
        setTimeout(() => { ball.remove(); }, 12000);
    }, 400);
}

function createConfetti() {
    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = '50%'; confetti.style.top = '50%';
        confetti.style.width = '10px'; confetti.style.height = '10px';
        const colors = ['#ff0', '#fff', 'gold', '#f00'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.zIndex = '999';
        document.body.appendChild(confetti);
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = 200 + Math.random() * 200;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;

        setTimeout(() => {
            confetti.style.transition = 'all 1s ease-out';
            confetti.style.transform = `translate(${tx}px, ${ty}px) rotate(${Math.random() * 360}deg)`;
            confetti.style.opacity = '0';
        }, 10);
        setTimeout(() => { confetti.remove(); }, 1200);
    }
}