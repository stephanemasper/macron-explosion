<script>
    let {data} = $props();

    let selectedTags = $state(['etat']);

    let filteredPosts = $derived(
        //data.posts.filter((post) => post.tags.includes(selectedTags))
        data.posts.filter((post) => selectedTags.some(value => post.tags.includes(value)))
    );
</script>
<h1>Macron Explosion</h1>

<div class="grid">
  <label><input type="checkbox" bind:group={selectedTags} value='etat' />etat</label>
  <label><input type="checkbox" bind:group={selectedTags} value='mensonge' />mensonge</label>
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
 