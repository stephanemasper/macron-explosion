<script>
    let {data} = $props();
</script>
<h1>Macron Explosion</h1>
{#each data.posts as post}
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
 