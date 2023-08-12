<script>
    import { page } from '$app/stores';
    import { DarkMode, Navbar,NavHamburger, NavBrand, NavLi, NavUl } from 'flowbite-svelte'
    let nav =[
        {title: 'About', link: '/about'},
        {title: 'Blog', link: '/blog'},
        {title: 'Resume', link: '/resume'},
        {title: 'Projects', link: '/projects'},
    ]
</script>

<Navbar let:hidden let:toggle class="mb-16">
    <NavHamburger on:click={toggle}/>
    <NavBrand class='font-logo font-bold text-5xl'>
        <span>joel</span>
    </NavBrand>
    <NavUl {hidden} class="order-1 md:order-none">
        {#each nav as it }
        <NavLi active={$page.url.pathname === it.link} href={it.link}>{it.title}</NavLi>
        {/each}
    </NavUl>
    <DarkMode/>
</Navbar>