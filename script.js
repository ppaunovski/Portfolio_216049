const fillSkillBar = document.querySelectorAll('.fill-in');

const options = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};

const fillOnScroll = new IntersectionObserver
(function(entries, fillOnScroll){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }

        entry.target.classList.add('active');
        fillOnScroll.unobserve(entry.target);

    })
}, options);

fillSkillBar.forEach(filler => {
    fillOnScroll.observe(filler);
});