gsap.timeline({})
    .to('#feuilleun', { y: '30vh',  ease: "bounce.out",duration:4})
    .to('#feuilledeux', { y: '30vh',  ease: "bounce.out",duration:2 },'-=0.5')
    .to('#feeuilletrois', { y: '30vh',  ease: "bounce.out",duration:2},'-=0.5')
    .to('#feuilleequatre', { y: '20vh',  ease: "bounce.out",duration:2 }, '-=0.5')
    .to('#feuillecinq', { y: '30vh',  ease: "bounce.out",duration:2},'-=0.5')
    .to('#feuillesix', { y: '40vh',  ease: "bounce.out",duration:2 }, '-=0.5')