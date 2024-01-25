// Three arrays for the strings that will be called upon by the fortune cookie generator.
const subject = ['You', 'Someone you know', 'A friend', 'A coworker', 'An old friend', 'Your boss', 'A relative'];
const verb = ['will see', 'will reveal', 'will think of', 'will hear about', 'will anticipate', 'will dread', 'will receive'];
const predicate = ['an important character trait.', 'the arrival of someone important.', 'something on the horizon.', 'a change coming your way.', 'something that you missed.', 'a new ambition to pursue.', 'an encouragement from you.'];



// Randomizer functions that will be called upon by the fortune cooke function.
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


