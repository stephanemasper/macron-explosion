import { posts } from "#lib/data.js";

export async function load(){

    return {posts : posts};
}
