<script context="module">
  export function preload() {
    return this.fetch(`companies-support-diia.json`)
      .then((r) => r.json())
      .then((content) => {
        return { content };
      });
  }
</script>

<script>
  import Header from "../../components/common/Header.svelte";

  export let content;

  const headerItems = [{ label: "На головну", link: "/" }];
</script>

<svelte:head>
  <title>{content.title}</title>
</svelte:head>

<Header items={headerItems} />
<div class="markdown mx-auto px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
  {@html content.html}
</div>
