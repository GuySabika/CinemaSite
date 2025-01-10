const feildData = {
    movie: { feildsInput: ["Name", "StartingAt", "AgeRestriction", "ReleaseDate"], fieldSelect: ["Actor"] },
    actor: { feildsInput: ["Name", "Biography", "Genre"], fieldSelect: [] },
    people: { feildsInput: ["Name", "Age"], fieldSelect: [] },
    projection: { feildsInput: ["Data", "Price"], fieldSelect: ["Movie"] },
    ticket: { feildsInput: [], fieldSelect: ["Projection", "People"] }
};
export default feildData;
