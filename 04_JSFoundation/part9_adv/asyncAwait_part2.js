function fetchPostData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("post data fetched")
        }, 2000);
    })
}


function fetcCommentData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("comment data fetched")
        }, 3000);
    })
}


async function getBlogData() {
    try {
        console.log("fetching blog data")
        // const blogData = await fetchPostData()
        // const commentData = await fetcCommentData()
            // better way then this 

        const [postData , commentData] = await Promise.all([
            fetchPostData(),
            fetcCommentData()
        ])

        console.log(postData)
        console.log(commentData)

        console.log("fetch complete")
    } catch (error) {
        console.error("Error fetching blog data", error)
    }
}

getBlogData()