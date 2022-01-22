<template>
    <main>
        <div class="text-top"> 
            Início
             </div>
             <a href="/pagina1">
                 Começar 🤗
             </a>
    </main>
    
</template>

<script>
    export default{
        name: 'Home'
    }
</script>

<style scoped>

main{
    background-color: var(--color-background-home);
    justify-content: center;
    align-items: center;
}
.text-top{
    color: #292929;
    font-size: 50px;
    margin-bottom: 22px;
}
a{
    font-size: 22px;
    color: #292929;
    text-decoration: none;
    
}

</style>