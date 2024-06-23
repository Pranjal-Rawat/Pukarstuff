// document.addEventListener('DOMContentLoaded', () => {
//     const menuBtn = document.querySelector('.menu-btn');
//     const closeBtn = document.querySelector('.close-btn');
//     const sideNav = document.querySelector('.side-nav');

//     // Toggle the navigation menu
//     menuBtn.addEventListener('click', () => {
//         sideNav.classList.toggle('active');
//     });

//     closeBtn.addEventListener('click', () => {
//         sideNav.classList.remove('active');
//     });

//     // Scroll animations using Intersection Observer API
//     const sections = document.querySelectorAll('.content');
//     const options = {
//         root: null,
//         threshold: 0.1,
//         rootMargin: "0px"
//     };

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visible');
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, options);

//     sections.forEach(section => {
//         observer.observe(section);
//     });

//     // Button click interactions
//     const buttons = document.querySelectorAll('.animated-btn');
//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             button.classList.add('clicked');
//             setTimeout(() => {
//                 button.classList.remove('clicked');
//             }, 300);
//         });
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const sideNav = document.querySelector('.side-nav');

    // Toggle the navigation menu
    menuBtn.addEventListener('click', () => {
        sideNav.classList.toggle('active');
    });

    closeBtn.addEventListener('click', () => {
        sideNav.classList.remove('active');
    });

    // Scroll animations using Intersection Observer API
    const sections = document.querySelectorAll('.content');
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Button click interactions
    const buttons = document.querySelectorAll('.animated-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('clicked');
            setTimeout(() => {
                button.classList.remove('clicked');
            }, 300);
        });
    });
});

