const progressions = [
    {
        progress: 'progress',
        date: 'date',
        problem: 'problem',
        id: 1
    },
    {
        progress: 'progress 2',
        date: 'date 2',
        problem: 'problem',
        id: 2
    }
];
const performers = [];
let id = 3;

module.exports = {

    getProgressions: (req,res) => {
        res.status(200).send(progressions)
    },

    addProgression: (req, res) => {
        const newGoal = {
            progress: req.body.progress,
            date: req.body.date,
            problem: req.body.problem,
            id: id++
        }
        progressions.push(newGoal);
        res.status(200).send(progressions);
    },
    // ======== PUT ========
    // ======== DELETE ========


    // ======== GET ========
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
    // ======== PUT ========
    // ======== DELETE ========
}