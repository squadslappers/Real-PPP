const progressions = [
    {
        progress: 'emotional',
        date: 'date',
        problem: 'problem',
        category: 'emotional',
        id: 1
    },
    {
        progress: 'environmental',
        date: 'date',
        problem: 'problem',
        category: 'environmental',
        id: 2
    },
    {
        progress: 'intellectual',
        date: 'date',
        problem: 'problem',
        category: 'intellectual',
        id: 3
    },
    {
        progress: 'occupational',
        date: 'date',
        problem: 'problem',
        category: 'occupational',
        id: 4
    },
    {
        progress: 'physical',
        date: 'date',
        problem: 'problem',
        category: 'physical',
        id: 5
    },
    {
        progress: 'social',
        date: 'date',
        problem: 'problem',
        category: 'social',
        id: 6
    },
    {
        progress: 'spiritual',
        date: 'date',
        problem: 'problem',
        category: 'spiritual',
        id: 7
    }
];
const performers = [];
let id = 3;

module.exports = {

    // getProgressions: (req,res) => {
    //     res.status(200).send(progressions)
    // },

    postProgression: (req, res) => {
        const newGoal = {
            progress: req.body.progress,
            date: req.body.date,
            problem: req.body.problem,
            category: req.body.category,
            id: id++
        }
        progressions.push(newGoal);
        res.status(200).send(progressions);
    },

    getProgressions: (req, res) => {
        const category = req.query.category
        const display = progressions.filter(element=>element.category === category)
        res.status(200).send(display)
    },
    // ======== MATT'S EXAMPLE ========

    rename: (req, res) => {
        const {id} = req.params;
        const {newName} = req.body;

        const index = pokemonCaught.findIndex(element => element.id === +id);
        pokemonCaught[index].name = newName;
        res.status(200).send(pokemonCaught);
    },

    // ================================







    addPerformer: (req, res) => {
        const newPerformer = {
            title: req.body.title,
            date: null,
            daily: true,
            id: id++
        }
        performers.push(newPerformer);
        res.status(200).send(performers)
    }
}