import React from 'react'
import { getPost } from '../../../lib/posts'
import EditPostForm from '../../../ui/forms/EditPost'

const Page = async ({ params }) => {
    const id = params.id
    const post = await getPost(id)

    return <EditPostForm post={post} />
}

export default Page