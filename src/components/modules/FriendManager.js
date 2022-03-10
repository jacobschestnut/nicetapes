const remoteURL = "http://localhost:8088"

export const getFollowedFriends = (currentUserId) => {
    return fetch (`${remoteURL}/friends?currentUserId=${currentUserId}&_expand=user`)
    .then(res => res.json())
}

export const getFriendById = (friendId) => {
  return fetch(`${remoteURL}/friends/${friendId}?_expand=user`)
  .then(res => res.json())
}

export const deleteFriend = (id) => {
    return fetch(`${remoteURL}/friends/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
}