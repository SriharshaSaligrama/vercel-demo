import React from 'react'
import styles from './styles/posts.module.css'
import { deletePostAction } from './lib/actions';
import { getPosts, getFilteredPosts } from './lib/posts';
import Search from './ui/Search';

const Page = async ({ searchParams }) => {
    const query = searchParams?.query || '';
    const posts = await getPosts();
    const fetchQueryPosts = await getFilteredPosts(query);
    const renderingPosts = query.length > 0 ? fetchQueryPosts : posts;

    return (
        <div>
            <div className={styles.postsBody}>
                <h1 className={styles.postsBodyHeading}>Top 20 Added Posts</h1>
                {(renderingPosts?.length > 3 || query.length !== 0) && <Search placeholder="Search a post" />}
                {renderingPosts?.length > 0 ? (
                    <ul className={styles.postsList}>
                        {renderingPosts.map((post, index) => {
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
                    <h2 className="posts-body-heading">Ooops! {query.length > 0 ? `No posts found` : `No posts added so far`}</h2>
                )}
            </div>
        </div>
    )
}

export default Page