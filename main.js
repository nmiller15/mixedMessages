// Three arrays for the strings that will be called upon by the fortune cookie generator.
const intros = ['You have disturbed the mystical fortune-telling powers!! Prepare to receive a fortune!', '~Crrrackk!~ That was one tough cookie. Lets hope the fortune is worth it!', 'You don\'t actually believe these things do you? ... fine, here\'s your fortune I guess.', 'Get ready, this one will probably be life altering...', 'Thank you for contacting Fortune Cookies, Ltd. If you are not satisfied with the following fortune, please give us a call at 1-800-BAD-PSYC', 'You really shouldn\'t request this many fortunes...', 'Evaluating facial expressions..........HEY!', 'Drumroll please!', 'We accept tips in bitcoin...just sayin']
const subject = ['You', 'Someone you know', 'A friend', 'A coworker', 'An old friend', 'Your boss', 'A relative'];
const verb = ['will see', 'will reveal', 'will think of', 'will hear about', 'will anticipate', 'will dread', 'will receive'];
const predicate = ['an important character trait.', 'the arrival of someone important.', 'something on the horizon.', 'a change coming your way.', 'something that you missed.', 'a new ambition to pursue.', 'an encouragement from you.'];



// Randomizer functions that will be called upon by the fortune cooke function.
function getIntros() {
    let i= Math.floor(Math.random() * intros.length);
    return intros[i];
}

function getSubject() {
    let i = Math.floor(Math.random() * subject.length);
    return subject[i];
};

function getVerb() {
    let i = Math.floor(Math.random() * verb.length);
    return verb[i];
};

function getPredicate() {
    let i = Math.floor(Math.random() * predicate.length);
    return predicate[i];
}


// Fortune cookie function that will log a random fortune to the console.
function fortuneCookie () {
    const introString = getIntros();
    const subjectString = getSubject();
    const verbString = getVerb();
    const predicateString = getPredicate();

    console.log('.');
    console.log('..');
    console.log(introString);
    console.log('..');
    console.log('.');
    console.log('..');
    console.log(`${subjectString} ${verbString} ${predicateString}`);
    console.log('..');
    console.log('.');
    console.log('..');
    console.log('Leave a tip?');
    console.log('15% 20% 25%');
}

fortuneCookie()