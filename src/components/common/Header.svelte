<script>
  export let items;
</script>

{#if items && items.length}
  <header class="w-full border-b-2 border-gray-100">
    <nav
      class="mx-auto max-w-md p-8 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24"
    >
      <ul>
        {#each items as { link, label }}
          <li>
            <a href={link} class="hover:text-blue-600 font-bold underline"
              >{label}</a
            >
          </li>
        {/each}
      </ul>
    </nav>
  </header>
{/if}
