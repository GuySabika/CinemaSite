const feildData = {
    movie: { feildsInput: [{ name: "Name", type: "text" }, { name: "AgeRestriction", type: "number" }, { name: "ReleaseDate", type: "date" }], fieldSelect: ["Actor"], isMultiple: true },
    actor: { feildsInput: [{ name: "Name", type: "text" }, { name: "Biography", type: "text" }, { name: "Genre", type: "text" }], fieldSelect: [], isMultiple: false },
    user: { feildsInput: [{ name: "Name", type: "text" }, { name: "Email", type: "email" }, { name: "Password", type: "password" }], fieldSelect: [], isMultiple: false },
    projection: { feildsInput: [{ name: "Date", type: "date" }, { name: "StartingAt", type: "time" }, { name: "Price", type: "number" }], fieldSelect: ["Movie"], isMultiple: false },
    ticket: { feildsInput: [], fieldSelect: ["Projection", "User"], isMultiple: false }
};
export default feildData;
