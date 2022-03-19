const remoteURL = "http://localhost:8088"

export const getCollectionByUser = (userId) => {
    return fetch (`${remoteURL}/collections?userId=${userId}&_expand=movie`)
    .then(res => res.json())
}

export const deleteMovie = (id) => {
    return fetch(`${remoteURL}/collections/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
}