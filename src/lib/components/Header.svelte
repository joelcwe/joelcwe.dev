<script>
    import { page } from '$app/stores';
    import { Navbar,NavBrand, NavLi, NavUl } from 'flowbite-svelte'
    let nav =[
        {title: 'About', link: '/about'},
        {title: 'Blog', link: '/blog'},
        {title: 'Resume', link: '/resume'},
        {title: 'Projects', link: '/projects'},
    ]
</script>

<Navbar let:hidden>
    <NavBrand>
        joel
    </NavBrand>
    <NavUl {hidden}>
        {#each nav as it }
        <NavLi active={$page.url.pathname === it.link} href={it.link}>{it.title}</NavLi>
        {/each}
    </NavUl>
</Navbar>