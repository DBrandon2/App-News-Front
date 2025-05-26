export async function addPost(title, content, category, user) {
  user = user.name;
  try {
    const response = await fetch(`http://localhost:3000/post`, {
      method: "POST",
      body: JSON.stringify({ title, content, category, user }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const addedPost = await response.json();
    return addedPost;
  } catch (error) {
    console.log(error);
  }
}

export async function getPostsByUser(user) {
  try {
    const response = await fetch(`http://localhost:3000/post/getPosts`, {
      method: "POST",
      body: JSON.stringify({ user }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const allPosts = await response.json();
    return allPosts;
  } catch (error) {
    console.log(error);
  }
}
