import React from 'react'
import styles from './styles/posts.module.css'
import { deletePostAction } from './lib/actions';
import { getPosts } from './lib/posts';

const Page = async () => {
    const posts = await getPosts();

    return (
        <div>
            <div className={styles.postsBody}>
                <h1 className={styles.postsBodyHeading}>Top 20 Added Posts</h1>
                {posts?.length > 0 ? (
                    <ul className={styles.postsList}>
                        {posts.map((post, index) => {
                            return (
                                <li key={index} className={styles.postItem}>
                                    <div>
                                        <h2>{post.title}</h2>

                                        <p>{post.content}</p>
                                    </div>
                                    <div className={styles.postItemActions}>
                                        <a href={`/posts/${post.id}/edit`}>Edit</a>
                                        <form>
                                            <button formAction={async () => {
                                                "use server";
                                                await deletePostAction({ id: post.id });
                                            }}>
                                                Delete
                                            </button>
                                        </form>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <h2 className="posts-body-heading">Ooops! No posts added so far</h2>
                )}
            </div>
        </div>
    )
}

export default Page