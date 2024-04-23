import './title.css';

let titleAnimation = document.getElementById('title-lottie');

titleAnimation.addEventListener('ready', () => {
    setTimeout(() => {
        titleAnimation.play();
    }, 700);
});
