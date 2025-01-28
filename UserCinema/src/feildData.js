export const feildData = {
    loging: { feildsInput: [{ name: "Email", type: "email" }, { name: "Password", type: "password" }], fieldSelect: [], isMultiple: false },
    signup: { feildsInput: [{ name: "Name", type: "text" }, { name: "Password", type: "password" }, { name: "Email", type: "email" }], fieldSelect: [], isMultiple: false }
};
export const elementData = {
    movie: { show: ["Actor", "AgeRestriction", "ReleaseDate"] },
    actor: { show: ["Movies act in", "Genre"] },
    projection: { show: ["Price", "Movie", "Date", "StartingAt"] }
}
export const filterData = {
    movie: { filter: ["actor", "agerestriction", "releasedate"] },
    actor: { filter: ["movie", "genre"] },
    projection: { filter: ["price", "date", "time"] }
}