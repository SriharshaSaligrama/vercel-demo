'use client';

import React from 'react'
import { useFormState } from 'react-dom';
import { addPostAction } from '../../lib/actions';
import styles from '../../styles/addpostsform.module.css'

const AddPostForm = () => {
    const initialErrorState = { title: '', content: '' };
    const [state, dispatch] = useFormState(addPostAction, initialErrorState);

    return (
        <div>
            <form action={dispatch} className={styles.form}>
                <div className={styles.formGroup}>
                    <label>Title</label>
                    <input
                        type="text"
                        name='title'
                        placeholder="Title of the post"
                    />
                </div>
                {state?.title && <p className={styles.error}>{state?.title}</p>}
                <div className={styles.formGroup}>
                    <label>Content</label>
                    <textarea
                        name="content"
                        placeholder="Content of the post"
                        cols={20}
                        rows={8}
                    />
                </div>
                {state?.content && <p className={styles.error}>{state?.content}</p>}
                <div className={styles.formGroup}>
                    <button className="submit_btn">Add Post</button>
                </div>
            </form>
        </div>
    )
}

export default AddPostForm