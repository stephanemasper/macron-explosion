<script>
    let {data} = $props();

    //index of the different tags (used to generate checkboxes)
    const tags = new Set()
    data.posts.forEach((post)=> {
      post.tags.forEach((tag) => {
        tags.add(tag)
      })
    })

    let selectedTags = $state([]);

    let filteredPosts = $derived(
        //data.posts.filter((post) => post.tags.includes(selectedTags))
        data.posts.filter((post) => {
          //if no filter is selected list all
          if(selectedTags.length == 0){
            //since all posts have a date, this returns true for all posts
            return Object.hasOwn(post, "date")
          } else {
            return selectedTags.some(value => post.tags.includes(value))
          }
        })
    );
</script>
<h1>Macron Explosion</h1>

<div class="grid">
{#each tags as tag}
  <label><input type="checkbox" bind:group={selectedTags} value='{tag}' />{tag}</label>
{/each}  
</div>
{#each filteredPosts as post}
<article>
  <header>{post.title}</header>
  {post.date}
  {post.content}
  <footer>
    {#each post.links as link}
        <a href="{link}">{link}</a><br/>
    {/each}
  </footer>
</article>
{/each}
 