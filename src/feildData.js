const feildData = {
    movie: { feildsInput: [{ name: "Name", type: "text" }, { name: "StartingAt", type: "time" }, { name: "AgeRestriction", type: "number" }, { name: "ReleaseDate", type: "date" }], fieldSelect: ["Actor"], isMultiple: true },
    actor: { feildsInput: [{ name: "Name", type: "text" }, { name: "Biography", type: "text" }, { name: "Genre", type: "text" }], fieldSelect: [], isMultiple: false },
    // user: { feildsInput: [{ name: "Name", type: "text" },{ email: "Email", type: "email" }, { password: "Password", type: "text" }], fieldSelect: [], isMultiple: false },
    projection: { feildsInput: [{ name: "Date", type: "date" }, { name: "Price", type: "number" }], fieldSelect: ["Movie"], isMultiple: false },
    ticket: { feildsInput: [], fieldSelect: ["Projection", "People"], isMultiple: false }
};
export default feildData;
