<script>
    import { page } from '$app/stores';
    import { DarkMode, Navbar,NavBrand, NavLi, NavUl } from 'flowbite-svelte'
    let nav =[
        {title: 'About', link: '/about'},
        {title: 'Blog', link: '/blog'},
        {title: 'Resume', link: '/resume'},
        {title: 'Projects', link: '/projects'},
    ]
</script>

<Navbar let:hidden>
    <NavBrand class='font-logo font-bold text-5xl'>
        joel
    </NavBrand>
    <NavUl {hidden}>
        {#each nav as it }
        <NavLi active={$page.url.pathname === it.link} href={it.link}>{it.title}</NavLi>
        {/each}
    </NavUl>
    <DarkMode/>
</Navbar>