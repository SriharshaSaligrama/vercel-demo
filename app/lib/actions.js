"use server"

import { redirect } from "next/navigation";
import { addPost, editPost, deletePost } from "./posts"
import { revalidatePath } from "next/cache";
import { validator } from "./utils";

export async function addPostAction(prevState, data) {
    const title = data.get('title')
    const content = data.get('content')

    const errors = validator(title, content)
    if (errors?.content?.length > 0 || errors?.title?.length > 0) {
        return errors
    }

    try {
        await addPost(title, content)
    } catch (error) {
        console.log({ addPostError: error })
    }

    revalidatePath("/")
    redirect("/")
}

export async function editPostAction(prevState, data) {
    const id = data.get('id')  //**need to handle id not found error
    const title = data.get('title')
    const content = data.get('content')

    const errors = validator(title, content)
    if (errors?.content?.length > 0 || errors?.title?.length > 0) {
        return errors
    }

    try {
        await editPost(id, title, content)
    }
    catch (error) {
        console.log({ editPostError: error })
    }

    revalidatePath("/")
    redirect("/")
}

export async function deletePostAction({ id }) {
    try {
        await deletePost(id)
    } catch (error) {
        console.log({ deletePostError: error })
    }
    revalidatePath("/")
}