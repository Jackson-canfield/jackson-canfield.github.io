let title = document.title;
let intervalTimer = null;
let sayings = [
    'Come back!',
    'Where\'d ya go?'
]
let sayingIndex = 0;
window.addEventListener('blur', function() {
    intervalTimer = setInterval(function() {
        document.title = sayings[sayingIndex];
        sayingIndex++
        if (sayingIndex >= sayings.length) sayingIndex = 0;
    }, 6000);
});
window.addEventListener('focus', function() {
    if (intervalTimer === null || document.title === title) return;
    clearInterval(intervalTimer);
    setTimeout(function() {
        document.title = title;
    }, 2000);
    document.title = '🙂 Welcome back!';
});