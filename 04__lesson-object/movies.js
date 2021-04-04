const state = [{
    id: '11',
    title: 'The Simpsons Guy: Part 1',
    duration: 1320000,
    description: 'The Griffins travel to Springfield, where they are greeted by friendly stranger Homer Simpson, who welcomes his new "albino" friends with open arms.',
    episodeNumber: 1,
    sessionNumber: 13
}, {
    id: '22',
    title: 'The Simpsons Guy: Part 2',
    duration: 1320000,
    description: 'As the Griffins visit the Simpsons, Stewie and Bart make a lucrative trade, Lisa teaches Meg the saxophone, and Peter and Homer squabble about beer.',
    episodeNumber: 2,
    sessionNumber: 13
}, {
    id: '33',
    title: 'Book of Joe',
    duration: 1260000,
    description: '',
    episodeNumber: 1,
    sessionNumber: 11
}, {
    id: '44',
    title: 'Brian the Closer',
    duration: 1320000,
    description: 'Lisa teaches Meg the saxophone, and Peter and Homer squabble about beer.',
    episodeNumber: 3,
    sessionNumber: 13
}];


changeEpisode(state, 2, 'Brian');

const changeEpisode = function(state, number, title) {
    return state.map(function(episode) {
        return episode.episodeNumber !== number ? { ...episode } : { ...episode, title: title }
    });
}

// O(N)

const hashedState = {
    '11': {
        id: '11',
        title: 'The Simpsons Guy: Part 1',
        duration: 1320000,
        description: 'The Griffins travel to Springfield, where they are greeted by friendly stranger Homer Simpson, who welcomes his new "albino" friends with open arms.',
        episodeNumber: 1,
        sessionNumber: 13
    },
    '22': {
        id: '22',
        title: 'The Simpsons Guy: Part 2',
        duration: 1320000,
        description: 'As the Griffins visit the Simpsons, Stewie and Bart make a lucrative trade, Lisa teaches Meg the saxophone, and Peter and Homer squabble about beer.',
        episodeNumber: 2,
        sessionNumber: 13
    },
    '33': {
        id: '33',
        title: 'Book of Joe',
        duration: 1260000,
        description: '',
        episodeNumber: 1,
        sessionNumber: 11
    },
    id: {

    }
};
const stateIds = ['11', '22', '33'];

Object.values(hashedState);

const map = new Map({
    '1': '',
    1: '',
});

// O(1)

const changeEpisode = (state, id, title) => {
    return {
        ...state,
        [id]: {
            ...state[id],
            title
        }
    };
}

changeEpisode(hashedState, '22', 'Нет его')


for(let i =0; i < stateIds.length; i++) {
    hashedState[i].title
}

// delete hashedState['22']
// O(N)