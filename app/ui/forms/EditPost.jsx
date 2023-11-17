'use client';

import React from 'react'
import { useFormState } from 'react-dom';
import { editPostAction } from '../../lib/actions'
import styles from '../../styles/addpostsform.module.css'

const EditPostForm = ({ post }) => {
    const initialErrorState = { title: '', content: '' };
    const [state, dispatch] = useFormState(editPostAction, initialErrorState);

    return (
        <div>
            <form action={dispatch} className={styles.form}>
                <input type="hidden" name="id" defaultValue={post?.id || ""} />
                <div className={styles.formGroup}>
                    <label>Title</label>
                    <input
                        type="text"
                        placeholder="Title of the post"
                        name="title"
                        defaultValue={post?.title || ''}
                    />
                </div>
                {state?.title && <p className={styles.error}>{state?.title}</p>}
                <div className={styles.formGroup}>
                    <label>Content</label>
                    <textarea
                        name="content"
                        placeholder="Content of the post"
                        defaultValue={post?.content || ''}
                        cols={20}
                        rows={8}
                    />
                </div>
                {state?.content && <p className={styles.error}>{state?.content}</p>}
                <div className={styles.formGroup}>
                    <button type="submit" className="submit_btn">Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditPostForm